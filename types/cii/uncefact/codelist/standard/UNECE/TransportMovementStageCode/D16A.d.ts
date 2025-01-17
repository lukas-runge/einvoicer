import * as Primitive from "../../../../xml-primitives";

// Source files:
// https://raw.githubusercontent.com/ConnectingEurope/eInvoicing-EN16931/refs/heads/master/cii/schema/D16B%20SCRDM%20(Subset)/coupled%20clm/CII/uncefact/codelist/standard/UNECE_TransportMovementStageCode_D16A.xsd

export type TransportMovementStageCodeContentType =
	| "1"
	| "2"
	| "3"
	| "4"
	| "5"
	| "6"
	| "10"
	| "11"
	| "12"
	| "13"
	| "15"
	| "16"
	| "17"
	| "18"
	| "19"
	| "20"
	| "21"
	| "22"
	| "23"
	| "24"
	| "25"
	| "26"
	| "27"
	| "28"
	| "29"
	| "30"
	| "31"
	| "32"
	| "33"
	| "34";
interface _TransportMovementStageCodeContentType extends Primitive._string {
	content: TransportMovementStageCodeContentType;
}

export interface document {}
