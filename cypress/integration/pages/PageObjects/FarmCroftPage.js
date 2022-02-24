import { BasePage } from './BasePage'

export class FarmCroftPage extends BasePage {
	visit() {
		cy.visit('http://localhost:4200/GAS-2022-SLR/task-list')
		cy.title().should('eq', 'GAS')
	}

	farmCroftLink() {
		cy.get('a').contains('Enter details about your farm and/or croft').click()
	}

	checkLivestockActivities() {
		const ids = [
			'.govuk-checkboxes .govuk-checkboxes__item input[id="Store digestate and/or livestock slurry"]',
			'.govuk-checkboxes .govuk-checkboxes__item input[id="Apply livestock slurry and/or digestate to land"]',
			'.govuk-checkboxes .govuk-checkboxes__item input[id="Use a contractor to apply digestate and/or livestock slurry to land"]',
		]
		ids.forEach(id => {
			cy.get(id).click()
		})
	}

	//find random value generator
	inputGallons() {
		cy.get('#livestockSlurryStorageCapacity').type('1')
		cy.get('#weeksLivestockSlurryStorageCapacity').clear().type('2')
		cy.get('#livestockSlurryAppliedAnnual').clear().type('03')
		cy.get('#digestateAppliedAnnual').type('4')
		cy.get('#slurryAppliedContractor').clear().type('555')
		cy.get('#digestateAppliedContractor').type('10')
	}

	checkBusinessApplyCompleted() {
		const ids = [
			'.govuk-checkboxes .govuk-checkboxes__item input[id="Carbon audit"]',
			'.govuk-checkboxes .govuk-checkboxes__item input[id="Nutrient management plan"]',
		]
		ids.forEach(id => {
			cy.get(id).click()
		})
	}

	checkYourAnswers() {
		cy.get('h1').contains('Check your answers').click()
	}

	expectedDetailsAboutFarmAndCroftCompleted() {
		cy.get('[href="/GAS-2022-SLR/task-list/farm-details')
			.should('be.visible', { timeout: 10000 })
			.parent()
			.parent()
			.parent()
			.children()
			.children()
			.children()
			.get('strong')
			.contains('COMPLETED')
	}
}
