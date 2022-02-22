class Employee {
    constructor (name, id, email, role = "Employee") {
        this.name = name;
        this.role = role;
        this.email = email;
        this.role = role;
    }
    
    getName() {
        return this.name
    }
    getId() {
        return this.id
    }
    getRole() {
        return this.role
    }
    getEmail() {
        return this.email
    }
    getRole() {
        return this.role
    }
}

module.exports = Employee
