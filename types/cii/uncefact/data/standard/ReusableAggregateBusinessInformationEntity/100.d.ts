import * as qdt from "../QualifiedDataType/100";
import * as udt from "../UnqualifiedDataType/100";

// Source files:
// https://raw.githubusercontent.com/ConnectingEurope/eInvoicing-EN16931/refs/heads/master/cii/schema/D16B%20SCRDM%20(Subset)/coupled%20clm/CII/uncefact/data/standard/CrossIndustryInvoice_ReusableAggregateBusinessInformationEntity_100pD16B.xsd

interface _AdvancePaymentType {
	FormattedReceivedDateTime?: qdt.FormattedDateTimeType;
	IncludedTradeTax?: TradeTaxType[];
	PaidAmount: udt.AmountType;
}
export interface AdvancePaymentType extends _AdvancePaymentType {}

interface _AppliedAllowanceChargeType {
	ActualAmount?: udt.AmountType;
	BasisAmount?: udt.AmountType;
	CalculationPercent?: udt.PercentType;
	CategoryAppliedTax?: AppliedTaxType;
	ChargeIndicator: udt.IndicatorType;
	Description?: udt.TextType;
	ReasonCode?: udt.CodeType;
}
export interface AppliedAllowanceChargeType extends _AppliedAllowanceChargeType {}

interface _AppliedTaxType {
	BasisAmount?: udt.AmountType;
	CalculatedAmount?: udt.AmountType;
	CalculatedRate?: udt.RateType;
	TaxPointDate?: udt.DateType;
	TypeCode?: udt.CodeType;
}
export interface AppliedTaxType extends _AppliedTaxType {}

interface _AvailablePeriodType {
	Description?: udt.TextType;
	EndDateTime?: udt.DateTimeType;
	StartDateTime?: udt.DateTimeType;
}
export interface AvailablePeriodType extends _AvailablePeriodType {}

interface _BasicWorkItemType {
	ActualWorkItemComplexDescription?: WorkItemComplexDescriptionType[];
	AlternativeClassificationCode?: udt.CodeType[];
	ChangedRecordedStatus?: RecordedStatusType[];
	Comment?: udt.TextType[];
	ContractualLanguageCode?: udt.CodeType;
	ID: udt.IDType;
	Index?: udt.TextType;
	IndexValue?: udt.ValueType;
	ItemBasicWorkItem?: BasicWorkItemType[];
	PriceListItemID?: udt.IDType;
	PrimaryClassificationCode?: udt.CodeType[];
	ReferencedSpecifiedBinaryFile?: SpecifiedBinaryFileType[];
	ReferenceFileBinaryObject?: udt.BinaryObjectType[];
	ReferenceID?: udt.IDType;
	RequestedActionCode?: udt.CodeType[];
	StatusCode?: udt.CodeType[];
	SubordinateBasicWorkItem?: BasicWorkItemType[];
	TotalCalculatedPrice?: CalculatedPriceType[];
	TotalQuantity?: udt.QuantityType;
	TotalQuantityClassificationCode?: udt.CodeType;
	TotalQuantityWorkItemQuantityAnalysis?: WorkItemQuantityAnalysisType[];
	TypeCode?: udt.CodeType[];
	UnitCalculatedPrice?: CalculatedPriceType[];
}
export interface BasicWorkItemType extends _BasicWorkItemType {}

interface _BranchFinancialInstitutionType {
	ID?: udt.IDType;
	LocationFinancialInstitutionAddress?: FinancialInstitutionAddressType;
	Name?: udt.TextType;
}
export interface BranchFinancialInstitutionType extends _BranchFinancialInstitutionType {}

interface _CalculatedPriceType {
	ChargeAmount?: udt.AmountType[];
	RelatedAppliedAllowanceCharge?: AppliedAllowanceChargeType[];
	TypeCode?: udt.CodeType[];
}
export interface CalculatedPriceType extends _CalculatedPriceType {}

interface _ContactPersonType {
	FamilyName?: udt.TextType;
	GivenName?: udt.TextType;
	MiddleName?: udt.TextType;
}
export interface ContactPersonType extends _ContactPersonType {}

interface _CreditorFinancialAccountType {
	AccountName?: udt.TextType;
	IBANID?: udt.IDType;
	ProprietaryID?: udt.IDType;
}
export interface CreditorFinancialAccountType extends _CreditorFinancialAccountType {}

interface _CreditorFinancialInstitutionType {
	AustralianBSBID?: udt.IDType;
	AustrianBankleitzahlID?: udt.IDType;
	BICID?: udt.IDType;
	CanadianPaymentsAssociationID?: udt.IDType;
	CHIPSParticipantID?: udt.IDType;
	CHIPSUniversalID?: udt.IDType;
	ClearingSystemName?: udt.TextType;
	FedwireRoutingNumberID?: udt.IDType;
	GermanBankleitzahlID?: udt.IDType;
	HellenicBankID?: udt.IDType;
	HongKongBankID?: udt.IDType;
	IndianFinancialSystemID?: udt.IDType;
	IrishNSCID?: udt.IDType;
	ItalianDomesticID?: udt.IDType;
	JapanFinancialInstitutionCommonID?: udt.IDType;
	LocationFinancialInstitutionAddress?: FinancialInstitutionAddressType;
	Name?: udt.TextType;
	NewZealandNCCID?: udt.IDType;
	PolishNationalClearingID?: udt.IDType;
	PortugueseNCCID?: udt.IDType;
	RussianCentralBankID?: udt.IDType;
	SICID?: udt.IDType;
	SouthAfricanNCCID?: udt.IDType;
	SpanishDomesticInterbankingID?: udt.IDType;
	SubDivisionBranchFinancialInstitution?: BranchFinancialInstitutionType;
	SwissBCID?: udt.IDType;
	UKSortCodeID?: udt.IDType;
}
export interface CreditorFinancialInstitutionType extends _CreditorFinancialInstitutionType {}

interface _DebtorFinancialAccountType {
	AccountName?: udt.TextType;
	IBANID?: udt.IDType;
	ProprietaryID?: udt.IDType;
}
export interface DebtorFinancialAccountType extends _DebtorFinancialAccountType {}

interface _DebtorFinancialInstitutionType {
	AustralianBSBID?: udt.IDType;
	AustrianBankleitzahlID?: udt.IDType;
	BICID?: udt.IDType;
	CanadianPaymentsAssociationID?: udt.IDType;
	CHIPSParticipantID?: udt.IDType;
	CHIPSUniversalID?: udt.IDType;
	ClearingSystemName?: udt.TextType;
	FedwireRoutingNumberID?: udt.IDType;
	GermanBankleitzahlID?: udt.IDType;
	HellenicBankID?: udt.IDType;
	HongKongBankID?: udt.IDType;
	IndianFinancialSystemID?: udt.IDType;
	IrishNSCID?: udt.IDType;
	ItalianDomesticID?: udt.IDType;
	JapanFinancialInstitutionCommonID?: udt.IDType;
	LocationFinancialInstitutionAddress?: FinancialInstitutionAddressType;
	Name?: udt.TextType;
	NewZealandNCCID?: udt.IDType;
	PolishNationalClearingID?: udt.IDType;
	PortugueseNCCID?: udt.IDType;
	RussianCentralBankID?: udt.IDType;
	SICID?: udt.IDType;
	SouthAfricanNCCID?: udt.IDType;
	SpanishDomesticInterbankingID?: udt.IDType;
	SubDivisionBranchFinancialInstitution?: BranchFinancialInstitutionType;
	SwissBCID?: udt.IDType;
	UKSortCodeID?: udt.IDType;
}
export interface DebtorFinancialInstitutionType extends _DebtorFinancialInstitutionType {}

interface _DeliveryAdjustmentType {
	ActualAmount?: udt.AmountType[];
	ActualDateTime?: udt.DateTimeType;
	ActualQuantity?: udt.QuantityType;
	Reason?: udt.TextType[];
	ReasonCode?: qdt.AdjustmentReasonCodeType;
}
export interface DeliveryAdjustmentType extends _DeliveryAdjustmentType {}

interface _DisposalInstructionsType {
	Description?: udt.TextType[];
	MaterialID?: udt.IDType;
	RecyclingDescriptionCode?: udt.CodeType[];
	RecyclingProcedure?: udt.TextType[];
}
export interface DisposalInstructionsType extends _DisposalInstructionsType {}

