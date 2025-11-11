Feature: ANZ Borrowing Power Calculator

  Scenario: Verify borrowing estimate for given person
    Given I open the ANZ borrowing power calculator
    When I fill the borrowing calculator form with valid data
    Then I should see the borrowing estimate displayed as "$547,000"

  Scenario: Verify start over button clears the form
    Given I open the ANZ borrowing power calculator
    When I fill the form with valid data
    And I click the start over button
    Then the form should be reset
