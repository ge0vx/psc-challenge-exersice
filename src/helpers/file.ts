import { existsSync, readFileSync } from "fs";

export const getDataFile = (file: string): string[] | undefined => {
  if (!existsSync(file)) {
    console.error(`File not found ${file}`);
    return undefined;
  }

  //split text by each line
  const data = readFileSync(file)
    .toString()
    .split("\n")
    .filter((i) => i);
  return data;
};
