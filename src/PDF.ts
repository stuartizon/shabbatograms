import * as pdfkit from 'pdfkit';
import { TextItem } from './Entities';

const lightBlue = "#ADD4CB";

export function writePDF(items: TextItem[], output: NodeJS.WritableStream) {
    const doc = new pdfkit({ size: [600, 600] });
    doc.pipe(output);

    // Draw the blue circle
    doc.circle(300, 300, 250)
        .fill(lightBlue);

    // Write the message
    doc.font('fonts/Georgia.ttf')
        .fontSize(24)
        .fillColor('black')
        .lineGap(12);
    printText(doc, items);

    doc.save().end();
}

function printText(doc: PDFKit.PDFDocument, items: TextItem[]) {
    const [{ text, ...options }, ...tail] = items;
    doc.text(text, 100, 140, { ...options, width: 400 });

    tail.forEach(i => {
        const { text, ...options } = i;
        doc.text(text, { ...options, width: 400 });
    });
}