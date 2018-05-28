export default class MyButtonCtrl {
    constructor(ChangeColorSrv) {
        this.ChangeColorSrv = ChangeColorSrv;
    }
    $onInit() {
    }
}

MyButtonCtrl.$inject = ['ChangeColorSrv'];