// Modal components
const modalBtn = document.getElementById('back-project')
const modalContainer = document.querySelector('.modal-container')
const selectionModal = document.getElementById('select-modal')
const closeModalBtn = document.querySelector('.modal-close')
const cards = document.querySelectorAll('.modal-option-card')
const successModal = document.querySelector('.success-modal')
const confirmSuccess = document.querySelector('.confirm-modal')

const checkboxes = document.querySelectorAll('.input-radio')
const expandElements = document.querySelectorAll('.option-expand')
const continueBtns = document.querySelectorAll('.pledge-continue')

const bookmark = document.querySelector('.bookmark')
const bookmarkIcon = document.querySelector('.bookmark-icon')
const bookmarkText = document.querySelector('.bookmark-text')
const hamburger = document.querySelector('.hamburger')
const navLinks = document.querySelector('.links')

const selectRewardBtns = document.querySelectorAll('.select-reward')

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show-menu')
    console.log('test')
})

const closeModalContainer = () => {
    modalContainer.classList.remove('show-modal')
    modalContainer.classList.add('hide-modal')
}


const showModalContainer = () => {
    modalContainer.classList.remove('hide-modal')
    modalContainer.classList.add('show-modal')
}

const closeModalBox = () => {
    selectionModal.classList.remove('show-modal')
    selectionModal.classList.add('hide-modal')
}

const showModalBox = () => {
    selectionModal.classList.remove('hide-modal')
    selectionModal.classList.add('show-modal')
}

const closeSuccessModal = () => {
    successModal.classList.remove('show-modal')
    successModal.classList.add('hide-modal')
}

modalBtn.addEventListener('click', () => {
    showModalContainer();
    showModalBox();
})

closeModalBtn.addEventListener('click', () => {
    closeModalContainer();
    closeModalBox();
    expandElements.forEach(el => el.classList.remove('show-modal'))
    checkboxes.forEach(el => el.checked = false)
    cards.forEach(el => el.classList.remove('card-active'))
})



for(let i = 0; i<checkboxes.length; i++) {
    checkboxes[i].onclick = function() {

        // functions to remove active classes
        checkboxes.forEach(el => el.checked = false)
        cards.forEach(el => el.classList.remove('card-active'))
        expandElements.forEach(el => el.classList.remove('show-modal'))

        checkboxes[i].checked = true
        cards[i].classList.add('card-active')
        expandElements[i].classList.add('show-modal')
    }
}

continueBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        closeModalBox()
        successModal.classList.remove('hide-modal')
        successModal.classList.add('show-modal')
    })
})

confirmSuccess.addEventListener('click', () => {
    closeSuccessModal();
    closeModalContainer();
})

let toggleBookmark = false

bookmark.addEventListener('click', () => {
    if (!toggleBookmark) {
        bookmarkIcon.classList.add('bookmark-clicked')
        bookmarkText.innerText = 'Bookmarked'
        bookmarkText.style.color = '#297d71'
        toggleBookmark = true;
    } else {
        bookmarkIcon.classList.remove('bookmark-clicked')
        bookmarkText.innerText = 'Bookmark'
        bookmarkText.style.color = 'gray'
        toggleBookmark = false;
    }
    
})

selectRewardBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        showModalContainer();
        showModalBox();
        // console.log(cards[index])
        checkboxes[index+1].checked = true
        cards.forEach(el => el.classList.remove('card-active'))
        cards[index+1].classList.add('card-active')
        expandElements[index+1].classList.add('show-modal')
    })
})
