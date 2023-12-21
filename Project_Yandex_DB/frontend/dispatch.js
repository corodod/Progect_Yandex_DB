class Dispatch {
    constructor(obj) {
        this.dispatch_date = obj.dispatch_date;
    }
    print() {
        console.log(this.to_string());
    }
    to_string() {
        return "Dispatch_date: " + this.dispatch_date;
    }
    to_option_entry() {
        return '<option value=\"' + this.dispatch_date + '\">' +
        this.dispatch_date + '</option>';
    }
}