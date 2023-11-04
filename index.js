// Your code here
function createEmployeeRecord(data){
    const [firstName, familyName, title, payPerHour] = data;
    
    const payroll = {
        firstName: firstName,
        familyName: familyName,
        title: title,
        payPerHour: parseInt(payPerHour, 10),
        timeInEvents: [],
        timeOutEvents: []
    }
    return payroll;
}
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
})
}
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
  function createTimeOutEvent(employee, dateTimeString) {
    const [date, time] = dateTimeString.split(" ");
    const [year, month, day] = date.split("-");
    const fullDate = `${year}-${month}-${day}`;
    const timeOutObj = {
      type: "TimeOut",
      date: date,
      hour: parseInt(time),
    };
    if (!employee.timeOutEvents) {
      employee.timeOutEvents = [];
    }
    employee.timeOutEvents.push(timeOutObj);
    return employee;
  }
  function hoursWorkedOnDate(record, dateMatched) {    
    const timeInEvent = record.timeInEvents.find(event => event.date === dateMatched);
    const timeOutEvent = record.timeOutEvents.find(event => event.date === dateMatched);
    const elapsedMilliseconds = timeOutEvent.hour - timeInEvent.hour;
    const elapsedHours = elapsedMilliseconds / 100;
    return elapsedHours;
  }
  function wagesEarnedOnDate(record, dateMatched) {
    const [date] = dateMatched.split(" ");
    const hoursWorked = hoursWorkedOnDate(record, dateMatched);
    const hourlyRate = parseInt(record.payPerHour, 10);
    const wagesEarned = hoursWorked * hourlyRate;
    return wagesEarned;
  }
 function allWagesFor(record) {
    const dates = record.timeOutEvents.map(function(object){
        return object.date
    });
    let totalWages = 0;
//   console.log(dates)
    dates.forEach(function(date) {
        const wages = wagesEarnedOnDate(record, date);
        // console.log(wages)
        // console.log(wages)
        totalWages += wages;
        // console.log(totalWages)
    });
    return totalWages;
  }
function calculatePayroll(record){
    console.log(record)
//iterate through the array of employee records and for each 
//employee, calculate the pay owed for each date using 
//wagesEarnedOnDate function.
//Then, accumulate the total pay owed for all dates worked 
//by each employee
let totalPayOwed = 0;

record.forEach(employee => {

employee.timeInEvents.forEach(timeInEvent => {
const date = timeInEvent.date;
const payOwed = wagesEarnedOnDate(employee, date);

totalPayOwed += payOwed;
})
})
return totalPayOwed
 }

  //parameter is an array of employee records
    //return total sum of pay as a number
    //using wagesEarnedOnDate, accumulate value of all dates worked by employee in the record- as an integer.


    
    