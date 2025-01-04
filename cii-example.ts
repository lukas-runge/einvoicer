import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import { create } from "xmlbuilder2";
import { Schema } from "node-schematron";
import { CrossIndustryInvoiceType } from "./types/cii/uncefact/data/standard/CrossIndustryInvoice/100";
import { PDFDocument, PDFHexString, PDFName } from "pdf-lib";
import { embedXMLIntoPDF } from "./src/helpers/embed-xml";
import crypto from "crypto";

const invoice: CrossIndustryInvoiceType = JSON.parse(
	readFileSync("types/cii/example.json", "utf8")
);

const document = create({ version: "1.0", encoding: "UTF-8", standalone: true }).ele(
	"rsm:CrossIndustryInvoice",
	{
		"xmlns:ram":
			"urn:un:unece:uncefact:data:standard:ReusableAggregateBusinessInformationEntity:100",
		"xmlns:udt": "urn:un:unece:uncefact:data:standard:UnqualifiedDataType:100",
		"xmlns:rsm": "urn:un:unece:uncefact:data:standard:CrossIndustryInvoice:100",
		"xmlns:qdt": "urn:un:unece:uncefact:data:standard:QualifiedDataType:100"
	}
);

const exchangedDocumentContext = document.ele("rsm:ExchangedDocumentContext");

invoice.ExchangedDocumentContext.BusinessProcessSpecifiedDocumentContextParameter?.forEach(
	(context) => {
		exchangedDocumentContext
			.ele("ram:BusinessProcessSpecifiedDocumentContextParameter")
			.ele("ram:ID")
			.txt(context.ID!.content);
	}
);

invoice.ExchangedDocumentContext.GuidelineSpecifiedDocumentContextParameter?.forEach((context) => {
	exchangedDocumentContext
		.ele("ram:GuidelineSpecifiedDocumentContextParameter")
		.ele("ram:ID")
		.txt(context.ID!.content);
});

const exchangedDocument = document.ele("rsm:ExchangedDocument");

exchangedDocument
	.ele("ram:ID")
	.txt(invoice.ExchangedDocument.ID.content)
	.up()
	.ele("ram:TypeCode")
	.txt(invoice.ExchangedDocument.TypeCode!.content)
	.up()
	.ele("ram:IssueDateTime")
	.ele("udt:DateTimeString", { format: "102" })
	.txt(invoice.ExchangedDocument.IssueDateTime.DateTimeString.content);

invoice.ExchangedDocument.IncludedNote?.forEach((note) => {
	const includedNote = exchangedDocument.ele("ram:IncludedNote");
	note.Content?.forEach((content) => {
		includedNote.ele("ram:Content").txt(content.content);
	});
	includedNote.ele("ram:SubjectCode").txt(note.SubjectCode!.content);
});

const supplyChainTradeTransaction = document.ele("rsm:SupplyChainTradeTransaction");

