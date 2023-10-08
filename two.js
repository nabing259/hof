/* Random Number Generator with Delay and Progress Indication:
The goal of this program is to generate a random number after a delay of 3 seconds, and store the delay in a
variable so can be modified. The program displays a message every second indicating the time remaining
until the random number is generated and then outputs the generated number.*/

let delay = 3;

const remainingTime = setInterval(() => {
    if(delay>0) {
        console.log(`The remaining time is : ${delay} sec`);
        delay--;
    }

    if(delay === 0) {
        console.log(Math.floor(Math.random()*100));
        clearInterval(remainingTime);
    }
}, 1000);
