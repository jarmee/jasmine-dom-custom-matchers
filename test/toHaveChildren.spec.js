describe("toHaveChildren()", function () {
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
    it("<ul> should have any children", function () {
        expect(ul).toHaveChildren();
    });

    it("<ul> should have 3 children", function () {
        expect(ul).toHaveChildren(3);
    });

    it("<ul> should have less than 4 children", function () {
        expect(ul).toHaveChildren(4, 'less than');
    });

    it("<ul> should have more than 2 children", function () {
        expect(ul).toHaveChildren(2, 'more than');
    });

    it("<ul> should have 3 children or less", function () {
        expect(ul).toHaveChildren(3, 'or less');
        expect(ul).toHaveChildren(3, 'orless');
        expect(ul).toHaveChildren(3, 'orLess');
    });

    it("<ul> should have 3 children or more", function () {
        expect(ul).toHaveChildren(3, 'or more');
    });

    it("<ul> should not have 5 children", function () {
        expect(ul).not.toHaveChildren(5);
    });

    it("<span> elements should not have any children", function () {
        expect(emailSpan).toHaveChildren(0);
        expect(emailSpan).not.toHaveChildren();
    });

    it("[HTML Text] Object should not be considered to be children", function () {
        expect(emailSpan).not.toHaveChildren();
        expect(emailSpan).toHaveChildren(0);
        expect(virtualQuote).not.toHaveChildren();
        expect(virtualQuote).toHaveChildren(0);
    });

    it("dynamically created [HTML Element] Object with dynamically created [HTML Element] children should have children", function () {
        expect(virtualDiv).toHaveChildren();
        expect(virtualParagraph).toHaveChildren();
        expect(virtualQuote).not.toHaveChildren();
    });
});