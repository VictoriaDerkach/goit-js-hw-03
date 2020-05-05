const findBestEmployee = function(employees) {
  const values = Object.values(employees);
  let maxValue = 0;
  for (let i = 0; i < values.length; i++) {
    if (maxValue < values[i]) {
      maxValue = values[i];
    }
  }
  for (const key in employees) {
    if (employees.hasOwnProperty(key)) {
      const value = employees[key];
      if (maxValue === value) {
        return key;
      }
    }
  }
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux
