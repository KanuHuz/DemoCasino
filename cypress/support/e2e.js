// This is an exportable custom utility I build to be able to automate sign-in 

import './commands'
import LoginPage from './PageObjects/LoginPage'

Cypress.Commands.add('login', (username, password) => {
    const loginPage = new LoginPage()

    loginPage.usernameField().type("demo2casino@gmail.com")
    loginPage.passwordField().type("Testcasino1")
    loginPage.rememberMeButton().click()
    loginPage.signInButton().click()
  
    // Wait for page to load after login and asserts user is successfully logged-in
    cy.get(".user-info__wrapper").should("be.be.visible")
})

