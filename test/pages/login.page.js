class LoginPage{
    get usernameTextbox(){
        return $('//input[@name="username"]');
    }

    get passwordTextbox(){
        return $('//input[@name="password"]');
    }

    get loginButton(){
        return $('//input[@type="submit"]');
    }

    async login(username, password){
        await this.usernameTextbox.setValue(username);
        await this.passwordTextbox.setValue(password);
        await this.loginButton.click();
    }
}
module.exports= new LoginPage();