interface _DocumentContextParameterType {
	ID?: udt.IDType;
	SpecifiedDocumentVersion?: DocumentVersionType;
	Value?: udt.TextType;
}
export interface DocumentContextParameterType extends _DocumentContextParameterType {}

interface _DocumentLineDocumentType {
	IncludedNote?: NoteType[];
	LineID?: udt.IDType;
	LineStatusCode?: qdt.LineStatusCodeType;
	LineStatusReasonCode?: udt.CodeType;
	ParentLineID?: udt.IDType;
}
export interface DocumentLineDocumentType extends _DocumentLineDocumentType {}

interface _DocumentVersionType {
	ID?: udt.IDType;
	IssueDateTime?: udt.DateTimeType;
	Name?: udt.TextType;
}
export interface DocumentVersionType extends _DocumentVersionType {}

interface _ExchangedDocumentContextType {
	ApplicationSpecifiedDocumentContextParameter?: DocumentContextParameterType[];
	BIMSpecifiedDocumentContextParameter?: DocumentContextParameterType[];
	BusinessProcessSpecifiedDocumentContextParameter?: DocumentContextParameterType[];
	GuidelineSpecifiedDocumentContextParameter?: DocumentContextParameterType[];
	MessageStandardSpecifiedDocumentContextParameter?: DocumentContextParameterType;
	ScenarioSpecifiedDocumentContextParameter?: DocumentContextParameterType[];
	SpecifiedTransactionID?: udt.IDType;
	SubsetSpecifiedDocumentContextParameter?: DocumentContextParameterType[];
	TestIndicator?: udt.IndicatorType;
}
export interface ExchangedDocumentContextType extends _ExchangedDocumentContextType {}

interface _ExchangedDocumentType {
	CategoryCode?: udt.CodeType;
	ControlRequirementIndicator?: udt.IndicatorType;
	CopyIndicator?: udt.IndicatorType;
	EffectiveSpecifiedPeriod?: SpecifiedPeriodType;
	GlobalID?: udt.IDType;
	ID: udt.IDType;
	IncludedNote?: NoteType[];
	IssueDateTime: udt.DateTimeType;
	IssuerTradeParty?: TradePartyType;
	LanguageID?: udt.IDType[];
	Name?: udt.TextType[];
	PreviousRevisionID?: udt.IDType;
	Purpose?: udt.TextType;
	PurposeCode?: qdt.MessageFunctionCodeType;
	RevisionDateTime?: udt.DateTimeType;
	RevisionID?: udt.IDType;
	TypeCode?: qdt.DocumentCodeType;
	VersionID?: udt.IDType;
}
export interface ExchangedDocumentType extends _ExchangedDocumentType {}

interface _FinancialAdjustmentType {
	ActualAmount?: udt.AmountType[];
	ActualDateTime?: udt.DateTimeType;
	ActualQuantity?: udt.QuantityType;
	ClaimRelatedTradeParty?: TradePartyType;
	InvoiceReferenceReferencedDocument?: ReferencedDocumentType;
	Reason?: udt.TextType[];
	ReasonCode?: udt.CodeType;
}
export interface FinancialAdjustmentType extends _FinancialAdjustmentType {}

interface _FinancialInstitutionAddressType {
	BuildingNumber?: udt.TextType;
	CityID?: udt.IDType;
	CityName?: udt.TextType;
	CountryID?: udt.IDType;
	CountryName?: udt.TextType;
	CountrySubDivisionID?: udt.IDType;
	CountrySubDivisionName?: udt.TextType;
	DepartmentName?: udt.TextType;
	LineFive?: udt.TextType;
	LineFour?: udt.TextType;
	LineOne?: udt.TextType;
	LineThree?: udt.TextType;
	LineTwo?: udt.TextType;
	PostcodeCode?: udt.CodeType;
	PostOfficeBox?: udt.TextType;
	StreetName?: udt.TextType;
	TypeCode?: udt.CodeType;
}
export interface FinancialInstitutionAddressType extends _FinancialInstitutionAddressType {}

interface _GeographicalCoordinateType {
	AltitudeMeasure?: udt.MeasureType;
	LatitudeMeasure?: udt.MeasureType;
	LongitudeMeasure?: udt.MeasureType;
	SystemID?: udt.IDType;
}
export interface GeographicalCoordinateType extends _GeographicalCoordinateType {}

interface _GroupedWorkItemType {
	ActualWorkItemComplexDescription?: WorkItemComplexDescriptionType[];
	AlternativeClassificationCode?: udt.CodeType[];
	ChangedRecordedStatus?: RecordedStatusType[];
	Comment?: udt.TextType[];
	ContractualLanguageCode?: udt.CodeType;
	ID: udt.IDType;
	Index?: udt.TextType;
	ItemBasicWorkItem?: BasicWorkItemType[];
	ItemGroupedWorkItem?: GroupedWorkItemType[];
	PriceListItemID?: udt.IDType;
	PrimaryClassificationCode?: udt.CodeType[];
	ReferencedSpecifiedBinaryFile?: SpecifiedBinaryFileType[];
	RequestedActionCode?: udt.CodeType[];
	TotalCalculatedPrice?: CalculatedPriceType[];
	TotalQuantity?: udt.QuantityType;
	TypeCode?: udt.CodeType[];
}
export interface GroupedWorkItemType extends _GroupedWorkItemType {}

interface _HeaderTradeAgreementType {
	AdditionalReferencedDocument?: ReferencedDocumentType[];
	ApplicableTradeDeliveryTerms?: TradeDeliveryTermsType;
	BuyerAgentTradeParty?: TradePartyType;
	BuyerAssignedAccountantTradeParty?: TradePartyType;
	BuyerOrderReferencedDocument?: ReferencedDocumentType;
	BuyerReference?: udt.TextType;
	BuyerRequisitionerTradeParty?: TradePartyType[];
	BuyerTaxRepresentativeTradeParty?: TradePartyType;
	BuyerTradeParty?: TradePartyType;
	ContractReferencedDocument?: ReferencedDocumentType;
	DemandForecastReferencedDocument?: ReferencedDocumentType;
	OrderResponseReferencedDocument?: ReferencedDocumentType;
	PriceListReferencedDocument?: ReferencedDocumentType;
	ProductEndUserTradeParty?: TradePartyType;
	PromotionalDealReferencedDocument?: ReferencedDocumentType;
	PurchaseConditionsReferencedDocument?: ReferencedDocumentType[];
	QuotationReferencedDocument?: ReferencedDocumentType;
	Reference?: udt.TextType[];
	RequisitionerReferencedDocument?: ReferencedDocumentType[];
	SalesAgentTradeParty?: TradePartyType;
	SellerAssignedAccountantTradeParty?: TradePartyType;
	SellerOrderReferencedDocument?: ReferencedDocumentType;
	SellerTaxRepresentativeTradeParty?: TradePartyType;
	SellerTradeParty?: TradePartyType;
	SpecifiedProcuringProject?: ProcuringProjectType;
	SupplyInstructionReferencedDocument?: ReferencedDocumentType;
	UltimateCustomerOrderReferencedDocument?: ReferencedDocumentType[];
}
export interface HeaderTradeAgreementType extends _HeaderTradeAgreementType {}

interface _HeaderTradeDeliveryType {
	ActualDeliverySupplyChainEvent?: SupplyChainEventType;
	ActualDespatchSupplyChainEvent?: SupplyChainEventType;
	ActualPickUpSupplyChainEvent?: SupplyChainEventType;
	ActualReceiptSupplyChainEvent?: SupplyChainEventType;
	AdditionalReferencedDocument?: ReferencedDocumentType[];
	ConsumptionReportReferencedDocument?: ReferencedDocumentType;
	DeliveryNoteReferencedDocument?: ReferencedDocumentType;
	DespatchAdviceReferencedDocument?: ReferencedDocumentType;
	PackingListReferencedDocument?: ReferencedDocumentType;
	PreviousDeliverySupplyChainEvent?: SupplyChainEventType[];
	ReceivingAdviceReferencedDocument?: ReferencedDocumentType;
	RelatedSupplyChainConsignment?: SupplyChainConsignmentType;
	ShipFromTradeParty?: TradePartyType;
	ShipToTradeParty?: TradePartyType;
	UltimateShipToTradeParty?: TradePartyType;
}
export interface HeaderTradeDeliveryType extends _HeaderTradeDeliveryType {}

