import * as Primitive from "../../../xml-primitives";
import * as clm210AccountingE501 from "../../../codelist/standard/EDIFICAS-EU/AccountingAccountType/D11A";
import * as clm210AccountingE601 from "../../../codelist/standard/EDIFICAS-EU/AccountingAmountType/D11A";
import * as clm5ISO42173A from "../../../codelist/standard/ISO/ISO3AlphaCurrencyCode/2012-08-31";
import * as clm61001 from "../../../codelist/standard/UNECE/DocumentNameCode/D16A";
import * as clm61001Accounting from "../../../codelist/standard/UNECE/DocumentNameCode_Accounting/D16A";
import * as clm61153ReferenceTypeCode from "../../../codelist/standard/UNECE/ReferenceTypeCode/D16A";
import * as clm61225MessageFunctionTypeCode from "../../../codelist/standard/UNECE/MessageFunctionCode/D16A";
import * as clm61229LineStatusCode from "../../../codelist/standard/UNECE/ActionCode/D16A";
import * as clm61373 from "../../../codelist/standard/UNECE/DocumentStatusCode/D16A";
import * as clm62379 from "../../../codelist/standard/UNECE/TimePointFormatCode/D16A";
import * as clm62475 from "../../../codelist/standard/UNECE/EventTimeReferenceCode/D16A";
import * as clm62475PaymentTermsEvent from "../../../codelist/standard/UNECE/EventTimeReferenceCodePaymentTermsEvent/D16A";
import * as clm63035 from "../../../codelist/standard/UNECE/PartyRoleCode/D16A";
import * as clm63035ChargePaying from "../../../codelist/standard/UNECE/PartyRoleCode_ChargePaying/D16A";
import * as clm63139ContactTypeCode from "../../../codelist/standard/UNECE/ContactFunctionCode/D16A";
import * as clm63155CommunicationChannelCode from "../../../codelist/standard/UNECE/CommunicationMeansTypeCode/D16A";
import * as clm64053 from "../../../codelist/standard/UNECE/DeliveryTermsCode/2010";
import * as clm64279 from "../../../codelist/standard/UNECE/PaymentTermsTypeCode/D16A";
import * as clm64431 from "../../../codelist/standard/UNECE/PaymentGuaranteeMeansCode/D16A";
import * as clm64435 from "../../../codelist/standard/UNECE/PaymentMeansChannelCode/D16A";
import * as clm64461 from "../../../codelist/standard/UNECE/PaymentMeansCode/D16A";
import * as clm64465 from "../../../codelist/standard/UNECE/AdjustmentReasonDescriptionCode/D16A";
import * as clm64465AllowanceChargeReasonCode from "../../../codelist/standard/UNECE/AllowanceChargeReasonCode/D16A";
import * as clm65153 from "../../../codelist/standard/UNECE/DutyTaxFeeTypeCode/D16A";
import * as clm65189AllowanceChargeID from "../../../codelist/standard/UNECE/AllowanceChargeIdentificationCode/D16A";
import * as clm65243 from "../../../codelist/standard/UNECE/FreightChargeTariffCode/D16A";
import * as clm65305 from "../../../codelist/standard/UNECE/DutyorTaxorFeeCategoryCode/D16A";
import * as clm65375 from "../../../codelist/standard/UNECE/PriceTypeCode/D16A";
import * as clm66145 from "../../../codelist/standard/UNECE/DimensionTypeCode/D16A";
import * as clm67065 from "../../../codelist/standard/UNECE/PackageTypeCode/2006";
import * as clm67085b from "../../../codelist/standard/UNECE/CargoOperationalCategoryCode/D16A";
import * as clm67233AutomaticDataCaptureMethodCode from "../../../codelist/standard/UNECE/AutomaticDataCaptureMethodCode/D16A";
import * as clm67233PackagingMarkingCode from "../../../codelist/standard/UNECE/PackagingMarkingCode/D16A";
import * as clm67357 from "../../../codelist/standard/UNECE/CommodityIdentificationCode/D16A";
import * as clm68051 from "../../../codelist/standard/UNECE/TransportMovementStageCode/D16A";
import * as clm68053 from "../../../codelist/standard/UNECE/TransportEquipmentCategoryCode/D16A";
import * as clm68155 from "../../../codelist/standard/UNECE/EquipmentSizeTypeDescriptionCode/D16A";
import * as clm68169 from "../../../codelist/standard/UNECE/TransportEquipmentFullnessCode/D16A";
import * as clm6Recommendation19 from "../../../codelist/standard/UNECE/TransportModeCode/2";
import * as clm6Recommendation20Linear from "../../../codelist/standard/UNECE/MeasurementUnitCommonCodeLinear/4";
import * as clm6Recommendation20Volume from "../../../codelist/standard/UNECE/MeasurementUnitCommonCodeVolume/4";
import * as clm6Recommendation20Weight from "../../../codelist/standard/UNECE/MeasurementUnitCommonCodeWeight/4";
import * as clm6Recommendation21AnnexI from "../../../codelist/standard/UNECE/CargoTypeCode/1996Rev2Final";
import * as clm6Recommendation28 from "../../../codelist/standard/UNECE/TransportMeansTypeCode/2007";
import * as clm6TDED6131 from "../../../codelist/standard/UNECE/FreightChargeQuantityUnitBasisCode/D16A";
import * as clm6TDED7357 from "../../../codelist/standard/UNECE/GoodsTypeCode/D16A";
import * as clm6TDED7361 from "../../../codelist/standard/UNECE/GoodsTypeExtensionCode/D16A";
import * as ids5ISO316612A from "../../../identifierlist/standard/ISO/ISOTwo-letterCountryCode/SecondEdition2006";
import * as ids64277 from "../../../identifierlist/standard/UNECE/PaymentTermsDescriptionIdentifier/D16A";
import * as ids6Recommendation23 from "../../../identifierlist/standard/UNECE/FreightCostCode/4";

