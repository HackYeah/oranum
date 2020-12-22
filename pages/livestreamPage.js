const { I } = inject();

module.exports = {

  getCreditsButton: {xpath: "//button[@data-id='buyCreditIcon']"},
  addToFavoritesButton: {xpath: "//button[@data-id='favoriteIcon']"},
  surpriseModelButton: {xpath: "//button[@data-id='surpriseIcon']"},
  voteButton: {xpath: "//button[@data-id='awardsIcon']"},

  signUpOverlay: {xpath: '//*[@id="video-container"]/div[6]/div[7]/div/h3'}
}