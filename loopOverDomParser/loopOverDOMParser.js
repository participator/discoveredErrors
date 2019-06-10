
const main = document.querySelector('main');


const newNodeString = '<body><h2>I made it on the page</h2><p>What should I do now?</p><select name="whichAdventure"><option>Chill for a sec.</option><option>Explore all that this page has to offer...</option><option>Run while you still can!</option></select><p>Thanks for your advice!</p></body>';

// Works as expected
let newNode = new DOMParser().parseFromString(newNodeString, 'text/html');
let div = document.createElement('div');

console.log('%cArray.from: ', 'border-bottom: 1px solid yellow;font-weight:1000;');
Array.from(newNode.body.children).forEach((node, index, array) => {
    div.appendChild(node);
    console.log('length:', array.length, 'index: ', index, 'node: ', node);    
})
main.appendChild(div);

// Does not work as expected
// Changes the children in newNode.body
newNode = new DOMParser().parseFromString(newNodeString, 'text/html');
div = document.createElement('div');

console.log('%cchildNodes.forEach: ', 'border-bottom: 1px solid yellow;font-weight:1000;');
newNode.body.childNodes.forEach((node, index, array) => {
    div.appendChild(node);
    console.log('length:', array.length, 'index: ', index, 'node: ', node);    
})
main.appendChild(div);

// Does not work as expected
// Changes the children in newNode.body
newNode = new DOMParser().parseFromString(newNodeString, 'text/html');
div = document.createElement('div');

console.log('%cchildren for: ', 'border-bottom: 1px solid yellow;font-weight:1000;');
const nodes = newNode.body.children;
for (var i =0; i < nodes.length; i++) {
    div.appendChild(nodes[i]);
    console.log('length:', newNode.body.children.length, 'index: ', i, 'node: ', nodes[i]);    
}
main.appendChild(div);