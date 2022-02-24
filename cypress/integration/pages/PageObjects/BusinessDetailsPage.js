import { BasePage } from './BasePage'

export class BusinessDetailsPage extends BasePage {
	/*enum Texts {
        h1 = 'Check your answers'

    }*/

	visit() {
		cy.visit('http://localhost:4200/GAS-2022-SLR/task-list')
		cy.title().should('eq', 'GAS')
	}

	businessDetails() {
		cy.get('a').contains('Confirm your business details').click()
	}

	expectedEmailAddressQuestion() {
		cy.get('.govuk-fieldset__legend.govuk-fieldset__legend--s').should(
			'be.visible'
		)
	}

	checkRadioYes() {
		cy.get('#business-alternative-email-yes-option').check({ force: true })
	}

	inputPrefferedEmail() {
		cy.get('#business-alternative-email-value').type(
			'test@space-invalidemail.com'
		)
		cy.get('#business-alternative-email-confirmation-value').type(
			'test@space-invalidemail.com'
		)
	}

	confirmAndContinue() {
		cy.get('.ds_button').click()
	}

	checkYourAnswers() {
		//cy.get('h1').should('be.visible').and('contain', Texts.Check your answers)
		cy.get('h1')
			.contains('Check your answers')
			.should('be.visible', { timeout: 10000 })
	}

	expectedBusinessDetailsDisplayedCompleted() {
		cy.get('[href="/GAS-2022-SLR/task-list/business-details-group')
			.should('be.visible', { timeout: 10000 })
			.parent()
			.parent()
			.children()
			.children()
			.get('strong')
			.contains('COMPLETED')
	}

	/**
	 Following steps is for Scenario II when user clicks No
	 */

	checkRadioNo() {
		cy.get('#business-alternative-email-no-option').check({ force: true })
	}
}
