# psc-challenge-exersice

## Dependencies

- NodeJS (> v18)
- NPM or Yarn

## Instructions to build and run code
In the main `package.json` you'll have access to the following scripts:

- `npm run install`: To install all dependecies.
- `npm run build`: To transpile the code to pure vanilla javascript.
- `npm run start`: To excute the builded files.

After downloading the project, if you have node v18 or above installed, run the following scripts in the console:

- `npm run install`
- `npm run start data/10-list-addresses.txt data/10-list-drivers.txt`

## Assumptions

Spaces in the string text are removed when the program calculates length of the string.

## Instrucctions

Platform Science Code Exercise
Our sales team has just struck a deal with Acme Inc to become the exclusive provider for routing their product shipments via 3rd party trucking
fleets. The catch is that we can only route one shipment to one driver per day.

Each day we get the list of shipment destinations that are available for us to offer to drivers in our network. Fortunately our team of highly trained
data scientists have developed a mathematical model for determining which drivers are best suited to deliver each shipment.
With that hard work done, now all we have to do is implement a program that assigns each shipment destination to a given driver while
maximizing the total suitability of all shipments to all drivers.

The top-secret algorithm is:
If the length of the shipment's destination street name is even, the base suitability score (SS) is the number of vowels in the driver’s name
multiplied by 1.5.
If the length of the shipment's destination street name is odd, the base SS is the number of consonants in the driver’s name multiplied by 1.
If the length of the shipment's destination street name shares any common factors (besides 1) with the length of the driver’s name, the SS is
increased by 50% above the base SS.

For example, if provided a driver file with Daniel Davidson on one line and an address file with 44 Fake Dr., San Diego, CA 92122 on
a line, that pairing’s suitability score would be 9.

Write an application in the language of your choice that assigns shipment destinations to drivers in a way that maximizes the total SS over the set
of drivers. Each driver can only have one shipment and each shipment can only be offered to one driver. Your program should run on the
command line and take as input two newline separated files, the first containing the street addresses of the shipment destinations and the second
containing the names of the drivers. The output should be the total SS and a matching between shipment destinations and drivers. You do not
need to worry about malformed input, but you should certainly handle both upper and lower case names.