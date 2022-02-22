const Employee = require('');
class Manager extends Employee {
    constructor(name, id, email, getOfficeNumber){
            super(name, id, email);
            this.github = getOfficeNumber;
    }
    getOfficeNumber(){
        return this.getOfficeNumber
    }
    getRole(){
        return 'Manager';
    }
}

module.exports = Manager;