// Source files:
// https://raw.githubusercontent.com/ConnectingEurope/eInvoicing-EN16931/refs/heads/master/cii/schema/D16B%20SCRDM%20(Subset)/coupled%20clm/CII/uncefact/data/standard/CrossIndustryInvoice_QualifiedDataType_100pD16B.xsd

interface _AccountingAccountTypeCodeType
	extends clm210AccountingE501._AccountingAccountTypeContentType {
	listAgencyID: string;
	listID: string;
	listURI: string;
	listVersionID: string;
}
export interface AccountingAccountTypeCodeType extends _AccountingAccountTypeCodeType {}

interface _AccountingAmountTypeCodeType
	extends clm210AccountingE601._AccountingAmountTypeContentType {
	listAgencyID: string;
	listID: string;
	listURI: string;
	listVersionID: string;
}
export interface AccountingAmountTypeCodeType extends _AccountingAmountTypeCodeType {}

export type AccountingDocumentCodeListAgencyIDContentType = "6";
interface _AccountingDocumentCodeListAgencyIDContentType extends Primitive._string {
	content: AccountingDocumentCodeListAgencyIDContentType;
}

interface _AccountingDocumentCodeType
	extends clm61001Accounting._DocumentNameCodeAccountingContentType {
	listAgencyID: AccountingDocumentCodeListAgencyIDContentType;
	listID: string;
	listURI: string;
	listVersionID: string;
}
export interface AccountingDocumentCodeType extends _AccountingDocumentCodeType {}

export type AdjustmentReasonCodeListAgencyIDContentType = "6";
interface _AdjustmentReasonCodeListAgencyIDContentType extends Primitive._string {
	content: AdjustmentReasonCodeListAgencyIDContentType;
}

interface _AdjustmentReasonCodeType extends clm64465._AdjustmentReasonDescriptionCodeContentType {
	listAgencyID: AdjustmentReasonCodeListAgencyIDContentType;
	listID: string;
	listVersionID: string;
}
export interface AdjustmentReasonCodeType extends _AdjustmentReasonCodeType {}

