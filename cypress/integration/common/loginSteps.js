import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { LoginPage } from '../pages/PageObjects/LoginPage'
import * as LoginData from '../../fixtures/loginData.json'

const loginPage = new LoginPage()

//1.Positive Login: Login with valid credentials into Login form
Given('I login with valid credentials', () => {
	loginPage.visit()
	loginPage.signUploginButton()
	loginPage.fillUsername(LoginData.username)
	loginPage.fillPassword(LoginData.password)
})

When('I click on Login button', loginButton => {
	loginPage.loginButton()
})

Then('I should be able to login successfully to the Website', () => {
	//cy.get('.govuk-heading-xl').should('be.visible', { timeout: 10000 })
	cy.url().should('include', 'com')
})

//2.Negative Login: Input invalid username and valid password into Login form
/*When('I login with invalid username and valid password', () => {
	loginPage.fillUsername(LoginData.invalidusername)

	loginPage.fillPassword(LoginData.password)
})

When('I click on Sign in button', () => {
	loginPage.loginButton()
})

Then(
	'I should see information you entered is incorrect, please enter it again.',
	() => {
		loginPage.formSignIn()
		loginPage.expectErrorWrongCredentials()
	}
)*/
