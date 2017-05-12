import { Angular2TutorialInstagramintegrationPage } from './app.po';

describe('angular2-tutorial-instagramintegration App', () => {
  let page: Angular2TutorialInstagramintegrationPage;

  beforeEach(() => {
    page = new Angular2TutorialInstagramintegrationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
