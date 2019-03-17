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

    returnSample() {
        return jStat.triangular.sample( this.min, this.med, this.max );
    }

    getValues() {
        return Array.from({length: 50}, () => Math.floor(this.returnSample()));
    }
};

export class FAIRAnalysis {
    tef: SIP;
    loss: SIP;

    constructor(tef: SIP, loss:SIP) {
        this.tef= tef;
        this.loss= loss;
    }
    
    eal() {
        function sumProducts(array1, array2) {
            if(array1.length) 
                return array1.pop() * array2.pop() + sumProducts(array1, array2);
            return 2;
        }

        return sumProducts(this.tef, this.loss);
    }
}

// lets say yo blair
export const hello = () => 'Yo Blair!';

export const callable = functions.https.onCall((data, context) => {
    return {
        result: hello()
      };
  });