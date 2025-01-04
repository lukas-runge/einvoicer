import { AFRelationship, PDFDocument, PDFHexString, PDFName } from "pdf-lib";
import crypto from "crypto";

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

const FILENAME = "factur-x.xml";
const MIME_TYPE = "application/xml";

export async function embedXMLIntoPDF(xml: string, pdf: Buffer, title: string, author: string) {
	const pdfDoc = await PDFDocument.load(pdf);
	const documentId = crypto.randomBytes(16).toString("hex");
	const id = PDFHexString.of(documentId);
	pdfDoc.context.trailerInfo.ID = pdfDoc.context.obj([id, id]);
	// set document information
	const producer = "pdf-lib (https://github.com/Hopding/pdf-lib)";
	const creator = "pdf-lib (https://github.com/Hopding/pdf-lib)";
	const createDate = new Date();
	pdfDoc.setTitle(title);
	pdfDoc.setAuthor(author);
	pdfDoc.setProducer(producer);
	pdfDoc.setCreator(creator);
	pdfDoc.setCreationDate(createDate);
	pdfDoc.setModificationDate(createDate);
	_addMetadata(pdfDoc, createDate, documentId, title, author, producer, creator);

	await pdfDoc.attach(Buffer.from(xml, "utf-8"), FILENAME, {
		mimeType: MIME_TYPE,
		afRelationship: AFRelationship.Alternative,
		creationDate: new Date(),
		modificationDate: new Date(),
		description: "Factur-X invoice data"
	});

	return Buffer.from(
		await pdfDoc.save({
			useObjectStreams: false
		})
	);
}
