import * as Primitive from "../../../../xml-primitives";

// Source files:
// https://raw.githubusercontent.com/ConnectingEurope/eInvoicing-EN16931/refs/heads/master/cii/schema/D16B%20SCRDM%20(Subset)/coupled%20clm/CII/uncefact/codelist/standard/UNECE_GoodsTypeCode_D16A.xsd

export type GoodsTypeCodeContentType = "ZZZ";
interface _GoodsTypeCodeContentType extends Primitive._string {
	content: GoodsTypeCodeContentType;
}

export interface document {}
