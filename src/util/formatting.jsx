// Create a new instance of Intl.NumberFormat for formatting currency in Indian Rupees (INR)
export const currencyFormatter = new Intl.NumberFormat('en-IN', {
    style: 'currency', // Specifies that we want the output to be in currency format
    currency: 'INR'     // Specifies the currency as Indian Rupee (₹)
});
