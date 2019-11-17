import './style.css';
import InfiniteScroll from './infiniteScroll';

function createDiv(className, id = '') {
    let div = document.createElement('div');
    div.className = className;
    if(id !== '') {
        div.setAttribute('id', id);
    }
    return div;
};

function closeAllLists(item) {
    let items = document.getElementsByClassName("autocomplete-items");
    for (let i = 0; i < items.length; i++) {
        if (item != items[i]) {
            items[i].parentNode.removeChild(items[i]);
        }
    }
};

function createInput() {
    let input = document.createElement('input');
    input.setAttribute('type', 'text');
    return input;
};

let input = createInput();
let div = createDiv('autocomplete');
div.appendChild(input);
document.body.append(div);


input.addEventListener("input", function() {
    let word = input.value;
    closeAllLists();
    if (!word) { return false;}
    let items = createDiv('autocomplete-items', 'items');
    this.parentNode.appendChild(items);

    let render = new InfiniteScroll(word);

    render.createStartItems();

    let eventWheel = function () {
        return function (e) {
            if(e.deltaY > 0) {
                render.appendFirst();
            }
            else if(e.deltaY < 0) {
                render.appendLast();
            }
        }
    };
    window.addEventListener('wheel', eventWheel());
});

