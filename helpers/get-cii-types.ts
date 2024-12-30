import { pathExists, readFile, remove, writeFile } from "fs-extra";
import { exec } from "node-exec-promise";
import recursiveReadDir from "recursive-readdir";

async function before() {
	console.log("Cleaning up...");
	if (await pathExists("xmlns")) await remove("xmlns");
}

async function after() {
	console.log("Done.");
}

function editTypes(source: string) {
	// remove every BaseType Interface
	// interface BaseType {
	//
	// }
	source = source.replace(/interface BaseType {[\s\S]*?}\n/g, "");

	// remove every use of BaseType
	// like for example:
	// interface _CrossIndustryInvoiceType extends BaseType {
	// should be replaced with:
	// interface _CrossIndustryInvoiceType {
	source = source.replace(/extends BaseType /g, "");

	// remove every line where var is exported
	// like for example:
	// export var document: document;
	// should be removed
	source = source.replace(/export var .*: .*;\n/g, "");

	// replace lines that contain this
	// export interface CrossIndustryInvoiceType extends _CrossIndustryInvoiceType { constructor: { new(): CrossIndustryInvoiceType }; }
	// with this
	// export interface CrossIndustryInvoiceType extends _CrossIndustryInvoiceType {}
	source = source.replace(/ constructor: { new\(\): .* };/g, "");

	return source;
}

async function main() {
	await before();

	console.log("Fetching CII types...");
	const xsdPath =
		"https://raw.githubusercontent.com/ConnectingEurope/eInvoicing-EN16931/refs/heads/master/cii/schema/D16B%20SCRDM%20\\(Subset\\)/coupled%20clm/CII/uncefact/data/standard/CrossIndustryInvoice_100pD16B.xsd";
	await exec(`npx cxsd ${xsdPath}`);

	// remove every *.js file in "xmlns" folder
	console.log("Removing unnecessary files...");
	const jsFiles = await recursiveReadDir("xmlns", ["*.d.ts"]);
	for (const jsFile of jsFiles) await remove(jsFile);

	// mutate every *.d.ts file in "xmlns" folder
	console.log("Editing types...");
	const dtsFiles = await recursiveReadDir("xmlns", ["*.js"]);
	for (const dtsFile of dtsFiles) {
		// read file content as string
		let fileString = await readFile(dtsFile, "utf8");

		// mutate fileString
		fileString = editTypes(fileString);

		// write fileString back to file
		await writeFile(dtsFile, fileString, "utf8");
	}

	await after();
}

main();
