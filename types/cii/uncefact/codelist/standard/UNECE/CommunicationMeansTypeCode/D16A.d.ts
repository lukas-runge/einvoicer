import * as Primitive from "../../../../xml-primitives";

// Source files:
// https://raw.githubusercontent.com/ConnectingEurope/eInvoicing-EN16931/refs/heads/master/cii/schema/D16B%20SCRDM%20(Subset)/coupled%20clm/CII/uncefact/codelist/standard/UNECE_CommunicationMeansTypeCode_D16A.xsd

export type CommunicationMeansTypeCodeContentType =
	| "AA"
	| "AB"
	| "AC"
	| "AD"
	| "AE"
	| "AF"
	| "AG"
	| "AH"
	| "AI"
	| "AJ"
	| "AK"
	| "AL"
	| "AM"
	| "AN"
	| "AO"
	| "AP"
	| "AQ"
	| "AR"
	| "AS"
	| "AT"
	| "AU"
	| "AV"
	| "AW"
	| "CA"
	| "EI"
	| "EM"
	| "EX"
	| "FT"
	| "FX"
	| "GM"
	| "IE"
	| "IM"
	| "MA"
	| "PB"
	| "PS"
	| "SW"
	| "TE"
	| "TG"
	| "TL"
	| "TM"
	| "TT"
	| "TX"
	| "XF"
	| "XG"
	| "XH"
	| "XI"
	| "XJ";
interface _CommunicationMeansTypeCodeContentType extends Primitive._string {
	content: CommunicationMeansTypeCodeContentType;
}

export interface document {}
