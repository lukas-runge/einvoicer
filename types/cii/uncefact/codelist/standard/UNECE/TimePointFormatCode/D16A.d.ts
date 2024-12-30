import * as Primitive from "../../../../xml-primitives";

// Source files:
// https://raw.githubusercontent.com/ConnectingEurope/eInvoicing-EN16931/refs/heads/master/cii/schema/D16B%20SCRDM%20(Subset)/coupled%20clm/CII/uncefact/codelist/standard/UNECE_TimePointFormatCode_D16A.xsd

export type TimePointFormatCodeContentType = "102" | "203" | "205" | "209" | "502" | "602";
interface _TimePointFormatCodeContentType extends Primitive._string {
	content: TimePointFormatCodeContentType;
}

export interface document {}
