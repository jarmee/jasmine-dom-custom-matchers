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
};



// DOMCustomMatchers.toBeEmpty = function(util){
// 	return util.dom.returnBlock(function(o,not){
// 		var elem = o[0], elemValid, childNodes, emptyTest, pass, msgAdd, msg;
// 		elemValid = util.dom.isHTML(elem);
// 		childNodes = elemValid ? collection():[];
// 		emptyTest = !childNodes.length;
// 		pass = not ? elemValid&&!emptyTest:elemValid&&emptyTest;
// 		msgAdd = emptyTest ? "":" while it contains " + childNodes.length + " node(s)";
// 		msg = "Expected " + util.dom.getType(elem) + util.dom.notMsg(not) + " to be empty" + msgAdd;
// 		return util.dom.test(pass,msg,msg);
		
// 			function collection(){
// 				var nodes = elem.childNodes, parsed = [];
// 					for(var i=0;i<nodes.length;i++){
// 						if(util.dom.isHTML(nodes[i])){
// 							if(nodes[i].nodeName!=="BR"&&nodes[i].nodeName!=="WBR") parsed.push(nodes[i]);
// 						}
// 						if(nodes[i].nodeName==='#text'){
// 							if(nodes[i].textContent.replace(/(\s|\n|\t|\v)/g,"").length) parsed.push(nodes[i]);
// 						}
// 					}
// 				return parsed;
// 			}		
// 	});	
// };

// DOMCustomMatchers.toHaveAnyAttribute = function(util){
// 	return util.dom.returnBlock(function(o,not){
// 		var elem = o[0], elemValid, argTest, pass, msg;
// 		elemValid = util.dom.isHTML(elem);
// 		argTest = elemValid? elem.hasAttributes():false;
// 		pass = not ? elemValid&&!argTest:elemValid&&argTest;
// 		msg = "Expected " + util.dom.getType(elem) + util.dom.notMsg(not) + " to have any attributes defined";
// 		return util.dom.test(pass,msg,msg);
// 	});
// };

// DOMCustomMatchers.toHaveAttribute = function(util){
// 	return util.dom.returnBlock(function(o,not){
// 		var elem = o[0], attr = o[1], val = o[2], elemValid, attrValid, attrTest, strValid, regValid, valTest, pass, msgAttr, msgVal, msg;
// 		elemValid = util.dom.isHTML(elem);
// 		attrValid = util.dom.is(attr,'string');
// 		strValid = util.dom.is(val,'string');
// 		regValid = util.dom.is(val,'regex');
// 		attrTest = elemValid&&attrValid ? elem.hasAttribute(attr):false;
// 		valTest = !attrTest ? false:typeof val==="undefined" ? true:strValid ? elem.getAttribute(attr)===val:regValid ? Boolean(elem.getAttribute(attr).match(val)):true;
// 		pass = not ? elemValid&&attrValid&&!(attrTest&&valTest):elemValid&&attrValid&&(attrTest&&valTest);
// 		msgAttr = !elemValid ? "":attrValid ? " '"+attr+"'":' of type '+util.dom.getType(attr);
// 		msgVal = !elemValid||!attrValid ? "":strValid ? " of '"+ val + "' value ":regValid ? " of value matched regular expression "+val:"";
// 		msg = "Expected "+util.dom.getType(elem) + util.dom.notMsg(not) + " to have an attribute" + msgAttr + msgVal + " specified";		
// 		return util.dom.test(pass,msg,msg);
// 	});
// };

// DOMCustomMatchers.toHaveClass = function(util){
// 	return util.dom.returnBlock(function(o,not){
// 		var elem = o[0], clss = o[1], elemValid, clssValid, valid, clssTest, pass, msgAdd, msg;
// 		elemValid = util.dom.isHTML(elem);
// 		clssValid = util.dom.is(clss,'string');
// 		valid = elemValid && clssValid;
// 		clssTest = valid ? hasClass(elem):false;
// 		pass = not ? valid&&!clssTest:valid&&clssTest;
// 		msgAdd = !elemValid ? "":clssValid ? " '"+clss+"'":" of type "+util.dom.getType(clss);
// 		msg = "Expected "+util.dom.getType(elem) + util.dom.notMsg(not) + " to have class" + msgAdd;
// 		return util.dom.test(pass,msg,msg);
		
// 			function hasClass(elem){
// 				var attr = elem.getAttribute('class');
// 				var collection = attr!==null&&attr.replace(/\s\s+/g,"")!=="" ? attr.split(" "):[];
// 				var classTest = collection.some(function(c){return c===clss;});
// 				return classTest;
// 			}		
// 	});	
// };

