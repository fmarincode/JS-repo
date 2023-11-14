const snake = document.getElementById('snake');
const caseSize = 20;

/* step 2 */
const moveLeft = () => {
    const oldLeft = parseInt(snake.style.left) || 0;
    snake.style.left = oldLeft - caseSize + 'px';
}
const moveRight = () => {
    const oldLeft = parseInt(snake.style.left) || 0;
    snake.style.left = oldLeft + caseSize + 'px';
}
const moveTop = () => {
    const oldTop = parseInt(snake.style.top) || 0;
    snake.style.top = oldTop - caseSize + 'px';
}
const moveBottom = () => {
    const oldTop = parseInt(snake.style.top) || 0;
    snake.style.top = oldTop + caseSize + 'px';
}

/* step 3 */
document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    const directions = { ArrowUp: 'N', ArrowDown: 'S', ArrowRight: 'E', ArrowLeft: 'W' };

    if (keyName in directions){
        const direction = directions[keyName]
        switch (direction) {
            case 'N': moveTop();
                break;
            case 'S': moveBottom();
                break;
            case 'W': moveLeft();
                break;
            case 'E': moveRight();
                break;
            default: null;
        }
    }
})

/* step 4 */
const bonuses = document.querySelectorAll('.bonus');

const spawnBonus = () => {
    bonuses.forEach(bonus => {
        const randomX = Math.floor(Math.random() * 20) + 1;
        const randomY = Math.floor(Math.random() * 20) + 1;
        bonus.style.gridColumn = randomY;
        bonus.style.gridRow = randomX;
    });
}
document.addEventListener('DOMContentLoaded', spawnBonus)

/* step 5 */

const reset = (event) => {
    if (event.key === /* ?spacebar */){
        snake.style.left = '0'
        snake.style.top = '0'
        document.removeEventListener('keydown', reset)
    }
}

const moveLimit = () => {
    const snakeLeft = parseInt(snake.style.left) || 0
    const snakeTop = parseInt(snake.style.top) || 0
    const snakeRight = snakeLeft + snake.offsetWidth
    const snakeBottom = snakeTop + snake.offsetHeight

    const groundLeft = ground.offsetLeft;
    const groundTop = ground.offsetTop;
    const groundRight = groundLeft + ground.offsetWidth
    const groundBottom = groundTop + ground.offsetHeight;

    if (snakeLeft < groundLeft || snakeRight > groundRight
        || snakeTop < groundTop || snakeBottom > groundBottom){
            const message = document.getElementsByClassName('message')
            message.style.display = 'block'
            document.addEventListener('keydown', reset)
        }
}