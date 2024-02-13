import { test, expect, Page } from '@playwright/test';
import {GoogleHome} from '../tests/PageObjects/GooglePageObjects/GoogleHome'
import {GoogleSearchResults} from '../tests/PageObjects/GooglePageObjects/GoogleSearchResults'

//declare global variable page
let page: Page
//before all works just like before suite
test.beforeAll(async ({browser}) => {
    page = await browser.newPage()
})//end of before all function 

test('Search for BMW  on Google home & capture the search number', async () => {
    //navigate to google home
    await page.goto('https://www.google.com')

    // search for a keyword
     let googleHome = new GoogleHome(page)
     await googleHome.searchForAKeyword("BMW")
     await googleHome.submitOnGoogleSearch()

    // capture search number of search results page
    let googoleSearchResults = new GoogleSearchResults(page)
    await googoleSearchResults.getSearchNumber("BMW")
})//end of test 

