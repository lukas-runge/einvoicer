import * as Primitive from "../../../../xml-primitives";

// Source files:
// https://raw.githubusercontent.com/ConnectingEurope/eInvoicing-EN16931/refs/heads/master/cii/schema/D16B%20SCRDM%20(Subset)/coupled%20clm/CII/uncefact/identifierlist/standard/UNECE_PaymentTermsDescriptionIdentifier_D16A.xsd

export type PaymentTermsDescriptionIdentifierContentType = "1" | "2" | "3" | "4" | "5" | "6" | "7";
interface _PaymentTermsDescriptionIdentifierContentType extends Primitive._string {
	content: PaymentTermsDescriptionIdentifierContentType;
}

export interface document {}
