import * as Primitive from "../../../../xml-primitives";

// Source files:
// https://raw.githubusercontent.com/ConnectingEurope/eInvoicing-EN16931/refs/heads/master/cii/schema/D16B%20SCRDM%20(Subset)/coupled%20clm/CII/uncefact/codelist/standard/UNECE_AutomaticDataCaptureMethodCode_D16A.xsd

export type AutomaticDataCaptureMethodCodeContentType =
	| "50"
	| "51"
	| "52"
	| "64"
	| "65"
	| "67"
	| "78"
	| "79"
	| "81"
	| "82";
interface _AutomaticDataCaptureMethodCodeContentType extends Primitive._string {
	content: AutomaticDataCaptureMethodCodeContentType;
}

export interface document {}
