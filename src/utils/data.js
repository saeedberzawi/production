export const data = [
  { id: 1, name: "john" },
  { id: 2, name: "peter" },
  { id: 3, name: "susan" },
  { id: 4, name: "anna" },
];

export const test = [
  {
    id: 1,
    name: "saeed",
    age: 30, // 1
    son: {
      firstson: "mohmaad", // 2
      grade: {
        firstyear: 1, // 3
        school: { name: "thaqafa alislamia" },
        secondyear: {
          school2: {
            // 4
            name: "al hidea alislamia", // 5
            address: {
              street: "bcahmoun", // 6
              phone: { tell: "943-432-111" }, // 7
            },
          },
        },

        third: 3,
      },
      secondson: "taha",
    },
    wife: "majeda",
  },
];
