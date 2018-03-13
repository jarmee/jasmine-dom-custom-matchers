describe("toBeChildOf()", function () {
    let form, fieldset, liA, liaB, liaC, virtualDiv,
    passwordInput, virtualParagraph, virtualQuote, emailText;

    beforeAll(function () {
        form = document.getElementById('form');
        fieldset = document.getElementById('fieldset');
        virtualDiv = document.createElement('DIV');
        virtualParagraph = document.createElement('P');
        virtualQuote = document.createElement('BLOCKQUOTE');
        emailSpan = document.getElementById('emailSpan');
        passwordSpan = document.getElementById('passwordSpan');
		virtualTextNode = document.createTextNode("hello world, I'm a virtual sample of text");
        virtualQuote.appendChild(virtualTextNode);
        virtualParagraph.appendChild(virtualQuote);
        virtualDiv.appendChild(virtualParagraph);	
        emailSpan = document.getElementById('emailSpan');
        emailText = emailSpan.childNodes[0];	
        passwordSpan = document.getElementById('passwordSpan');
        passwordText = passwordSpan.childNodes[0];	
    });
    
    it("<body> should be a child of <html>", function () {
        expect(document.body).toBeChildOf(document.documentElement);
    });

    it("<html> should not be a child of <body>", function () {
        expect(document.documentElement).not.toBeChildOf(document.body);
    });

    it("Text nodes should be children of <span> elements", function () {
        expect(emailText).toBeChildOf(emailSpan);
        expect(passwordText).toBeChildOf(passwordSpan);
    });

    it("farther descendat should not be a child of farther ascendant [HTML Element] Object", function () {
        expect(emailSpan).not.toBeChildOf(form);
        expect(liA).not.toBeChildOf(form);
        expect(ul).not.toBeChildOf(form);
        expect(fieldset).toBeChildOf(form);
    });

    it("[HTML Text] Object should be a child of its [HTML Element] parent", function () {
        expect(emailText).toBeChildOf(emailSpan);
        expect(passwordText).toBeChildOf(passwordSpan);
        expect(virtualTextNode).toBeChildOf(virtualQuote);
    });

    it("[HTML Element] Object should not be a child of itselt", function () {
        expect(form).not.toBeChildOf(form);
        expect(virtualDiv).not.toBeChildOf(virtualDiv);
        expect(ul).not.toBeChildOf(ul);
    });

    it("dynamically created [HTML Element] or [HTML Text] Object should be a child of its dynamically created [HTML Element] parent", function () {
        expect(virtualParagraph).toBeChildOf(virtualDiv);
        expect(virtualQuote).toBeChildOf(virtualParagraph);
        expect(virtualTextNode).toBeChildOf(virtualQuote);
    });
});