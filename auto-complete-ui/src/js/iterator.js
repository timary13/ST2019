import {createAutoComplete} from '../../../auto-complete/js/script';
import cities from '../cities';

const autocomplete = createAutoComplete(cities);

class Iterator {
    constructor(word, count) {
        this.counter = -1;
        this.result = autocomplete(word);
        this.ITEM_IN_LIST = count;
    };

    hasNext() {
        return ((this.counter + 1) <= (this.result.length - 1));
    };

    next() {
        this.counter++;
        return this.result[this.counter];
    };

    hasPreviousFive() {
        return ((this.counter - this.ITEM_IN_LIST) >= 0);
    };

    previousFiveItem() {
        const count = this.counter - this.ITEM_IN_LIST;
        this.counter--;
        return this.result[count];
    };

    isNotEmpty() {
        return (this.result.length !== 0);
    };

}

export default Iterator;
