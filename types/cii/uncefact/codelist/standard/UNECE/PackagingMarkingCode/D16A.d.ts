import * as Primitive from "../../../../xml-primitives";

// Source files:
// https://raw.githubusercontent.com/ConnectingEurope/eInvoicing-EN16931/refs/heads/master/cii/schema/D16B%20SCRDM%20(Subset)/coupled%20clm/CII/uncefact/codelist/standard/UNECE_PackagingMarkingCode_D16A.xsd

export type PackagingMarkingCodeContentType =
	| "1"
	| "2"
	| "3"
	| "4"
	| "5"
	| "6"
	| "7"
	| "8"
	| "9"
	| "10"
	| "31"
	| "32"
	| "33"
	| "34"
	| "35"
	| "36"
	| "37"
	| "38"
	| "39"
	| "40"
	| "41"
	| "42"
	| "43"
	| "44"
	| "45"
	| "46"
	| "47"
	| "48"
	| "49"
	| "53"
	| "54"
	| "55"
	| "56"
	| "57"
	| "58"
	| "59"
	| "60"
	| "61"
	| "62"
	| "63"
	| "66"
	| "68"
	| "69"
	| "70"
	| "71"
	| "72"
	| "73"
	| "74"
	| "75"
	| "76"
	| "77"
	| "80";
interface _PackagingMarkingCodeContentType extends Primitive._string {
	content: PackagingMarkingCodeContentType;
}

export interface document {}
