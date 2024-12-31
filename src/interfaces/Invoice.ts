import { Buyer } from "./Buyer";
import { Seller } from "./Seller";

export interface Invoice {
	documentNumber: string;
	issueDate: Date;
	buyer: Buyer;
	seller: Seller;
	type: InvoiceType;

	document: {
		title: string;
		message: string;
	};
}

// https://www.xrepository.de/details/urn:xoev-de:kosit:codeliste:untdid.1001_1
enum InvoiceType {
	COMMERCIAL_INVOICE = 380,
	CREDIT_NOTE = 381
}
