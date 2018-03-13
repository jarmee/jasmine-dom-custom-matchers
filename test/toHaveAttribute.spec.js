describe("toHaveAttribute()", function () {
    let ul, liA, liB, liC, virtualDiv, virtualParagraph,
    virtualNextParagraph;
    beforeAll(function () {    
        form = document.getElementById('form');
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
    it("<form> should have id='form' attribute defined", function () {
        expect(form).toHaveAttribute('id', 'form');
    });

    it("<form> should not have method attribute of value 'post'", function () {
        expect(form).not.toHaveAttribute('method', 'post');
    });

    it("email and password input elements should have type='text' attribute defined", function () {
        expect(emailInput).toHaveAttribute('type', 'text');
        expect(passwordInput).toHaveAttribute('type', 'text');
    });

    it("email and password input elements should have placeholder attribute defined with some text", function () {
        expect(emailInput).toHaveAttribute('placeholder', /.+/);
        expect(passwordInput).toHaveAttribute('placeholder', /.+/);
    });

    it("<li> elements' id attributes should begin with 'li'", function () {
        expect(liA).toHaveAttribute('id', /li\w+/);
        expect(liB).toHaveAttribute('id', /li\w+/);
        expect(liC).toHaveAttribute('id', /li\w+/);
    });

    it("submit element should be of type submit, should not be disabled and have value='Login'", function () {
        expect(submit).not.toHaveAttribute('disabled');
        expect(submit).toHaveAttribute('type', 'submit');
        expect(submit).toHaveAttribute('value', /login/i);
    });

    it("password input element should be readonly", function () {
        expect(passwordInput).toHaveAttribute('readonly', /(true|.{0})/);
    });

    it("password input element's name attribute should be defined but should not have value 'email'", function () {
        expect(passwordInput).toHaveAttribute('name');
        expect(passwordInput).not.toHaveAttribute('name', "email");
    });

    it("email input element's name attribute should be defined but should not have value 'password'", function () {
        expect(emailInput).toHaveAttribute('name');
        expect(emailInput).not.toHaveAttribute('name', "password");
    });

    it("email input element should not be readonly", function () {
        expect(emailInput).not.toHaveAttribute('readonly');
    });

    it("form element should have class attribute of the value containing three classes", function () {
        expect(form).toHaveAttribute('class', /(^classA$|^classA\s+|\s+classA\s+|\s+classA$)/);
        expect(form).toHaveAttribute('class', /(^classB$|^classB\s+|\s+classB\s+|\s+classB$)/);
        expect(form).toHaveAttribute('class', /(^classC$|^classC\s+|\s+classC\s+|\s+classC$)/);
    });

    it("dynamically created [HTML Element] with class attribute defined should have class", function () {
        expect(virtualDiv).toHaveAttribute('class');
        expect(virtualDiv).toHaveAttribute('class', 'virtual');
    });
});