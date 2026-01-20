document.getElementById('start-button').addEventListener('click', Dicer);

function Dicer() {
    DiceAnimation();
    //imageTag.src = 'images/d20/d20_yellow_1.png';
}

function DiceRoll() {
    //returns random number from 0 to 0.99
    return Math.floor(Math.random() * 20) + 1;

}

async function DiceAnimation() {
    for (let i = 0; i < 11; i++) {
        await sleep(150);
        const imageTag = document.getElementById('dice-img');
        let randomImageNumber = DiceRoll();
        imageTag.src = 'images/d20/d20_yellow_' + randomImageNumber + '.png';
        console.log(i);
    }
    let randomNumber = DiceRoll();
    const imageTag = document.getElementById('dice-img');
    imageTag.src = 'images/d20/d20_yellow_' + randomNumber + '.png';
    console.log(randomNumber, 'Hi');
}

let sleep = (time) => {
    return new Promise((resolve) => setTimeout(resolve, time))
}
