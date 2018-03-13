describe("toHaveAnyAttribute()", function () {
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
        virtualDiv.setAttribute('class', 'virtual');
    });
    it("<head> element should not have any attribute", function () {
        expect(document.head).not.toHaveAnyAttribute();
    });

    it("<form> <fieldset> and <li> elements should have some attributes defined", function () {
        expect(form).toHaveAnyAttribute();
        expect(fieldset).toHaveAnyAttribute();
        expect(liA).toHaveAnyAttribute();
        expect(liB).toHaveAnyAttribute();
        expect(liC).toHaveAnyAttribute();
    });

    it("dynamically created [HTML Element] should also have some attributes", function () {
        expect(virtualDiv).toHaveAnyAttribute();
    });
});