import * as Primitive from "../../../../xml-primitives";

// Source files:
// https://raw.githubusercontent.com/ConnectingEurope/eInvoicing-EN16931/refs/heads/master/cii/schema/D16B%20SCRDM%20(Subset)/coupled%20clm/CII/uncefact/codelist/standard/UNECE_CommodityIdentificationCode_D16A.xsd

export type CommodityIdentificationCodeContentType = "ZZZ";
interface _CommodityIdentificationCodeContentType extends Primitive._string {
	content: CommodityIdentificationCodeContentType;
}

export interface document {}
