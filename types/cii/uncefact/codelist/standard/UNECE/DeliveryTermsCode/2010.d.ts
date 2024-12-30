import * as Primitive from "../../../../xml-primitives";

// Source files:
// https://raw.githubusercontent.com/ConnectingEurope/eInvoicing-EN16931/refs/heads/master/cii/schema/D16B%20SCRDM%20(Subset)/coupled%20clm/CII/uncefact/codelist/standard/UNECE_DeliveryTermsCode_2010.xsd

export type DeliveryTermsCodeContentType =
	| "1"
	| "2"
	| "CFR"
	| "CIF"
	| "CIP"
	| "CPT"
	| "DAP"
	| "DAT"
	| "DDP"
	| "EXW"
	| "FAS"
	| "FCA"
	| "FOB";
interface _DeliveryTermsCodeContentType extends Primitive._string {
	content: DeliveryTermsCodeContentType;
}

export interface document {}
