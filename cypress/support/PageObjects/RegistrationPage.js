/// <reference types="Cypress" />

class RegistrationPage {

    registrationPageTitle() {
        return cy.get('.page__title')
    }

    emailButton() {
        return cy.get("//li[normalize-space()='E-mail']")
    }

    phoneButton() {
        return cy.get("//li[normalize-space()='Phone']")
    }

    emailInput() {
        return cy.get("#core__protected_modules_user_yiiForm_RegistrationForm_email")
    }

    phoneInput() {
        return cy.get("#core__protected_modules_user_yiiForm_RegistrationForm_phone")
    }

    termsAndConditionsButton() {
        return cy.get('.input__wrapper > label')
    }

    currency() {
        return cy.get('.input__wrapper > .selectric-wrapper > .selectric > .selectric__button')
    } 

    password() {
        return cy.get("#core__protected_modules_user_yiiForm_RegistrationForm_password")
    }

    passwordConfirmation() {
        return cy.get("#core__protected_modules_user_yiiForm_RegistrationForm_password_confirmation")
    }

    promoCode() {
        return cy.get('.special-radio__active > .special-radio__label')
    }

    promoCodeInput() {
        return cy.get('.form__input-wrapper > [data-test="input-promo_code"]')
    }

    noPromoCode() {
        return cy.get("label[for='bonus-0']")
    }

    createAccountButton() {
        return cy.get("button[type='submit'] span")
    }
}

// The return statement ends function execution and specifies a value to be returned to the function caller
// this makes the class exportable
export default RegistrationPage;