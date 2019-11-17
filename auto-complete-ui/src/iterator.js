import { createAutoComplete } from '../../auto-complete/js/script';
import cities from'./cities';

const autocomplete = createAutoComplete(cities);

let Iterator = function (word) {
    this.counter = -1;
    this.result = autocomplete(word);
};

Iterator.prototype.hasNext = function () {
    return ((this.counter + 1) <= (this.result.length - 1));
};

Iterator.prototype.next = function () {
    this.counter++;
    return this.result[this.counter];
};

Iterator.prototype.hasPreviousFive = function () {
    return ((this.counter - 5) >= 0);
};

Iterator.prototype.previousFiveItem = function () {
    let count = this.counter - 5;
    this.counter--;
    return this.result[count];
};

Iterator.prototype.isNotEmpty = function () {
    return ((this.result.length === 0) ? false : true);
};


export default Iterator;