invoice.SupplyChainTradeTransaction.IncludedSupplyChainTradeLineItem?.forEach((lineItem) => {
	const includedSupplyChainTradeLineItem = supplyChainTradeTransaction.ele(
		"ram:IncludedSupplyChainTradeLineItem"
	);

	includedSupplyChainTradeLineItem
		.ele("ram:AssociatedDocumentLineDocument")
		.ele("ram:LineID")
		.txt(lineItem.AssociatedDocumentLineDocument.LineID!.content);

	const specifiedTradeProduct = includedSupplyChainTradeLineItem.ele("ram:SpecifiedTradeProduct");

	lineItem.SpecifiedTradeProduct?.Name?.forEach((name) => {
		specifiedTradeProduct.ele("ram:Name").txt(name.content);
	});

	const netPriceProductTradePrice = includedSupplyChainTradeLineItem
		.ele("ram:SpecifiedLineTradeAgreement")
		.ele("ram:NetPriceProductTradePrice");

	lineItem.SpecifiedLineTradeAgreement?.NetPriceProductTradePrice?.ChargeAmount?.forEach(
		(chargeAmount) => {
			netPriceProductTradePrice.ele("ram:ChargeAmount").txt(chargeAmount.content.toFixed(4));
		}
	);

	netPriceProductTradePrice
		.ele("ram:BasisQuantity", {
			unitCode:
				lineItem.SpecifiedLineTradeAgreement?.NetPriceProductTradePrice?.BasisQuantity?.unitCode
		})
		.txt(
			lineItem.SpecifiedLineTradeAgreement!.NetPriceProductTradePrice!.BasisQuantity!.content.toFixed(
				4
			)
		);

	includedSupplyChainTradeLineItem
		.ele("ram:SpecifiedLineTradeDelivery")
		.ele("ram:BilledQuantity", {
			unitCode: lineItem.SpecifiedLineTradeDelivery?.BilledQuantity?.unitCode
		})
		.txt(lineItem.SpecifiedLineTradeDelivery!.BilledQuantity!.content.toFixed(4));

	const specifiedLineTradeSettlement = includedSupplyChainTradeLineItem.ele(
		"ram:SpecifiedLineTradeSettlement"
	);

	lineItem.SpecifiedLineTradeSettlement?.ApplicableTradeTax?.forEach((tax) => {
		specifiedLineTradeSettlement
			.ele("ram:ApplicableTradeTax")
			.ele("ram:TypeCode")
			.txt(tax.TypeCode!.content)
			.up()
			.ele("ram:CategoryCode")
			.txt(tax.CategoryCode!.content)
			.up()
			.ele("ram:RateApplicablePercent")
			.txt(tax.RateApplicablePercent!.content.toFixed(2));
	});

	const specifiedTradeSettlementLineMonetarySummation = specifiedLineTradeSettlement.ele(
		"ram:SpecifiedTradeSettlementLineMonetarySummation"
	);

	lineItem.SpecifiedLineTradeSettlement?.SpecifiedTradeSettlementLineMonetarySummation?.LineTotalAmount?.forEach(
		(amount) => {
			specifiedTradeSettlementLineMonetarySummation
				.ele("ram:LineTotalAmount")
				.txt(amount.content.toFixed(2));
		}
	);
});

const applicableHeaderTradeAgreement = supplyChainTradeTransaction.ele(
	"ram:ApplicableHeaderTradeAgreement"
);

applicableHeaderTradeAgreement.ele("ram:BuyerReference");

const sellerTradeParty = applicableHeaderTradeAgreement.ele("ram:SellerTradeParty");

invoice.SupplyChainTradeTransaction.ApplicableHeaderTradeAgreement?.SellerTradeParty?.ID?.forEach(
	(id) => {
		sellerTradeParty.ele("ram:ID");
	}
);

sellerTradeParty
	.ele("ram:Name")
	.txt(
		invoice.SupplyChainTradeTransaction.ApplicableHeaderTradeAgreement!.SellerTradeParty!.Name!
			.content
	);

invoice.SupplyChainTradeTransaction.ApplicableHeaderTradeAgreement?.SellerTradeParty?.DefinedTradeContact?.forEach(
	(contact) => {
		const definedTradeContact = sellerTradeParty.ele("ram:DefinedTradeContact");

		definedTradeContact.ele("ram:PersonName").txt(contact.PersonName!.content);

		definedTradeContact
			.ele("ram:EmailURIUniversalCommunication")
			.ele("ram:URIID")
			.txt(contact.EmailURIUniversalCommunication!.URIID!.content);
	}
);

let address =
	invoice.SupplyChainTradeTransaction.ApplicableHeaderTradeAgreement?.SellerTradeParty
		?.PostalTradeAddress!;

let postalTradeAddress = sellerTradeParty.ele("ram:PostalTradeAddress");
postalTradeAddress.ele("ram:PostcodeCode").txt(address.PostcodeCode!.content);
postalTradeAddress.ele("ram:LineOne").txt(address.LineOne!.content);
if (address.LineTwo) postalTradeAddress.ele("ram:LineTwo").txt(address.LineTwo.content);
postalTradeAddress.ele("ram:CityName").txt(address.CityName!.content);
postalTradeAddress.ele("ram:CountryID").txt(address.CountryID!.content);

invoice.SupplyChainTradeTransaction.ApplicableHeaderTradeAgreement?.SellerTradeParty?.URIUniversalCommunication?.forEach(
	(uri) => {
		sellerTradeParty
			.ele("ram:URIUniversalCommunication")
			.ele("ram:URIID", { schemeID: uri.URIID!.schemeID })
			.txt(uri.URIID!.content);
	}
);

