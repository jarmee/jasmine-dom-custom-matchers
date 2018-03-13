describe("toBeNthChild()", function () {    
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
        passwordInput = document.getElementById('passwordInput');
    });

    it("inputs should be the second node of its parent elements", function () {
        expect(emailInput).toBeNthChild(1);
        expect(passwordInput).toBeNthChild(1);
    });

    it("<head> should be first and <body> should be last element of <html> element", function () {
        expect(document.head).toBeNthChild(0);
        expect(document.body).toBeNthChild('last');
    });

    it("<legend> should be first child of <fieldset> element", function () {
        expect(legend).toBeNthChild(0);
    });

    it("dynamically created one and only [HTML Element] child node should be first and last child of its parent element", function () {
        expect(virtualQuote).toBeNthChild(0);
        expect(virtualQuote).toBeNthChild('last');
    });

    it("test for <html> should throw faulty result because <html> has not got its [HTML Element] parent", function () {
        expect(document.head).toBeNthChild(0);
        expect(document.body).toBeNthChild('last');
    });

    it("test for dynamically created and not appended [HTML Element] node should throw faulty result because it has not got its [HTML Element] parent", function () {
        expect(virtualDiv).not.toBeNthChild(0);
        expect(virtualDiv).not.toBeNthChild(1);
        expect(virtualDiv).not.toBeNthChild(2);
        expect(virtualDiv).not.toBeNthChild(3);
    });
});