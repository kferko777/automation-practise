import * as CONFIG from '../../../../cypress.json'
import { BasePage } from './BasePage'

export class LoginPage extends BasePage {
	visit() {
		cy.visit(`${CONFIG.env.url}/login`)
	}
	/*visit() {
		cy.visit('https://www.automationexercise.com/login')
	}
*/
	assertPage() {
		cy.title().should('eq', 'Automation Exercise - Signup / Login')
		cy.url().should('include', 'login')
	}

	signUploginButton() {
		//cy.get("//a[contains(.,'Signup / Login')]").click()
		cy.get("a[href='/login']").click()
	}

	//Method created and Inside located elements
	fillUsername(value) {
		const field = cy.get("input[data-qa='login-email']")
		field.clear()
		field.type(value)
		return this
	}

	fillPassword(value) {
		const field = cy.get("input[placeholder='Password']")
		field.clear()
		field.type(value)
		return this
	}

	loginButton() {
		cy.get("button[data-qa='login-button']")
			.should('be.visible', {
				timeout: 10000,
			})
			.click()
	}

	/*expectErrorWrongCredentials() {
		cy.get('.ds_question__error-message').should('be.visible', {
			timeout: 10000,
		})
	}

	expectedErrorEmptyCredentials() {
		cy.get('p')
			.contains('Enter your RP&S username')
			.should('be.visible', { timeout: 10000 })
		cy.get('p')
			.contains('Enter your password')
			.should('be.visible', { timeout: 10000 })
	}

	expectedErrorEnterUsername() {
		cy.get('p')
			.contains('Enter your RP&S username')
			.should('be.visible', { timeout: 10000 })
	}

	expectedErrorEnterPassword() {
		cy.get('p')
			.contains('Enter your password')
			.should('be.visible', { timeout: 10000 })
	}*/
}
