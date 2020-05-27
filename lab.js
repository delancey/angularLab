function sayHello(person) {
    return "Hello, " + person;
}
var user = "Super Student";
document.getElementById("para").innerHTML = sayHello(user);
var Employee = /** @class */ (function () {
    function Employee(firstName, lastName, age, phoneNumber, state, zipCode, occupation, hourlyWage) {
        this.certifications = [];
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.phoneNumber = phoneNumber;
        this.state = state;
        this.zipCode = zipCode;
        this.occupation = occupation;
        this.hourlyWage = hourlyWage;
    }
    Employee.prototype.fullName = function () {
        return this.firstName + " " + this.lastName;
    };
    Employee.prototype.nameAndLocation = function () {
        return this.firstName + " " + this.lastName + "\n " + this.state + ", " + this.occupation;
    };
    Employee.prototype.contact = function () {
        return this.firstName + " " + this.lastName + ", " + this.phoneNumber;
    };
    Employee.prototype.salary = function () {
        return this.firstName + " " + this.lastName + ". Hourly wage is $" + this.hourlyWage + ".";
    };
    Employee.prototype.weeklyWage = function (numHours) {
        if (numHours === void 0) { numHours = 40; }
        return ("Name:  " + this.firstName + this.lastName + ". Weekly wage:  $" + (this.hourlyWage * numHours + "<br>"));
    };
    Employee.prototype.allDetails = function () {
        return this.firstName + " " + this.lastName + ", " + this.age + ". <br>" + this.phoneNumber + " " + this.state + ", " + this.zipCode + ",  " + this.occupation + "<br>";
    };
    Employee.prototype.getCerts = function () {
        var _a;
        var certifications = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            certifications[_i] = arguments[_i];
        }
        (_a = this.certifications).push.apply(_a, certifications);
        return "Certifications: " + this.certifications + "";
    };
    Employee.addEmployee = function (config) {
        return new Employee(config.firstName, config.lastName, config.age);
    };
    return Employee;
}());
var employee1 = new Employee("Eloria ", "Smith", 24, "7045551212", "CA", 90437, "napper", null);
document.getElementById("two").innerHTML = employee1.contact();
var employee2 = new Employee("Amir", "Thompson", 43, "(215) 555-1212", "PA", 19018, "musical director", null);
document.getElementById("three").innerHTML = employee2.allDetails();
var employee3 = new Employee("Paul", "Vickers", 64, "(978) 555-1212", "OK", 54325, "author", 50.00);
document.getElementById("four").innerHTML = employee3.salary();
var wageTest = new Employee("Ivy", "Jones", 19, "(212) 555-1212", "NY", 10036, "cashier", 9.75);
document.getElementById("five").innerHTML = wageTest.weeklyWage(20);
document.getElementById("six").innerHTML = wageTest.weeklyWage();
document.getElementById("seven").innerHTML = wageTest.getCerts("CSM", "MBA");
document.getElementById("eight").innerHTML = Employee.addEmployee({ firstName: "Jane", lastName: "Doe" }).fullName();
