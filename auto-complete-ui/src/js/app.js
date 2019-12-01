import '../style.css';
import * as CreateDom from './createDom';
import { addInputEvent, addCtrlFEvent } from './events';

const input = CreateDom.createInput();
const div = CreateDom.createDiv('autocomplete');
div.appendChild(input);
document.body.append(div);
input.focus();

addInputEvent(input);
addCtrlFEvent(input);


