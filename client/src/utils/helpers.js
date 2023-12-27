// import _ from "lodash";

export const errorCatch = (e) => {
  // I googled what it says when you catch a Pokemon
  // that's why it's so happy
  console.error("All right! Error was caught!", e)
};

export const capitalize = (string) => {
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
}