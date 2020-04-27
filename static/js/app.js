function Person(fName, lName, age, address, contact, email) {
    this.fName = fName;
    this.lName = lName;
    this.age = age;
    this.address = address;
    this.contact = contact;
    this.email = email;
    
        
    return this.fName + ', ' + this.lName;
}


Person.prototype.presentaton( ){
    return 'Prénom : ' this.fName  ', Nom:  ' + this.lName + ', Age:' + this.age;
}