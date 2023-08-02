
function createNotFound(container){
    removeNotFound(container)
    let not_found = document.createElement('div')
    not_found.classList.add('container-not-found-base')
    not_found.innerHTML = getElementNotFound()
    container.appendChild(not_found)
}

function removeNotFound(container){
    try{
        container.querySelector('.container-not-found-base').remove()
    }catch(e){}
}

function getElementNotFound(){
    return `
        <div>
            <img src="../assets/images/default/404.png" alt="not found">
            <p>چیزی یافت نشد</p>
        </div>
    `
}