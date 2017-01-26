// Standard Checkerboard
var body = document.getElementsByTagName('body')[0];
var div1 = document.createElement('div');
body.appendChild(div1);
for (var i=0; i<99; i++) {
  var block1 = document.createElement('div');
  block1.style.width = '11.1%';
  block1.style.float = 'left';
  block1.style.paddingBottom = '11.1%';
  if (i%2===0) {
    // block.setAttribute('backgroundcolor', 'red');
    block1.style.backgroundColor = 'red';
    div1.appendChild(block1);
  } else {
    // block.setAttribute('backgroundcolor', 'black');
    block1.style.backgroundColor = 'black';
    div1.appendChild(block1);
  }
}

// Random Colors
var div2 = document.createElement('div');
body.appendChild(div2);
for (var j=0; j<99; j++) {
  var block2 = document.createElement('div');
  block2.style.width = '11.1%';
  block2.style.float = 'left';
  block2.style.paddingBottom = '11.1%';
  var hexInsert = ['#'];
  var hexVals = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
  for (var k=0; k<6; k++) {
    var random = Math.floor(Math.random()*16);
    hexInsert.push(hexVals[random]);
  }
  var randomHex = hexInsert.join('');
  block2.style.backgroundColor = randomHex;
  div2.appendChild(block2);
}

var div3 = document.createElement('div');
body.appendChild(div3);

//Gradient
//for later practice
