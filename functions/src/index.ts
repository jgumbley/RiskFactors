import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as express from 'express';
import * as bodyParser from "body-parser";

admin.initializeApp(functions.config().firebase);
const app = express();
const main = express();

main.use('/api/v1', app);
main.use(bodyParser.json());
main.use(bodyParser.urlencoded({ extended: false }));

// lets say yo blair
export const hello = () => 'Yo Blair!';

export const callable = functions.https.onCall((data, context) => {
    return {
        result: hello()
      };
  });

// this is one that is exposed on a URI and wrapped with express
export const webApi = functions.https.onRequest(main);

// wiring things up
app.post('/helloworld', (req, res) => {
    res.json(hello());
})
