export class BasePage {
	/*acceptCookies() {
		cy.get('body').then($body => {
			cy.wait(3000)
			if (
				$body
					.text()
					.includes(
						'We use some essential cookies to make this website work. We’d also like to set additional cookies to understand how you use the service and to remember your settings.'
					)
			) {
				// yup found it
				cy.get('#ccc-notify-accept').click()
			} else {
				// nope not here
				cy.get('.ds_button')
			}
		})
	}

	confirmAndContinue() {
		cy.get('.ds_button').click()
	}

	submit() {
		const button = cy.get('.ds_button')
		button.click()
	}

	openHelpCubicM3() {
		const dropdown = cy
			.get('.govuk-details__summary')
			.contains('Help with cubic metres (㎥)')
		dropdown.click()
	}

	openHelpWithTheseDropdown() {
		const dropdownOpen = cy
			.get('.govuk-details__summary')
			.contains('Help with these')
		dropdownOpen.click()
	}*/
}
