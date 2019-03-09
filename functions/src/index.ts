import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp(functions.config().firebase);

// lets say yo blair
export const hello = () => 'Yo Blair!';

export const callable = functions.https.onCall((data, context) => {
    return {
        result: hello()
      };
  });