interface _HeaderTradeSettlementType {
	ApplicableTradeTax?: TradeTaxType[];
	BillingSpecifiedPeriod?: SpecifiedPeriodType;
	CreditorReferenceID?: udt.IDType;
	CreditorReferenceIssuerID?: udt.IDType[];
	CreditorReferenceType?: udt.TextType[];
	CreditorReferenceTypeCode?: udt.CodeType[];
	CreditReason?: udt.TextType[];
	CreditReasonCode?: udt.CodeType;
	DuePayableAmount?: udt.AmountType[];
	FactoringAgreementReferencedDocument?: ReferencedDocumentType[];
	FactoringListReferencedDocument?: ReferencedDocumentType[];
	InvoiceApplicableTradeCurrencyExchange?: TradeCurrencyExchangeType;
	InvoiceCurrencyCode?: qdt.CurrencyCodeType;
	InvoiceDateTime?: udt.DateTimeType;
	InvoiceeTradeParty?: TradePartyType;
	InvoiceIssuerReference?: udt.TextType;
	InvoiceReferencedDocument?: ReferencedDocumentType;
	InvoicerTradeParty?: TradePartyType;
	LetterOfCreditReferencedDocument?: ReferencedDocumentType;
	NextInvoiceDateTime?: udt.DateTimeType[];
	PayableSpecifiedTradeAccountingAccount?: TradeAccountingAccountType[];
	PayeeTradeParty?: TradePartyType;
	PayerTradeParty?: TradePartyType;
	PaymentApplicableTradeCurrencyExchange?: TradeCurrencyExchangeType;
	PaymentCurrencyCode?: qdt.CurrencyCodeType;
	PaymentReference?: udt.TextType[];
	ProFormaInvoiceReferencedDocument?: ReferencedDocumentType;
	PurchaseSpecifiedTradeAccountingAccount?: TradeAccountingAccountType[];
	ReceivableSpecifiedTradeAccountingAccount?: TradeAccountingAccountType[];
	SalesSpecifiedTradeAccountingAccount?: TradeAccountingAccountType[];
	SpecifiedAdvancePayment?: AdvancePaymentType[];
	SpecifiedFinancialAdjustment?: FinancialAdjustmentType[];
	SpecifiedLogisticsServiceCharge?: LogisticsServiceChargeType[];
	SpecifiedTradeAllowanceCharge?: TradeAllowanceChargeType[];
	SpecifiedTradePaymentTerms?: TradePaymentTermsType[];
	SpecifiedTradeSettlementFinancialCard?: TradeSettlementFinancialCardType[];
	SpecifiedTradeSettlementHeaderMonetarySummation?: TradeSettlementHeaderMonetarySummationType;
	SpecifiedTradeSettlementPaymentMeans?: TradeSettlementPaymentMeansType[];
	SubtotalCalculatedTradeTax?: TradeTaxType[];
	TaxApplicableTradeCurrencyExchange?: TradeCurrencyExchangeType;
	TaxCurrencyCode?: qdt.CurrencyCodeType;
	UltimatePayeeTradeParty?: TradePartyType;
}
export interface HeaderTradeSettlementType extends _HeaderTradeSettlementType {}

interface _LegalOrganizationType {
	AuthorizedLegalRegistration?: LegalRegistrationType[];
	ID?: udt.IDType;
	LegalClassificationCode?: udt.CodeType;
	Name?: udt.TextType;
	PostalTradeAddress?: TradeAddressType;
	TradingBusinessName?: udt.TextType;
}
export interface LegalOrganizationType extends _LegalOrganizationType {}

interface _LegalRegistrationType {
	ID?: udt.IDType;
	TypeCode?: udt.CodeType;
}
export interface LegalRegistrationType extends _LegalRegistrationType {}

interface _LineTradeAgreementType {
	AdditionalReferencedDocument?: ReferencedDocumentType[];
	ApplicableTradeDeliveryTerms?: TradeDeliveryTermsType;
	BuyerOrderReferencedDocument?: ReferencedDocumentType;
	BuyerReference?: udt.TextType;
	BuyerRequisitionerTradeParty?: TradePartyType[];
	ContractReferencedDocument?: ReferencedDocumentType;
	DemandForecastReferencedDocument?: ReferencedDocumentType;
	GrossPriceProductTradePrice?: TradePriceType;
	IncludedSpecifiedMarketplace?: SpecifiedMarketplaceType;
	ItemBuyerTradeParty?: TradePartyType;
	ItemSellerTradeParty?: TradePartyType;
	NetPriceProductTradePrice?: TradePriceType;
	PromotionalDealReferencedDocument?: ReferencedDocumentType;
	QuotationReferencedDocument?: ReferencedDocumentType;
	RequisitionerReferencedDocument?: ReferencedDocumentType[];
	SellerOrderReferencedDocument?: ReferencedDocumentType;
	UltimateCustomerOrderReferencedDocument?: ReferencedDocumentType[];
}
export interface LineTradeAgreementType extends _LineTradeAgreementType {}

interface _LineTradeDeliveryType {
	ActualDeliverySupplyChainEvent?: SupplyChainEventType;
	ActualDespatchSupplyChainEvent?: SupplyChainEventType;
	ActualPickUpSupplyChainEvent?: SupplyChainEventType;
	ActualReceiptSupplyChainEvent?: SupplyChainEventType;
	AdditionalReferencedDocument?: ReferencedDocumentType[];
	BilledQuantity?: udt.QuantityType;
	ChargeFreeQuantity?: udt.QuantityType;
	ConsumptionReportReferencedDocument?: ReferencedDocumentType;
	DeliveryNoteReferencedDocument?: ReferencedDocumentType;
	DespatchAdviceReferencedDocument?: ReferencedDocumentType;
	DespatchedQuantity?: udt.QuantityType;
	GrossWeightMeasure?: qdt.WeightUnitMeasureType;
	IncludedSupplyChainPackaging?: SupplyChainPackagingType[];
	NetWeightMeasure?: qdt.WeightUnitMeasureType;
	PackageQuantity?: udt.QuantityType;
	PackingListReferencedDocument?: ReferencedDocumentType;
	PerPackageUnitQuantity?: udt.QuantityType;
	ProductUnitQuantity?: udt.QuantityType;
	ReceivedQuantity?: udt.QuantityType;
	ReceivingAdviceReferencedDocument?: ReferencedDocumentType;
	RelatedSupplyChainConsignment?: SupplyChainConsignmentType;
	RequestedDeliverySupplyChainEvent?: SupplyChainEventType;
	RequestedQuantity?: udt.QuantityType;
	ShipFromTradeParty?: TradePartyType;
	ShipToTradeParty?: TradePartyType;
	SpecifiedDeliveryAdjustment?: DeliveryAdjustmentType[];
	TheoreticalWeightMeasure?: qdt.WeightUnitMeasureType;
	UltimateShipToTradeParty?: TradePartyType;
}
export interface LineTradeDeliveryType extends _LineTradeDeliveryType {}

interface _LineTradeSettlementType {
	AdditionalReferencedDocument?: ReferencedDocumentType[];
	ApplicableTradeTax?: TradeTaxType[];
	BillingSpecifiedPeriod?: SpecifiedPeriodType;
	DiscountIndicator?: udt.IndicatorType;
	InvoiceIssuerReference?: udt.TextType;
	InvoiceReferencedDocument?: ReferencedDocumentType;
	PayableSpecifiedTradeAccountingAccount?: TradeAccountingAccountType[];
	PaymentReference?: udt.TextType[];
	PurchaseSpecifiedTradeAccountingAccount?: TradeAccountingAccountType[];
	ReceivableSpecifiedTradeAccountingAccount?: TradeAccountingAccountType[];
	SalesSpecifiedTradeAccountingAccount?: TradeAccountingAccountType[];
	SpecifiedFinancialAdjustment?: FinancialAdjustmentType[];
	SpecifiedLogisticsServiceCharge?: LogisticsServiceChargeType[];
	SpecifiedTradeAllowanceCharge?: TradeAllowanceChargeType[];
	SpecifiedTradePaymentTerms?: TradePaymentTermsType[];
	SpecifiedTradeSettlementFinancialCard?: TradeSettlementFinancialCardType;
	SpecifiedTradeSettlementLineMonetarySummation?: TradeSettlementLineMonetarySummationType;
	SubtotalCalculatedTradeTax?: TradeTaxType[];
	TotalAdjustmentAmount?: udt.AmountType;
}
export interface LineTradeSettlementType extends _LineTradeSettlementType {}