// DOMCustomMatchers.toHaveComputedStyle = function(util){
// 	return util.dom.returnBlock(function(o,not){
// 		var elem = o[0], prop = o[1], val = o[2], elemValid, domValid, propValid, strValid, regValid, valid, propHyphen, propCamel, cssObject, cssValue, propTest, valTest, pass, msgDOM, msgProp, msgCssValue, msgVal, msg;
// 		elemValid = util.dom.isHTML(elem);
// 		domValid = elemValid ? elem.ownerDocument.documentElement.contains(elem)&&elem.ownerDocument.documentElement!==elem:false;
// 		propValid = util.dom.is(prop,'string');
// 		strValid = util.dom.is(val,'string');
// 		regValid = util.dom.is(val,'regexp');
// 		valid = elemValid && domValid && propValid && (strValid || regValid);
// 		propHyphen = propValid ? prop.replace(/[A-Z]/g,function(g){return '-'+g.toLowerCase();}):prop;
// 		propCamel = propValid ? prop.replace(/\x2D\w/g,function(g){return g[1].toUpperCase();}):prop;
// 		cssObject = elemValid&&domValid&&propValid ? window.getComputedStyle(elem,null):cssObject;
// 		cssValue = cssObject ? cssObject.getPropertyValue(propHyphen):false;
// 		propTest = cssObject ? typeof cssObject[propCamel]!=='undefined':false;
// 		valTest = !propTest ? false:strValid ? cssValue===val:regValid ? Boolean(cssValue.match(val)):false;
// 		pass = not ? valid&&!valTest:valid&&valTest;
// 		msgDOM = elemValid&&!domValid ? " (not a document node)":"";
// 		msgProp = !(elemValid&&domValid) ? "":propValid ? "'"+propHyphen+"'":"["+util.dom.getType(prop)+"]";
// 		msgCssValue = !valid||!propTest ? "":", while the computed value is '" + cssValue + "'";
// 		msgVal = !(propValid&&elemValid&&domValid) ? "":strValid ? " of the value '"+val+"'":regValid ? " of the value matched the regular expression "+val:" of ["+util.dom.getType(val)+"] value";
// 		msg = "Expected " + util.dom.getType(elem) + msgDOM + util.dom.notMsg(not) + " to have the " + msgProp + " style" + msgVal + msgCssValue;
// 		return util.dom.test(pass,msg,msg);
// 	});	
// };

// DOMCustomMatchers.toHaveComputedColor = function(util){
// 	return util.dom.returnBlock(function(o,not){
// 		var elem = o[0], prop = o[1], val = o[2], elemValid, domValid, propValid, valValid, valid, propHyphen, propCamel, cssObject, cssValue, propTest, valTest, pass, msgDOM, msgProp, msgCssValue, msgVal,msg;
// 		elemValid = util.dom.isHTML(elem);
// 		domValid = elemValid ? elem.ownerDocument.documentElement.contains(elem)&&elem.ownerDocument.documentElement!==elem:false;
// 		propValid = util.dom.is(prop,'string');
// 		valValid = util.dom.is(val,'string');
// 		valid = elemValid&&domValid&&propValid&&valValid;
// 		propHyphen = propValid ? prop.replace(/[A-Z]/g,function(g){return '-'+g.toLowerCase();}):prop;
// 		propCamel = propValid ? prop.replace(/\x2D\w/g,function(g){return g[1].toUpperCase();}):prop;
// 		cssObject = elemValid&&domValid&&propValid ? window.getComputedStyle(elem,null):cssObject;
// 		cssValue = cssObject ? cssObject.getPropertyValue(propHyphen):false;
// 		propTest = cssObject ? typeof cssObject[propCamel]!=='undefined':false;
// 		valTest = !propTest ? false:!valValid ? false:isEqual(cssValue,val);
// 		pass = not ? valid&&!valTest:valid&&valTest;
// 		msgDOM = elemValid&&!domValid ? " (not a document node)":"";
// 		msgProp = !(elemValid&&domValid) ? "":propValid ? "'"+propHyphen+"'":"["+util.dom.getType(prop)+"]";
// 		msgCssValue = !valid||!propTest ? "":", while the computed value is '" + cssValue + "'";
// 		msgVal = !(propValid&&elemValid&&domValid) ? "":valValid ? " of the value '"+val+"'":" of ["+util.dom.getType(val)+"] value";
// 		msg =  "Expected " + util.dom.getType(elem) + msgDOM + util.dom.notMsg(not) + " to have the " + msgProp + " style" + msgVal + msgCssValue;
// 		return util.dom.test(pass,msg,msg);

// 			function isEqual(comput,val){
// 				var a, b;
// 				if(isType(comput,1,1)) a = rgbToRGB(comput,true);
// 				if(isType(comput,2,1)) a = rgbToRGB(comput,false);
// 				if(isType(comput,5,1)) a = [0,0,0,0];

// 				if(isType(val,0,0)) b = hexToRGB(val);
// 				if(isType(val,1,0)) b = rgbToRGB(val,true);
// 				if(isType(val,2,0)) b = rgbToRGB(val,false);
// 				if(isType(val,3,0)) b = hslToRGB(val,true);
// 				if(isType(val,4,0)) b = hslToRGB(val,false);
// 				if(isType(val,5,0)) b = [0,0,0,0];
				
// 				return (!a||!b) ? false:util.equals(a,b);
// 			}		

