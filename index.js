function createEmployeeRecord() {
  return `${this.firstName}, ${this.familyName}, ${this.title}, ${this.payPerHour}`;
}

const payroll = {
  firstName: "John",
  familyName: "Doe",
  title: "Software Engineer",
  payPerHour: 20,
  timeInEvents: [],
  timeOutEvents: []
};

const boundCreateEmployeeRecord = createEmployeeRecord.bind(payroll);
console.log(boundCreateEmployeeRecord())

function createEmployeeRecords(employeeData) {
    return employeeData.map((data) => {
      const [firstName, familyName, title, payPerHour] = data;
    return {
        firstName: firstName, 
        familyName: familyName,
        title: title, 
        payPerHour: parseInt(payPerHour, 10),
        timeInEvents: [],
        timeOutEvents: [],
    };
});
}
const employeeData = [
  ["John", "Doe", "Software Engineer", "20"],
  ["Jane", "Smith", "Product Manager", "25"],
];
const boundMap = createEmployeeRecords.bind(null, employeeData);
console.log(boundMap());

function createTimeInEvent(employee, dateTimeString) {
    const [date, time] = dateTimeString.split(" ");
    const [year, month, day] = date.split("-");
    const fullDate = `${year}-${month}-${day}`;
    const [hours, minutes] = time.match(/\d{2}/g);
    const timeInEventObj = {
      type: "TimeIn",
      date: date,
      hour: parseInt(time),
    };
    if (!employee.timeInEvents) {
      employee.timeInEvents = [];
    }
    employee.timeInEvents.push(timeInEventObj);
    return employee;
  }
  const employee = {name: "John Doe"};
  const dateTimeString = "2022-01-01 09:00";
  const boundfunction = createTimeInEvent.bind(employee);
  boundfunction(dateTimeString);

  function createTimeOutEvent(employee, dateTimeString) {
    const [date, time] = dateTimeString.split(" ");
    const [year, month, day] = date.split("-");
    const fullDate = `${year}-${month}-${day}`;
    const timeOutObj = {
      type: "TimeOut",
      date: date,
      hour: parseInt(time),
    };
    if (!this.timeOutEvents) {
      this.timeOutEvents = [];
    }
    this.timeOutEvents.push(timeOutObj);
    return this;
  }
 
  function hoursWorkedOnDate(record, dateMatched) {    
    const timeInEvent = record.timeInEvents.find(event => event.date === dateMatched);
    const timeOutEvent = record.timeOutEvents.find(event => event.date === dateMatched);
    const elapsedMilliseconds = timeOutEvent.hour - timeInEvent.hour;
    const elapsedHours = elapsedMilliseconds / 100;
    return elapsedHours;
  }
  const boundFunction = hoursWorkedOnDate(record);
  const dateMatched = "2022-01-01";
  boundFunction(dateMatched)

  function wagesEarnedOnDate(record, dateMatched) {
    const [date] = dateMatched.split(" ");
    const hoursWorked = hoursWorkedOnDate.bind(this)(record, dateMatched);
    const hourlyRate = parseInt(record.payPerHour, 10);
    const wagesEarned = hoursWorked * hourlyRate;
    return wagesEarned;
  }

 function allWagesFor(record) {
    const dates = record.timeOutEvents.map(function(object){
        return object.date
    });
    let totalWages = 0;
    dates.forEach(function(date) {
        const wages = wagesEarnedOnDate.bind(this)(record, date);
        totalWages += wages;
    });
    return totalWages;
  }

function calculatePayroll(record){
    console.log(record)

let totalPayOwed = 0;

record.forEach(employee => {

employee.timeInEvents.forEach(timeInEvent => {
const date = timeInEvent.date;
const payOwed = wagesEarnedOnDate.call(this, employee, date);

totalPayOwed += payOwed;
})
})
return totalPayOwed
 }



    
    