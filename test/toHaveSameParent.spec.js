describe("toHaveSameParent()", function () {
    let form, virtualDiv, virtualParagraph, virtualQuote,
    emailSpan, passwordSpan, virtualTextNode, fieldset, 
    virtualNextParagraph, emailInput;

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
        virtualNextParagraph = document.createElement('P');	
        virtualDiv.appendChild(virtualParagraph);	
        virtualDiv.appendChild(virtualNextParagraph);	
        emailInput = document.getElementById('emailInput');
        passwordInput = document.getElementById('passwordInput');
        submit = document.getElementById('submit');
    });

    it("<body> and <head> should have the same <html> parent", function () {
        expect(document.body).toHaveSameParent(document.head);
    });

    it("the same element should have the same parent element", function () {
        expect(form).toHaveSameParent(form);
        expect(ul).toHaveSameParent(ul);
        expect(virtualTextNode).toHaveSameParent(virtualTextNode);
    });

    it("all <li> elements should have the same <ul> parent", function () {
        expect(liA).toHaveSameParent(liB);
        expect(liB).toHaveSameParent(liC);
        expect(liC).toHaveSameParent(liA);
    });

    it("email and password inputs and its <span> descriptions should be placed in the same <li> parent", function () {
        expect(emailSpan).toHaveSameParent(emailInput);
        expect(passwordSpan).toHaveSameParent(passwordInput);
    });

    it("<legend> and <ul> should be placed in the same <fieldset> parent", function () {
        expect(legend).toHaveSameParent(ul);
    });

    it("email input, password input and submit button should be placed in different <li> elements", function () {
        expect(emailInput).not.toHaveSameParent(passwordInput);
        expect(passwordInput).not.toHaveSameParent(submit);
        expect(submit).not.toHaveSameParent(emailInput);
    });

    it("dynamically created [HTML Element] siblings should have the same dynamically created [HTML Element] parent", function () {
        expect(virtualParagraph).toHaveSameParent(virtualNextParagraph);
    });

    it("Two [HTML Text] sibling nodes should have the same [HTML Element] parent", function () {
        var container = document.createElement('P');
        var textA = document.createTextNode('Hello ');
        var textB = document.createTextNode('World!');
        container.appendChild(textA);
        container.appendChild(textB);
        expect(textA).toHaveSameParent(textB);
    });
});