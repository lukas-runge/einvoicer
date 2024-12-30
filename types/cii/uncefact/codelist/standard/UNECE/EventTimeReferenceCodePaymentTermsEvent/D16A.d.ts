import * as Primitive from "../../../../xml-primitives";

// Source files:
// https://raw.githubusercontent.com/ConnectingEurope/eInvoicing-EN16931/refs/heads/master/cii/schema/D16B%20SCRDM%20(Subset)/coupled%20clm/CII/uncefact/codelist/standard/UNECE_EventTimeReferenceCodePaymentTermsEvent_D16A.xsd

export type EventTimeReferenceCodePaymentTermsEventContentType = "5" | "24" | "29" | "45" | "71";
interface _EventTimeReferenceCodePaymentTermsEventContentType extends Primitive._string {
	content: EventTimeReferenceCodePaymentTermsEventContentType;
}

export interface document {}
