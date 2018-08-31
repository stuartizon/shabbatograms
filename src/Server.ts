import * as express from 'express';
import { urlencoded } from 'body-parser';
import { convertRequestToText } from './Conversions';
import { writePDF } from './PDF';

export function Server(port: number) {
    const app = express();
    app.use(urlencoded());

    app.post('/send', (req, res) => {
        const text = convertRequestToText(req.body);
        writePDF(text, res);
    });

    app.use(express.static('public'));

    app.listen(port, () => console.log(`Example app listening on port ${port}!`));
}