// 			function isType(val,t,allowContent){
// 				var before = [/^\s*/,/^.*/][allowContent].source;
// 				var after =	 [/\s*$/,/.*$/][allowContent].source;
// 				var type =   [/\x23(([A-F]|[0-9]){3}\s*$|([A-F]|[0-9]){6})/i,
// 							  /rgb\x28(\s*(\d|\d{2}|[0-1]\d{2}|[0-2][0-4]\d|[0-2][0-5]{2})\s*\x2C\s*){2}(\s*(\d|\d{2}|[0-1]\d{2}|[0-2][0-4]\d|[0-2][0-5]{2})\s*)\x29/,
// 							  /rgba\x28(\s*(\d|\d{2}|[0-1]\d{2}|[0-2][0-4]\d|[0-2][0-5]{2})\s*\x2C\s*){3}(\s*([0-1]|0\x2E\d+|\x2E\d+|1\x2E0+)\s*)\x29/,
// 							  /hsl\x28\s*(\d|\d{2}|[0-2]\d{2}|[0-3][0-5]\d|360)(\s*\x2C\s*(\d{1,2}(\x2E\d+)?|100)\x25\s*){2}\x29/,
// 							  /hsla\x28\s*(\d|\d{2}|[0-2]\d{2}|[0-3][0-5]\d|360)(\s*\x2C\s*(\d{1,2}(\x2E\d+)?|100)\x25\s*){2}\x2C\s*([0-1]|0\x2E\d+|\x2E\d+|1\x2E0+)\s*\x29/,
// 							  /transparent/i][t];
// 				var ignoreCase = type.ignoreCase ? 'i':'';
// 				var newRegEx = new RegExp(before + type.source + after,ignoreCase);
// 				return val.search(newRegEx)>=0;
// 			}
			
// 			function hslToRGB(color,addAlpha){
// 				var r,g,b,h,s,l,a,c,t;
// 				var parsed = color.slice(color.search(/\x28/)+1,color.search(/\x29/)).replace(/\x25/g,"").split(',');
// 				parsed.forEach(function(a,b,c){c[b] = Number(a);});
// 				if(addAlpha) parsed.push(1);

// 				h = parsed[0]/360;
// 				s = parsed[1]/100;
// 				l = parsed[2]/100;
// 				a = Number(parsed[3].toFixed(2));
// 				if(s === 0){
// 					r = g = b = Math.round(l*255);
// 					}else{
// 						c = l >= 0.5 ? (s+l)-l*s:l*(s+1);
// 						t = 2 * l - c;
// 						r = parse(t, c, h + 1/3);
// 						g = parse(t, c, h);
// 						b = parse(t, c, h - 1/3);
// 						}
// 				return [r,g,b,a];

// 					function parse(b, a, t){
// 						t = t<0?t+1:t>1?t-1:t;
// 						var ret = t < 1/6 ? b+(a-b)*6*t:t<1/2 ? a:t<2/3 ? b+(a-b)*(2/3-t)*6:b;
// 						return Math.round(ret*255);
// 					};				
// 			}

// 			function hexToRGB(c){
// 				c = c.replace(/\s/g,"");
// 				return c.length===4 ?
// 					[p(c[1]+c[1]) , p(c[2]+c[2]) , p(c[3]+c[3]) , 1]:
// 					[p(c[1]+c[2]) , p(c[3]+c[4]) , p(c[5]+c[6]) , 1];

// 					function p(n){
// 						return parseInt(n,16);
// 					}
// 			}

// 			function rgbToRGB(color,addAlpha){
// 				var r = color.slice(color.search(/\x28/)+1,color.search(/\x29/)).split(',');
// 				r.forEach(function(a,b,c){c[b] = Number(a);});
// 				if(addAlpha) r.push(1);				
// 				r[3] = Number(r[3].toFixed(2));
// 				return r;
// 			}
// 	});	
// };

// DOMCustomMatchers.toHaveEvent = function(util){
// 	return util.dom.returnBlock(function(o,not){
// 		var elem = o[0],evnt = o[1], elemValid, evntValid, valid, getEvnt, evntTest, evntExist, pass, msgEvent, msg;
// 		elemValid = util.dom.isHTML(elem);
// 		evntValid = util.dom.is(evnt,'string');
// 		valid = elemValid&&evntValid;
// 		getEvnt = evntValid ? parseEvent(evnt):evnt;
// 		evntTest = elemValid ? Boolean(elem[getEvnt]):false;
// 		evntExist = elemValid ? typeof elem[getEvnt]!=='undefined':false;
// 		pass = not ? valid&&evntExist&&!evntTest:valid&&evntExist&&evntTest;
// 		msgEvent = !elemValid ? "":!evntExist ? "unrecognized ":getEvnt;
// 		msg = "Expected " + util.dom.getType(elem) + util.dom.notMsg(not) + " to have " + msgEvent + " event attached";
// 		return util.dom.test(pass,msg,msg);

// 			function parseEvent(ev){
// 				ev = ev.replace(/\s/g,"").toLowerCase();
// 				return ev.search('on')===0 ? ev:'on'+ev;				
// 			}
// 	});
// };

if (typeof module !== 'undefined' && typeof exports !== 'undefined' && module.exports) {
  module.exports = DOMCustomMatchers;
}