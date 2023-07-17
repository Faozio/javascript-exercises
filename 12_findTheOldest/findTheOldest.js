const findTheOldest = function(people) {

  return people.reduce((oldest, person) => {

    const currentYear = new Date().getFullYear();

    const oldestAge = oldest.yearOfDeath 
      ? oldest.yearOfDeath - oldest.yearOfBirth
      : currentYear - oldest.yearOfBirth;

    const personAge = person.yearOfDeath
      ? person.yearOfDeath - person.yearOfBirth  
      : currentYear - person.yearOfBirth;

    if(oldestAge > personAge) {
      return oldest;
    } else {
      return person;
    }

  });

};


// Do not edit below this line
module.exports = findTheOldest;
