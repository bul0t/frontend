const listWrap = document.querySelector('.list__wrap')

listWrap.addEventListener('click', function(evt) {
    const eTarget = evt.target
    const containsListFolder = eTarget.classList.contains('list__folder')
    if (containsListFolder) eTarget.classList.toggle('list__folder--open')
})
