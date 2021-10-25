const Cite = require('citation-js');

const paper = Cite('10.1145/3411764.3445778').data[0];
console.log(paper);
console.log(paper['published-print'])