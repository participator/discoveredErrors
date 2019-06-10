# Error with DOMParser

## Looks like this was asked and answered two months ago

[DOMParser.parseFromString() Removing Nodes](https://stackoverflow.com/questions/55135703/domparser-parsefromstring-removing-nodes)

## What worked for me
- Surrounding my parsed html with a body did not prevent the DOMParser from removing nodes.
- Instead of using doc.body.childNodes.forEach or a for loop with doc.body.children, using Array.from(doc.body.children) ran as expected
- [Live Example](https://codepen.io/participator/pen/zQjVmp?editors=0010)
- Also found out that this executes code even without attaching it to the DOM [StackOverflow comment](https://stackoverflow.com/q/56318353/8916612)
```
const elem = document.createElement('div');
elem.innerHTML = '<img onerror="alert(777)">';
```