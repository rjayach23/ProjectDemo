exports.Saucedemohomepage =
    class Saucedemohomepage {


        constructor(page) {
            this.page = page;

            this.addtocartbtn = this.page.locator("#add-to-cart");
            this.backtoproductbutton = this.page.locator("#back-to-products");
            this.addtocartbtntoprightcorner =  this.page.locator("a[data-test='shopping-cart-link']");
            this.addtocartbtninpage = this.page.locator("//button[text()='Add to cart']");
            this.removebtn = this.page.locator("#remove");
            this.checkoutbtn = this.page.locator("#checkout");
            this.firstname = this.page.locator("#first-name");
            this.lastname = this.page.locator("#last-name");
            this.postalcode = this.page.locator("#postal-code");
            this.continuebtn = this.page.locator("#continue");
            this.totalprice = this.page.locator("div[class='summary_total_label']");
            this.finishbtn = this.page.locator("#finish");
            this.cancelbtn = this.page.locator("#cancel");
            this.thankyoutext = this.page.locator("h2[class='complete-header']");
            this.burgermenu = this.page.locator("#react-burger-menu-btn");
            this.logoutbtn = this.page.locator("#logout_sidebar_link");

        }

        async clicklogoutbtn() {
            await this.logoutbtn.click();
        }

        
        async clickburgermenu() {
            await this.burgermenu.click();
        }

        async clickcancelbtn() {
            await this.cancelbtn.click();
        }

        async clickfinishbtn() {
            await this.finishbtn.click();
        }

        async Thankyoutext() {
            return await this.thankyoutext;
       }

        async totalpriceotalprice() {
             return await this.totalprice;
        }

        async clickcontinuebtn() {
            await this.continuebtn.click();
        }

        async enterfirstname(value) {
            await this.firstname.fill(value);
        }

        async enterlastname(value) {
            await this.lastname.fill(value);
        }

        async enterpostalcode(value) {
            await this.postalcode.fill(value);
        }

        async clickDesiredproduct(value) {
            this.desiredproduct = this.page.locator("//a/div[text()='" + value + "']");
            await this.desiredproduct.click();
        }

        async Desiredproduct(value) {
            this.desiredproduct = this.page.locator("//a/div[text()='" + value + "']");
            return await this.desiredproduct;
        }

        async Addtocartbtntoprightcorner() {
            await this.addtocartbtntoprightcorner.click();
        }

        async Backtoproductbutton() {
            await this.backtoproductbutton.click();
        }

        async clickaddtocartbutton() {
            await this.addtocartbtn.click();
        }

        async clickaddtocartbtninpage() {
            await this.addtocartbtninpage.click();
        }

        async clickremovebtn() {
            await this.removebtn.click();
        }

        
        async clickcheckoutbtn() {
            await this.checkoutbtn.click();
        }


    }