interface _AllowanceChargeIdentificationCodeType
	extends clm65189AllowanceChargeID._AllowanceChargeIdentificationCodeContentType {
	listAgencyID: string;
	listID: string;
	listURI: string;
	listVersionID: string;
}
export interface AllowanceChargeIdentificationCodeType
	extends _AllowanceChargeIdentificationCodeType {}

export type AllowanceChargeReasonCodeListAgencyIDContentType = "6";
interface _AllowanceChargeReasonCodeListAgencyIDContentType extends Primitive._string {
	content: AllowanceChargeReasonCodeListAgencyIDContentType;
}

interface _AllowanceChargeReasonCodeType
	extends clm64465AllowanceChargeReasonCode._AllowanceChargeReasonCodeContentType {
	listAgencyID: AllowanceChargeReasonCodeListAgencyIDContentType;
	listID: string;
	listURI: string;
	listVersionID: string;
}
export interface AllowanceChargeReasonCodeType extends _AllowanceChargeReasonCodeType {}

export type AutomaticDataCaptureMethodCodeListAgencyIDContentType = "6";
interface _AutomaticDataCaptureMethodCodeListAgencyIDContentType extends Primitive._string {
	content: AutomaticDataCaptureMethodCodeListAgencyIDContentType;
}

interface _AutomaticDataCaptureMethodCodeType
	extends clm67233AutomaticDataCaptureMethodCode._AutomaticDataCaptureMethodCodeContentType {
	listAgencyID: AutomaticDataCaptureMethodCodeListAgencyIDContentType;
	listID: string;
	listURI: string;
	listVersionID: string;
}
export interface AutomaticDataCaptureMethodCodeType extends _AutomaticDataCaptureMethodCodeType {}

export type CargoCategoryCodeListAgencyIDContentType = "6";
interface _CargoCategoryCodeListAgencyIDContentType extends Primitive._string {
	content: CargoCategoryCodeListAgencyIDContentType;
}

interface _CargoCategoryCodeType extends clm6Recommendation21AnnexI._CargoTypeCodeContentType {
	listAgencyID: CargoCategoryCodeListAgencyIDContentType;
	listID: string;
	listVersionID: string;
	name: string;
}
export interface CargoCategoryCodeType extends _CargoCategoryCodeType {}

interface _CargoCommodityCategoryCodeType extends clm67357._CommodityIdentificationCodeContentType {
	listAgencyID: string;
	listID: string;
	listVersionID: string;
	name: string;
}
export interface CargoCommodityCategoryCodeType extends _CargoCommodityCategoryCodeType {}

export type CargoOperationalCategoryCodeListAgencyIDContentType = "6";
interface _CargoOperationalCategoryCodeListAgencyIDContentType extends Primitive._string {
	content: CargoOperationalCategoryCodeListAgencyIDContentType;
}

interface _CargoOperationalCategoryCodeType
	extends clm67085b._CargoOperationalCategoryCodeContentType {
	listAgencyID: CargoOperationalCategoryCodeListAgencyIDContentType;
	listID: string;
	listVersionID: string;
	name: string;
}
export interface CargoOperationalCategoryCodeType extends _CargoOperationalCategoryCodeType {}

export type ChargePayingPartyRoleCodeListAgencyIDContentType = "6";
interface _ChargePayingPartyRoleCodeListAgencyIDContentType extends Primitive._string {
	content: ChargePayingPartyRoleCodeListAgencyIDContentType;
}

interface _ChargePayingPartyRoleCodeType
	extends clm63035ChargePaying._PartyRoleCodeChargePayingContentType {
	listAgencyID: ChargePayingPartyRoleCodeListAgencyIDContentType;
	listID: string;
	listVersionID: string;
	name: string;
}
export interface ChargePayingPartyRoleCodeType extends _ChargePayingPartyRoleCodeType {}

export type CommunicationChannelCodeListAgencyIDContentType = "6";
interface _CommunicationChannelCodeListAgencyIDContentType extends Primitive._string {
	content: CommunicationChannelCodeListAgencyIDContentType;
}

