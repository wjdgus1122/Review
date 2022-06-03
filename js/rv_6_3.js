(function(){

    const wrapEl = document.querySelector('.wrap')
    const inputEl = document.querySelector('cmt')
    const btnEl = document.querySelector('button')
    const cm = document.querySelector('.comment')
    const ch = document.querySelector('.htck')
    const nht = document.querySelector('.nht')
    const fht = document.querySelector('.fht')


    const handleClick = (e) => {
        e.preventDefault();

        const inputVl = inputEl.value

        inputEl.value = ""

        const cmEl = document.createElement('h5')
        cmEl.innerHTML = inputVl
        cm.appendChild(cmEl)


    
    }

    
    wrapEl.addEventListener('submit', handleClick)

})()