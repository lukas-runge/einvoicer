export interface Address {
	lineOne: string;
	lineTwo: string;
	city: string;
	postalCode: string;

	// see https://www.xrepository.de/details/urn:xoev-de:kosit:codeliste:country-codes
	countryCode: string;
}
