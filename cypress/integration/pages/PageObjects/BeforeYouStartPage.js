import { BasePage } from './BasePage'

export class BeforeYouStartPage extends BasePage {
	/**This test can be performed with two scenarios
	 * 1.Scenario one with below steps
	 */
	checkRadioYes() {
		cy.get("input#Yes[value='Yes']").check({ force: true })
	}

	checkRadioNo() {
		cy.get("input#No[value='No']").check({ force: true })
	}

	confirmAndContinue() {
		cy.get('.ds_button').click()
	}

	visit() {
		cy.visit('http://localhost:4200/GAS-2022-SLR/task-list')
		cy.title().should('eq', 'GAS')
	}

	navigateBack() {
		cy.get('.govuk-back-link').click()
	}

	beforeYouStart() {
		cy.get('a').contains('Read before you start').click()
	}

	completedDisplayed() {
		cy.url().should('include', 'task-list')
		cy.get('[href="/GAS-2022-SLR/task-list/initial-group"]')
			.should('be.visible', { timeout: 10000 })
			.parent()
			.parent()
			.children()
			.get('strong')
			.contains('COMPLETED')
	}

	/***Scenario two with below steps */
	inputDescription() {
		cy.get('#description').type('test@qa1-invalidemail.com')
	}

	/***Scenario two with below steps */
	inputDescription() {
		cy.get('#description').type('test@qa1-invalidemail.com')
	}
}
