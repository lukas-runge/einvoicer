import * as Primitive from "../../../../xml-primitives";

// Source files:
// https://raw.githubusercontent.com/ConnectingEurope/eInvoicing-EN16931/refs/heads/master/cii/schema/D16B%20SCRDM%20(Subset)/coupled%20clm/CII/uncefact/codelist/standard/UNECE_DocumentNameCode_Accounting_D16A.xsd

export type DocumentNameCodeAccountingContentType =
	| "105"
	| "220"
	| "223"
	| "224"
	| "245"
	| "315"
	| "320"
	| "325"
	| "326"
	| "380"
	| "389"
	| "393"
	| "394"
	| "395"
	| "398"
	| "399"
	| "455"
	| "481"
	| "533"
	| "534"
	| "640"
	| "719"
	| "731"
	| "747";
interface _DocumentNameCodeAccountingContentType extends Primitive._string {
	content: DocumentNameCodeAccountingContentType;
}

export interface document {}
