import { Address } from "./Address";

export interface Seller {
	name: string;
	address: Address;
	taxId: string;
	vatId: string;
}
