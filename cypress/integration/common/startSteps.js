import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { StartPage } from '../pages/PageObjects/StartPage'

const startPage = new StartPage()

Given('I navigate to Grant Application Service page and Accept cookies', () => {
	startPage.visit()
	//startPage.acceptCookies()
	cy.get('#ccc-notify-accept').should('be.visible').click()
})

When('I verify title of the page should be GAS', () => {
	startPage.gasAppService()
})

Then('Start now button should be displayed and clickable', () => {
	cy.get('.ds_button').should('be.visible', { timeout: 10000 })
	startPage.startNowButton()
})
