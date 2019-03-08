import 'mocha';
import { expect } from 'chai';

import { hello } from '../src/index';

describe('Yo blair function', () => {

  it('should return yo blair', () => {
    const result = hello();
    expect(result).to.equal('Yo Blair!');
  });

});