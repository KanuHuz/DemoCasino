/// <reference types="Cypress" />
// this line activates IntelliSense on a per file basis

import HomePage from "../../support/PageObjects/HomePage";
import LoginPage from "../../support/PageObjects/LoginPage";

describe("E2E test to address sign-in via games selection", function() {

    before(function() {
        // setting up an event listener that effectively suppresses uncaught exceptions and prevents it from failing the test.
        Cypress.on('uncaught:exception', () => false)
        cy.fixture("Registration").then(function(data) {
            this.data = data
        })
    
    })
    it("Selecting a game from the grid and then logging-in", function() {
        const homePage = new HomePage()
        const loginPage = new LoginPage

        cy.visit(Cypress.env("url"))
        cy.get('.mfp-close').click()

        homePage.recommendedButton().click()

        // with realHover we overcome the simulation problem that may occur when using .trigger or .invoke
        const gameCard = cy.get(':nth-child(2) > .games-item__img > img').realHover()
            cy.get("div[class='games-item__overlay games-item__overlay--active'] span[class='button button--s2 button--t4 button--play']").click()

        // here we make use of a custom command to automate login 
        cy.login('username', 'password')
            


    })
                   
        
})



