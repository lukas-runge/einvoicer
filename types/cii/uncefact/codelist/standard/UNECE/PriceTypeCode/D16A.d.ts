import * as Primitive from "../../../../xml-primitives";

// Source files:
// https://raw.githubusercontent.com/ConnectingEurope/eInvoicing-EN16931/refs/heads/master/cii/schema/D16B%20SCRDM%20(Subset)/coupled%20clm/CII/uncefact/codelist/standard/UNECE_PriceTypeCode_D16A.xsd

export type PriceTypeCodeContentType =
	| "AA"
	| "AB"
	| "AC"
	| "AD"
	| "AE"
	| "AF"
	| "AI"
	| "AQ"
	| "CA"
	| "CT"
	| "CU"
	| "DI"
	| "EC"
	| "NW"
	| "PC"
	| "PE"
	| "PK"
	| "PL"
	| "PT"
	| "PU"
	| "PV"
	| "PW"
	| "QT"
	| "SR"
	| "TB"
	| "TU"
	| "TW"
	| "WH"
	| "WI";
interface _PriceTypeCodeContentType extends Primitive._string {
	content: PriceTypeCodeContentType;
}

export interface document {}
