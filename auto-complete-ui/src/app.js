import './style.css';
import { createAutoComplete } from '../../auto-complete/js/script';
import cities from'./cities';

const autocomplete = createAutoComplete(cities);

function createDiv(className) {
    let div = document.createElement('div');
    div.className = className;//'autocomplete'
    return div;
}

function createInput(id) {
    let input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('id', id);
    return input;
}

function closeAllLists(item) {
    let items = document.getElementsByClassName("autocomplete-items");
    for (let i = 0; i < items.length; i++) {
        if (item != items[i]) {
            items[i].parentNode.removeChild(items[i]);
        }
    }
}

let input = createInput('inputWord');
let div = createDiv('autocomplete');
div.appendChild(input);
document.body.append(div);

input.addEventListener("input", function(e) {
    let word = this.value;
    closeAllLists();
    if (!word) { return false;}
    let items = createDiv('autocomplete-items');
    this.parentNode.appendChild(items);

    let result = autocomplete(word);

    for (let i = 0; i < result.length; i++) {
        let item = document.createElement("div");
        item.innerHTML = "<strong>" + result[i].substr(0, word.length) + "</strong>";
        item.innerHTML += result[i].substr(word.length);
        item.innerHTML += "<input type='hidden' value='" + result[i] + "'>";

        item.addEventListener("click", function(e) {
            input.value = this.getElementsByTagName("input")[0].value;
            closeAllLists();
        });

        items.appendChild(item);

    }
});

document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
