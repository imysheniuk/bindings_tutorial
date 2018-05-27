// import '../../common'
export default class MyButtonCtrl {
    constructor(ChangeColorSrv) {
        this.ChangeColorSrv = ChangeColorSrv;
    }
    $onInit() {
        // this.ChangeColorSrv.onChange();
    }
}

MyButtonCtrl.$inject = ['ChangeColorSrv'];