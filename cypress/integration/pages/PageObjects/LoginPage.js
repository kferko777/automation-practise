import * as CONFIG from '../../../../cypress.json'
import { BasePage } from './BasePage'

export class LoginPage extends BasePage {
	visit() {
		cy.visit(`${CONFIG.env.url}/login`)
	}

	assertPage() {
		cy.title().should('eq', 'GAS')
		cy.url().should('include', 'login')
	}

	//Method created and Inside located elements
	fillUsername(value) {
		const field = cy.get('input[name=username]')
		field.clear()
		field.type(value)
		return this
	}

	fillPassword(value) {
		const field = cy.get('input[name=password]')
		field.clear()
		field.type(value)
		return this
	}

	formSignIn() {
		cy.get('.form').should('be.visible', { timeout: 10000 })
	}

	expectErrorWrongCredentials() {
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
	}
}
