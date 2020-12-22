@next1
Feature: Validating livestream page of psychic
  In order to incentivize user to sign up
  As a user
  'Sign up' overlay should be displayed for several functionalities

  Scenario: Clicking on 'Get Credits' button triggers 'Sign up' overlay
    Given I am on the psychic's page 
    When I click 'Get Credits' button
    Then I see 'Sign up' overlay

  Scenario: Clicking on 'Add to favorites' button triggers 'Sign up' overlay
    Given I am on the psychic's page 
    When I click 'Add to favorites' button
    Then I see 'Sign up' overlay

    
 Scenario: Clicking on 'Surprise Model' button triggers 'Sign up' overlay
    Given I am on the psychic's page 
    When I click 'Surprise Model' button
    Then I see 'Sign up' overlay

 Scenario: Clicking on 'Vote' button triggers 'Sign up' overlay
    Given I am on the psychic's page 
    When I click 'Vote' button
    Then I see 'Sign up' overlay