import * as Primitive from "../../../../xml-primitives";

// Source files:
// https://raw.githubusercontent.com/ConnectingEurope/eInvoicing-EN16931/refs/heads/master/cii/schema/D16B%20SCRDM%20(Subset)/coupled%20clm/CII/uncefact/codelist/standard/UNECE_GoodsTypeExtensionCode_D16A.xsd

export type GoodsTypeExtensionCodeContentType = "ZZZ";
interface _GoodsTypeExtensionCodeContentType extends Primitive._string {
	content: GoodsTypeExtensionCodeContentType;
}

export interface document {}
