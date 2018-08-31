import * as pdfkit from 'pdfkit';

const lightBlue = "#ADD4CB";

export function writePDF(text: string, output: NodeJS.WritableStream) {
    const doc = new pdfkit({ size: [600, 600] });
    doc.pipe(output);
    doc.circle(300, 300, 250)
        .fill(lightBlue)
        .fontSize(24)
        .fillColor('black')
        .text(text, 100, 140, { width: 400, align: 'center', lineGap: 10 })
        .save()
        .end();
}