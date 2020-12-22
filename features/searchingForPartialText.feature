@current
Feature: Searching for partial text should display only matching psychics

  Scenario Outline: Searching for performers by partial text
    Given I search for <partial text>
    When I click on show all results
    Then I see all performers containing <result text> in name

    Examples:
    | partial text | result text |
    | Matt         | matt        |
    | Myst         | myst        |
    | Ann          | ann         | 
    | psy          | psy         | 