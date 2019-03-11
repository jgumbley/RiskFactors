import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';


admin.initializeApp(functions.config().firebase);


export class SIP {
    min: number;
    med: number;
    max: number;

    constructor(min: number, med:number, max:number) {
      this.min =min;
      this.med =med;
      this.max =max;
    };

    getValues() {
        return [this.min, this.med, this.max];
    }
};

// lets say yo blair
export const hello = () => 'Yo Blair!';

export const callable = functions.https.onCall((data, context) => {
    return {
        result: hello()
      };
  });