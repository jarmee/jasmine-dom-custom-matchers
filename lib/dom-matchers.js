const DOMCustomMatchers = {
	toBeHTMLElement: require('./toBeHTMLElement'),
	toBeHTMLText: require('./toBeHTMLText'),
	toBeDocumentNode: require('./toBeDocumentNode'),
	toContainHTMLElement: require('./toContainHTMLElement'),
	toContainText: require('./toContainText'),
	toBeChildOf: require('./toBeChildOf'),
	toBeNthChild: require('./toBeNthChild'),
	toBeParentOf: require('./toBeParentOf'),
	toHaveSameParent: require('./toHaveSameParent'),
	toHaveChildren: require('./toHaveChildren'),
	toBeNextSiblingOf: require('./toBeNextSiblingOf'),
	toBePreviousSiblingOf: require('./toBePreviousSiblingOf'),
	toBeEmpty: require('./toBeEmpty'),
	toHaveAnyAttribute: require('./toHaveAnyAttribute'),
	toHaveAttribute: require('./toHaveAttribute'),
	toHaveClass: require('./toHaveClass'),
	toHaveComputedColor: require('./toHaveComputedColor'),
	toHaveComputedStyle: require('./toHaveComputedStyle'),
	toHaveEvent: require('./toHaveEvent'),
};

if (typeof module !== 'undefined' && typeof exports !== 'undefined' && module.exports) {
  module.exports = DOMCustomMatchers;
}