
export function createDiv(className, id = '') {
    let div = document.createElement('div');
    div.className = className;
    if(id !== '') {
        div.setAttribute('id', id);
    }
    return div;
};

export function createInput() {
    let input = document.createElement('input');
    input.setAttribute('type', 'text');
    return input;
};

