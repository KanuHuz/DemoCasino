/// <reference types="Cypress" />

class LoginPage {

    usernameField() {
        return cy.get('[data-test="input-username"]')
    }

    passwordField() {
        return cy.get('[data-test="input-password"]')
    }

    rememberMeButton() {
        return cy.get('.input__wrapper > label')
    }

    signInButton() {
        return cy.get('[data-test="control-submit"] > span')
    }
}

// The return statement ends function execution and specifies a value to be returned to the function caller
// this makes the class exportable
export default LoginPage;