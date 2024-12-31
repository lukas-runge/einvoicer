export interface EInvoice {
	documentNumber: string;
	issueDate: Date;
	buyer: Buyer;
	seller: Seller;
	type: EInvoiceType;

	document: {
		title: string;
		message: string;
	};
}

// https://www.xrepository.de/details/urn:xoev-de:kosit:codeliste:untdid.1001_1
enum EInvoiceType {
	COMMERCIAL_INVOICE = 380,
	CREDIT_NOTE = 381
}
