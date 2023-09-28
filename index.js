// Write your solution in this file!
var customerName = "bob";

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
  }

function setBestCustomer() {
  bestCustomer = "not bob";
}

function overwriteBestCustomer() {
    bestCustomer = "maybe bob";
}

const leastFavoriteCustomer = "john";

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "jane"; // This will cause an error because you cannot reassign a constant variable.
}