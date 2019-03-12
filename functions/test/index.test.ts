import 'mocha';
import { expect } from 'chai';

import { hello, SIP, FAIRAnalysis } from '../src/index';

describe('it should calculate expected annual loss', () => {

  it('should return yo blair', () => {
    const result = hello();
    expect(result).to.equal('Yo Blair!');
  });

  it('can make an eventfrequency SIP', () => {
    //given
    const min: number =3;
    const med: number =90;
    const max: number =1000;
    //when
    const eventfrequencySIP: SIP = new SIP(min, med, max);
    //then
    expect(eventfrequencySIP.getValues()[4]).greaterThan(min);
    // yes, its indetermine (ish) but fix it when not on plane
  });

  it('can do a monto carlo simulation', () => {
    //given
    const eventfrequencySIP: SIP = new SIP(1, 2, 100);
    const lossmagSIP: SIP = new SIP(1, 10, 100);
    //when
    const analysis = new FAIRAnalysis(eventfrequencySIP, lossmagSIP);
    const result = analysis.eal();
    //then
    expect(result).greaterThan(1);
    // yes, its indetermine (ish) but fix it when not on plane
  });

});