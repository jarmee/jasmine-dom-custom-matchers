describe("toBeParentOf()", function () {
    let fieldset, legend, virtualQuote, virtualParagraph, virtualDiv;
    beforeAll(function () {
        fieldset = document.getElementById('fieldset');
        virtualTextNode = document.createTextNode("hello world, I'm a virtual sample of text");
        legend = document.getElementById('legend');
        virtualDiv = document.createElement('DIV');
        virtualParagraph = document.createElement('P');
        virtualQuote = document.createElement('BLOCKQUOTE');
        virtualQuote.appendChild(virtualTextNode);
        virtualParagraph.appendChild(virtualQuote);
        virtualDiv.appendChild(virtualParagraph);	
    });

    it("<fieldset> should be a parent of <legend> and <ul>", function () {
        expect(fieldset).toBeParentOf(legend);
        expect(fieldset).toBeParentOf(ul);
    });

    it("<html> should be a parent of <body>", function () {
        expect(document.documentElement).toBeParentOf(document.body);
    });

    it("<body> should not be a parent of <html>", function () {
        expect(document.body).not.toBeParentOf(document.documentElement);
    });

    it("farther ascendant should not be a parent of farther descendat [HTML Element] or [HTML Text] Object", function () {
        expect(virtualParagraph).not.toBeParentOf(virtualTextNode);
        expect(form).not.toBeParentOf(ul);
    });

    it("[HTML Element] or [HTML Text] Object should not be a parent of itselt", function () {
        expect(virtualParagraph).not.toBeParentOf(virtualParagraph);
        expect(document.body).not.toBeParentOf(document.body);
        expect(fieldset).not.toBeParentOf(fieldset);
    });

    it("dynamically created [HTML Element] Object should be a parent of its dynamically created [HTML Element] or [HTML Text] children", function () {
        expect(virtualDiv).toBeParentOf(virtualParagraph);
        expect(virtualParagraph).toBeParentOf(virtualQuote);
        expect(virtualQuote).toBeParentOf(virtualTextNode);
    });
});