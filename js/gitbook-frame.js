
function Select (id) {
    var other = document.getElementsByClassName('list-item');
    for (let item of other) {
        if (item.getAttribute('class') == 'list-item active'){
            item.setAttribute('class', 'list-item unactive');
        }
    }
    var el = document.getElementById(id);
    if (el.getAttribute('class') == 'list-item active') {
        el.setAttribute('class', 'list-item unactive');
    }
    else {
        el.setAttribute('class', 'list-item active');
    }
}