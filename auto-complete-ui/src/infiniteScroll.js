import Iterator from './iterator';

let InfiniteScroll = function (word) {
    this.word = word;
    this.items = document.getElementById('items');
    this.iterator = new Iterator(this.word);
};

InfiniteScroll.prototype.createStartItems = function () {
    for(let i = 0; i < 5; i++) {
        if(this.iterator.hasNext()) {
            let item = this.createItem(this.iterator.next(), this.word.length);
            this.items.appendChild(item);
        }
    }
};

InfiniteScroll.prototype.createDiv = function(className) {
    let div = document.createElement('div');
    div.className = className;
    return div;
};

InfiniteScroll.prototype.createItem = function (next = this.iterator.next(), length = this.word.length) {
    let item = this.createDiv("item");
    item.innerHTML = "<strong>" + next.substr(0, length) + "</strong>";
    item.innerHTML += next.substr(length);
    item.innerHTML += "<input type='hidden' value='" + next + "'>";
    item.addEventListener("click", function (e) {
        document.getElementsByTagName('input')[0].value = next;
        this.closeAllLists();
    });
    return item;
};

InfiniteScroll.prototype.appendFirst = function () {
    if (this.iterator.hasNext()) {
        let item = this.createItem();
        this.items.firstChild.remove();
        this.items.appendChild(item);
    }
};

InfiniteScroll.prototype.appendLast = function () {
    if (this.iterator.hasPreviousFive()) {
        let item = this.createItem(this.iterator.previousFiveItem());
        this.items.lastChild.remove();
        this.items.insertBefore(item, this.items.firstChild);
    }
};


export default InfiniteScroll;
