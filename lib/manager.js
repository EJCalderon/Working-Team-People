const Employee = require('./employee');
class Manager extends Employee {
    constructor(name, id, email, officeNumber){
            super(name, id, email);
            this.getOfficeNumber = officeNumber;
            this.role = "Manager";
    }
    getOfficeNumber(){
        return this.officeNumber
    }
    getRole(){
        return this.Manager;
    }
}

module.exports = Manager;
