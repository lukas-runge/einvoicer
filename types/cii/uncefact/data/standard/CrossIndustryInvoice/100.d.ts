import * as ram from "../ReusableAggregateBusinessInformationEntity/100";

// Source files:
// https://raw.githubusercontent.com/ConnectingEurope/eInvoicing-EN16931/refs/heads/master/cii/schema/D16B%20SCRDM%20(Subset)/coupled%20clm/CII/uncefact/data/standard/CrossIndustryInvoice_100pD16B.xsd

interface _CrossIndustryInvoiceType {
	ExchangedDocument: ram.ExchangedDocumentType;
	ExchangedDocumentContext: ram.ExchangedDocumentContextType;
	SupplyChainTradeTransaction: ram.SupplyChainTradeTransactionType;
	ValuationBreakdownStatement?: ram.ValuationBreakdownStatementType;
}
export interface CrossIndustryInvoiceType extends _CrossIndustryInvoiceType {}

export interface document {
	CrossIndustryInvoice: CrossIndustryInvoiceType;
}
