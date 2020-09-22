const filterLaunch = (allLaunch) => {
  let __parseLaunch = allLaunch;
  console.log(__parseLaunch);
  return allLaunch;
};

let __filterYear = "2006";
let __filterLaunch = false;
let __filterLanding = false;

export const years = [
  { year: "2006", id: "1", isSelected: false },
  { year: "2007", id: "2", isSelected: false },
  { year: "2008", id: "2", isSelected: false },
  { year: "2009", id: "3", isSelected: false },
  { year: "2010", id: "4", isSelected: false },
  { year: "2011", id: "5", isSelected: false },
  { year: "2012", id: "6", isSelected: false },
  { year: "2013", id: "7", isSelected: false },
  { year: "2014", id: "8", isSelected: false },
  { year: "2015", id: "9", isSelected: false },
  { year: "2016", id: "10", isSelected: false },
  { year: "2017", id: "11", isSelected: false },
  { year: "2018", id: "12", isSelected: false },
  { year: "2019", id: "13", isSelected: false },
];

export const selectedFilters = (year, launch, landing) => {
  __filterYear = year;
  __filterLaunch = launch;
  __filterLanding = landing;
};

export default filterLaunch;
