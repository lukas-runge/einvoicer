import { Buyer } from "./Buyer";
import { Item } from "./Item";
import { Seller } from "./Seller";
import { Skonto } from "./Skonto";

export interface Invoice {
	title: string;
	serviceMesage: string;
	paymentRequestMessage: string;
	skonto?: Skonto;
	thankYouMessage: string;
	type: InvoiceType;
	documentNumber: string;
	issueDate: Date;
	daysUntilDue: number;
	buyer: Buyer;
	seller: Seller;
	items: Item[];
}

// https://www.xrepository.de/details/urn:xoev-de:kosit:codeliste:untdid.1001_1
enum InvoiceType {
	// Rechnung
	COMMERCIAL_INVOICE = 380,
	// Gutschrift
	CREDIT_NOTE = 381
	// Zahlungsbeleg
	// Abrechnungsbeleg
}
