describe("toHaveEvent()", function () {
    let virtualDiv;
    beforeAll(function() {        
        virtualDiv = document.createElement('DIV');
    })
    it("email input should have onmouseover event attached", function () {
        expect(emailInput).toHaveEvent('mouseover');
        expect(emailInput).toHaveEvent('onmouseover');
    });

    it("form element should have onsubmit event attached", function () {
        form.onsubmit = function (e) {
            e.preventDefault();
        };
        expect(form).toHaveEvent('submit');
    });

    it("submit button should have onclick event attached", function () {
        expect(submit).toHaveEvent('click');
        expect(submit).toHaveEvent('onclick');
    });

    it("dynamically created [HTML Element] should have also some events attached", function () {
        virtualDiv.onclick = function () { return 'hello world!'; };
        virtualDiv.onmouseover = function () { return 'hello world!'; };
        expect(virtualDiv).toHaveEvent('click');
        expect(virtualDiv).toHaveEvent('onmouseover');
    });
});
