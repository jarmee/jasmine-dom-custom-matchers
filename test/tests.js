/* global expect, DOMCustomMatchers */
var DOMCustomMatchers = require('../lib/dom-matchers');

describe("DOM Custom Matchers", function () {
	beforeAll(function () {
		expect.extend(DOMCustomMatchers);
		document.body.innerHTML = '<form action="" method="get" id="form" class="classA classB classC">' +
			'<fieldset id="fieldset">' +
			'<legend id="legend">Login panel</legend>' +
			'<ul id="ul">' +
			'<li id="liA">' +
			'<span id="emailSpan">Email:</span>' +
			'<input type="text" name="email" placeholder="email" id="emailInput" title="enter email address here" onmouseover="this.title = this.value"/>' +
			'</li>' +
			'<li id="liB">' +
			'<span id="passwordSpan">Password:</span>' +
			'<input type="text" name="password" placeholder="password" id="passwordInput" readonly title="enter password here"/>' +
			'</li>' +
			'<li id="liC">' +
			'<input type="submit" value="Login" id="submit"/>' +
			'</li>' +
			'</ul>' +
			'</fieldset>' +
			'</form>';
		this.form = document.getElementById('form');
		this.fieldset = document.getElementById('fieldset');
		this.legend = document.getElementById('legend');
		this.ul = document.getElementById('ul');
		this.liA = document.getElementById('liA');
		this.liB = document.getElementById('liB');
		this.liC = document.getElementById('liC');
		this.emailSpan = document.getElementById('emailSpan');
		this.emailText = this.emailSpan.childNodes[0];
		this.emailInput = document.getElementById('emailInput');
		this.passwordSpan = document.getElementById('passwordSpan');
		this.passwordText = this.passwordSpan.childNodes[0];
		this.passwordInput = document.getElementById('passwordInput');
		this.submit = document.getElementById('submit');

		var that = this;
		this.submit.onclick = function () {
			if (that.emailInput.value === "" || that.passwordInput.value === "") {
				window.alert('fill empty inputs!');
			}
		};

		this.virtualDiv = document.createElement('DIV');
		this.virtualParagraph = document.createElement('P');
		this.virtualNextParagraph = document.createElement('P');
		this.virtualQuote = document.createElement('BLOCKQUOTE');
		this.virtualTextNode = document.createTextNode("hello world, I'm a virtual sample of text");
		this.virtualDiv.appendChild(this.virtualParagraph);
		this.virtualDiv.appendChild(this.virtualNextParagraph);
		this.virtualParagraph.appendChild(this.virtualQuote);
		this.virtualQuote.appendChild(this.virtualTextNode);
		this.virtualDiv.setAttribute('class', 'virtual');
	});

	

	

	

	

	

	

	
	describe("toBePreviousSiblingOf()", function () {
		it("<head> should be previous sibling of <body>", function () {
			expect(document.head).toBePreviousSiblingOf(document.body);
		});

		it("the list of inputs <ul> should be placed before <legend>", function () {
			expect(this.legend).toBePreviousSiblingOf(this.ul);
		});

		it("email input box should be preceded by password input box", function () {
			expect(this.liA).toBePreviousSiblingOf(this.liB);
		});

		it("password input box should be preceded by submit button box", function () {
			expect(this.liB).toBePreviousSiblingOf(this.liC);
		});

		it("email box should not be the previous sibling of submit button box", function () {
			expect(this.liA).not.toBePreviousSiblingOf(this.liC);
		});

		it("<span> elements shoud be preceded by password and email input elements", function () {
			expect(this.passwordSpan).toBePreviousSiblingOf(this.passwordInput);
			expect(this.emailSpan).toBePreviousSiblingOf(this.emailInput);
		});

		it("dynamically created [HTML Element] should be previous sibling of another dynamically created [HTML Element]", function () {
			expect(this.virtualParagraph).toBePreviousSiblingOf(this.virtualNextParagraph);
		});
	});

	describe("toBeEmpty()", function () {
		it("<legend> should not be empty (should contain textNode)", function () {
			expect(this.legend).not.toBeEmpty();
		});

		it("span elements should not be empty (should contain textNode)", function () {
			expect(this.emailSpan).not.toBeEmpty();
			expect(this.passwordSpan).not.toBeEmpty();
		});

		it("dynamically created [HTML Element] without any node appended should be empty", function () {
			this.virtualBox = document.createElement('DIV');
			expect(this.virtualBox).toBeEmpty();
		});

		it("dynamically created [HTML Element] with node appended should not be empty", function () {
			expect(this.virtualDiv).not.toBeEmpty();
			expect(this.virtualParagraph).not.toBeEmpty();
			expect(this.virtualQuote).not.toBeEmpty();
		});
	});

	describe("toHaveAnyAttribute()", function () {
		it("<head> element should not have any attribute", function () {
			expect(document.head).not.toHaveAnyAttribute();
		});

		it("<form> <fieldset> and <li> elements should have some attributes defined", function () {
			expect(this.form).toHaveAnyAttribute();
			expect(this.fieldset).toHaveAnyAttribute();
			expect(this.liA).toHaveAnyAttribute();
			expect(this.liB).toHaveAnyAttribute();
			expect(this.liC).toHaveAnyAttribute();
		});

		it("dynamically created [HTML Element] should also have some attributes", function () {
			expect(this.virtualDiv).toHaveAnyAttribute();
		});
	});

	describe("toHaveAttribute()", function () {
		it("<form> should have id='form' attribute defined", function () {
			expect(this.form).toHaveAttribute('id', 'form');
		});

		it("<form> should not have method attribute of value 'post'", function () {
			expect(this.form).not.toHaveAttribute('method', 'post');
		});

		it("email and password input elements should have type='text' attribute defined", function () {
			expect(this.emailInput).toHaveAttribute('type', 'text');
			expect(this.passwordInput).toHaveAttribute('type', 'text');
		});

		it("email and password input elements should have placeholder attribute defined with some text", function () {
			expect(this.emailInput).toHaveAttribute('placeholder', /.+/);
			expect(this.passwordInput).toHaveAttribute('placeholder', /.+/);
		});

		it("<li> elements' id attributes should begin with 'li'", function () {
			expect(this.liA).toHaveAttribute('id', /li\w+/);
			expect(this.liB).toHaveAttribute('id', /li\w+/);
			expect(this.liC).toHaveAttribute('id', /li\w+/);
		});

		it("submit element should be of type submit, should not be disabled and have value='Login'", function () {
			expect(this.submit).not.toHaveAttribute('disabled');
			expect(this.submit).toHaveAttribute('type', 'submit');
			expect(this.submit).toHaveAttribute('value', /login/i);
		});

		it("password input element should be readonly", function () {
			expect(this.passwordInput).toHaveAttribute('readonly', /(true|.{0})/);
		});

		it("password input element's name attribute should be defined but should not have value 'email'", function () {
			expect(this.passwordInput).toHaveAttribute('name');
			expect(this.passwordInput).not.toHaveAttribute('name', "email");
		});

		it("email input element's name attribute should be defined but should not have value 'password'", function () {
			expect(this.emailInput).toHaveAttribute('name');
			expect(this.emailInput).not.toHaveAttribute('name', "password");
		});

		it("email input element should not be readonly", function () {
			expect(this.emailInput).not.toHaveAttribute('readonly');
		});

		it("form element should have class attribute of the value containing three classes", function () {
			expect(this.form).toHaveAttribute('class', /(^classA$|^classA\s+|\s+classA\s+|\s+classA$)/);
			expect(this.form).toHaveAttribute('class', /(^classB$|^classB\s+|\s+classB\s+|\s+classB$)/);
			expect(this.form).toHaveAttribute('class', /(^classC$|^classC\s+|\s+classC\s+|\s+classC$)/);
		});

		it("dynamically created [HTML Element] with class attribute defined should have class", function () {
			expect(this.virtualDiv).toHaveAttribute('class');
			expect(this.virtualDiv).toHaveAttribute('class', 'virtual');
		});
	});

	describe("toHaveClass()", function () {
		it("form element should have 'classA', 'classB' and 'classC' classes", function () {
			expect(this.form).toHaveClass('classA');
			expect(this.form).toHaveClass('classB');
			expect(this.form).toHaveClass('classC');
		});

		it("form element should not have 'classD' class", function () {
			expect(this.form).not.toHaveClass('classD');
		});

		it("dynamically created [HTML Element] with class attribute defined should have class", function () {
			expect(this.virtualDiv).toHaveClass('virtual');
		});
	});

	describe("toHaveComputedStyle()", function () {
		fit("form element should have display style of value block or inline-block", function () {
			expect(this.form).toHaveComputedStyle('display', /block$/);
		});

		it("submit element should be aligned to the center", function () {
			expect(this.liC).toHaveComputedStyle('text-align', 'center');
		});

		it("li elements should be of display list-item", function () {
			expect(this.liA).toHaveComputedStyle('display', 'list-item');
			expect(this.liB).toHaveComputedStyle('display', 'list-item');
			expect(this.liC).toHaveComputedStyle('display', /list-item/);
		});

		it("submit button should be centered", function () {
			expect(this.liC).toHaveComputedStyle('textAlign', 'center');
		});

		it("the fieldset should have rounded corners", function () {
			expect(this.fieldset).toHaveComputedStyle('borderTopRightRadius', '8px');
			expect(this.fieldset).toHaveComputedStyle('borderTopLeftRadius', '8px');
			expect(this.fieldset).toHaveComputedStyle('borderBottomRightRadius', '8px');
			expect(this.fieldset).toHaveComputedStyle('borderBottomLeftRadius', '8px');
		});

		it("each element should have the same font-family value", function () {
			var font = /"Raleway"|Raleway/;
			expect(this.form).toHaveComputedStyle('font-family', font);
			expect(this.fieldset).toHaveComputedStyle('font-family', font);
			expect(this.liA).toHaveComputedStyle('font-family', font);
			expect(this.submit).toHaveComputedStyle('font-family', font);
			expect(this.passwordInput).toHaveComputedStyle('font-family', font);
			expect(this.emailInput).toHaveComputedStyle('font-family', font);
		});

		it("the borders of infput fields should be orange", function () {
			expect(this.passwordInput).toHaveComputedStyle('borderTopColor', 'rgb(247, 141, 74)');
			expect(this.passwordInput).toHaveComputedStyle('borderBottomColor', 'rgb(247, 141, 74)');
			expect(this.passwordInput).toHaveComputedStyle('border-left-color', 'rgb(247, 141, 74)');
			expect(this.passwordInput).toHaveComputedStyle('border-right-color', 'rgb(247, 141, 74)');
			expect(this.emailInput).toHaveComputedStyle('borderTopColor', 'rgb(247, 141, 74)');
			expect(this.emailInput).toHaveComputedStyle('borderBottomColor', 'rgb(247, 141, 74)');
			expect(this.emailInput).toHaveComputedStyle('border-left-color', 'rgb(247, 141, 74)');
			expect(this.emailInput).toHaveComputedStyle('border-right-color', 'rgb(247, 141, 74)');
		});

		it("the submit box-shadow should be lightly transparent", function () {
			expect(this.submit).toHaveComputedStyle('box-shadow', /rgba/);
		});

		it("the input box-shadows should be inset", function () {
			expect(this.emailInput).toHaveComputedStyle('box-shadow', /inset/);
			expect(this.passwordInput).toHaveComputedStyle('boxShadow', /inset/);
		});
	});

	describe("toHaveComputedColor()", function () {
		it("the background of form should be of light grey color", function () {
			expect(this.form).toHaveComputedColor('backgroundColor', 'rgb(245,245,245)');
			expect(this.form).toHaveComputedColor('backgroundColor', 'rgba(245, 245, 245, 1)');
			expect(this.form).toHaveComputedColor('backgroundColor', 'rgba(245, 245, 245, 1.000)');
			expect(this.form).toHaveComputedColor('backgroundColor', '  rgb( 245,   245,  245)   ');
			expect(this.form).toHaveComputedColor('background-color', '#F5F5F5');
			expect(this.form).toHaveComputedColor('background-color', 'hsl(0,0%,96.1%)');
		});

		it("the shadow of fieldset should be of grey color darker than form background", function () {
			expect(this.fieldset).toHaveComputedColor('box-shadow', 'rgba(115,115,115,.15)');
			expect(this.fieldset).toHaveComputedColor('box-shadow', 'hsla(0,0%,45.1%,.15)');
			expect(this.fieldset).not.toHaveComputedColor('box-shadow', 'hsl(0,0%,45.1%)');
		});

		it("the submit button should not be transparent", function () {
			expect(this.submit).toHaveComputedColor('background-color', '#F7721F');
			expect(this.submit).toHaveComputedColor('backgroundColor', 'rgb(247,114,31)');
			expect(this.submit).toHaveComputedColor('backgroundColor', 'rgba(247,114,31,1)');
			expect(this.submit).toHaveComputedColor('backgroundColor', 'hsl(23,93.1%,54.5%)');
			expect(this.submit).toHaveComputedColor('backgroundColor', 'hsla(23,93.1%,54.5%,1)');
		});

	});
	describe("toHaveEvent()", function () {
		it("email input should have onmouseover event attached", function () {
			expect(this.emailInput).toHaveEvent('mouseover');
			expect(this.emailInput).toHaveEvent('onmouseover');
		});

		it("form element should have onsubmit event attached", function () {
			this.form.onsubmit = function (e) {
				e.preventDefault();
			};
			expect(this.form).toHaveEvent('submit');
		});

		it("submit button should have onclick event attached", function () {
			expect(this.submit).toHaveEvent('click');
			expect(this.submit).toHaveEvent('onclick');
		});

		it("dynamically created [HTML Element] should have also some events attached", function () {
			this.virtualDiv.onclick = function () { return 'hello world!'; };
			this.virtualDiv.onmouseover = function () { return 'hello world!'; };
			expect(this.virtualDiv).toHaveEvent('click');
			expect(this.virtualDiv).toHaveEvent('onmouseover');
		});
	});
});