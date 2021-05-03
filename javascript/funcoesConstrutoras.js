function Person(name) {
    this.name = name;
    this.walk = function () {
        return this.name + ' está andando.';
    };
}

const douglas = new Person('Douglas');
console.log(douglas.name);
console.log(douglas.walk());

const cris = new Person('Cris');
console.log(cris.name);
console.log(cris.walk());