interface _LogisticsLocationType {
	Description?: udt.TextType[];
	ID?: udt.IDType;
	Name?: udt.TextType[];
	PhysicalGeographicalCoordinate?: GeographicalCoordinateType;
	PostalTradeAddress?: TradeAddressType;
	TypeCode?: udt.CodeType;
}
export interface LogisticsLocationType extends _LogisticsLocationType {}

interface _LogisticsServiceChargeType {
	AllowanceCharge?: udt.TextType;
	AppliedAmount?: udt.AmountType[];
	AppliedFromLogisticsLocation?: LogisticsLocationType;
	AppliedToLogisticsLocation?: LogisticsLocationType;
	AppliedTradeTax?: TradeTaxType[];
	CalculationBasis?: udt.TextType;
	CalculationBasisCode?: qdt.LogisticsChargeCalculationBasisCodeType;
	ChargeCategoryCode?: udt.CodeType;
	Description?: udt.TextType[];
	DisbursementAmount?: udt.AmountType[];
	ID?: qdt.FreightChargeTypeIDType;
	PayingPartyRoleCode?: qdt.ChargePayingPartyRoleCodeType;
	PaymentArrangementCode?: udt.CodeType;
	PaymentPlaceLogisticsLocation?: LogisticsLocationType;
	ServiceCategoryCode?: udt.CodeType;
	TariffClassCode?: qdt.FreightChargeTariffClassCodeType;
	TransportPaymentMethodCode?: udt.CodeType;
}
export interface LogisticsServiceChargeType extends _LogisticsServiceChargeType {}

interface _LogisticsTransportEquipmentType {
	CategoryCode?: qdt.TransportEquipmentCategoryCodeType;
	CharacteristicCode?: qdt.TransportEquipmentSizeTypeCodeType;
	ID?: udt.IDType;
	LinearSpatialDimension?: SpatialDimensionType;
	LoadingLengthMeasure?: qdt.LinearUnitMeasureType;
	UsedCapacityCode?: qdt.TransportEquipmentFullnessCodeType;
}
export interface LogisticsTransportEquipmentType extends _LogisticsTransportEquipmentType {}

interface _LogisticsTransportMeansType {
	ID?: udt.IDType;
	Name?: udt.TextType;
	OwnerTradeParty?: TradePartyType;
	Type?: udt.TextType;
	TypeCode?: qdt.TransportMeansTypeCodeType;
}
export interface LogisticsTransportMeansType extends _LogisticsTransportMeansType {}

interface _LogisticsTransportMovementType {
	Mode?: udt.TextType;
	ModeCode?: qdt.TransportModeCodeType;
	StageCode?: qdt.TransportMovementStageCodeType;
	UsedLogisticsTransportMeans?: LogisticsTransportMeansType;
}
export interface LogisticsTransportMovementType extends _LogisticsTransportMovementType {}

interface _MaterialGoodsCharacteristicType {
	AbsolutePresenceVolumeMeasure?: udt.MeasureType;
	AbsolutePresenceWeightMeasure?: udt.MeasureType;
	Description?: udt.TextType[];
	ProportionalConstituentPercent?: udt.PercentType;
	TypeCode?: udt.CodeType;
}
export interface MaterialGoodsCharacteristicType extends _MaterialGoodsCharacteristicType {}

interface _NoteType {
	Content?: udt.TextType[];
	ContentCode?: udt.CodeType;
	ID?: udt.IDType;
	Subject?: udt.TextType;
	SubjectCode?: udt.CodeType;
}
export interface NoteType extends _NoteType {}

interface _PackagingMarkingType {
	AutomaticDataCaptureMethodTypeCode?: qdt.AutomaticDataCaptureMethodCodeType[];
	BarcodeTypeCode?: udt.CodeType[];
	Content?: udt.TextType[];
	ContentAmount?: udt.AmountType[];
	ContentCode?: udt.CodeType[];
	ContentDateTime?: udt.DateTimeType;
	TypeCode?: qdt.PackagingMarkingCodeType[];
}
export interface PackagingMarkingType extends _PackagingMarkingType {}

interface _ProcuringProjectType {
	Description?: udt.TextType;
	ID: udt.IDType;
	Name: udt.TextType;
}
export interface ProcuringProjectType extends _ProcuringProjectType {}

interface _ProductCharacteristicConditionType {
	Name?: udt.TextType[];
	TypeCode?: udt.CodeType;
	ValueMeasure?: udt.MeasureType;
}
export interface ProductCharacteristicConditionType extends _ProductCharacteristicConditionType {}

interface _ProductCharacteristicType {
	ApplicableProductCharacteristicCondition?: ProductCharacteristicConditionType[];
	ApplicableReferencedStandard?: ReferencedStandardType;
	ContentTypeCode?: udt.CodeType;
	Description?: udt.TextType[];
	ID?: udt.IDType[];
	MeasurementMethodCode?: udt.CodeType;
	TypeCode?: udt.CodeType;
	Value?: udt.TextType[];
	ValueCode?: udt.CodeType;
	ValueDateTime?: udt.DateTimeType;
	ValueIndicator?: udt.IndicatorType;
	ValueMeasure?: udt.MeasureType;
	ValueSpecifiedBinaryFile?: SpecifiedBinaryFileType;
}
export interface ProductCharacteristicType extends _ProductCharacteristicType {}

interface _ProductClassificationType {
	ApplicableReferencedStandard?: ReferencedStandardType;
	ClassCode?: udt.CodeType;
	ClassName?: udt.TextType[];
	ClassProductCharacteristic?: ProductCharacteristicType[];
	SubClassCode?: udt.CodeType;
	SystemID?: udt.IDType;
	SystemName?: udt.TextType[];
}
export interface ProductClassificationType extends _ProductClassificationType {}

interface _RecordedStatusType {
	ChangedDateTime: udt.DateTimeType;
	ChangerName?: udt.TextType;
	ConditionCode: udt.CodeType;
}
export interface RecordedStatusType extends _RecordedStatusType {}

interface _ReferencedDocumentType {
	AttachedSpecifiedBinaryFile?: SpecifiedBinaryFileType[];
	AttachmentBinaryObject?: udt.BinaryObjectType[];
	CopyIndicator?: udt.IndicatorType;
	EffectiveSpecifiedPeriod?: SpecifiedPeriodType;
	FormattedIssueDateTime?: qdt.FormattedDateTimeType;
	GlobalID?: udt.IDType;
	Information?: udt.TextType[];
	IssuerAssignedID?: udt.IDType;
	IssuerTradeParty?: TradePartyType;
	LineID?: udt.IDType;
	Name?: udt.TextType[];
	PreviousRevisionID?: udt.IDType[];
	ReferenceTypeCode?: qdt.ReferenceCodeType;
	RevisionID?: udt.IDType;
	SectionName?: udt.TextType[];
	StatusCode?: qdt.DocumentStatusCodeType;
	TypeCode?: qdt.DocumentCodeType;
	URIID?: udt.IDType;
}
export interface ReferencedDocumentType extends _ReferencedDocumentType {}

interface _ReferencedProductType {
	BuyerAssignedID?: udt.IDType;
	Description?: udt.TextType[];
	GlobalID?: udt.IDType[];
	ID?: udt.IDType[];
	IndustryAssignedID?: udt.IDType[];
	ManufacturerAssignedID?: udt.IDType[];
	Name?: udt.TextType[];
	RelationshipTypeCode?: udt.CodeType[];
	SellerAssignedID?: udt.IDType;
	UnitQuantity?: udt.QuantityType[];
}
export interface ReferencedProductType extends _ReferencedProductType {}

