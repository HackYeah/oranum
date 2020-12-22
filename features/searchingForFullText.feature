@search
Feature: Searching for full text should display only matching psychics

  Scenario Outline: Searching for performers by profile name
    Given I search for <profile name>
    When I click on show all results
    Then I see all performers containing <profile name> in name

    Examples:
    | profile name |
    | MattWarren   |
    | MysticMilena |
    | EternalFlame |
