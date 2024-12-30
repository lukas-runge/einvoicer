import * as Primitive from "../../../../xml-primitives";

// Source files:
// https://raw.githubusercontent.com/ConnectingEurope/eInvoicing-EN16931/refs/heads/master/cii/schema/D16B%20SCRDM%20(Subset)/coupled%20clm/CII/uncefact/codelist/standard/UNECE_MeasurementUnitCommonCodeWeight_4.xsd

export type MeasurementUnitCommonCodeWeightContentType = "KGM" | "TNE";
interface _MeasurementUnitCommonCodeWeightContentType extends Primitive._string {
	content: MeasurementUnitCommonCodeWeightContentType;
}

export interface document {}
