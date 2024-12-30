import * as Primitive from "../../../../xml-primitives";

// Source files:
// https://raw.githubusercontent.com/ConnectingEurope/eInvoicing-EN16931/refs/heads/master/cii/schema/D16B%20SCRDM%20(Subset)/coupled%20clm/CII/uncefact/codelist/standard/UNECE_FreightChargeTariffCode_D16A.xsd

export type FreightChargeTariffCodeContentType =
	| "A"
	| "B"
	| "C"
	| "D"
	| "E"
	| "F"
	| "K"
	| "M"
	| "N"
	| "Q"
	| "R"
	| "S";
interface _FreightChargeTariffCodeContentType extends Primitive._string {
	content: FreightChargeTariffCodeContentType;
}

export interface document {}
