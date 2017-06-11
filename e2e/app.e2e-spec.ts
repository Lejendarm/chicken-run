import { ChickenRunPage } from './app.po';

describe('chicken-run App', () => {
  let page: ChickenRunPage;

  beforeEach(() => {
    page = new ChickenRunPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
