fdescribe("toHaveComputedColor()", function () {
    it("the background of form should be of light grey color", function () {
        expect(form).toHaveComputedColor('backgroundColor', 'rgb(245,245,245)');
        expect(form).toHaveComputedColor('backgroundColor', 'rgba(245, 245, 245, 1)');
        expect(form).toHaveComputedColor('backgroundColor', 'rgba(245, 245, 245, 1.000)');
        expect(form).toHaveComputedColor('backgroundColor', '  rgb( 245,   245,  245)   ');
        expect(form).toHaveComputedColor('background-color', '#F5F5F5');
        expect(form).toHaveComputedColor('background-color', 'hsl(0,0%,96.1%)');
    });

    it("the shadow of fieldset should be of grey color darker than form background", function () {
        expect(fieldset).toHaveComputedColor('box-shadow', 'rgba(115,115,115,.15)');
        expect(fieldset).toHaveComputedColor('box-shadow', 'hsla(0,0%,45.1%,.15)');
        expect(fieldset).not.toHaveComputedColor('box-shadow', 'hsl(0,0%,45.1%)');
    });

    it("the submit button should not be transparent", function () {
        expect(submit).toHaveComputedColor('background-color', '#F7721F');
        expect(submit).toHaveComputedColor('backgroundColor', 'rgb(247,114,31)');
        expect(submit).toHaveComputedColor('backgroundColor', 'rgba(247,114,31,1)');
        expect(submit).toHaveComputedColor('backgroundColor', 'hsl(23,93.1%,54.5%)');
        expect(submit).toHaveComputedColor('backgroundColor', 'hsla(23,93.1%,54.5%,1)');
    });

});