const { assert } = require('console');

const { I, mainPage, livestreamPage } = inject();

Given("I am on the psychic's page", () => {
    I.amOnPage('/en/chat/MattWarren');
  });
  
  When("I click 'Get Credits' button", () => {
    I.click(livestreamPage.getCreditsButton);
  });
  
  When("I click 'Add to favorites' button", () => {
    I.click(livestreamPage.addToFavoritesButton);
  });
  
  When("I click 'Surprise Model' button", () => {
    I.click(livestreamPage.surpriseModelButton);
  });
  
  When("I click 'Vote' button", () => {
    I.click(livestreamPage.voteButton);
  });
  
  Then("I see 'Sign up' overlay", async() => {
    var assert = require('assert');
    I.wait(2);
    I.seeElement(livestreamPage.signUpOverlay);
    let ans = await I.grabTextFrom(livestreamPage.signUpOverlay);
    assert(ans, 'Sign up');
  });