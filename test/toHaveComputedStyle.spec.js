describe("toHaveComputedStyle()", function () {
    let fieldset;
    beforeAll(function(){
        fieldset = document.getElementById('fieldset');
        fieldset.style.borderRadius = '8px';
    });
    it("form element should have display style of value block or inline-block", function () {
        expect(form).toHaveComputedStyle('display', /block$/);
    });

    it("submit element should be aligned to the center", function () {
        expect(liC).toHaveComputedStyle('text-align', 'center');
    });

    it("li elements should be of display list-item", function () {
        expect(liA).toHaveComputedStyle('display', 'list-item');
        expect(liB).toHaveComputedStyle('display', 'list-item');
        expect(liC).toHaveComputedStyle('display', /list-item/);
    });

    it("submit button should be centered", function () {
        expect(liC).toHaveComputedStyle('textAlign', 'center');
    });

    it("the fieldset should have rounded corners", function () {
        expect(fieldset).toHaveComputedStyle('borderRadius', '8px');
        // https://github.com/jsdom/jsdom/issues/638
        // expect(fieldset).toHaveComputedStyle('borderTopRightRadius', '8px');
        // expect(fieldset).toHaveComputedStyle('borderTopLeftRadius', '8px');
        // expect(fieldset).toHaveComputedStyle('borderBottomRightRadius', '8px');
        // expect(fieldset).toHaveComputedStyle('borderBottomLeftRadius', '8px');
    });

    it("each element should have the same font-family value", function () {
        var font = /"Raleway"|Raleway/;
        expect(form).toHaveComputedStyle('font-family', font);
        expect(fieldset).toHaveComputedStyle('font-family', font);
        expect(liA).toHaveComputedStyle('font-family', font);
        expect(submit).toHaveComputedStyle('font-family', font);
        expect(passwordInput).toHaveComputedStyle('font-family', font);
        expect(emailInput).toHaveComputedStyle('font-family', font);
    });

    it("the borders of infput fields should be orange", function () {
        expect(passwordInput).toHaveComputedStyle('borderTopColor', 'rgb(247,141,74)');
        expect(passwordInput).toHaveComputedStyle('borderBottomColor', 'rgb(247,141,74)');
        expect(passwordInput).toHaveComputedStyle('border-left-color', 'rgb(247,141,74)');
        expect(passwordInput).toHaveComputedStyle('border-right-color', 'rgb(247,141,74)');
        expect(emailInput).toHaveComputedStyle('borderTopColor', 'rgb(247,141,74)');
        expect(emailInput).toHaveComputedStyle('borderBottomColor', 'rgb(247,141,74)');
        expect(emailInput).toHaveComputedStyle('border-left-color', 'rgb(247,141,74)');
        expect(emailInput).toHaveComputedStyle('border-right-color', 'rgb(247,141,74)');
    });

    it("the submit box-shadow should be lightly transparent", function () {
        expect(submit).toHaveComputedStyle('box-shadow', /rgba/);
    });

    it("the input box-shadows should be inset", function () {
        expect(emailInput).toHaveComputedStyle('box-shadow', /inset/);
        expect(passwordInput).toHaveComputedStyle('boxShadow', /inset/);
    });
});