interface _CommunicationChannelCodeType
	extends clm63155CommunicationChannelCode._CommunicationMeansTypeCodeContentType {
	listAgencyID: CommunicationChannelCodeListAgencyIDContentType;
	listID: string;
	listURI: string;
	listVersionID: string;
}
export interface CommunicationChannelCodeType extends _CommunicationChannelCodeType {}

export type ContactTypeCodeListAgencyIDContentType = "6";
interface _ContactTypeCodeListAgencyIDContentType extends Primitive._string {
	content: ContactTypeCodeListAgencyIDContentType;
}

interface _ContactTypeCodeType extends clm63139ContactTypeCode._ContactFunctionCodeContentType {
	listAgencyID: ContactTypeCodeListAgencyIDContentType;
	listID: string;
	listURI: string;
	listVersionID: string;
}
export interface ContactTypeCodeType extends _ContactTypeCodeType {}

export type CountryIDSchemeAgencyIDContentType = "5";
interface _CountryIDSchemeAgencyIDContentType extends Primitive._string {
	content: CountryIDSchemeAgencyIDContentType;
}

interface _CountryIDType extends ids5ISO316612A._ISOTwoletterCountryCodeContentType {
	schemeAgencyID?: CountryIDSchemeAgencyIDContentType;
	schemeID?: string;
	schemeVersionID?: string;
}
export interface CountryIDType extends _CountryIDType {}

export type CurrencyCodeListAgencyIDContentType = "5";
interface _CurrencyCodeListAgencyIDContentType extends Primitive._string {
	content: CurrencyCodeListAgencyIDContentType;
}

interface _CurrencyCodeType extends clm5ISO42173A._ISO3AlphaCurrencyCodeContentType {
	listAgencyID?: CurrencyCodeListAgencyIDContentType;
	listID?: string;
	listURI?: string;
	listVersionID?: string;
}
export interface CurrencyCodeType extends _CurrencyCodeType {}

export type DeliveryTermsCodeListAgencyIDContentType = "6";
interface _DeliveryTermsCodeListAgencyIDContentType extends Primitive._string {
	content: DeliveryTermsCodeListAgencyIDContentType;
}

interface _DeliveryTermsCodeType extends clm64053._DeliveryTermsCodeContentType {
	listAgencyID: DeliveryTermsCodeListAgencyIDContentType;
	listID: string;
	listVersionID: string;
}
export interface DeliveryTermsCodeType extends _DeliveryTermsCodeType {}

export type DimensionTypeCodeListAgencyIDContentType = "6";
interface _DimensionTypeCodeListAgencyIDContentType extends Primitive._string {
	content: DimensionTypeCodeListAgencyIDContentType;
}

interface _DimensionTypeCodeType extends clm66145._DimensionTypeCodeContentType {
	listAgencyID: DimensionTypeCodeListAgencyIDContentType;
	listID: string;
	listVersionID: string;
	name: string;
}
export interface DimensionTypeCodeType extends _DimensionTypeCodeType {}

export type DocumentCodeListAgencyIDContentType = "6";
interface _DocumentCodeListAgencyIDContentType extends Primitive._string {
	content: DocumentCodeListAgencyIDContentType;
}

interface _DocumentCodeType extends clm61001._DocumentNameCodeContentType {
	listAgencyID?: DocumentCodeListAgencyIDContentType;
	listID?: string;
	listURI?: string;
	listVersionID?: string;
	name?: string;
}
export interface DocumentCodeType extends _DocumentCodeType {}

export type DocumentStatusCodeListAgencyIDContentType = "6";
interface _DocumentStatusCodeListAgencyIDContentType extends Primitive._string {
	content: DocumentStatusCodeListAgencyIDContentType;
}

interface _DocumentStatusCodeType extends clm61373._DocumentStatusCodeContentType {
	listAgencyID: DocumentStatusCodeListAgencyIDContentType;
	listID: string;
	listVersionID: string;
	name: string;
}
export interface DocumentStatusCodeType extends _DocumentStatusCodeType {}

