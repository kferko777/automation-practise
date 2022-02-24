import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { LoginPage } from '../pages/PageObjects/LoginPage'
import * as LoginData from '../../fixtures/loginData.json'

const loginPage = new LoginPage()

//1.Positive Login: Login with valid credentials into Login form
When('I login with valid credentials', () => {
	loginPage.fillUsername(LoginData.username)
	loginPage.fillPassword(LoginData.password)
})

When('I click on Sign in button', submit => {
	loginPage.submit()
})

Then('I should be able to login successfully to the Website', () => {
	cy.get('.govuk-heading-xl').should('be.visible', { timeout: 10000 })
	cy.url().should('include', 'task-list')
})

//2.Negative Login: Input invalid username and valid password into Login form
When('I login with invalid username and valid password', () => {
	loginPage.fillUsername(LoginData.invalidusername)

	loginPage.fillPassword(LoginData.password)
})

When('I click on Sign in button', () => {
	loginPage.submit()
})

Then(
	'I should see information you entered is incorrect, please enter it again.',
	() => {
		loginPage.formSignIn()
		loginPage.expectErrorWrongCredentials()
	}
)

//3.Negative Login: Input invalid password and valid username into Login form
When('I login with invalid password and valid username', () => {
	loginPage.fillUsername(LoginData.username)
	loginPage.fillPassword(LoginData.invalidpassword)
})

When('I click on Sign in button', () => {
	loginPage.submit()
})

Then(
	'I should see information you entered is incorrect, please enter it again.',
	() => {
		loginPage.formSignIn()
		loginPage.expectErrorWrongCredentials()
	}
)

//4.Negative Login: Login with empty credentials into Login form
When('I click on Sign in button', submit => {
	loginPage.submit()
})

Then('I should see Enter your RP&S username and Enter your password', () => {
	loginPage.formSignIn()
	loginPage.expectedErrorEmptyCredentials()
})

//5
When('I login with invalid username and invalid password', () => {
	loginPage.fillUsername(LoginData.invalidusername)
	loginPage.fillPassword(LoginData.invalidpassword)
})

And('I click on Sign in button', () => {
	loginPage.submit()
})

Then('I should not be able to login', () => {
	loginPage.expectErrorWrongCredentials()
})

//6.Negative Login: Empty username and valid password
When('I login with empty username and valid password', () => {
	loginPage.fillPassword(LoginData.password)
})

And('I click on Sign in button', () => {
	loginPage.submit()
})

Then('I should see Enter your RP&S username', () => {
	loginPage.expectedErrorEnterUsername()
})

//7.Negative Login: Empty password and valid username
When('I login with empty password and valid username', () => {
	loginPage.fillUsername(LoginData.username)
})

And('I click on Sign in button', () => {
	loginPage.submit()
})

Then('I should see Enter your password', () => {
	loginPage.expectedErrorEnterPassword()
})
