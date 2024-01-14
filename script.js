const copyBtn1 = document.querySelector("#bt1")
const textarea1 = document.querySelector("#text1")

const copyBtn2 = document.querySelector("#bt2")
const textarea2 = document.querySelector("#text2")

copyBtn1.addEventListener('click', () => {
    textarea1.select()
    let textValue = textarea1.value;
    console.log(textValue)

    navigator.clipboard.writeText(textValue)
    copyBtn1.innerText = 'کپی شد'

    setTimeout(() => {
        copyBtn1.innerText = 'برای کپی کلیک کنید'
    }, 1500);
})

copyBtn2.addEventListener('click', () => {
    textarea2.select()
    let textValue = textarea2.value;
    console.log(textValue)

    navigator.clipboard.writeText(textValue)
    copyBtn2.innerText = 'کپی شد'
    copyBtn2.style.backgroundColor = '#03A9F4'

    setTimeout(() => {
        copyBtn2.innerText = 'برای کپی کلیک کنید'
    }, 1500);
})