import { Driver, DriverScore } from "./types";
import { getCommonFactors } from "./helpers/utils";
import { ODD_INCREMENT, EVEN_INCREMENT, FACTORS_INCREMENT } from "./constants";

const getDirversScoreByDestination = (
  destination: string,
  drivers: Driver[]
): DriverScore[] => {
  const scores: DriverScore[] = [];

  //calculate score for every driver by each destination
  for (const driver of drivers) {
    scores.push([driver, calculateScore(destination, driver)]);
  }

  //descending order
  scores.sort((a: DriverScore, b: DriverScore) => {
    return b[1] - a[1];
  });

  return scores;
};

//Calculate score for each kind of case
const calculateScore = (destination: string, driverObj: Driver): number => {
  let score = 0;
  if (destination.length % 2 === 0) {
    //even case
    score = driverObj.vowels * EVEN_INCREMENT;
  } else {
    //odd case
    score = driverObj.consonants * ODD_INCREMENT;
  }

  score = getCommonFactors(destination.length, driverObj.length)
    ? score
    : score * FACTORS_INCREMENT;

  return score;
};

export const getDriverScoresByDestination = (
  destinations: string[],
  drivers: Driver[]
): Record<string, DriverScore[]> => {
  const allSuitabilityScore: Record<string, DriverScore[]> = {};

  for (const destination of destinations) {
    allSuitabilityScore[destination] = getDirversScoreByDestination(
      destination,
      drivers
    );
  }

  return allSuitabilityScore;
};
