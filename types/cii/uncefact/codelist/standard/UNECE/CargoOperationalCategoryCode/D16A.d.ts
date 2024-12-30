import * as Primitive from "../../../../xml-primitives";

// Source files:
// https://raw.githubusercontent.com/ConnectingEurope/eInvoicing-EN16931/refs/heads/master/cii/schema/D16B%20SCRDM%20(Subset)/coupled%20clm/CII/uncefact/codelist/standard/UNECE_CargoOperationalCategoryCode_D16A.xsd

export type CargoOperationalCategoryCodeContentType =
	| "1"
	| "2"
	| "3"
	| "4"
	| "5"
	| "6"
	| "7"
	| "8"
	| "9"
	| "10"
	| "11"
	| "12"
	| "13"
	| "14"
	| "15"
	| "16"
	| "17"
	| "18"
	| "19"
	| "20"
	| "21"
	| "22"
	| "23"
	| "24";
interface _CargoOperationalCategoryCodeContentType extends Primitive._string {
	content: CargoOperationalCategoryCodeContentType;
}

export interface document {}
