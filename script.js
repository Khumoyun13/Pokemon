let ulElement = document.querySelector('.main-ul')
let modalText = document.querySelector('.modal-body')
let infoList = document.querySelector('.info-list')
let modalTitle = document.querySelector('.modal-title')
let nameFilterButton = document.querySelector('.name-search-button')


function getImg() {
    for (let item of pokemons) {
        let newLiElement = document.createElement('li')
        let newImgElement = document.createElement('img')
        let newNameElement = document.createElement('h6')
        newImgElement.setAttribute('src', item.img)
        newLiElement.classList.add('btn', 'main-li')
        newLiElement.setAttribute('data-bs-toggle', `modal`)
        newLiElement.setAttribute('data-bs-target', `#exampleModal`)
        newNameElement.textContent = item.name
        newLiElement.appendChild(newImgElement)
        newLiElement.appendChild(newNameElement)
        ulElement.appendChild(newLiElement)


        newLiElement.addEventListener('click', event => {
            for (let i in item) {
                let modalLiElement = document.createElement('li')
                modalLiElement.textContent = `${i} - ${item[i]}`
                infoList.appendChild(modalLiElement)
                modalTitle.textContent = item.name
            }
        })

        

        // nameFilterButton.addEventListener('click', () => {
        //     item.sort(function(a,b){
        //         if(a.name < b.name){
        //             return -1
        //         }
        //         if(a.name > b.name){
        //             return 1
        //         }
        //         return 0
        //     })
        // })
    }
}

getImg()

