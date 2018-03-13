describe("toContainText()", function () {
    let form, virtualDiv, virtualParagraph, virtualQuote,
    emailSpan, passwordSpan, virtualTextNode, fieldset;

    beforeAll(function () {
        form = document.getElementById('form');        
        virtualDiv = document.createElement('DIV');
        virtualParagraph = document.createElement('P');
        virtualQuote = document.createElement('BLOCKQUOTE');
        emailSpan = document.getElementById('emailSpan');
        passwordSpan = document.getElementById('passwordSpan');
		virtualTextNode = document.createTextNode("hello world, I'm a virtual sample of text");
        virtualQuote.appendChild(virtualTextNode);
        virtualParagraph.appendChild(virtualQuote);
        virtualDiv.appendChild(virtualParagraph);		
    });

    it("I don't know where exactly but <form> should contain 'Email:' in some of its descendant", function () {
        expect(form).toContainText('Email:');
        expect(form).toContainText(/email/i);
        expect(form).toContainText(/Email/);
    });

    it("dynamically created [HTML Element] Object should contain particular text", function () {
        expect(virtualDiv).toContainText("hello world, I'm a virtual sample of text");
        expect(virtualParagraph).toContainText('hello');
        expect(virtualQuote).toContainText('world');
        expect(virtualQuote).toContainText('virtual sample');
        expect(virtualQuote).toContainText(/\w+/);
    });

    it("email <span> should not contain 'password' text", function () {
        expect(emailSpan).not.toContainText(/password/i);
    });

    it("<span> elements should contain any text content", function () {
        expect(emailSpan).toContainText(/.+/);
        expect(passwordSpan).toContainText(/.+/);
    });
});