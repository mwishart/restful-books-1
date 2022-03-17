let _ = require('lodash');

let inventoryId = 1;
let libraryIdUpperBound = 6;
let bookUpperBound = 25;
let copiesUpperBound = 5;

let records = [];

for (
  let libraryCounter = 1;
  libraryCounter <= libraryIdUpperBound;
  libraryCounter++
) {
  for (let bookCounter = 1; bookCounter <= bookUpperBound; bookCounter++) {
    let copyCount = _.random(0, copiesUpperBound);
    if (copyCount) {
      records.push(
        `(${inventoryId}, ${libraryCounter}, ${bookCounter}, ${copyCount})`
      );
    }
    inventoryId++;
  }
}

let values = records.reduce((previous, current, index) => {
  let inter = ', ';
  if (index && index % 3 === 0) {
    inter = ',\n    ';
  }

  previous += inter + current;
  return previous;
});

let insertSQL = 'INSERT INTO libraries_inventories VALUES ' + values + ';';
console.log(insertSQL);
