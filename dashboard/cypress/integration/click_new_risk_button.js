import React from 'React';
import { mount } from 'cypress-react-unit-test';
import "../../src/App";

describe('AddRiskButton', () => {
    describe( "clicking the add risk button", () => {
        it('pops up a modal form', () => {
            mount(<AddRiskButton/>);
            cy.get('[data-test="addrisk"]').click();
        });
    });
});