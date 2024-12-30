import * as Primitive from "../../../../xml-primitives";

// Source files:
// https://raw.githubusercontent.com/ConnectingEurope/eInvoicing-EN16931/refs/heads/master/cii/schema/D16B%20SCRDM%20(Subset)/coupled%20clm/CII/uncefact/codelist/standard/EDIFICAS-EU_AccountingAccountType_D11A.xsd

export type AccountingAccountTypeContentType = "1" | "2" | "3" | "4" | "5" | "6" | "7";
interface _AccountingAccountTypeContentType extends Primitive._string {
	content: AccountingAccountTypeContentType;
}

export interface document {}
