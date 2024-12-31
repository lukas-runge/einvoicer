import fs from "fs";

const sources = {
	TextSubjectCodeQualifier:
		"https://www.xrepository.de/api/xrepository/urn:xoev-de:kosit:codeliste:untdid.4451_1/download/UNTDID_4451_1.json"
};

interface Spec {
	spalten: {
		spaltennameLang: string;
		spaltennameTechnisch: string;
		datentyp: string;
		codeSpalte: boolean;
		verwendung: string;
		empfohleneCodeSpalte: boolean;
	};
	daten: string[][];
}

async function main() {
	for (const [key, value] of Object.entries(sources)) {
		const json = (await fetch(value).then((response) => response.json())) as Spec;

		// transform daten to object based on index and spaltennameTechnisch
		const data = json.daten.map((row) => {
			const obj = {};
			row.forEach((value, index) => {
				obj[json.spalten[index].spaltennameTechnisch] = value;
			});
			return obj;
		});

		const enumString = `enum ${key} {\n${data
			.map((row) => {
				const enumName = row["name"];
				const transformedName = enumName.replace(/[^a-zA-Z0-9]/g, "_").toUpperCase();
				return `    /** ${row["description"]} */\n    ${transformedName} = "${row["code"]}",`;
			})
			.join("\n")}\n}`;

		fs.writeFileSync(`${key}.ts`, enumString);
	}
}
main();
