let count = 0;

setInterval(() => console.log(`${++count}. Mississippi`), 1000);

setTimeout(() => {
    console.log("Hello! from past.");
    process.exit()
}, 5500);