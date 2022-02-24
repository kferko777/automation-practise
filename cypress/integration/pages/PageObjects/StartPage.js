import { BasePage } from './BasePage'

export class StartPage extends BasePage {
	visit() {
		cy.visit(`http://localhost:4200`)
	}

	gasAppService() {
		cy.get('h1').should('be.visible')
	}

	startNowButton() {
		cy.get('.ds_button').should('be.visible').click({ force: true })
		/*cy.get('//button[contains(text(),"Start now")]')
			.should('be.visible')
			.click()
	}*/
	}
}
