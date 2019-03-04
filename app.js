var events = require('events');
var util = require('util');

var Person = function (name) {
    this.name = name;
};

util.inherits(Person, events.EventEmitter);

var james = new Person('james');
var lars = new Person('lars');
var kirk = new Person('kirk');
var people = [james, lars, kirk];

people.forEach(function (person) {
    person.on('speak', function (mssg) {
        console.log(person.name + ' said: ' + mssg);
    })
});

james.emit('speak', 'hey lars');
lars.emit('speak', 'hey james');