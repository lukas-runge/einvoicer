import * as Primitive from "../../../xml-primitives";

// Source files:
// https://raw.githubusercontent.com/ConnectingEurope/eInvoicing-EN16931/refs/heads/master/cii/schema/D16B%20SCRDM%20(Subset)/coupled%20clm/CII/uncefact/data/standard/CrossIndustryInvoice_UnqualifiedDataType_100pD16B.xsd

interface _AmountType extends Primitive._number {
	currencyCodeListVersionID?: string;
	currencyID?: string;
}
export interface AmountType extends _AmountType {}

interface _BinaryObjectType extends Primitive._string {
	characterSetCode: string;
	encodingCode: string;
	filename: string;
	format: string;
	mimeCode: string;
	uri: string;
}
export interface BinaryObjectType extends _BinaryObjectType {}

interface _CodeType extends Primitive._string {
	languageID?: string;
	listAgencyID?: string;
	listAgencyName?: string;
	listID?: string;
	listName?: string;
	listSchemeURI?: string;
	listURI?: string;
	listVersionID?: string;
	name?: string;
}
export interface CodeType extends _CodeType {}

interface _DateTimeType {
	DateTime?: Date;
	DateTimeString: DateTimeTypeDateTimeStringType;
}
export interface DateTimeType extends _DateTimeType {}

interface _DateTimeTypeDateTimeStringType extends Primitive._string {
	format: string;
}
interface DateTimeTypeDateTimeStringType extends _DateTimeTypeDateTimeStringType {}

interface _DateType {
	Date: Date;
	DateString: DateTypeDateStringType;
}
export interface DateType extends _DateType {}

interface _DateTypeDateStringType extends Primitive._string {
	format: string;
}
interface DateTypeDateStringType extends _DateTypeDateStringType {}

interface _IDType extends Primitive._string {
	schemeAgencyID?: string;
	schemeAgencyName?: string;
	schemeDataURI?: string;
	schemeID?: string;
	schemeName?: string;
	schemeURI?: string;
	schemeVersionID?: string;
}
export interface IDType extends _IDType {}

interface _IndicatorType {
	Indicator: boolean;
	IndicatorString: IndicatorTypeIndicatorStringType;
}
export interface IndicatorType extends _IndicatorType {}

interface _IndicatorTypeIndicatorStringType extends Primitive._string {
	format: string;
}
interface IndicatorTypeIndicatorStringType extends _IndicatorTypeIndicatorStringType {}

interface _MeasureType extends Primitive._number {
	unitCode: string;
	unitCodeListVersionID: string;
}
export interface MeasureType extends _MeasureType {}

interface _NumericType extends Primitive._number {
	format: string;
}
export interface NumericType extends _NumericType {}

interface _PercentType extends Primitive._number {
	format?: string;
}
export interface PercentType extends _PercentType {}

interface _QuantityType extends Primitive._number {
	unitCode?: string;
	unitCodeListAgencyID?: string;
	unitCodeListAgencyName?: string;
	unitCodeListID?: string;
}
export interface QuantityType extends _QuantityType {}

interface _RateType extends Primitive._number {
	format: string;
}
export interface RateType extends _RateType {}

interface _TextType extends Primitive._string {
	languageID?: string;
	languageLocaleID?: string;
}
export interface TextType extends _TextType {}

interface _ValueType extends Primitive._number {
	format: string;
}
export interface ValueType extends _ValueType {}

export interface document {}
