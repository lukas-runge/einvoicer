import * as Primitive from "../../../../xml-primitives";

// Source files:
// https://raw.githubusercontent.com/ConnectingEurope/eInvoicing-EN16931/refs/heads/master/cii/schema/D16B%20SCRDM%20(Subset)/coupled%20clm/CII/uncefact/codelist/standard/UNECE_DutyorTaxorFeeCategoryCode_D16A.xsd

export type DutyorTaxorFeeCategoryCodeContentType =
	| "A"
	| "AA"
	| "AB"
	| "AC"
	| "AD"
	| "AE"
	| "B"
	| "C"
	| "D"
	| "E"
	| "F"
	| "G"
	| "H"
	| "I"
	| "J"
	| "K"
	| "L"
	| "M"
	| "O"
	| "S"
	| "Z";
interface _DutyorTaxorFeeCategoryCodeContentType extends Primitive._string {
	content: DutyorTaxorFeeCategoryCodeContentType;
}

export interface document {}