invoice.SupplyChainTradeTransaction.ApplicableHeaderTradeAgreement?.SellerTradeParty?.SpecifiedTaxRegistration?.forEach(
	(registration) => {
		sellerTradeParty
			.ele("ram:SpecifiedTaxRegistration")
			.ele("ram:ID", { schemeID: registration.ID!.schemeID })
			.txt(registration.ID!.content);
	}
);

const buyerTradeParty = applicableHeaderTradeAgreement.ele("ram:BuyerTradeParty");

buyerTradeParty
	.ele("ram:Name")
	.txt(
		invoice.SupplyChainTradeTransaction.ApplicableHeaderTradeAgreement!.BuyerTradeParty!.Name!
			.content
	);

address =
	invoice.SupplyChainTradeTransaction.ApplicableHeaderTradeAgreement?.BuyerTradeParty
		?.PostalTradeAddress!;

postalTradeAddress = buyerTradeParty.ele("ram:PostalTradeAddress");
postalTradeAddress.ele("ram:PostcodeCode").txt(address.PostcodeCode!.content).up();
postalTradeAddress.ele("ram:LineOne").txt(address.LineOne!.content).up();
if (address.LineTwo) postalTradeAddress.ele("ram:LineTwo").txt(address.LineTwo.content);
postalTradeAddress.ele("ram:CityName").txt(address.CityName!.content).up();
postalTradeAddress.ele("ram:CountryID").txt(address.CountryID!.content).up();

const applicableHeaderTradeDelivery = supplyChainTradeTransaction.ele(
	"ram:ApplicableHeaderTradeDelivery"
);

applicableHeaderTradeDelivery
	.ele("ram:ActualDeliverySupplyChainEvent")
	.ele("ram:OccurrenceDateTime")
	.ele("udt:DateTimeString", { format: "102" })
	.txt(
		invoice.SupplyChainTradeTransaction.ApplicableHeaderTradeDelivery!
			.ActualDeliverySupplyChainEvent!.OccurrenceDateTime!.DateTimeString.content
	);

const applicableHeaderTradeSettlement = supplyChainTradeTransaction.ele(
	"ram:ApplicableHeaderTradeSettlement"
);

applicableHeaderTradeSettlement
	.ele("ram:PaymentReference")
	.txt(
		invoice.SupplyChainTradeTransaction.ApplicableHeaderTradeSettlement!.PaymentReference![0]
			.content
	);

applicableHeaderTradeSettlement
	.ele("ram:InvoiceCurrencyCode")
	.txt(
		invoice.SupplyChainTradeTransaction.ApplicableHeaderTradeSettlement!.InvoiceCurrencyCode!
			.content
	);

invoice.SupplyChainTradeTransaction.ApplicableHeaderTradeSettlement?.SpecifiedTradeSettlementPaymentMeans?.forEach(
	(paymentMeans) => {
		applicableHeaderTradeSettlement
			.ele("ram:SpecifiedTradeSettlementPaymentMeans")
			.ele("ram:TypeCode")
			.txt(paymentMeans.TypeCode!.content)
			.up()
			.ele("ram:Information")
			.txt(paymentMeans.Information![0].content)
			.up()
			.ele("ram:PayeePartyCreditorFinancialAccount")
			.ele("ram:IBANID")
			.txt(paymentMeans.PayeePartyCreditorFinancialAccount!.IBANID!.content)
			.up()
			.ele("ram:AccountName")
			.txt(paymentMeans.PayeePartyCreditorFinancialAccount!.AccountName!.content)
			.up()
			.up()
			.ele("ram:PayeeSpecifiedCreditorFinancialInstitution")
			.ele("ram:BICID")
			.txt(paymentMeans.PayeeSpecifiedCreditorFinancialInstitution!.BICID!.content)
			.up();
	}
);

invoice.SupplyChainTradeTransaction.ApplicableHeaderTradeSettlement?.ApplicableTradeTax?.forEach(
	(tax) => {
		applicableHeaderTradeSettlement
			.ele("ram:ApplicableTradeTax")
			.ele("ram:CalculatedAmount")
			.txt(tax.CalculatedAmount![0].content.toFixed(2))
			.up()
			.ele("ram:TypeCode")
			.txt(tax.TypeCode!.content)
			.up()
			.ele("ram:BasisAmount")
			.txt(tax.BasisAmount![0].content.toFixed(2))
			.up()
			.ele("ram:CategoryCode")
			.txt(tax.CategoryCode!.content)
			.up()
			.ele("ram:RateApplicablePercent")
			.txt(tax.RateApplicablePercent!.content.toFixed(2));
	}
);

