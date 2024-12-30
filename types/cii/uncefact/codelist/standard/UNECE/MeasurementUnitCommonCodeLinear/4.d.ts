import * as Primitive from "../../../../xml-primitives";

// Source files:
// https://raw.githubusercontent.com/ConnectingEurope/eInvoicing-EN16931/refs/heads/master/cii/schema/D16B%20SCRDM%20(Subset)/coupled%20clm/CII/uncefact/codelist/standard/UNECE_MeasurementUnitCommonCodeLinear_4.xsd

export type MeasurementUnitCommonCodeLinearContentType = "CMT" | "FOT" | "INH" | "MTR";
interface _MeasurementUnitCommonCodeLinearContentType extends Primitive._string {
	content: MeasurementUnitCommonCodeLinearContentType;
}

export interface document {}
