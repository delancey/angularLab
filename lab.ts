function sayHello(person: string): string{
    return "Hello, " + person;
}
var user = "Super Student";

document.getElementById("para").innerHTML = sayHello(user);

class Employee implements EmployeeOptions{
    firstName: string;
    lastName: string;
    age: number;
    phoneNumber: string;
    state: string;
    zipCode: number;
    occupation: string;
    hourlyWage: number;
    certifications: string[] = [];

        constructor(firstName: string, lastName: string, age?: number, phoneNumber?: string, state?: string, zipCode?: number, occupation?: string, hourlyWage?: number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.phoneNumber = phoneNumber;
        this.state = state;
        this.zipCode = zipCode;
        this.occupation = occupation;
        this.hourlyWage = hourlyWage;
    }
   
    fullName(){
        return this.firstName + " " + this.lastName;
    }

    nameAndLocation(){
        return this.firstName + " " + this.lastName +  "\n " + this.state + ", " + this.occupation;
    }

    contact(){
        return this.firstName + " " + this.lastName + ", " + this.phoneNumber;
    }

    salary(){
        return this.firstName + " " + this.lastName + ". Hourly wage is $" + this.hourlyWage + "."; 
    }
    
    weeklyWage(numHours: number = 40): string {
        return (
            "Name:  "+ this.firstName + this.lastName + ". Weekly wage:  $"+ (this.hourlyWage * numHours+ "<br>")
        );
    }

    allDetails() {
        return this.firstName + " " + this.lastName + ", " + this.age +". <br>" + this.phoneNumber + " "+ this.state + ", " + this.zipCode + ",  " + this.occupation + "<br>"; 
    }

    getCerts(...certifications: string[]){        
        this.certifications.push(...certifications);        
        return "Certifications: " + this.certifications + "";
    }
    
    static addEmployee(config:EmployeeOptions):Employee {
        return new Employee(config.firstName, config.lastName, config.age);        
    }    
}
    let employee1 = new Employee("Eloria ", "Smith", 24, "7045551212","CA", 90437, "napper", null);

    document.getElementById("two").innerHTML = employee1.contact();

     let employee2 = new Employee("Amir", "Thompson", 43, "(215) 555-1212", "PA", 19018, "musical director", null);
     document.getElementById("three").innerHTML = employee2.allDetails();

     let employee3 = new Employee("Paul", "Vickers", 64, "(978) 555-1212", "OK", 54325, "author", 50.00);
     document.getElementById("four").innerHTML = employee3.salary();

     let wageTest = new Employee("Ivy", "Jones", 19, "(212) 555-1212", "NY", 10036, "cashier", 9.75);
     document.getElementById("five").innerHTML = wageTest.weeklyWage(20);
     document.getElementById("six").innerHTML = wageTest.weeklyWage();
     document.getElementById("seven").innerHTML = wageTest.getCerts("CSM", "MBA");
     document.getElementById("eight").innerHTML = Employee.addEmployee({firstName:"Jane", lastName: "Doe"}).fullName();
     
     
     interface EmployeeOptions{
        firstName: string;
        lastName: string;
        age?: number;
        phoneNumber?: string;
        state?: string;
        zipCode?: number;
        occupation?: string;
        hourlyWage?: number;
     }