let period =
	invoice.SupplyChainTradeTransaction.ApplicableHeaderTradeSettlement?.BillingSpecifiedPeriod!;
applicableHeaderTradeSettlement
	.ele("ram:BillingSpecifiedPeriod")
	.ele("ram:StartDateTime")
	.ele("udt:DateTimeString", { format: "102" })
	.txt(period.StartDateTime!.DateTimeString.content)
	.up()
	.up()
	.ele("ram:EndDateTime")
	.ele("udt:DateTimeString", { format: "102" })
	.txt(period.EndDateTime!.DateTimeString.content);

invoice.SupplyChainTradeTransaction.ApplicableHeaderTradeSettlement?.SpecifiedTradePaymentTerms?.forEach(
	(terms) => {
		applicableHeaderTradeSettlement
			.ele("ram:SpecifiedTradePaymentTerms")
			.ele("ram:Description")
			.txt(terms.Description![0].content)
			.up()
			.ele("ram:DueDateDateTime")
			.ele("udt:DateTimeString", { format: "102" })
			.txt(terms.DueDateDateTime!.DateTimeString.content);
	}
);

const specifiedTradeSettlementHeaderMonetarySummation = applicableHeaderTradeSettlement.ele(
	"ram:SpecifiedTradeSettlementHeaderMonetarySummation"
);
invoice.SupplyChainTradeTransaction.ApplicableHeaderTradeSettlement?.SpecifiedTradeSettlementHeaderMonetarySummation?.LineTotalAmount?.forEach(
	(amount) => {
		specifiedTradeSettlementHeaderMonetarySummation
			.ele("ram:LineTotalAmount")
			.txt(amount.content.toFixed(2));
	}
);
invoice.SupplyChainTradeTransaction.ApplicableHeaderTradeSettlement?.SpecifiedTradeSettlementHeaderMonetarySummation?.ChargeTotalAmount?.forEach(
	(amount) => {
		specifiedTradeSettlementHeaderMonetarySummation
			.ele("ram:ChargeTotalAmount")
			.txt(amount.content.toFixed(2));
	}
);
invoice.SupplyChainTradeTransaction.ApplicableHeaderTradeSettlement?.SpecifiedTradeSettlementHeaderMonetarySummation?.AllowanceTotalAmount?.forEach(
	(amount) => {
		specifiedTradeSettlementHeaderMonetarySummation
			.ele("ram:AllowanceTotalAmount")
			.txt(amount.content.toFixed(2));
	}
);
invoice.SupplyChainTradeTransaction.ApplicableHeaderTradeSettlement?.SpecifiedTradeSettlementHeaderMonetarySummation?.TaxBasisTotalAmount?.forEach(
	(amount) => {
		specifiedTradeSettlementHeaderMonetarySummation
			.ele("ram:TaxBasisTotalAmount")
			.txt(amount.content.toFixed(2));
	}
);
invoice.SupplyChainTradeTransaction.ApplicableHeaderTradeSettlement?.SpecifiedTradeSettlementHeaderMonetarySummation?.TaxTotalAmount?.forEach(
	(amount) => {
		specifiedTradeSettlementHeaderMonetarySummation
			.ele("ram:TaxTotalAmount", { currencyID: amount.currencyID })
			.txt(amount.content.toFixed(2));
	}
);
invoice.SupplyChainTradeTransaction.ApplicableHeaderTradeSettlement?.SpecifiedTradeSettlementHeaderMonetarySummation?.GrandTotalAmount?.forEach(
	(amount) => {
		specifiedTradeSettlementHeaderMonetarySummation
			.ele("ram:GrandTotalAmount")
			.txt(amount.content.toFixed(2));
	}
);
invoice.SupplyChainTradeTransaction.ApplicableHeaderTradeSettlement?.SpecifiedTradeSettlementHeaderMonetarySummation?.TotalPrepaidAmount?.forEach(
	(amount) => {
		specifiedTradeSettlementHeaderMonetarySummation
			.ele("ram:TotalPrepaidAmount")
			.txt(amount.content.toFixed(2));
	}
);
invoice.SupplyChainTradeTransaction.ApplicableHeaderTradeSettlement?.SpecifiedTradeSettlementHeaderMonetarySummation?.DuePayableAmount?.forEach(
	(amount) => {
		specifiedTradeSettlementHeaderMonetarySummation
			.ele("ram:DuePayableAmount")
			.txt(amount.content.toFixed(2));
	}
);

