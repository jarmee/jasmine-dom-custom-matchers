describe("toBeEmpty()", function () {
    let legend, virtualDiv, virtualParagraph, virtualQuote,
    emailSpan, passwordSpan, virtualTextNode, fieldset;

    beforeAll(function () {
        legend = document.getElementById('legend');
        virtualDiv = document.createElement('DIV');
        virtualParagraph = document.createElement('P');
        virtualQuote = document.createElement('BLOCKQUOTE');
        emailSpan = document.getElementById('emailSpan');
        passwordSpan = document.getElementById('passwordSpan');
        virtualNextParagraph = document.createElement('P');
		virtualTextNode = document.createTextNode("hello world, I'm a virtual sample of text");
		virtualDiv.appendChild(virtualParagraph);
		virtualDiv.appendChild(virtualNextParagraph);
		virtualParagraph.appendChild(virtualQuote);
		virtualQuote.appendChild(virtualTextNode);
		virtualDiv.setAttribute('class', 'virtual');
    });

    it("<legend> should not be empty (should contain textNode)", function () {
        expect(legend).not.toBeEmpty();
    });

    it("span elements should not be empty (should contain textNode)", function () {
        expect(emailSpan).not.toBeEmpty();
        expect(passwordSpan).not.toBeEmpty();
    });

    it("dynamically created [HTML Element] without any node appended should be empty", function () {
        let virtualBox = document.createElement('DIV');
        expect(virtualBox).toBeEmpty();
    });

    it("dynamically created [HTML Element] with node appended should not be empty", function () {
        expect(virtualDiv).not.toBeEmpty();
        expect(virtualParagraph).not.toBeEmpty();
        expect(virtualQuote).not.toBeEmpty();
    });
});