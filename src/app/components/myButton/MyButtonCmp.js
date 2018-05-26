import MyButtonCtrl from './MyButtonCtrl';
import './MyButton.css';

export default class MyButtonCmp {
    constructor () {
        this.controller = MyButtonCtrl;
        this.template = require('./MyButton.html');
        this.bindings = {
            onChange: '&'
        }
    }
}