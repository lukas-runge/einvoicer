import * as Primitive from "../../../../xml-primitives";

// Source files:
// https://raw.githubusercontent.com/ConnectingEurope/eInvoicing-EN16931/refs/heads/master/cii/schema/D16B%20SCRDM%20(Subset)/coupled%20clm/CII/uncefact/codelist/standard/UNECE_PaymentGuaranteeMeansCode_D16A.xsd

export type PaymentGuaranteeMeansCodeContentType =
	| "1"
	| "10"
	| "11"
	| "12"
	| "13"
	| "14"
	| "20"
	| "21"
	| "23"
	| "24"
	| "45"
	| "ZZZ";
interface _PaymentGuaranteeMeansCodeContentType extends Primitive._string {
	content: PaymentGuaranteeMeansCodeContentType;
}

export interface document {}
