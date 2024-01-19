
export function gameStart(name, gameName, repeats) {
    let count = 0;
    while (count < repeats) {
        if (gameName(name) === 0) return 0;
        else count += 1;
    }
    console.log(`Congratulations, ${name}!`);
}