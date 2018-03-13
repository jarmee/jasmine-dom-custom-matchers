describe("toBeNextSiblingOf()", function () {
    let ul, liA, liB, liC, virtualDiv, virtualParagraph,
    virtualNextParagraph;
    beforeAll(function () {    
        ul = document.getElementById('ul');
		liA = document.getElementById('liA');
		liB = document.getElementById('liB');
        liC = document.getElementById('liC');	
        virtualDiv = document.createElement('DIV');
        virtualParagraph = document.createElement('P');
		virtualNextParagraph = document.createElement('P');
		virtualQuote = document.createElement('BLOCKQUOTE');
		virtualTextNode = document.createTextNode("hello world, I'm a virtual sample of text");
		virtualDiv.appendChild(virtualParagraph);
		virtualDiv.appendChild(virtualNextParagraph);
		virtualParagraph.appendChild(virtualQuote);
		virtualQuote.appendChild(virtualTextNode);
		virtualDiv.setAttribute('class', 'virtual');
    });
    it("<body> should be next sibling of <head>", function () {
        expect(document.body).toBeNextSiblingOf(document.head);
    });

    it("<legend> should be placed before the list of inputs <ul>", function () {
        expect(ul).toBeNextSiblingOf(legend);
    });

    it("password input box should be preceded by email input box", function () {
        expect(liB).toBeNextSiblingOf(liA);
    });

    it("submit button box should be preceded by password input box", function () {
        expect(liC).toBeNextSiblingOf(liB);
    });

    it("submit button box should not be the next sibling of email box", function () {
        expect(liC).not.toBeNextSiblingOf(liA);
    });

    it("password and email input element should be preceded by <span> element", function () {
        expect(passwordInput).toBeNextSiblingOf(passwordSpan);
        expect(emailInput).toBeNextSiblingOf(emailSpan);
    });

    it("dynamically created [HTML Element] should be next sibling of another dynamically created [HTML Element]", function () {
        expect(virtualNextParagraph).toBeNextSiblingOf(virtualParagraph);
    });
});
