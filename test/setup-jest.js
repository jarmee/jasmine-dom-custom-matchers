const DOMCustomMatchers = require('../lib/dom-matchers');
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
