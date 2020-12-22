const { assert } = require('console');

const { I, mainPage } = inject();

//var assert = require('assert');

Given('I am on the main page', () => {
  I.amOnPage('/');
  I.click(mainPage.acceptCookiesButton);
});

When('I scroll to the bottom of the page', () => {
  I.scrollPageToBottom();
  I.wait(5);
  I.scrollPageToBottom();
  I.wait(5);
  I.scrollPageToBottom();
  I.wait(5);
  I.scrollPageToBottom();
});

Then('I see "Show more" button', () => {
  I.seeElement(mainPage.topMenuLocators.showMoreButton);
});


Given('I search for {word}', (text) => {
  I.amOnPage('/');
  I.wait(2);
  I.click(mainPage.topMenuLocators.searchIcon);
  I.clearField(mainPage.topMenuLocators.searchField);
  I.fillField(mainPage.topMenuLocators.searchField, text);
});

When('I click on show all results', () => {
   I.click(mainPage.topMenuLocators.searchShowAllResults);
});

Then('I see all performers containing {word} in name', async(text) => {
  I.wait(5);
  let values = await I.grabTextFromAll("//td[@class='list__item-title']//h2");
  values.forEach((name) => {assert(name.toLowerCase().includes(text) ) });
});


Then('I see all topic results containing {word}', async(text) => {
  var assert = require('assert');
  I.wait(2);
  let values = await I.grabTextFromAll(mainPage.performerLocators.performerCategories);
  values.forEach((categories) => {assert.ok(categories.toLowerCase().includes(text))});
});

When('I choose {word}', (text) => {
  switch(text) {
    case 'LoveAndRelationship':
      I.click(mainPage.topicsMenuLocators.loveAndRelationship);
      break;
    case 'TarotAndCards':
      I.click(mainPage.topicsMenuLocators.tarotAndCards);
      break;
    case 'DreamInterpretation':
      I.click(mainPage.topicsMenuLocators.dreamInterpretation)
      break;
    case 'Astrology':
      I.click(mainPage.topicsMenuLocators.astrology);
      break;
    case 'SpiritualGuides':
      I.click(mainPage.topicsMenuLocators.spiritualGuides);
      break;
    case 'HomeAndFamily':
      I.click(mainPage.topicsMenuLocators.homeAndFamily);
      break;
    case 'Numerology':
      I.click(mainPage.topicsMenuLocators.numerology);
      break;
  }
});