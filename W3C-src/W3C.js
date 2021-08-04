const level1 = document.querySelector('.level1');
const level2 = document.querySelector('.level2');
const level3 = document.querySelector('.level3');
const level4 = document.querySelector('.level4');
const level5 = document.querySelector('.level5');
const level6 = document.querySelector('.level6');
const level7 = document.querySelector('.level7');

let n = 1;

//  先捕获，再冒泡

const removeX = (e) => {
    const t = e.currentTarget;
    setTimeout(() => {
        t.classList.remove('x');
    }, n * 500);
    n += 1;
}
const addX = (e) => {
    const t = e.currentTarget;
    setTimeout(() => {
        t.classList.add('x');
    }, n * 500);
    n += 1;
}
//  捕获
level1.addEventListener('click', removeX, true)
//  冒泡
level1.addEventListener('click', addX)

level2.addEventListener('click', removeX, true)
level2.addEventListener('click', addX)


level3.addEventListener('click', removeX, true)
level3.addEventListener('click', addX)

level4.addEventListener('click', removeX, true)
level4.addEventListener('click', (e) => {
    //  中断冒泡
    e.stopPropagation();
    addX;
}
)

level5.addEventListener('click', removeX, true)
level5.addEventListener('click', addX)

level6.addEventListener('click', removeX, true)
level6.addEventListener('click', addX)

level7.addEventListener('click', removeX, true)
level7.addEventListener('click', addX)