interface _ReferencedStandardType {
	AgencyID?: udt.IDType;
	ElementVersionID?: udt.IDType;
	ID?: udt.IDType;
	PartID?: udt.IDType;
	URIID?: udt.IDType;
	VersionID?: udt.IDType;
}
export interface ReferencedStandardType extends _ReferencedStandardType {}

interface _ReferencePriceType {
	BasisQuantity?: udt.QuantityType[];
	ChargeAmount?: udt.AmountType;
	ComparisonMethodCode?: udt.CodeType;
	NetPriceIndicator?: udt.IndicatorType[];
}
export interface ReferencePriceType extends _ReferencePriceType {}

interface _RegisteredTaxType {
	CurrencyCode?: udt.CodeType;
	CustomsDutyIndicator?: udt.IndicatorType;
	Description?: udt.TextType[];
	ExemptionReason?: udt.TextType[];
	ExemptionReasonCode?: udt.CodeType;
	Jurisdiction?: udt.TextType[];
	TypeCode?: udt.CodeType;
}
export interface RegisteredTaxType extends _RegisteredTaxType {}

interface _ReturnableAssetInstructionsType {
	DepositValueSpecifiedAmount?: udt.AmountType[];
	DepositValueValiditySpecifiedPeriod?: SpecifiedPeriodType;
	MaterialID?: udt.IDType[];
	TermsAndConditionsDescription?: udt.TextType[];
	TermsAndConditionsDescriptionCode?: udt.CodeType;
}
export interface ReturnableAssetInstructionsType extends _ReturnableAssetInstructionsType {}

interface _SpatialDimensionType {
	Description?: udt.TextType[];
	DiameterMeasure?: qdt.LinearUnitMeasureType;
	HeightMeasure?: udt.MeasureType;
	ID?: udt.IDType;
	LengthMeasure?: udt.MeasureType;
	TypeCode?: qdt.DimensionTypeCodeType;
	ValueMeasure?: udt.MeasureType;
	WidthMeasure?: udt.MeasureType;
}
export interface SpatialDimensionType extends _SpatialDimensionType {}

interface _SpecificationQueryType {
	Content: udt.TextType;
	ContractualLanguageCode?: udt.CodeType;
	ID: udt.IDType;
	TypeCode?: udt.CodeType;
}
export interface SpecificationQueryType extends _SpecificationQueryType {}

interface _SpecificationResponseType {
	Content: udt.TextType;
	ContractualLanguageCode?: udt.CodeType;
	ID: udt.IDType;
	QueryID?: udt.IDType;
	TypeCode?: udt.CodeType;
}
export interface SpecificationResponseType extends _SpecificationResponseType {}

interface _SpecifiedBinaryFileType {
	Access?: udt.TextType[];
	AccessAvailabilitySpecifiedPeriod?: SpecifiedPeriodType;
	AuthorName?: udt.TextType[];
	CharacterSetCode?: udt.CodeType;
	Description?: udt.TextType[];
	EncodingCode?: udt.CodeType;
	FileName?: udt.TextType;
	ID?: udt.IDType[];
	IncludedBinaryObject?: udt.BinaryObjectType[];
	MIMECode?: udt.CodeType;
	SizeMeasure?: udt.MeasureType;
	Title?: udt.TextType[];
	URIID?: udt.IDType;
	VersionID?: udt.IDType;
}
export interface SpecifiedBinaryFileType extends _SpecifiedBinaryFileType {}

interface _SpecifiedMarketplaceType {
	ID?: udt.IDType;
	Name?: udt.TextType;
	OrderingAvailablePeriod?: AvailablePeriodType[];
	SalesMethodCode?: udt.CodeType;
	VirtualIndicator?: udt.IndicatorType;
	WebsiteURIID?: udt.IDType[];
}
export interface SpecifiedMarketplaceType extends _SpecifiedMarketplaceType {}

interface _SpecifiedPeriodType {
	CompleteDateTime?: udt.DateTimeType;
	ContinuousIndicator?: udt.IndicatorType;
	Description?: udt.TextType[];
	DurationMeasure?: udt.MeasureType[];
	EndDateTime?: udt.DateTimeType;
	ID?: udt.IDType;
	InclusiveIndicator?: udt.IndicatorType;
	Name?: udt.TextType[];
	OpenIndicator?: udt.IndicatorType;
	PurposeCode?: udt.CodeType;
	SeasonCode?: udt.CodeType;
	SequenceNumeric?: udt.NumericType;
	StartDateFlexibilityCode?: udt.CodeType;
	StartDateTime?: udt.DateTimeType;
}
export interface SpecifiedPeriodType extends _SpecifiedPeriodType {}

interface _SubordinateLineTradeAgreementType {
	AdditionalReferencedDocument?: ReferencedDocumentType[];
	BuyerOrderReferencedDocument?: ReferencedDocumentType;
	GrossPriceProductTradePrice?: TradePriceType;
	NetPriceProductTradePrice?: TradePriceType;
	SellerOrderReferencedDocument?: ReferencedDocumentType;
}
export interface SubordinateLineTradeAgreementType extends _SubordinateLineTradeAgreementType {}

interface _SubordinateLineTradeDeliveryType {
	IncludedSupplyChainPackaging?: SupplyChainPackagingType[];
	PackageQuantity?: udt.QuantityType;
	PerPackageUnitQuantity?: udt.QuantityType;
	ProductUnitQuantity?: udt.QuantityType;
}
export interface SubordinateLineTradeDeliveryType extends _SubordinateLineTradeDeliveryType {}

interface _SubordinateLineTradeSettlementType {
	ApplicableTradeTax?: TradeTaxType;
}
export interface SubordinateLineTradeSettlementType extends _SubordinateLineTradeSettlementType {}

interface _SubordinateTradeLineItemType {
	ApplicableTradeProduct?: TradeProductType[];
	ID?: udt.IDType[];
	SpecifiedReferencedProduct?: ReferencedProductType;
	SpecifiedSubordinateLineTradeAgreement?: SubordinateLineTradeAgreementType;
	SpecifiedSubordinateLineTradeDelivery?: SubordinateLineTradeDeliveryType;
	SpecifiedSubordinateLineTradeSettlement?: SubordinateLineTradeSettlementType;
}
export interface SubordinateTradeLineItemType extends _SubordinateTradeLineItemType {}

interface _SupplyChainConsignmentItemType {
	DeclaredValueForCustomsAmount?: udt.AmountType;
	DeclaredValueForStatisticsAmount?: udt.AmountType;
	GrossWeightMeasure?: qdt.WeightUnitMeasureType;
	InvoiceAmount?: udt.AmountType[];
	NatureIdentificationTransportCargo?: TransportCargoType;
	NetWeightMeasure?: udt.MeasureType;
	TariffQuantity?: udt.QuantityType;
	TypeCode?: qdt.GoodsTypeCodeType;
	TypeExtensionCode?: qdt.GoodsTypeExtensionCodeType;
}
export interface SupplyChainConsignmentItemType extends _SupplyChainConsignmentItemType {}

interface _SupplyChainConsignmentType {
	AssociatedInvoiceAmount?: udt.AmountType[];
	AssociatedReferencedDocument?: ReferencedDocumentType[];
	CarrierTradeParty?: TradePartyType;
	ConsigneeTradeParty?: TradePartyType;
	ConsignorTradeParty?: TradePartyType;
	CustomsExportAgentTradeParty?: TradePartyType;
	CustomsImportAgentTradeParty?: TradePartyType;
	DeclaredValueForCustomsAmount?: udt.AmountType;
	DeliveryTradeParty?: TradePartyType;
	FreightForwarderTradeParty?: TradePartyType;
	GrossVolumeMeasure?: qdt.VolumeUnitMeasureType[];
	GrossWeightMeasure?: qdt.WeightUnitMeasureType[];
	GroupingCentreTradeParty?: TradePartyType[];
	IncludedSupplyChainConsignmentItem?: SupplyChainConsignmentItemType[];
	InsurancePremiumAmount?: udt.AmountType;
	NetWeightMeasure?: udt.MeasureType[];
	PackageQuantity?: udt.QuantityType;
	SpecifiedLogisticsTransportMovement?: LogisticsTransportMovementType[];
	TotalChargeAmount?: udt.AmountType;
	TransportContractReferencedDocument?: ReferencedDocumentType;
	UtilizedLogisticsTransportEquipment?: LogisticsTransportEquipmentType[];
}
export interface SupplyChainConsignmentType extends _SupplyChainConsignmentType {}

