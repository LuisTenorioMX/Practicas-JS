let ss = 0;
let hh = 0;
let mm = 0;
let time = 0;
function timer() {
    console.clear();
    if (ss === 60) {
        mm += 1;
        ss = 0;
    }
    if (mm === 60) {
        hh += 1;
        mm = 0;
    }
    console.log(`Tiempo actual: ${hh}:${mm}:${ss}`);
    ss += 1;
    time += 1;
    if (time === 300) {
        mm += 10;
        time = 0
        console.log(`Hora actualizada`)
    }
    setTimeout(timer, 1000);
}