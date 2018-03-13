describe("toBeHTMLElement()", function () {

    let form, fieldset, emailText,
        emailSpan, passwordText, passwordSpan,
        virtualDiv, virtualQuote, virtualTextNode;

    beforeAll(() => {
        form = document.getElementById('form');
        fieldset = document.getElementById('fieldset');
        emailSpan = document.getElementById('emailSpan');
        emailText = emailSpan.childNodes[0];
        passwordSpan = document.getElementById('passwordSpan');
        passwordText = passwordSpan.childNodes[0];
        virtualDiv = document.createElement('DIV');
        virtualQuote = document.createElement('BLOCKQUOTE');
        ul = document.getElementById('ul');
        virtualTextNode = document.createTextNode("hello world, I'm a virtual sample of text");
    });

    it("The form and fieldset of login panel should be [HTML Element] Objects", function () {
        expect(form).toBeHTMLElement();
        expect(fieldset).toBeHTMLElement();
    });

    it("[HTML Text] Nodes should not be [HTML Element] Objects", function () {
        expect(emailText).not.toBeHTMLElement();
        expect(passwordText).not.toBeHTMLElement();
    });

    it("dynamically created [HTML Element] Objects should be [HTML Element] Objects", function () {
        expect(virtualDiv).toBeHTMLElement();
        expect(virtualQuote).toBeHTMLElement('blockquote');
    });

    it("dynamically created [HTML Text] Objects should not be [HTML Element] Objects", function () {
        expect(virtualTextNode).not.toBeHTMLElement();
    });

    it("<fieldset> first element should not be <li> element, it should be <legend>", function () {
        expect(fieldset.children[0]).not.toBeHTMLElement('li');
        expect(fieldset.children[0]).toBeHTMLElement('legend');
    });

    it("<ul> children should be <li> elements", function () {
        expect(ul.children[0]).toBeHTMLElement('<li>');
        expect(ul.children[1]).toBeHTMLElement('  li  ');
        expect(ul.children[2]).toBeHTMLElement('li');
    });

    it("<span> content should not be any HTML Element", function () {
        expect(emailSpan.childNodes[0]).not.toBeHTMLElement();
        expect(passwordSpan.childNodes[0]).not.toBeHTMLElement();
    });

    it("incorrect expected parameter's type should be ignored as if it was not passed", function () {
        expect(form).toBeHTMLElement(['i', 'am', 'incorrect', 'type']);
        expect(emailText).not.toBeHTMLElement(100);
    });
});