interface _SupplyChainEventType {
	Description?: udt.TextType[];
	DescriptionBinaryObject?: udt.BinaryObjectType[];
	EarliestOccurrenceDateTime?: udt.DateTimeType;
	ID?: udt.IDType;
	LatestOccurrenceDateTime?: udt.DateTimeType;
	OccurrenceDateTime?: udt.DateTimeType;
	OccurrenceLogisticsLocation?: LogisticsLocationType;
	OccurrenceSpecifiedPeriod?: SpecifiedPeriodType;
	TypeCode?: udt.CodeType;
	UnitQuantity?: udt.QuantityType;
}
export interface SupplyChainEventType extends _SupplyChainEventType {}

interface _SupplyChainPackagingType {
	ApplicableDisposalInstructions?: DisposalInstructionsType[];
	ApplicableMaterialGoodsCharacteristic?: MaterialGoodsCharacteristicType[];
	ApplicableReturnableAssetInstructions?: ReturnableAssetInstructionsType[];
	ConditionCode?: udt.CodeType;
	ContentLayerQuantity?: udt.QuantityType;
	CustomerFacingTotalUnitQuantity?: udt.QuantityType;
	Description?: udt.TextType[];
	DisposalMethodCode?: udt.CodeType[];
	LayerTotalUnitQuantity?: udt.QuantityType;
	LinearSpatialDimension?: SpatialDimensionType;
	MaximumLinearSpatialDimension?: SpatialDimensionType;
	MaximumStackabilityQuantity?: udt.QuantityType;
	MaximumStackabilityWeightMeasure?: udt.MeasureType;
	MinimumLinearSpatialDimension?: SpatialDimensionType;
	SpecifiedPackagingMarking?: PackagingMarkingType[];
	Type?: udt.TextType;
	TypeCode?: qdt.PackageTypeCodeType;
	WeightMeasure?: udt.MeasureType[];
}
export interface SupplyChainPackagingType extends _SupplyChainPackagingType {}

interface _SupplyChainTradeLineItemType {
	AssociatedDocumentLineDocument: DocumentLineDocumentType;
	DescriptionCode?: udt.CodeType;
	IncludedSubordinateTradeLineItem?: SubordinateTradeLineItemType[];
	SpecifiedLineTradeAgreement?: LineTradeAgreementType;
	SpecifiedLineTradeDelivery?: LineTradeDeliveryType;
	SpecifiedLineTradeSettlement: LineTradeSettlementType;
	SpecifiedTradeProduct?: TradeProductType;
}
export interface SupplyChainTradeLineItemType extends _SupplyChainTradeLineItemType {}

interface _SupplyChainTradeTransactionType {
	ApplicableHeaderTradeAgreement: HeaderTradeAgreementType;
	ApplicableHeaderTradeDelivery: HeaderTradeDeliveryType;
	ApplicableHeaderTradeSettlement: HeaderTradeSettlementType;
	IncludedSupplyChainTradeLineItem?: SupplyChainTradeLineItemType[];
}
export interface SupplyChainTradeTransactionType extends _SupplyChainTradeTransactionType {}

interface _TaxRegistrationType {
	AssociatedRegisteredTax?: RegisteredTaxType;
	ID?: udt.IDType;
}
export interface TaxRegistrationType extends _TaxRegistrationType {}

interface _TradeAccountingAccountType {
	AmountTypeCode?: qdt.AccountingAmountTypeCodeType;
	CostReferenceDimensionPattern?: udt.TextType;
	ID: udt.IDType;
	Name?: udt.TextType;
	SetTriggerCode?: qdt.AccountingDocumentCodeType;
	TypeCode?: qdt.AccountingAccountTypeCodeType;
}
export interface TradeAccountingAccountType extends _TradeAccountingAccountType {}

interface _TradeAddressType {
	AdditionalStreetName?: udt.TextType;
	AttentionOf?: udt.TextType;
	BuildingName?: udt.TextType;
	BuildingNumber?: udt.TextType;
	CareOf?: udt.TextType;
	CityName?: udt.TextType;
	CitySubDivisionName?: udt.TextType;
	CountryID?: qdt.CountryIDType;
	CountryName?: udt.TextType[];
	CountrySubDivisionID?: udt.IDType;
	CountrySubDivisionName?: udt.TextType[];
	DepartmentName?: udt.TextType;
	ID?: udt.IDType;
	LineFive?: udt.TextType;
	LineFour?: udt.TextType;
	LineOne?: udt.TextType;
	LineThree?: udt.TextType;
	LineTwo?: udt.TextType;
	PostcodeCode?: udt.CodeType;
	PostOfficeBox?: udt.TextType;
	StreetName?: udt.TextType;
}
export interface TradeAddressType extends _TradeAddressType {}

interface _TradeAllowanceChargeType {
	ActualAmount?: udt.AmountType[];
	ActualTradeCurrencyExchange?: TradeCurrencyExchangeType;
	BasisAmount?: udt.AmountType;
	BasisQuantity?: udt.QuantityType;
	CalculationPercent?: udt.PercentType;
	CategoryTradeTax?: TradeTaxType[];
	ChargeIndicator?: udt.IndicatorType;
	ID?: udt.IDType;
	PrepaidIndicator?: udt.IndicatorType;
	Reason?: udt.TextType;
	ReasonCode?: qdt.AllowanceChargeReasonCodeType;
	SequenceNumeric?: udt.NumericType;
	TypeCode?: qdt.AllowanceChargeIdentificationCodeType;
	UnitBasisAmount?: udt.AmountType;
}
export interface TradeAllowanceChargeType extends _TradeAllowanceChargeType {}

interface _TradeContactType {
	DepartmentName?: udt.TextType;
	DirectTelephoneUniversalCommunication?: UniversalCommunicationType;
	EmailURIUniversalCommunication?: UniversalCommunicationType;
	FaxUniversalCommunication?: UniversalCommunicationType;
	ID?: udt.IDType;
	InstantMessagingUniversalCommunication?: UniversalCommunicationType;
	JobTitle?: udt.TextType;
	MobileTelephoneUniversalCommunication?: UniversalCommunicationType;
	PersonID?: udt.IDType[];
	PersonName?: udt.TextType;
	Responsibility?: udt.TextType;
	SpecifiedContactPerson?: ContactPersonType;
	SpecifiedNote?: NoteType[];
	TelephoneUniversalCommunication?: UniversalCommunicationType;
	TelexUniversalCommunication?: UniversalCommunicationType;
	TypeCode?: qdt.ContactTypeCodeType;
	VOIPUniversalCommunication?: UniversalCommunicationType;
}
export interface TradeContactType extends _TradeContactType {}

interface _TradeCountrySubDivisionType {
	ID?: udt.IDType;
	Name?: udt.TextType[];
}
export interface TradeCountrySubDivisionType extends _TradeCountrySubDivisionType {}

interface _TradeCountryType {
	ID?: qdt.CountryIDType;
	Name?: udt.TextType[];
	SubordinateTradeCountrySubDivision?: TradeCountrySubDivisionType[];
}
export interface TradeCountryType extends _TradeCountryType {}

interface _TradeCurrencyExchangeType {
	AssociatedReferencedDocument?: ReferencedDocumentType[];
	ConversionRate: udt.RateType;
	ConversionRateDateTime?: udt.DateTimeType;
	MarketID?: udt.IDType;
	SourceCurrencyCode: qdt.CurrencyCodeType;
	SourceUnitBasisNumeric?: udt.NumericType;
	TargetCurrencyCode: qdt.CurrencyCodeType;
	TargetUnitBaseNumeric?: udt.NumericType;
}
export interface TradeCurrencyExchangeType extends _TradeCurrencyExchangeType {}

interface _TradeDeliveryTermsType {
	DeliveryTypeCode?: qdt.DeliveryTermsCodeType;
	Description?: udt.TextType[];
	RelevantTradeLocation?: TradeLocationType;
}
export interface TradeDeliveryTermsType extends _TradeDeliveryTermsType {}

interface _TradeLocationType {
	CountryID?: qdt.CountryIDType;
	CountryName?: udt.TextType;
	ID?: udt.IDType;
	Name?: udt.TextType;
}
export interface TradeLocationType extends _TradeLocationType {}

