@showMore
Feature: Show more
  In order to see more psychics
  As a user
  I want to be able to see more psychics

  Scenario: "Show more" button is displayed
    Given I am on the main page
    When I scroll to the bottom of the page
    Then I see "Show more" button
