describe("toBePreviousSiblingOf()", function () {
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
    it("<head> should be previous sibling of <body>", function () {
        expect(document.head).toBePreviousSiblingOf(document.body);
    });

    it("the list of inputs <ul> should be placed before <legend>", function () {
        expect(legend).toBePreviousSiblingOf(ul);
    });

    it("email input box should be preceded by password input box", function () {
        expect(liA).toBePreviousSiblingOf(liB);
    });

    it("password input box should be preceded by submit button box", function () {
        expect(liB).toBePreviousSiblingOf(liC);
    });

    it("email box should not be the previous sibling of submit button box", function () {
        expect(liA).not.toBePreviousSiblingOf(liC);
    });

    it("<span> elements shoud be preceded by password and email input elements", function () {
        expect(passwordSpan).toBePreviousSiblingOf(passwordInput);
        expect(emailSpan).toBePreviousSiblingOf(emailInput);
    });

    it("dynamically created [HTML Element] should be previous sibling of another dynamically created [HTML Element]", function () {
        expect(virtualParagraph).toBePreviousSiblingOf(virtualNextParagraph);
    });
});
