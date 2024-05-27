import { test, expect } from '@playwright/test';
import { chromium, webkit, firefox } from '@playwright/test';
import { Saucedemologinpage } from '../pages/saucedemologinpage';
import { Saucedemo } from '../datatables/json/constants.json';
import { Saucedemohomepage } from '../pages/Saucedemohomepage';

import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

console.log(__dirname);

//var tmpModulePath1 = 'D:';

const records = parse(

    fs.readFileSync(path.join(__dirname, '../datatables/csv/testdata.csv')),
    {
        columns: true,
        skip_empty_lines: true,

    });

let saucedemologinpage, saucedemohomepage;

for (const record of records) {

    test('Launching Saucedemo website and performing required actions ${record.testcaseid}', async ({ page }) => {

        test.setTimeout(300000);
        const browser = await chromium.launch({ headless: false, channel: 'chrome' });
        const context = await browser.newContext();



        saucedemologinpage = new Saucedemologinpage(page);

        saucedemohomepage = new Saucedemohomepage(page);



        console.log(records.url);
        // Req 1: login page : . Open https://www.saucedemo.com/ website
        await saucedemologinpage.LaunchSaucedemologinpage(record.url);
       // await page.waitForTimeout(5000);

        //Req 2: Loginpage: Login to webapp with userID : standard_user and password: secret_sauce
        await saucedemologinpage.enterusername(record.username);
       // await page.waitForTimeout(5000);
        await saucedemologinpage.enterpassword(record.password);
       // await page.waitForTimeout(5000);
        await saucedemologinpage.clickloginbtn();
       // await page.waitForTimeout(5000);

        // Req 3: Add “Sauce Labs Backpack”, “Sauce Labs Bike Light”, “Sauce Labs Bolt T-Shirt”, “MRF Bat” to cart
        //Req 4:  Make sure “Sauce Labs Backpack”, “Sauce Labs Bike Light”, “Sauce Labs Bolt T-Shirt”, “MRF Bat” input are present in CSV file i.e. testData.csv with heading items
        //Req 5: Check for all items are present or not, display exception which item is not there in landing page.

        //assertion whether first product is visible and then adding the product to cart

        await expect.soft(await saucedemohomepage.Desiredproduct(record.product1)).toBeVisible();
       // await page.waitForTimeout(5000);

        await saucedemohomepage.clickDesiredproduct(record.product1);
       // await page.waitForTimeout(5000);

        await saucedemohomepage.clickaddtocartbtninpage();
        //await page.waitForTimeout(5000);

        await saucedemohomepage.Backtoproductbutton();
        //await page.waitForTimeout(5000);

        //assertion whether second product is visible and then adding the product to cart

        await expect.soft(await saucedemohomepage.Desiredproduct(record.product2)).toBeVisible();
        //await page.waitForTimeout(5000);

        await saucedemohomepage.clickDesiredproduct(record.product2);
        //await page.waitForTimeout(5000);

        await saucedemohomepage.clickaddtocartbtninpage();
        //await page.waitForTimeout(5000);

        await saucedemohomepage.Backtoproductbutton();
        //await page.waitForTimeout(5000);

        //assertion whether third product is visible and then adding the product to cart

        await expect.soft(await saucedemohomepage.Desiredproduct(record.product3)).toBeVisible();
        //await page.waitForTimeout(5000);


        await saucedemohomepage.clickDesiredproduct(record.product3);
       // await page.waitForTimeout(5000);

        await saucedemohomepage.clickaddtocartbtninpage();
        //await page.waitForTimeout(5000);

        await saucedemohomepage.Backtoproductbutton();
        //await page.waitForTimeout(5000);

        //assertion whether fourth product is visible
        await expect.soft(await saucedemohomepage.Desiredproduct(record.product4)).toBeVisible();
        //await page.waitForTimeout(5000);

        //clicking add to cart button
        //Req 6: Go to cart
        await saucedemohomepage.Addtocartbtntoprightcorner();
        //await page.waitForTimeout(5000);

        //remove the mentioned product 
        //Req 7: Remove “Sauce Labs Bike Light” from item list.
        await saucedemohomepage.clickDesiredproduct(record.product2);
        //await page.waitForTimeout(5000);

        await saucedemohomepage.clickremovebtn();
        //await page.waitForTimeout(5000);

        await saucedemohomepage.Backtoproductbutton();
        //await page.waitForTimeout(5000);

        //click checkout btn after removing the mentioned product
        await saucedemohomepage.Addtocartbtntoprightcorner();
        //await page.waitForTimeout(5000);

        //Req 8: Click “Checkout”
        await saucedemohomepage.clickcheckoutbtn();
        //await page.waitForTimeout(5000);

        // Req 9: Provide your First Name, Last Name, Zip Code
        await saucedemohomepage.enterfirstname(record.firstname);
        //await page.waitForTimeout(5000);

        await saucedemohomepage.enterlastname(record.lastname);
        //await page.waitForTimeout(5000);

        await saucedemohomepage.enterpostalcode(record.postalcode);
        //await page.waitForTimeout(5000);

        // Req 10: Click “Continue”
        await saucedemohomepage.clickcontinuebtn();
        //await page.waitForTimeout(5000);

        //remove another mentioned product in checkout
        // Req 11: Click “Sauce Labs Bolt T-Shirt” in checkout, remove the item
        await saucedemohomepage.clickDesiredproduct(record.product3);
        //await page.waitForTimeout(5000);

        await saucedemohomepage.clickremovebtn();
        //await page.waitForTimeout(5000);

        await saucedemohomepage.Backtoproductbutton();
        //await page.waitForTimeout(5000);

        //click checkout btn after removing the mentioned product
        //Req 12: Click on the cart.
        await saucedemohomepage.Addtocartbtntoprightcorner();
        //await page.waitForTimeout(5000);

        // Req 13:Click “Checkout”
        await saucedemohomepage.clickcheckoutbtn();
        //await page.waitForTimeout(5000);

        // req 14: Provide your First Name, Last Name, Zip Code
        await saucedemohomepage.enterfirstname(record.firstname);
        //await page.waitForTimeout(5000);

        await saucedemohomepage.enterlastname(record.lastname);
        //await page.waitForTimeout(5000);

        await saucedemohomepage.enterpostalcode(record.postalcode);
        //await page.waitForTimeout(5000);

        await saucedemohomepage.clickcontinuebtn();
        //await page.waitForTimeout(5000);

        // Req 15: On Checkout: Overview screen, check for the total price,
        // if total price of the items is less then $40.00, then click “Finish” button,
        // if the total price is greater then $40.00 then click cancel button.

        let totalprice = await (await saucedemohomepage.totalpriceotalprice()).textContent();
        let totalpricefinal = totalprice.split('$');
        let totalpricefinalasinterger = Number(totalpricefinal[1]);

        console.log("Total price is " + totalpricefinalasinterger);
        if (totalpricefinalasinterger < 40) {
            await saucedemohomepage.clickfinishbtn();
        }
        else if (totalpricefinalasinterger > 40) {
            await saucedemohomepage.clickcancelbtn();
        }
        else {
            console.log('out of bound exception');
        }
        //await page.waitForTimeout(5000);
        // req 16: When click “Finish” button, make sure it will display “Thank you for your order!”, 
        //if anything other then this it will display throw exception.        
        await expect.soft(await saucedemohomepage.Thankyoutext()).toBeVisible();

        // Req 17: Click “Back Home” to go to home page.
        await saucedemohomepage.Backtoproductbutton();
        //await page.waitForTimeout(5000);
        
        //Req 18: Click of 3 lines in lefthand side top , 
        //then click Log Out from the webapp.
        await saucedemohomepage.clickburgermenu();
        //await page.waitForTimeout(5000);

        await saucedemohomepage.clicklogoutbtn();
        //await page.waitForTimeout(5000);

        await page.close();
    })

}
