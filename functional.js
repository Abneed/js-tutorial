let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// Returns a URL-friendly version of a string.
//  Example: "North Dakota" -> "north-dakota"
function urlify(string) {
    return string.toLowerCase().split(/\s+/).join("-");
}

// urls: Imperative version
function imperativeUrls(elements) {
    let urls = [];
    elements.forEach((element) => {
        urls.push(urlify(element));
    });
    return urls;
}
console.time("imperative (urls)");
console.log(imperativeUrls(states));
console.timeEnd("imperative (urls)");

// urls: for loop version
function forLoopUrls(elements) {
    let urls = []
    for (let i = 0; i < elements.length; i++) {
        urls.push(urlify(elements[i]));
    }
    return urls;
}
console.time("for loop (urls)");
console.log(forLoopUrls(states));
console.timeEnd("for loop (urls)");

// urls: Functional version
function functionalUrls(elements) {
    return elements.map(element => urlify(element));
}
console.time("functional (urls)");
console.log(functionalUrls(states));
console.timeEnd("functional (urls)");

// singles: Imperative version
function imperativeSingles(elements) {
    let singles = [];
    elements.forEach((element) => {
        if (element.split(/\s+/).length === 1) {
            singles.push(element);
        }
    });
    return singles;
}
console.time("imperative (singles)");
console.log(imperativeSingles(states));
console.timeEnd("imperative (singles)");

// singles: Functional version
function functionalSingles(elements) {
  return elements.filter(element => element.split(/\s+/).length === 1);
}
console.time("functional (singles)");
console.log(functionalSingles(states));
console.timeEnd("functional (singles)");

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// sum: Imperative solution
function imperativeSum(elements) {
  let total = 0;
  elements.forEach(n => total += n);
  return total;
}
console.time("imperative (sum)");
console.log(imperativeSum(numbers));
console.timeEnd("imperative (sum)");

// sum: Functional solution
function functionalSum(elements) {
  return elements.reduce((total, n) => { return total += n; });
}
console.time("functional (sum)");
console.log(functionalSum(numbers));
console.timeEnd("functional (sum)");

// lengths: Imperative solution
function imperativeLengths(elements) {
  let lengths = {};
  elements.forEach(function(element) {
    lengths[element] = element.length;
  });
  return lengths;
}
console.time("imperative (lengths)");
console.log(imperativeLengths(states));
console.timeEnd("imperative (lengths)");

// lengths: Functional solution
function functionalLengths(elements) {
  return elements.reduce((lengths, element) => {
                          lengths[element] = element.length;
                          return lengths;
                        }, {});
}
console.time("functional (lengths)");
console.log(functionalLengths(states));
console.timeEnd("functional (lengths)");
