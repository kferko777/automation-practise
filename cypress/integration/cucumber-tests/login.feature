Feature: LoginPage

    Scenario: Positive Login: Login with valid credentials into Login form
        Given I login with valid credentials
        When I click on Login button
        Then I should be able to login successfully to the Website

#Scenario: Negative Login: Input invalid username and valid password
#When I login with invalid username and valid password
#And I click on Sign in button
#Then I should see information you entered is incorrect, please enter it again.