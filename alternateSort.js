let a = [12, 8, 0, 20];

console.log(a.sort());

a.sort( (a, b) => {
    if (a > b) {
        return 1;
    }
    else if (a < b) {
        return -1;
    }
    else {
        return 0;
    }
})

console.log(a);