interface _FormattedDateTimeType {
	DateTimeString: FormattedDateTimeTypeDateTimeStringType;
}
export interface FormattedDateTimeType extends _FormattedDateTimeType {}

interface _FormattedDateTimeTypeDateTimeStringType extends Primitive._string {
	format: clm62379.TimePointFormatCodeContentType;
}
interface FormattedDateTimeTypeDateTimeStringType
	extends _FormattedDateTimeTypeDateTimeStringType {}

export type FreightChargeTariffClassCodeListAgencyIDContentType = "6";
interface _FreightChargeTariffClassCodeListAgencyIDContentType extends Primitive._string {
	content: FreightChargeTariffClassCodeListAgencyIDContentType;
}

interface _FreightChargeTariffClassCodeType extends clm65243._FreightChargeTariffCodeContentType {
	listAgencyID: FreightChargeTariffClassCodeListAgencyIDContentType;
	listID: string;
	listVersionID: string;
	name: string;
}
export interface FreightChargeTariffClassCodeType extends _FreightChargeTariffClassCodeType {}

export type FreightChargeTypeIDSchemeAgencyIDContentType = "6";
interface _FreightChargeTypeIDSchemeAgencyIDContentType extends Primitive._string {
	content: FreightChargeTypeIDSchemeAgencyIDContentType;
}

interface _FreightChargeTypeIDType extends ids6Recommendation23._FreightCostCodeContentType {
	schemeAgencyID: FreightChargeTypeIDSchemeAgencyIDContentType;
	schemeID: string;
	schemeVersionID: string;
}
export interface FreightChargeTypeIDType extends _FreightChargeTypeIDType {}

interface _GoodsTypeCodeType extends clm6TDED7357._GoodsTypeCodeContentType {
	listAgencyID: string;
	listID: string;
	listVersionID: string;
	name: string;
}
export interface GoodsTypeCodeType extends _GoodsTypeCodeType {}

interface _GoodsTypeExtensionCodeType extends clm6TDED7361._GoodsTypeExtensionCodeContentType {
	listAgencyID: string;
	listID: string;
	listVersionID: string;
	name: string;
}
export interface GoodsTypeExtensionCodeType extends _GoodsTypeExtensionCodeType {}

interface _LinearUnitMeasureType extends Primitive._number {
	unitCode: clm6Recommendation20Linear.MeasurementUnitCommonCodeLinearContentType;
	unitCodeListVersionID: string;
}
export interface LinearUnitMeasureType extends _LinearUnitMeasureType {}

export type LineStatusCodeListAgencyIDContentType = "6";
interface _LineStatusCodeListAgencyIDContentType extends Primitive._string {
	content: LineStatusCodeListAgencyIDContentType;
}

interface _LineStatusCodeType extends clm61229LineStatusCode._ActionCodeContentType {
	listAgencyID: LineStatusCodeListAgencyIDContentType;
	listID: string;
	listURI: string;
	listVersionID: string;
}
export interface LineStatusCodeType extends _LineStatusCodeType {}

interface _LogisticsChargeCalculationBasisCodeType
	extends clm6TDED6131._FreightChargeQuantityUnitBasisCodeContentType {
	listAgencyID: string;
	listID: string;
	listVersionID: string;
	name: string;
}
export interface LogisticsChargeCalculationBasisCodeType
	extends _LogisticsChargeCalculationBasisCodeType {}

export type MessageFunctionCodeListAgencyIDContentType = "6";
interface _MessageFunctionCodeListAgencyIDContentType extends Primitive._string {
	content: MessageFunctionCodeListAgencyIDContentType;
}

interface _MessageFunctionCodeType
	extends clm61225MessageFunctionTypeCode._MessageFunctionCodeContentType {
	listAgencyID: MessageFunctionCodeListAgencyIDContentType;
	listID: string;
	listURI: string;
	listVersionID: string;
}
export interface MessageFunctionCodeType extends _MessageFunctionCodeType {}

