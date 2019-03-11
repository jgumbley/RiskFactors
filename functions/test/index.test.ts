import 'mocha';
import { expect } from 'chai';

import { hello, SIP } from '../src/index';

describe('it should calculate expected annual loss', () => {

  it('should return yo blair', () => {
    const result = hello();
    expect(result).to.equal('Yo Blair!');
  });

  it('can make an eventfrequency SIP', () => {
    //given
    const min: number =1;
    const med: number =2;
    const max: number =3;
    //when
    const eventfrequencySIP: SIP = new SIP(min, med, max);
    //then
    expect(eventfrequencySIP.getValues()).eql([1, 2, 3]);
  });

});