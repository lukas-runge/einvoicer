import * as Primitive from "../../../../xml-primitives";

// Source files:
// https://raw.githubusercontent.com/ConnectingEurope/eInvoicing-EN16931/refs/heads/master/cii/schema/D16B%20SCRDM%20(Subset)/coupled%20clm/CII/uncefact/codelist/standard/EDIFICAS-EU_AccountingAmountType_D11A.xsd

export type AccountingAmountTypeContentType = "1" | "2" | "3" | "4" | "5" | "6";
interface _AccountingAmountTypeContentType extends Primitive._string {
	content: AccountingAmountTypeContentType;
}

export interface document {}
