import ElementCmp from './ElementCmp';
import ChangeColorService from '../../common/ChangeColorService';

angular.module('app.components.element', [])
    .component('element', new ElementCmp())
    .service('ChangeColorSrv', ChangeColorService);