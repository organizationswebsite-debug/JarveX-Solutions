export const regions = [
  {
    region: "Northeast",
    states: ["Maine", "New Hampshire", "Vermont", "Massachusetts", "Rhode Island", "Connecticut", "New York", "New Jersey", "Pennsylvania"],
  },
  {
    region: "Southeast",
    states: ["Delaware", "Maryland", "Virginia", "West Virginia", "North Carolina", "South Carolina", "Georgia", "Florida", "Alabama", "Mississippi", "Tennessee", "Kentucky", "Louisiana", "Arkansas"],
  },
  {
    region: "Midwest",
    states: ["Ohio", "Michigan", "Indiana", "Illinois", "Wisconsin", "Minnesota", "Iowa", "Missouri", "North Dakota", "South Dakota", "Nebraska", "Kansas"],
  },
  {
    region: "Southwest",
    states: ["Texas", "Oklahoma", "New Mexico", "Arizona"],
  },
  {
    region: "West",
    states: ["California", "Nevada", "Utah", "Colorado", "Wyoming", "Montana", "Idaho", "Washington", "Oregon", "Alaska", "Hawaii"],
  },
];

export const totalStates = regions.reduce((sum, r) => sum + r.states.length, 0);

