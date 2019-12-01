export function createDiv(className, id = '') {
    const div = document.createElement('div');
    div.className = className;
    if(id !== '') {
        div.setAttribute('id', id);
    }
    return div;
};

export function createInput() {
    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    return input;
};

export function createStrong(word) {
    const bold = document.createElement('strong');
    const textBold = document.createTextNode( word);
    bold.appendChild(textBold);
    return bold;
};

export function createHiddenInput(value) {
    const hiddenInput = document.createElement('input');
    hiddenInput.setAttribute('type', 'hidden');
    hiddenInput.setAttribute('value', value);
    return hiddenInput;
};