interface _TradePartyType {
	DefinedTradeContact?: TradeContactType[];
	Description?: udt.TextType[];
	EndPointURIUniversalCommunication?: UniversalCommunicationType;
	GlobalID?: udt.IDType[];
	ID?: udt.IDType[];
	LogoAssociatedSpecifiedBinaryFile?: SpecifiedBinaryFileType[];
	Name?: udt.TextType;
	PostalTradeAddress?: TradeAddressType;
	RoleCode?: qdt.PartyRoleCodeType[];
	SpecifiedLegalOrganization?: LegalOrganizationType;
	SpecifiedTaxRegistration?: TaxRegistrationType[];
	URIUniversalCommunication?: UniversalCommunicationType[];
}
export interface TradePartyType extends _TradePartyType {}

interface _TradePaymentDiscountTermsType {
	ActualDiscountAmount?: udt.AmountType;
	BasisAmount?: udt.AmountType;
	BasisDateTime?: udt.DateTimeType;
	BasisPeriodMeasure?: udt.MeasureType;
	CalculationPercent?: udt.PercentType;
}
export interface TradePaymentDiscountTermsType extends _TradePaymentDiscountTermsType {}

interface _TradePaymentPenaltyTermsType {
	ActualPenaltyAmount?: udt.AmountType;
	BasisAmount?: udt.AmountType;
	BasisDateTime?: udt.DateTimeType;
	BasisPeriodMeasure?: udt.MeasureType;
	CalculationPercent?: udt.PercentType;
}
export interface TradePaymentPenaltyTermsType extends _TradePaymentPenaltyTermsType {}

interface _TradePaymentTermsType {
	ApplicableTradePaymentDiscountTerms?: TradePaymentDiscountTermsType;
	ApplicableTradePaymentPenaltyTerms?: TradePaymentPenaltyTermsType;
	Description?: udt.TextType[];
	DirectDebitMandateID?: udt.IDType[];
	DueDateDateTime?: udt.DateTimeType;
	FromEventCode?: qdt.PaymentTermsEventTimeReferenceCodeType;
	ID?: qdt.PaymentTermsIDType;
	InstructionTypeCode?: udt.CodeType;
	PartialPaymentAmount?: udt.AmountType[];
	PartialPaymentPercent?: udt.PercentType;
	PayeeTradeParty?: TradePartyType[];
	PaymentMeansID?: udt.IDType[];
	SettlementPeriodMeasure?: udt.MeasureType;
	TypeCode?: qdt.PaymentTermsTypeCodeType;
}
export interface TradePaymentTermsType extends _TradePaymentTermsType {}

interface _TradePriceType {
	AppliedTradeAllowanceCharge?: TradeAllowanceChargeType[];
	AssociatedReferencedDocument?: ReferencedDocumentType[];
	BasisQuantity?: udt.QuantityType;
	ChangeReason?: udt.TextType[];
	ChargeAmount: udt.AmountType[];
	DeliveryTradeLocation?: TradeLocationType[];
	IncludedTradeTax?: TradeTaxType[];
	MaximumQuantity?: udt.QuantityType;
	MinimumQuantity?: udt.QuantityType;
	OrderUnitConversionFactorNumeric?: udt.NumericType;
	TradeComparisonReferencePrice?: ReferencePriceType[];
	TypeCode?: qdt.PriceTypeCodeType;
	ValiditySpecifiedPeriod?: SpecifiedPeriodType;
}
export interface TradePriceType extends _TradePriceType {}

interface _TradeProductInstanceType {
	ApplicableMaterialGoodsCharacteristic?: MaterialGoodsCharacteristicType[];
	ApplicableProductCharacteristic?: ProductCharacteristicType[];
	BatchID?: udt.IDType;
	BestBeforeDateTime?: udt.DateTimeType;
	ExpiryDateTime?: udt.DateTimeType;
	GlobalSerialID?: udt.IDType;
	KanbanID?: udt.IDType;
	PackagingSupplyChainEvent?: SupplyChainEventType;
	ProductionSupplyChainEvent?: SupplyChainEventType;
	RegistrationID?: udt.IDType[];
	SellByDateTime?: udt.DateTimeType;
	SerialID?: udt.IDType[];
	SupplierAssignedSerialID?: udt.IDType;
}
export interface TradeProductInstanceType extends _TradeProductInstanceType {}

interface _TradeProductType {
	AdditionalReferenceReferencedDocument?: ReferencedDocumentType[];
	ApplicableMaterialGoodsCharacteristic?: MaterialGoodsCharacteristicType[];
	ApplicableProductCharacteristic?: ProductCharacteristicType[];
	AreaDensityMeasure?: udt.MeasureType;
	BrandName?: udt.TextType;
	BrandOwnerTradeParty?: TradePartyType;
	BuyerAssignedID?: udt.IDType;
	CertificationEvidenceReferenceReferencedDocument?: ReferencedDocumentType[];
	ColourCode?: udt.CodeType;
	ColourDescription?: udt.TextType[];
	Description?: udt.TextType;
	DesignatedProductClassification?: ProductClassificationType[];
	Designation?: udt.TextType[];
	DrainedNetWeightMeasure?: udt.MeasureType;
	EndItemName?: udt.TextType[];
	EndItemTypeCode?: udt.CodeType[];
	FormattedCancellationAnnouncedLaunchDateTime?: qdt.FormattedDateTimeType;
	FormattedLatestProductDataChangeDateTime?: qdt.FormattedDateTimeType;
	GlobalID?: udt.IDType;
	GrossWeightMeasure?: udt.MeasureType;
	ID?: udt.IDType;
	IncludedReferencedProduct?: ReferencedProductType[];
	IndividualTradeProductInstance?: TradeProductInstanceType[];
	InformationNote?: NoteType[];
	InspectionReferenceReferencedDocument?: ReferencedDocumentType[];
	LegalRightsOwnerTradeParty?: TradePartyType;
	LinearSpatialDimension?: SpatialDimensionType;
	ManufacturerAssignedID?: udt.IDType;
	ManufacturerTradeParty?: TradePartyType;
	MaximumLinearSpatialDimension?: SpatialDimensionType;
	MinimumLinearSpatialDimension?: SpatialDimensionType;
	MSDSReferenceReferencedDocument?: ReferencedDocumentType;
	Name?: udt.TextType[];
	NetWeightMeasure?: udt.MeasureType;
	OriginTradeCountry?: TradeCountryType;
	PresentationSpecifiedBinaryFile?: SpecifiedBinaryFileType[];
	ProductGroupID?: udt.IDType[];
	SellerAssignedID?: udt.IDType;
	SubBrandName?: udt.TextType;
	TradeName?: udt.TextType;
	TypeCode?: udt.CodeType;
	UseDescription?: udt.TextType[];
	VariableMeasureIndicator?: udt.IndicatorType;
}
export interface TradeProductType extends _TradeProductType {}

interface _TradeSettlementFinancialCardType {
	CardholderName?: udt.TextType;
	CreditAvailableAmount?: udt.AmountType[];
	CreditLimitAmount?: udt.AmountType[];
	Description?: udt.TextType;
	ExpiryDate?: udt.DateType;
	ID?: udt.IDType;
	InterestRatePercent?: udt.PercentType;
	IssuingCompanyName?: udt.TextType;
	MicrochipIndicator?: udt.IndicatorType;
	TypeCode?: udt.CodeType;
	ValidFromDateTime?: udt.DateTimeType;
	VerificationNumeric?: udt.NumericType;
}
export interface TradeSettlementFinancialCardType extends _TradeSettlementFinancialCardType {}

