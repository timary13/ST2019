import Iterator from './iterator';
import {createDiv, createHiddenInput, createStrong} from './createDom';

class InfiniteScroll {
    constructor(word) {
        this.word = word;
        this.items = document.getElementById('items');
        this.ITEM_IN_LIST = 5;
        this.iterator = new Iterator(this.word, this.ITEM_IN_LIST);
    }

    createStartItems() {
        for (let i = 0; i < this.ITEM_IN_LIST; i++) {
            if (this.iterator.hasNext()) {
                const item = this.createItem(this.iterator.next(), this.word.length);
                this.items.appendChild(item);
            }
        }
    };

    static closeAllLists(item) {
        const items = document.getElementsByClassName("autocomplete-items");
        for (let i = 0; i < items.length; i++) {
            if (item != items[i]) {
                items[i].parentNode.removeChild(items[i]);
            }
        }
    };

    createItem(next = this.iterator.next(), length = this.word.length) {
        const item = createDiv("item"),
            bold = createStrong(next.substr(0, length)),
            simplyText = document.createTextNode(next.substr(length)),
            hiddenInput = createHiddenInput(next);
        item.append(bold, simplyText, hiddenInput);
        item.addEventListener("click", function (e) {
            document.getElementsByTagName('input')[0].value = next;
            InfiniteScroll.closeAllLists();
        });
        return item;
    };

    appendFirst() {
        if (this.iterator.hasNext()) {
            const item = this.createItem();
            this.items.firstChild.remove();
            this.items.appendChild(item);
        }
    };

    appendLast() {
        if (this.iterator.hasPreviousFive()) {
            const item = this.createItem(this.iterator.previousFiveItem());
            this.items.lastChild.remove();
            this.items.insertBefore(item, this.items.firstChild);
        }
    };

}

export default InfiniteScroll;
