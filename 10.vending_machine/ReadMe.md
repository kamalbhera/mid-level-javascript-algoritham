Write a function that will help a vending machine return the most efficient change in coins possible when given a sales price and a payment.

For example, if a sales price is $0.20 and a customer gives the machine a $1 bill, then your function should return $0.80 in change. More specifically, the function should return the $0.80 as 3 quarters and 1 nickel, because that's the most efficient (that is, it uses the fewest number of coins).

Here are the following types of U.S. coins that the vending machine can use for returning change:

Pennies: $0.01

Nickels: $0.05

Dimes: $0.10

Quarters: $0.25

Input Variable:

Your input variables will be an item price and a payment array with all of the monetary inputs into the machine that must be added together to compute the total payment. For example, the payment array which simulates the customer inputting a quarter, dime, and dollar for a total payment of $1.35 may look like:

[0] 0.25

[1] 0.10

[2] 1.00

Return Variable:

The return variable should be an integer array of where the following positions represent the number of coins returned:

[0] number of pennies returned

[1] number of nickels returned

[2] number of dimes returned

[3] number of quarters returned

Notes:

The return array should contain an entry for every type of coin, even if it is 0. For example, if $0.80 is returned as 3 quarters and a nickel, then the returned array should be [0, 1, 0, 3] which represents [pennies, nickels, dimes, quarters].

To avoid rounding issues with floats, consider converting all dollar/cents amounts to be expressed purely in cents (for example, $1.23 is 123 cents).

If not enough payment is provided, return the full amount submitted, but in coins only. For example, if a customer gives the machine a $1.00 bill and the item price is $1.25, then the customer's payment is insufficient and should be returned, but as 4 quarters instead of as the original $1.00 bill, which would be a return array of [0,0,0,4].
