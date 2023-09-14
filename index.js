// Write your solution in this file!
const employee = {
    name:"Victor",
    streetAddress:"Karen road"
}

function updateEmployeeWithKeyAndValue(obj,key,value){
    const newObj = { ...obj };

    newObj[key] = value;
  
    return newObj;

}

const newestObj= updateEmployeeWithKeyAndValue(employee,"name", "Sam");

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key] = value;

  return obj;
}

const otherObj= destructivelyUpdateEmployeeWithKeyAndValue(employee,"streetAddress", "11 Broadway");

function destructivelyDeleteFromEmployeeByKey(){
    delete employee.name;
    
    return employee;
    
}

function deleteFromEmployeeByKey(employee,key){
    const oldestObj= { ...employee };
    delete oldestObj.name;
    //oldestObj[key] = value;
    return oldestObj;
}


