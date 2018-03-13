describe("toBeHTMLText()", function () {
    let form, fieldset, emailText,
        emailSpan, passwordText, passwordSpan,
        virtualDiv, virtualQuote, virtualTextNode

    beforeAll(function () {
        form = document.getElementById('form');
        fieldset = document.getElementById('fieldset');
        emailSpan = document.getElementById('emailSpan');
        emailText = emailSpan.childNodes[0];
        passwordSpan = document.getElementById('passwordSpan');
        passwordText = passwordSpan.childNodes[0];
        virtualDiv = document.createElement('DIV');
        virtualQuote = document.createElement('BLOCKQUOTE');
        ul = document.getElementById('ul');
        virtualTextNode = document.createTextNode("hello world, I'm a virtual sample of text");
    });


    it("DOM [HTML Text] descendants should be [HTML Text] Objects", function () {
        expect(emailText).toBeHTMLText();
        expect(passwordText).toBeHTMLText();
    });

    it("DOM [HTML Element] descendants should not be [HTML Text] Objects", function () {
        expect(form).not.toBeHTMLText();
        expect(passwordInput).not.toBeHTMLText();
    });

    it("dynamically created [HTML Text] Objects should be [HTML Text] Objects", function () {
        expect(virtualTextNode).toBeHTMLText();
    });

    it("<span>s' content should be [HTML Text] Objects", function () {
        expect(emailSpan.childNodes[0]).toBeHTMLText();
        expect(passwordSpan.childNodes[0]).toBeHTMLText();
    });

    it("email <span> content should be 'Email:'", function () {
        expect(emailText).toBeHTMLText('Email:');
        expect(emailText).not.toBeHTMLText('different content');
    });

    it("email <span> content should contain 'email'", function () {
        expect(emailText).toBeHTMLText(/email/i);
    });

    it("password <span> content should be 'Password:'", function () {
        expect(passwordText).toBeHTMLText('Password:');
    });

    it("email and password <span> content should end with colon", function () {
        expect(emailText).toBeHTMLText(/\x3A$/);
        expect(passwordText).toBeHTMLText(/\x3A$/);
    });

    it("the legend content of fieldset should not be empty", function () {
        expect(legend.childNodes[0]).toBeHTMLText();
        expect(legend.childNodes[0]).toBeHTMLText(/\S+/);
        expect(legend.childNodes[0]).toBeHTMLText(/\w+/);
    });

    it("incorrect expected parameter's type should be ignored as if it was not passed", function () {
        expect(emailText).toBeHTMLText(100);
        expect(passwordText).toBeHTMLText(null);
    });

});