const xmlContent = document.end({ prettyPrint: true });

if (!existsSync("build")) mkdirSync("build");
writeFileSync("build/target.xml", xmlContent, "utf8");

const schema = Schema.fromString(
	readFileSync("types/cii/EN16931-CII-validation-preprocessed.sch", "utf8")
);

const result = schema.validateString(xmlContent, { debug: true });

console.dir(result, { depth: 2 });

function _addMetadata(pdfDoc, date, documentId, title, author, producer, creator) {
	const metadataXML = `
    <?xpacket begin="" id="${documentId}"?>
      <x:xmpmeta xmlns:x="adobe:ns:meta/" x:xmptk="Adobe XMP Core 5.2-c001 63.139439, 2010/09/27-13:37:26        ">
        <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">

          <rdf:Description rdf:about="" xmlns:dc="http://purl.org/dc/elements/1.1/">
            <dc:format>application/pdf</dc:format>
            <dc:creator>
              <rdf:Seq>
                <rdf:li>${author}</rdf:li>
              </rdf:Seq>
            </dc:creator>
            <dc:title>
               <rdf:Alt>
                  <rdf:li xml:lang="x-default">${title}</rdf:li>
               </rdf:Alt>
            </dc:title>
          </rdf:Description>

          <rdf:Description rdf:about="" xmlns:xmp="http://ns.adobe.com/xap/1.0/">
            <xmp:CreatorTool>${creator}</xmp:CreatorTool>
            <xmp:CreateDate>${_formatDate(date)}</xmp:CreateDate>
            <xmp:ModifyDate>${_formatDate(date)}</xmp:ModifyDate>
            <xmp:MetadataDate>${_formatDate(date)}</xmp:MetadataDate>
          </rdf:Description>

          <rdf:Description rdf:about="" xmlns:pdf="http://ns.adobe.com/pdf/1.3/">
            <pdf:Producer>${producer}</pdf:Producer>
          </rdf:Description>

          <rdf:Description rdf:about="" xmlns:pdfaid="http://www.aiim.org/pdfa/ns/id/">
            <pdfaid:part>3</pdfaid:part>
            <pdfaid:conformance>B</pdfaid:conformance>
          </rdf:Description>
        </rdf:RDF>
      </x:xmpmeta>
    <?xpacket end="w"?>
    `.trim();

	const metadataStream = pdfDoc.context.stream(metadataXML, {
		Type: "Metadata",
		Subtype: "XML",
		Length: metadataXML.length
	});
	const metadataStreamRef = pdfDoc.context.register(metadataStream);
	pdfDoc.catalog.set(PDFName.of("Metadata"), metadataStreamRef);
}

// remove millisecond from date
function _formatDate(date) {
	return date.toISOString().split(".")[0] + "Z";
}

(async () => {
	if (result.length == 0) {
		const emptyPDF = await PDFDocument.create();
		emptyPDF.addPage().drawText("E-Rechnung", { x: 50, y: 750 });
		const documentId = crypto.randomBytes(16).toString("hex");
		const id = PDFHexString.of(documentId);
		emptyPDF.context.trailerInfo.ID = emptyPDF.context.obj([id, id]);
		// set document information
		const title = invoice.ExchangedDocument.ID.content;
		const author = "Max Mustermann";
		const producer = "pdf-lib (https://github.com/Hopding/pdf-lib)";
		const creator = "pdf-lib (https://github.com/Hopding/pdf-lib)";
		const createDate = new Date();
		emptyPDF.setTitle(title);
		emptyPDF.setAuthor(author);
		emptyPDF.setProducer(producer);
		emptyPDF.setCreator(creator);
		emptyPDF.setCreationDate(createDate);
		emptyPDF.setModificationDate(createDate);
		_addMetadata(emptyPDF, createDate, documentId, title, author, producer, creator);

		const buffer = Buffer.from(
			await emptyPDF.save({
				useObjectStreams: false
			})
		);
		writeFileSync("build/target.pdf", await embedXMLIntoPDF(xmlContent, buffer));
	}
})();
