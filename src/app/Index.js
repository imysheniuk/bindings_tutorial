import angular from 'angular';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';
import './components';
import './common';
import AppCmp from './AppCmp';


angular.module('app', ['app.components'])
.component('app', new AppCmp());
