@topic
Feature: On the home page, selecting different topics should display only matching psychics.

  Scenario Outline: Filtering performers based on topic
    Given I am on the main page
    When I choose <topic>
    Then I see all topic results containing <result text>

    Examples:
    | topic                         | result text   |
    | LoveAndRelationship           | love          |
    | TarotAndCards                 | tarot         |
    | DreamInterpretation           | dream         | 
    | Astrology                     | astrology     |
    | SpiritualGuides               | spiritual     |    
    | HomeAndFamily                 | family        |
    | Numerology                    | numerology    | 