exports.Saucedemologinpage =

    class Saucedemologinpage {

        constructor(page) {
            this.page = page;
            this.username = this.page.locator("#user-name");
            this.password = this.page.locator("#password");
            this.loginbtn = this.page.locator("input[value='Login']");
        }

        async LaunchSaucedemologinpage(value) {
            await this.page.goto(value);
        }

        async enterusername(value) {
            await this.username.fill(value);
        }

        async enterpassword(value) {
            await this.password.fill(value);
        }

        async clickloginbtn() {
            await this.loginbtn.click();
        }

    }