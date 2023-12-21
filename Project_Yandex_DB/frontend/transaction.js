class Transaction {
    constructor(obj) {
        this.id = obj.id;
        this.status = obj.status;
        this.dispatch_date = obj.dispatch_date;
    }
    print() {
        console.log(this.to_string());
    }
    to_string() {
        return "Id: " + this.id + ", status: " + this.status + ", dispatch_date: " + this.dispatch_date;
    }
    to_table_entry() {
        return '<tr><td>' + 
            this.id + '</td><td>' + 
            this.status + '</td><td>' + 
            this.dispatch_date + '</td></tr>'
    }
}