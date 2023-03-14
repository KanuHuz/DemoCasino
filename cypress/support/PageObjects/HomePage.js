/// <reference types="Cypress" />

class HomePage {

    signUpButton() {
        return cy.get("[data-test='nav-reg-head']")
    }

    recommendedButton() {
        return cy.get('.games-types__item-link > .icon-recommended')
    }

    gamesList() {
        return cy.get('.games__list')
    }
}

// The return statement ends function execution and specifies a value to be returned to the function caller
// this makes the class exportable
export default HomePage;