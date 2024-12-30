import * as Primitive from "../../../../xml-primitives";

// Source files:
// https://raw.githubusercontent.com/ConnectingEurope/eInvoicing-EN16931/refs/heads/master/cii/schema/D16B%20SCRDM%20(Subset)/coupled%20clm/CII/uncefact/codelist/standard/UNECE_PartyRoleCode_ChargePaying_D16A.xsd

export type PartyRoleCodeChargePayingContentType =
	| "AB"
	| "AE"
	| "AF"
	| "AH"
	| "AQ"
	| "AR"
	| "AT"
	| "AU"
	| "CA"
	| "CG"
	| "CN"
	| "CPD"
	| "CX"
	| "CZ"
	| "DGB"
	| "EX"
	| "FW"
	| "GS"
	| "IM"
	| "IV"
	| "PE";
interface _PartyRoleCodeChargePayingContentType extends Primitive._string {
	content: PartyRoleCodeChargePayingContentType;
}

export interface document {}
