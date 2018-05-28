export default class AppCtrl {
    $onInit() {
        this.onChange = (cl, ev) => {
            ev = (this.color = cl)
        }
    }
}

// https://www.w3schools.com/angular/angular_events.asp