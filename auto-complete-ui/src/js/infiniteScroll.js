import Iterator from './iterator';

class InfiniteScroll {
    constructor(word) {
        this.word = word;
        this.items = document.getElementById('items');
        this.iterator = new Iterator(this.word);
        this.ITEM_IN_LIST = 5;
    }

    createStartItems() {
        for (let i = 0; i < this.ITEM_IN_LIST; i++) {
            if (this.iterator.hasNext()) {
                let item = this.createItem(this.iterator.next(), this.word.length);
                this.items.appendChild(item);
            }
        }
    };

    createDiv(className) {
        let div = document.createElement('div');
        div.className = className;
        return div;
    };

    static closeAllLists(item) {
        let items = document.getElementsByClassName("autocomplete-items");
        for (let i = 0; i < items.length; i++) {
            if (item != items[i]) {
                items[i].parentNode.removeChild(items[i]);
            }
        }
    };

    createItem(next = this.iterator.next(), length = this.word.length) {
        let item = this.createDiv("item");
        item.innerHTML = "<strong>" + next.substr(0, length) + "</strong>";
        item.innerHTML += next.substr(length);
        item.innerHTML += "<input type='hidden' value='${next}'>";
        item.addEventListener("click", function (e) {
            document.getElementsByTagName('input')[0].value = next;
            InfiniteScroll.closeAllLists();
        });
        return item;
    };

    appendFirst() {
        if (this.iterator.hasNext()) {
            let item = this.createItem();
            this.items.firstChild.remove();
            this.items.appendChild(item);
        }
    };

    appendLast() {
        if (this.iterator.hasPreviousFive()) {
            let item = this.createItem(this.iterator.previousFiveItem());
            this.items.lastChild.remove();
            this.items.insertBefore(item, this.items.firstChild);
        }
    };

}

export default InfiniteScroll;
