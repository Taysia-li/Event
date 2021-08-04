//  监听100个按钮的点击事件
/*
const div1 = document.querySelector("#div1");
div1.addEventListener('click', (e) => {
    const t = e.target;
    if (t.tagName.toLowerCase() === 'button') {
        console.log('button 被点击了');
        console.log('button data-id是' + t.dataset.id)
    }
})
*/

//  监听目前不存在的元素的点击事件，则监听其祖先
const div2 = document.querySelector("#div2");
setTimeout(() => {
    const button = document.createElement('button');
    button.textContent = "click 1";
    div2.appendChild(button);
}, 1000)

div2.addEventListener('click', (e) => {
    const t = e.target;
    if (t.tagName.toLowerCase() === 'button') {
        console.log('button 被 click了')
    }
})


//  封装委托事件
on('click', '#div2', 'button', () => {
    console.log('button 被点击了');
})

function on(eventType, element, selector, fn) {
    //  如果不是元素，则就找这个元素
    if (!(element instanceof Element)) {
        element = document.querySelector(element);
    }
    element.addEventListener(eventType, (e) => {
        const t = e.target;
        //  matches 用于判断是否匹配这个选择器
        if (t.matches(selector)) {
            fn(e);
        }
    })
}