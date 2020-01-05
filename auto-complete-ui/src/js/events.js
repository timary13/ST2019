import InfiniteScroll from './infiniteScroll';
import { createDiv } from './createDom';

function eventWheel(scroll) {
    return function (event) {
        if (event.deltaY > 0) {
            scroll.appendFirst();
        } else if (event.deltaY < 0) {
            scroll.appendLast();
        }
    }
}

function eventInput(input) {
    return function() {
        const word = input.value;
        InfiniteScroll.closeAllLists();
        if (!word) {
            return false;
        }

        const items = createDiv('autocomplete-items', 'items');
        input.parentNode.appendChild(items);

        const scroll = new InfiniteScroll(word);
        scroll.createStartItems();
        addWheelEvent(eventWheel(scroll));
    }
}

function eventCtrlF(input) {
    const KEY_CODE_F = 70;
    return function (event) {
        if (event.ctrlKey === true && event.keyCode === KEY_CODE_F) {
            event.preventDefault();
            input.focus();
            return false;
        }
    }
}

function addWheelEvent(func) {
    document.addEventListener('wheel', func);
}

export function addInputEvent(input) {
    input.addEventListener('input', eventInput(input));
}

export function addCtrlFEvent(input) {
    document.addEventListener('keydown', eventCtrlF(input));
}
