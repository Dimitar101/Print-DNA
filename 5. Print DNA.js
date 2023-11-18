function printDNA(num) {
    const repsNeeded = (num / 4) + 1;   // console.log('a'.repeat(2.9));   // aa
    const leftIndex = '2101'.repeat(repsNeeded).split('').splice(0, num);
    const rightIndex = '3454'.repeat(repsNeeded).split('').splice(0, num);
    const DNA = [['A', 'T'], ['C', 'G'], ['T', 'T'], ['A', 'G'], ['G', 'G']];

    let counterDNA = 0;
    for (let i = 0; i < num; i++) {
        let line = new Array(6).fill('-');
        line[leftIndex[i]] = DNA[counterDNA][0];
        line[rightIndex[i]] = DNA[counterDNA][1];

        counterDNA++;
        if (counterDNA === 5) { counterDNA = 0; }

        for (let j = 0; j < leftIndex[i]; j++) {
            line[j] = '*';
            line[5 - j] = '*';
        }

        console.log(line.join(''));
    }
}


printDNA(42)
