const megaBind = require('./main');

megaBind(someDo);


const context1 = {
    name: 'name1',
};

const context2 = {
    name: 'name2',
};

function someDo() {
    return this;
}

const test = someDo.bind(context1).bind(context2);
console.log(test());
