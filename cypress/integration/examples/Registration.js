/// <reference types="Cypress" />
// this line activates IntelliSense on a per file basis

import HomePage from "../../support/PageObjects/HomePage";
import RegistrationPage from "../../support/PageObjects/RegistrationPage";
import RegistrationSuccessPage from "../../support/PageObjects/RegistrationSuccessPage";

describe("Automating the registration process", function() {

    before(function() {
        // setting up an event listener that effectively suppresses uncaught exceptions and prevents it from failing the test.
        Cypress.on('uncaught:exception', () => false)
        // we load the fixture, store the info into data and then initialize it to make it available globally
        cy.fixture("Registration").then(function(data) {
            this.data = data
        })
    })
    it("Registration using fixture", function() {
        const homePage = new HomePage()
        const registrationPage = new RegistrationPage()
        const registrationSuccessPage = new RegistrationSuccessPage()

            cy.visit(Cypress.env("url"))
            cy.get('.mfp-close').click()

            // implementing POM and fixtures
            homePage.signUpButton().click()
            registrationPage.emailInput().type(this.data.personMail)
            registrationPage.termsAndConditionsButton().click()
            registrationPage.currency().click().get('.input__wrapper > .selectric-wrapper > .selectric-items > .selectric-scroll > ul > [data-index="1"]').click()
            registrationPage.password().type(this.data.password)
            registrationPage.passwordConfirmation().type(this.data.password)
            registrationPage.promoCode().click()
            registrationPage.promoCodeInput().type(this.data.promoCode)
            registrationPage.createAccountButton().click()

            // we make a double assertion to control for the presence of the success message
            cy.get('.notification__title').then(function(element) {

                const successText = element.text()
                expect(successText.includes("Congratulations!")).to.be.true
            })
            cy.get('.notification__description').then(function(element1) {

                const successfullMessage = element1.text()
                expect(successfullMessage.includes("successfully finished!")).to.be.true
            })
            
    })
})

