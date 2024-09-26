var customerName = "bob";
const leastFavoriteCustomer = "someone";

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    bestCustomer = 'not bob';
}

function overwriteBestCustomer(newCustomer) {
    bestCustomer = newCustomer;
}

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'bob';
}