let count = 0;

setInterval(() => console.log(`${++count}. Mississippi`), 1000);

setTimeoutSync(5500);

console.log("Hello! from past.");
process.exit()

function setTimeoutSync(ms) {
    const currentTime = Date.now();
    while(Date.now() - currentTime < ms){
        
    }
}