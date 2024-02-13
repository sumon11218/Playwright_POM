import { expect, Locator, Page } from '@playwright/test';

export class GoogleHome {
  readonly page: Page;
  readonly searchField: Locator;
  readonly searchButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchField = page.locator('xpath=//*[@name="q"]');
    this.searchButton = page.locator('xpath=//*[@name="btnK"]');
  }
  async searchForAKeyword(userValue: string) {
    console.log("Enter a keyword: " + userValue + " on the search field")
    await this.searchField.fill(userValue,{timeout: 10000})
  }// end of searchForAKeyword

  async submitOnGoogleSearch() {
    console.log("Submit on Google Search buton")
    await this.searchButton.nth(0).click({timeout: 10000})
  }//end of submitOnGoogleSearch

}//end of class