export type PackageTypeCodeListAgencyIDContentType = "6";
interface _PackageTypeCodeListAgencyIDContentType extends Primitive._string {
	content: PackageTypeCodeListAgencyIDContentType;
}

interface _PackageTypeCodeType extends clm67065._PackageTypeCodeContentType {
	listAgencyID: PackageTypeCodeListAgencyIDContentType;
	listID: string;
	listVersionID: string;
	name: string;
}
export interface PackageTypeCodeType extends _PackageTypeCodeType {}

export type PackagingMarkingCodeListAgencyIDContentType = "6";
interface _PackagingMarkingCodeListAgencyIDContentType extends Primitive._string {
	content: PackagingMarkingCodeListAgencyIDContentType;
}

interface _PackagingMarkingCodeType
	extends clm67233PackagingMarkingCode._PackagingMarkingCodeContentType {
	listAgencyID: PackagingMarkingCodeListAgencyIDContentType;
	listID: string;
	listURI: string;
	listVersionID: string;
}
export interface PackagingMarkingCodeType extends _PackagingMarkingCodeType {}

export type PartyRoleCodeListAgencyIDContentType = "6";
interface _PartyRoleCodeListAgencyIDContentType extends Primitive._string {
	content: PartyRoleCodeListAgencyIDContentType;
}

interface _PartyRoleCodeType extends clm63035._PartyRoleCodeContentType {
	listAgencyID: PartyRoleCodeListAgencyIDContentType;
	listID: string;
	listVersionID: string;
	name: string;
}
export interface PartyRoleCodeType extends _PartyRoleCodeType {}

export type PaymentGuaranteeMeansCodeListAgencyIDContentType = "6";
interface _PaymentGuaranteeMeansCodeListAgencyIDContentType extends Primitive._string {
	content: PaymentGuaranteeMeansCodeListAgencyIDContentType;
}

interface _PaymentGuaranteeMeansCodeType extends clm64431._PaymentGuaranteeMeansCodeContentType {
	listAgencyID: PaymentGuaranteeMeansCodeListAgencyIDContentType;
	listID: string;
	listVersionID: string;
}
export interface PaymentGuaranteeMeansCodeType extends _PaymentGuaranteeMeansCodeType {}

export type PaymentMeansChannelCodeListAgencyIDContentType = "6";
interface _PaymentMeansChannelCodeListAgencyIDContentType extends Primitive._string {
	content: PaymentMeansChannelCodeListAgencyIDContentType;
}

interface _PaymentMeansChannelCodeType extends clm64435._PaymentMeansChannelCodeContentType {
	listAgencyID: PaymentMeansChannelCodeListAgencyIDContentType;
	listID: string;
	listVersionID: string;
	name: string;
}
export interface PaymentMeansChannelCodeType extends _PaymentMeansChannelCodeType {}

export type PaymentMeansCodeListAgencyIDContentType = "6";
interface _PaymentMeansCodeListAgencyIDContentType extends Primitive._string {
	content: PaymentMeansCodeListAgencyIDContentType;
}

interface _PaymentMeansCodeType extends clm64461._PaymentMeansCodeContentType {
	listAgencyID?: PaymentMeansCodeListAgencyIDContentType;
	listID?: string;
	listVersionID?: string;
}
export interface PaymentMeansCodeType extends _PaymentMeansCodeType {}

export type PaymentTermsEventTimeReferenceCodeListAgencyIDContentType = "6";
interface _PaymentTermsEventTimeReferenceCodeListAgencyIDContentType extends Primitive._string {
	content: PaymentTermsEventTimeReferenceCodeListAgencyIDContentType;
}

interface _PaymentTermsEventTimeReferenceCodeType
	extends clm62475PaymentTermsEvent._EventTimeReferenceCodePaymentTermsEventContentType {
	listAgencyID: PaymentTermsEventTimeReferenceCodeListAgencyIDContentType;
	listID: string;
	listVersionID: string;
}
export interface PaymentTermsEventTimeReferenceCodeType
	extends _PaymentTermsEventTimeReferenceCodeType {}

