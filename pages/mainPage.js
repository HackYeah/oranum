const { I } = inject();

module.exports = {

 topMenuLocators:{
  showMoreButton: {css: '#show_more_btn'},
  searchIcon: {css: '.toolbar-search__btn'},
  searchField: {css: '#header_search_bar'},
  searchShowAllResults: {xpath: '//a[contains(@href, "/en/expert")]'}
 },

  topicsMenuLocators: {
    loveAndRelationship: {xpath: '//a[@title="Love and Relationship"]'},
    tarotAndCards: {xpath: '//a[@title="Tarot and Cards"]'},
    dreamInterpretation: {xpath: '//a[@title="Dream Interpretation"]'},
    astrology: {xpath: '//a[@title="Astrology"]'},
    spiritualGuides: {xpath: '//a[@title="Spiritual Guides"]'},
    homeAndFamily: {xpath: '//a[@title="Home and Family"]'},
    numerology: {xpath: '//a[@title="Numerology"]'}
  },

  performerLocators: {
    performerCategories: {xpath: "//tr[@class='list__item-categories']//div"}
  },

  acceptCookiesButton: {css: '.accept.first_button'}
  
}
