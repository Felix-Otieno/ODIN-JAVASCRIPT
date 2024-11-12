let answer = 25;

for(let i = 1; i <= answer; i++) {
    if(i % 3 === 0 && i % 5 === 0 ) {
        console.log("fizzfuzz");
    } else if(i % 3 === 0) {
        console.log("fizz");
    } else if(i % 5 === 0) {
        console.log("fuzz");
    } else {
        console.log(i);
    }
}
    