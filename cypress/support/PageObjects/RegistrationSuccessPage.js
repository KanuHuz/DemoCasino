/// <reference types="Cypress" />

class RegistrationSuccessPage {

    successMessage() {
        cy.get('.notification__title')
    }

    successDescriptor() {
        cy.get('.notification__description')
    }
}

// The return statement ends function execution and specifies a value to be returned to the function caller
// this makes the class exportable
export default RegistrationSuccessPage;

