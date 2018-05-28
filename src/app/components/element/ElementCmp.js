import ElementCtrl from './ElementCtrl';
import './Element.css';

export default class ElementCmp {
    constructor () {
        this.controller = ElementCtrl;
        this.template = require('./Element.html');
    }
}