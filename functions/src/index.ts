import * as functions from 'firebase-functions';
import * as express from 'express';
import * as bodyParser from 'body-parser';

const app = express();
const main = express();

main.use('/api/v1', app);
main.use(bodyParser.json());
main.use(bodyParser.urlencoded({ extended: false }));

export const webApi = functions.https.onRequest(main);

app.get('/demo', (req, res) => {
  res.status(200).send({
    result: [1, 2, 3]
  })
});