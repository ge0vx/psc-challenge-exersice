import { getDataFile } from "./helpers/file";
import { Driver } from "./types";
import { getNumberOfVowels, getNumberOfConsonants, removeSpaces } from "./helpers/utils";
import { getDriverScoresByDestination, matchDestinationsToDrivers, matchReport } from "./assignmentByScore";

if (require.main === module) {
  //exit process if file paths are missing
  if (process.argv.length < 3) {
    console.error("Missing File Paths, include two file paths");
    process.exit(1);
  }

  //exit process if there are more than two file paths
  if (process.argv.length > 4) {
    console.error("Include only two file paths");
    process.exit(1);
  }

  const addressesFile = process.argv[2];
  const driversFile = process.argv[3];

  //get a list of data for each file
  const destinations = getDataFile(addressesFile);
  const drivers = getDataFile(driversFile);

  //checking if data exists
  if (!destinations || !drivers) {
    console.error(
      `one or both files are invalid: ${addressesFile}, ${driversFile}`
    );
    process.exit(1);
  }

  //checking if data is valid
  if (destinations.length !== drivers.length) {
    console.error("drivers and addresses list must be the same size");
    process.exit(1);
  }

  //driver object with consonants and vowels and length properties
  const driverObjs = drivers.map(
    (d): Driver => ({
      name: d,
      consonants: getNumberOfConsonants(d),
      vowels: getNumberOfVowels(d),
      length: removeSpaces(d).length
    })
  );

  const destinationDriversScore = getDriverScoresByDestination(destinations, driverObjs);
  const detinationMatches = matchDestinationsToDrivers(destinationDriversScore);

  if(detinationMatches){
    const matches = matchReport(detinationMatches);
    console.log(matches);
  }

}
