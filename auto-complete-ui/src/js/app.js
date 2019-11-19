import '../style.css';
import InfiniteScroll from './infiniteScroll';
import * as CreateDom from './createDom';

let input = CreateDom.createInput();
let div = CreateDom.createDiv('autocomplete');
div.appendChild(input);
document.body.append(div);
input.focus();

input.addEventListener("input", function () {
    let word = this.value;
    InfiniteScroll.closeAllLists();
    if (!word) {
        return false;
    }
    let items = CreateDom.createDiv('autocomplete-items', 'items');
    this.parentNode.appendChild(items);

    let render = new InfiniteScroll(word);
    render.createStartItems();

    let eventWheel = function () {
        return function (e) {
            if (e.deltaY > 0) {
                render.appendFirst();
            } else if (e.deltaY < 0) {
                render.appendLast();
            }
        }
    };
    document.addEventListener('wheel', eventWheel());
});

document.addEventListener('keydown', function(event) {
    if (event.ctrlKey === true && event.keyCode === 70) {
        event.preventDefault();
        input.focus();
        return false;
    }
});


