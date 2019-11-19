import {createAutoComplete} from '../../../auto-complete/js/script';
import cities from '../cities';

const autocomplete = createAutoComplete(cities);

class Iterator {
    constructor(word) {
        this.counter = -1;
        this.result = autocomplete(word);
    };

    hasNext() {
        return ((this.counter + 1) <= (this.result.length - 1));
    };

    next() {
        this.counter++;
        return this.result[this.counter];
    };

    hasPreviousFive() {
        return ((this.counter - 5) >= 0);
    };

    previousFiveItem() {
        let count = this.counter - 5;
        this.counter--;
        return this.result[count];
    };

    isNotEmpty() {
        return ((this.result.length === 0) ? false : true);
    };

}

export default Iterator;
