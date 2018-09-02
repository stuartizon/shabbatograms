import * as express from 'express';
import { urlencoded } from 'body-parser';
import { join } from 'path';
import { convertRequestToText } from './Conversions';
import { writePDF } from './PDF';

export function Server(port: number) {
    const app = express();
    app.use(urlencoded({ extended: false }));

    app.post('/send', (req, res) => {
        const text = convertRequestToText(req.body);
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename=shabbatogram.pdf')
        writePDF(text, res);
    });

    app.use(express.static(join(__dirname, '../public')));

    app.listen(port, () => console.log(`Shabbatograms started on port ${port}!`));
}