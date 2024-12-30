import * as Primitive from "../../../../xml-primitives";

// Source files:
// https://raw.githubusercontent.com/ConnectingEurope/eInvoicing-EN16931/refs/heads/master/cii/schema/D16B%20SCRDM%20(Subset)/coupled%20clm/CII/uncefact/codelist/standard/UNECE_TransportEquipmentFullnessCode_D16A.xsd

export type TransportEquipmentFullnessCodeContentType =
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
	| "13";
interface _TransportEquipmentFullnessCodeContentType extends Primitive._string {
	content: TransportEquipmentFullnessCodeContentType;
}

export interface document {}
