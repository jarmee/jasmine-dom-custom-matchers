describe("toHaveClass()", function () {
    let form, virtualDiv;

    beforeAll(function () {        
		form = document.getElementById('form');
        virtualDiv = document.createElement('DIV');
        virtualDiv.setAttribute('class', 'virtual');
    });
    
    it("form element should have 'classA', 'classB' and 'classC' classes", function () {
        expect(form).toHaveClass('classA');
        expect(form).toHaveClass('classB');
        expect(form).toHaveClass('classC');
    });

    it("form element should not have 'classD' class", function () {
        expect(form).not.toHaveClass('classD');
    });

    it("dynamically created [HTML Element] with class attribute defined should have class", function () {
        expect(virtualDiv).toHaveClass('virtual');
    });
});