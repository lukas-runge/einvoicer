import { AFRelationship, PDFDocument } from "pdf-lib";

const FILENAME = "factur-x.xml";
const MIME_TYPE = "application/xml";

export async function embedXMLIntoPDF(xml: string, pdf: Buffer) {
	const pdfDoc = await PDFDocument.load(pdf);
	await pdfDoc.attach(Buffer.from(xml, "utf-8"), FILENAME, {
		mimeType: MIME_TYPE,
		afRelationship: AFRelationship.Alternative,
		creationDate: new Date(),
		modificationDate: new Date(),
		description: "Factur-X invoice data"
	});
	return Buffer.from(await pdfDoc.save());
}