export type PaymentTermsIDSchemeAgencyIDContentType = "6";
interface _PaymentTermsIDSchemeAgencyIDContentType extends Primitive._string {
	content: PaymentTermsIDSchemeAgencyIDContentType;
}

interface _PaymentTermsIDType extends ids64277._PaymentTermsDescriptionIdentifierContentType {
	schemeAgencyID: PaymentTermsIDSchemeAgencyIDContentType;
	schemeID: string;
	schemeVersionID: string;
}
export interface PaymentTermsIDType extends _PaymentTermsIDType {}

export type PaymentTermsTypeCodeListAgencyIDContentType = "6";
interface _PaymentTermsTypeCodeListAgencyIDContentType extends Primitive._string {
	content: PaymentTermsTypeCodeListAgencyIDContentType;
}

interface _PaymentTermsTypeCodeType extends clm64279._PaymentTermsTypeCodeContentType {
	listAgencyID: PaymentTermsTypeCodeListAgencyIDContentType;
	listID: string;
	listVersionID: string;
	name: string;
}
export interface PaymentTermsTypeCodeType extends _PaymentTermsTypeCodeType {}

export type PriceTypeCodeListAgencyIDContentType = "6";
interface _PriceTypeCodeListAgencyIDContentType extends Primitive._string {
	content: PriceTypeCodeListAgencyIDContentType;
}

interface _PriceTypeCodeType extends clm65375._PriceTypeCodeContentType {
	listAgencyID: PriceTypeCodeListAgencyIDContentType;
	listID: string;
	listVersionID: string;
}
export interface PriceTypeCodeType extends _PriceTypeCodeType {}

export type ReferenceCodeListAgencyIDContentType = "6";
interface _ReferenceCodeListAgencyIDContentType extends Primitive._string {
	content: ReferenceCodeListAgencyIDContentType;
}

interface _ReferenceCodeType extends clm61153ReferenceTypeCode._ReferenceTypeCodeContentType {
	listAgencyID: ReferenceCodeListAgencyIDContentType;
	listID: string;
	listVersionID: string;
	name: string;
}
export interface ReferenceCodeType extends _ReferenceCodeType {}

export type TaxCategoryCodeListAgencyIDContentType = "6";
interface _TaxCategoryCodeListAgencyIDContentType extends Primitive._string {
	content: TaxCategoryCodeListAgencyIDContentType;
}

interface _TaxCategoryCodeType extends clm65305._DutyorTaxorFeeCategoryCodeContentType {
	listAgencyID?: TaxCategoryCodeListAgencyIDContentType;
	listID?: string;
	listURI?: string;
	listVersionID?: string;
}
export interface TaxCategoryCodeType extends _TaxCategoryCodeType {}

export type TaxTypeCodeListAgencyIDContentType = "6";
interface _TaxTypeCodeListAgencyIDContentType extends Primitive._string {
	content: TaxTypeCodeListAgencyIDContentType;
}

interface _TaxTypeCodeType extends clm65153._DutyTaxFeeTypeCodeContentType {
	listAgencyID?: TaxTypeCodeListAgencyIDContentType;
	listID?: string;
	listURI?: string;
	listVersionID?: string;
}
export interface TaxTypeCodeType extends _TaxTypeCodeType {}

export type TimeReferenceCodeListAgencyIDContentType = "6";
interface _TimeReferenceCodeListAgencyIDContentType extends Primitive._string {
	content: TimeReferenceCodeListAgencyIDContentType;
}

interface _TimeReferenceCodeType extends clm62475._EventTimeReferenceCodeContentType {
	listAgencyID: TimeReferenceCodeListAgencyIDContentType;
	listID: string;
	listVersionID: string;
	name: string;
}
export interface TimeReferenceCodeType extends _TimeReferenceCodeType {}

export type TransportEquipmentCategoryCodeListAgencyIDContentType = "6";
interface _TransportEquipmentCategoryCodeListAgencyIDContentType extends Primitive._string {
	content: TransportEquipmentCategoryCodeListAgencyIDContentType;
}

