// Synchronusly waits given timeout.
const waitSync = (timeout) => {
    const start = Date.now();
    const end = start + timeout;
    while (Date.now() < end) {}
}

const doCleaning = (what, start) => {
    console.log(Date.now() - start);
    console.log(`Cleaning ${what}...`);
}

document.getElementById('sprzatanie').addEventListener('click', () => { 
    setTimeout(
        doCleaning, // callback
        4000, // timeout
        'kitchen', Date.now() // arguments
    );
    console.log('Sprzątam');
});

const id = setInterval(() => {
    console.log('śpie');
}, 2000)

document.getElementById('nie_spac').addEventListener('click', () => {
    clearInterval(id);
});

document.getElementById('pranie').addEventListener('click', () => {
    waitSync(3000);
    console.log('Pranie');
});
const output = document.getElementById('wynik');

const output2 = document.getElementById('wynik2');

const timeTable = {
    burger: 10,
    spaghetti: 20
}

const TIMEOUT = 24 * 60 * 60 * 1000;
const MS_IN_MIN = 1000 * 60;

const howMuchTime = (list) => list.reduce(
    (time, [what, ammount]) => time + (timeTable[what] * ammount * MS_IN_MIN), 0
);

// Current time in milliseconds.
const currentTime = Date.now();

const waitingDate = new Date(
    currentTime + howMuchTime([["burger", 2], ["spaghetti", 3]])
);

const outputHowMuchTimeYet = (endDate) => {
    const startDate = Date.now();
    const timeLeft = endDate - startDate;
    const outputDate = new Date(timeLeft);
    const isoDate = outputDate.toISOString();

    output.innerHTML = `Wynik: ${isoDate}`;
}

const outputRecurent = (endDate) => {
    const startDate = Date.now();
    const timeLeft = endDate - startDate;
    const outputDate = new Date(timeLeft);
    const isoDate = outputDate.toISOString();

    output2.innerHTML = `Wynik: ${isoDate}`;
    setTimeout(outputRecurent, 100, endDate);
}

const intervalId = setInterval(outputHowMuchTimeYet, 100, waitingDate.getTime())

outputRecurent(waitingDate.getTime());


// Waits given timeout
console.log('Synchronusly waited 1 second');