interface _TradeSettlementHeaderMonetarySummationType {
	AllowanceTotalAmount?: udt.AmountType[];
	ChargeTotalAmount?: udt.AmountType[];
	DuePayableAmount?: udt.AmountType[];
	GrandTotalAmount?: udt.AmountType[];
	GrossLineTotalAmount?: udt.AmountType[];
	InformationAmount?: udt.AmountType[];
	LineTotalAmount?: udt.AmountType[];
	NetIncludingTaxesLineTotalAmount?: udt.AmountType[];
	NetLineTotalAmount?: udt.AmountType[];
	ProductValueExcludingTobaccoTaxInformationAmount?: udt.AmountType[];
	RetailValueExcludingTaxInformationAmount?: udt.AmountType[];
	RoundingAmount?: udt.AmountType[];
	TaxBasisTotalAmount?: udt.AmountType[];
	TaxTotalAmount?: udt.AmountType[];
	TotalAllowanceChargeAmount?: udt.AmountType[];
	TotalDepositFeeInformationAmount?: udt.AmountType[];
	TotalDiscountAmount?: udt.AmountType[];
	TotalPrepaidAmount?: udt.AmountType[];
	TotalRetailValueInformationAmount?: udt.AmountType[];
}
export interface TradeSettlementHeaderMonetarySummationType
	extends _TradeSettlementHeaderMonetarySummationType {}

interface _TradeSettlementLineMonetarySummationType {
	AllowanceTotalAmount?: udt.AmountType[];
	ChargeTotalAmount?: udt.AmountType[];
	GrandTotalAmount?: udt.AmountType[];
	GrossLineTotalAmount?: udt.AmountType[];
	InformationAmount?: udt.AmountType[];
	LineTotalAmount?: udt.AmountType[];
	NetIncludingTaxesLineTotalAmount?: udt.AmountType[];
	NetLineTotalAmount?: udt.AmountType[];
	ProductWeightLossInformationAmount?: udt.AmountType[];
	TaxBasisTotalAmount?: udt.AmountType[];
	TaxTotalAmount?: udt.AmountType[];
	TotalAllowanceChargeAmount?: udt.AmountType[];
	TotalRetailValueInformationAmount?: udt.AmountType[];
}
export interface TradeSettlementLineMonetarySummationType
	extends _TradeSettlementLineMonetarySummationType {}

interface _TradeSettlementPaymentMeansType {
	ApplicableTradeSettlementFinancialCard?: TradeSettlementFinancialCardType;
	GuaranteeMethodCode?: qdt.PaymentGuaranteeMeansCodeType;
	ID?: udt.IDType[];
	Information?: udt.TextType[];
	PayeePartyCreditorFinancialAccount?: CreditorFinancialAccountType;
	PayeeSpecifiedCreditorFinancialInstitution?: CreditorFinancialInstitutionType;
	PayerPartyDebtorFinancialAccount?: DebtorFinancialAccountType;
	PayerSpecifiedDebtorFinancialInstitution?: DebtorFinancialInstitutionType;
	PaymentChannelCode?: qdt.PaymentMeansChannelCodeType;
	PaymentMethodCode?: udt.CodeType;
	TypeCode?: qdt.PaymentMeansCodeType;
}
export interface TradeSettlementPaymentMeansType extends _TradeSettlementPaymentMeansType {}

interface _TradeTaxType {
	AllowanceChargeBasisAmount?: udt.AmountType[];
	BasisAmount?: udt.AmountType[];
	BasisQuantity?: udt.QuantityType;
	BuyerDeductibleTaxSpecifiedTradeAccountingAccount?: TradeAccountingAccountType;
	BuyerNonDeductibleTaxSpecifiedTradeAccountingAccount?: TradeAccountingAccountType;
	BuyerRepayableTaxSpecifiedTradeAccountingAccount?: TradeAccountingAccountType;
	CalculatedAmount?: udt.AmountType[];
	CalculatedRate?: udt.RateType;
	CalculationSequenceNumeric?: udt.NumericType;
	CategoryCode?: qdt.TaxCategoryCodeType;
	CategoryName?: udt.TextType[];
	CurrencyCode?: qdt.CurrencyCodeType;
	CustomsDutyIndicator?: udt.IndicatorType;
	DueDateTypeCode?: qdt.TimeReferenceCodeType;
	ExemptionReason?: udt.TextType;
	ExemptionReasonCode?: udt.CodeType;
	InformationAmount?: udt.AmountType[];
	Jurisdiction?: udt.TextType[];
	LineTotalBasisAmount?: udt.AmountType[];
	PlaceApplicableTradeLocation?: TradeLocationType[];
	RateApplicablePercent?: udt.PercentType;
	SellerPayableTaxSpecifiedTradeAccountingAccount?: TradeAccountingAccountType;
	SellerRefundableTaxSpecifiedTradeAccountingAccount?: TradeAccountingAccountType;
	ServiceSupplyTradeCountry?: TradeCountryType;
	SpecifiedTradeAccountingAccount?: TradeAccountingAccountType[];
	TaxBasisAllowanceRate?: udt.RateType;
	TaxPointDate?: udt.DateType;
	Type?: udt.TextType;
	TypeCode?: qdt.TaxTypeCodeType;
	UnitBasisAmount?: udt.AmountType[];
}
export interface TradeTaxType extends _TradeTaxType {}

interface _TransportCargoType {
	Identification?: udt.TextType;
	OperationalCategoryCode?: qdt.CargoOperationalCategoryCodeType;
	StatisticalClassificationCode?: qdt.CargoCommodityCategoryCodeType;
	TypeCode?: qdt.CargoCategoryCodeType;
}
export interface TransportCargoType extends _TransportCargoType {}

interface _UniversalCommunicationType {
	ChannelCode?: qdt.CommunicationChannelCodeType;
	CompleteNumber?: udt.TextType;
	URIID?: udt.IDType;
}
export interface UniversalCommunicationType extends _UniversalCommunicationType {}

interface _ValuationBreakdownStatementType {
	ChangedRecordedStatus?: RecordedStatusType[];
	Comment?: udt.TextType[];
	ContractualLanguageCode?: udt.CodeType;
	CreationDateTime: udt.DateTimeType;
	CreationSpecifiedBinaryFile?: SpecifiedBinaryFileType[];
	DefaultCurrencyCode: qdt.CurrencyCodeType;
	DefaultLanguageCode: udt.CodeType;
	Description?: udt.TextType[];
	ID: udt.IDType;
	ItemBasicWorkItem?: BasicWorkItemType[];
	ItemGroupedWorkItem?: GroupedWorkItemType[];
	MeasurementMethodID?: udt.IDType[];
	Name: udt.TextType;
	PriceListID?: udt.IDType;
	ReaderSpecifiedBinaryFile?: SpecifiedBinaryFileType[];
	ReferencedSpecifiedBinaryFile?: SpecifiedBinaryFileType[];
	RequestedActionCode?: udt.CodeType[];
	TotalCalculatedPrice?: CalculatedPriceType[];
	TypeCode?: udt.CodeType[];
}
export interface ValuationBreakdownStatementType extends _ValuationBreakdownStatementType {}

interface _WorkItemComplexDescriptionType {
	Abstract?: udt.TextType[];
	Content?: udt.TextType[];
	ContractualLanguageCode?: udt.CodeType;
	RequestingSpecificationQuery?: SpecificationQueryType[];
	RespondingSpecificationResponse?: SpecificationResponseType[];
	SubsetWorkItemComplexDescription?: WorkItemComplexDescriptionType;
}
export interface WorkItemComplexDescriptionType extends _WorkItemComplexDescriptionType {}

interface _WorkItemDimensionType {
	ComponentWorkItemDimension?: WorkItemDimensionType[];
	ContractualLanguageCode?: udt.CodeType;
	Description?: udt.TextType;
	ID?: udt.IDType;
	TypeCode: udt.CodeType;
	ValueMeasure: udt.MeasureType;
}
export interface WorkItemDimensionType extends _WorkItemDimensionType {}

interface _WorkItemQuantityAnalysisType {
	ActualQuantity?: udt.QuantityType;
	ActualQuantityPercent?: udt.PercentType;
	ActualQuantityWorkItemDimension?: WorkItemDimensionType[];
	AlternativeClassificationCode?: udt.CodeType[];
	BreakdownWorkItemQuantityAnalysis?: WorkItemQuantityAnalysisType[];
	ChangedRecordedStatus?: RecordedStatusType[];
	ContractualLanguageCode?: udt.CodeType;
	Description?: udt.TextType;
	ID: udt.IDType;
	PrimaryClassificationCode?: udt.CodeType[];
	StatusCode?: udt.CodeType;
	TypeCode?: udt.CodeType;
}
export interface WorkItemQuantityAnalysisType extends _WorkItemQuantityAnalysisType {}

export interface document {}