interface _TransportEquipmentCategoryCodeType
	extends clm68053._TransportEquipmentCategoryCodeContentType {
	listAgencyID: TransportEquipmentCategoryCodeListAgencyIDContentType;
	listID: string;
	listVersionID: string;
	name: string;
}
export interface TransportEquipmentCategoryCodeType extends _TransportEquipmentCategoryCodeType {}

export type TransportEquipmentFullnessCodeListAgencyIDContentType = "6";
interface _TransportEquipmentFullnessCodeListAgencyIDContentType extends Primitive._string {
	content: TransportEquipmentFullnessCodeListAgencyIDContentType;
}

interface _TransportEquipmentFullnessCodeType
	extends clm68169._TransportEquipmentFullnessCodeContentType {
	listAgencyID: TransportEquipmentFullnessCodeListAgencyIDContentType;
	listID: string;
	listVersionID: string;
	name: string;
}
export interface TransportEquipmentFullnessCodeType extends _TransportEquipmentFullnessCodeType {}

export type TransportEquipmentSizeTypeCodeListAgencyIDContentType = "6";
interface _TransportEquipmentSizeTypeCodeListAgencyIDContentType extends Primitive._string {
	content: TransportEquipmentSizeTypeCodeListAgencyIDContentType;
}

interface _TransportEquipmentSizeTypeCodeType
	extends clm68155._EquipmentSizeTypeDescriptionCodeContentType {
	listAgencyID: TransportEquipmentSizeTypeCodeListAgencyIDContentType;
	listID: string;
	listVersionID: string;
	name: string;
}
export interface TransportEquipmentSizeTypeCodeType extends _TransportEquipmentSizeTypeCodeType {}

export type TransportMeansTypeCodeListAgencyIDContentType = "6";
interface _TransportMeansTypeCodeListAgencyIDContentType extends Primitive._string {
	content: TransportMeansTypeCodeListAgencyIDContentType;
}

interface _TransportMeansTypeCodeType
	extends clm6Recommendation28._TransportMeansTypeCodeContentType {
	listAgencyID: TransportMeansTypeCodeListAgencyIDContentType;
	listID: string;
	listVersionID: string;
	name: string;
}
export interface TransportMeansTypeCodeType extends _TransportMeansTypeCodeType {}

export type TransportModeCodeListAgencyIDContentType = "6";
interface _TransportModeCodeListAgencyIDContentType extends Primitive._string {
	content: TransportModeCodeListAgencyIDContentType;
}

interface _TransportModeCodeType extends clm6Recommendation19._TransportModeCodeContentType {
	listAgencyID: TransportModeCodeListAgencyIDContentType;
	listID: string;
	listVersionID: string;
	name: string;
}
export interface TransportModeCodeType extends _TransportModeCodeType {}

export type TransportMovementStageCodeListAgencyIDContentType = "6";
interface _TransportMovementStageCodeListAgencyIDContentType extends Primitive._string {
	content: TransportMovementStageCodeListAgencyIDContentType;
}

interface _TransportMovementStageCodeType extends clm68051._TransportMovementStageCodeContentType {
	listAgencyID: TransportMovementStageCodeListAgencyIDContentType;
	listID: string;
	listVersionID: string;
	name: string;
}
export interface TransportMovementStageCodeType extends _TransportMovementStageCodeType {}

interface _VolumeUnitMeasureType extends Primitive._number {
	unitCode: clm6Recommendation20Volume.MeasurementUnitCommonCodeVolumeContentType;
	unitCodeListVersionID: string;
}
export interface VolumeUnitMeasureType extends _VolumeUnitMeasureType {}

interface _WeightUnitMeasureType extends Primitive._number {
	unitCode: clm6Recommendation20Weight.MeasurementUnitCommonCodeWeightContentType;
	unitCodeListVersionID: string;
}
export interface WeightUnitMeasureType extends _WeightUnitMeasureType {}

export interface document {}
