import './myButton';
import './element';
import ChangeColorService from '../common/ChangeColorService';


angular.module('app.components', [
    'app.components.myButton',
    'app.components.element'
])
.service('ChangeColorSrv', ChangeColorService);