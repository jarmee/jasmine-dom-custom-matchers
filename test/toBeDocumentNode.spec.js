describe("toBeDocumentNode()", function () {
    let form, fieldset, emailInput, passwordInput,
        virtualDiv, virtualParagraph, virtualQuote,
        virtualTextNode, emailSpan, emailText, 
        passwordSpan, passwordText;

    beforeAll(function () {
        form = document.getElementById('form');
        fieldset = document.getElementById('fieldset');
        emailInput = document.getElementById('emailInput');
        passwordInput = document.getElementById('passwordInput');
        virtualDiv = document.createElement('DIV'); 
        virtualParagraph = document.createElement('P');
		virtualQuote = document.createElement('BLOCKQUOTE');
        virtualTextNode = document.createTextNode("hello world, I'm a virtual sample of text");
        emailSpan = document.getElementById('emailSpan');
        emailText = emailSpan.childNodes[0];	
        passwordSpan = document.getElementById('passwordSpan');
        passwordText = passwordSpan.childNodes[0];	
    });

    it("<html> <head> and <body> should be a part of DOM Tree", function () {
        expect(document.documentElement).toBeDocumentNode();
        expect(document.body).toBeDocumentNode();
        expect(document.head).toBeDocumentNode();
    });
    it("form, fieldset and inputs should be appended as a part of login panel", function () {
        expect(form).toBeDocumentNode();
        expect(fieldset).toBeDocumentNode();
        expect(emailInput).toBeDocumentNode();
        expect(passwordInput).toBeDocumentNode();
    });
    it("password and email descriptions of inputs should be a part of DOM", function () {
        expect(emailText).toBeDocumentNode();
        expect(passwordText).toBeDocumentNode();
    });
    it("dynamically created (but not appended) [HTML Element] Objects should not be the DOM Nodes", function () {
        expect(virtualDiv).not.toBeDocumentNode();
        expect(virtualParagraph).not.toBeDocumentNode();
        expect(virtualQuote).not.toBeDocumentNode();
    });

    it("dynamically created (but not appended) [HTML Text] Objects should not be the DOM Nodes", function () {
        expect(virtualTextNode).not.toBeDocumentNode();
    });
});
