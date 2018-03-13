describe("toContainHTMLElement()", function () {
    let form, fieldset, liA, liaB, liaC, virtualDiv,
        passwordInput, virtualParagraph, virtualQuote;

    beforeAll(function () {
        form = document.getElementById('form');
        fieldset = document.getElementById('fieldset');
        liA = document.getElementById('liA');
        liB = document.getElementById('liB');
        liC = document.getElementById('liC');        
        passwordInput = document.getElementById('passwordInput');
        virtualQuote = document.createElement('BLOCKQUOTE');	
        virtualParagraph = document.createElement('P');
        virtualParagraph.appendChild(virtualQuote);        
        virtualDiv = document.createElement('DIV');
        virtualDiv.appendChild(virtualParagraph);
    });

    it("<html> should contain <body> element", function () {
        expect(document.documentElement).toContainHTMLElement(document.body);
    });

    it("<body> should not contain <html> element", function () {
        expect(document.body).not.toContainHTMLElement(document.documentElement);
    });

    it("<html> should contain farther descendats", function () {
        expect(document.documentElement).toContainHTMLElement(form);
        expect(document.documentElement).toContainHTMLElement(fieldset);
        expect(document.documentElement).toContainHTMLElement(liC);
        expect(document.documentElement).toContainHTMLElement(passwordInput);
    });

    it("dynamically created [HTML Element] Object should contain another dynamically created [HTML Element] Object", function () {
        expect(virtualDiv).toContainHTMLElement(virtualParagraph);
        expect(virtualDiv).toContainHTMLElement(virtualQuote);
    });

    it("[HTML Element] Object should not contain itself", function () {
        expect(form).not.toContainHTMLElement(form);
        expect(virtualDiv).not.toContainHTMLElement(virtualDiv);
    });

    it("<form> should contain 3 <li> descendants", function () {
        expect(form).toContainHTMLElement(liA);
        expect(form).toContainHTMLElement(liB);
        expect(form).toContainHTMLElement(liC);
    });
});