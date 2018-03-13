const DOMCustomMatchers = require('../lib/dom-matchers');
expect.extend(DOMCustomMatchers);

let style = document.createElement('style');
style.type = 'text/css';
style.appendChild(document.createTextNode('*{ ' +
'    outline:none; ' +
'    font-family: \'Raleway\'; ' + 
'} ' +
'#form{ ' +
'    display:inline-block; ' +
'    margin:20px; ' +
'    background:rgb(245,245,245); ' +
'} ' +
'#fieldset{ ' + 
'    margin:100px; ' +
'    border-radius:8px; ' +
'    border:none; ' +
'    box-shadow:2px 2px 6px 3px rgba(115,115,115,.15); ' +
'    background-color:rgb(250,250,250); ' +
'} ' +
'#legend{ ' +
'    padding:1px 15px; ' +
'    border-radius:8px; ' +
'    box-shadow:1px 1px 4px 2px rgba(115,115,115,.1); ' + 
'    background:rgb(250,250,250); ' +
'    color: #f44336; ' +
'} ' +
'#ul{ ' +
'    list-style-type:none; ' +
'} ' +
'#ul>li{ ' +
'    margin:10px; ' +
'} ' +
'#ul>li>input[type=\'text\']{ ' +
'    padding:8px 2px; ' +
'    border:solid 1px rgb(247,141,74); ' +
'    box-shadow: 0px 0px 8px 2px rgba(247,141,74,.3) inset; ' +
'    color: #f44336; ' +
'} ' +
'#ul>li>span{ ' +
'    display:inline-block; ' +
'    width:100px; ' +
'} ' +
'#liC{ ' +
'    text-align:center; ' +
'} ' +
'#submit{ ' +
'    width:50%; ' +
'    padding:6px; ' +
'    border:none; ' +
'    box-shadow:2px 8px 10px -4px rgba(244,67,54,.7); ' +
'    background-color: #F7721F; ' +
'    font-size:16px; ' +
'    color: rgb(211,47,47); ' +
'}'));
document.head.appendChild(style);

document.body.innerHTML = 
'<form action="" method="get" id="form" class="classA classB classC">' +
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

submit = document.getElementById('submit');
submit.onclick = function(e) {};
