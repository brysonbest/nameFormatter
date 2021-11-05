//function that inverts the order of first and last name when provided

const nameSwapper = function(name) {
  let subLast = '';
  let subFirst ='';
  for (let i = 0; i < name.length; i++) {
    if (name[i] === " ") {
      subLast = name.substring(i+1, name.length);
      subFirst = name.substring(0,i);
    }
  }
  if (subLast != '' && subFirst != '') {
    name = subLast + ', ' + subFirst
  };
  return name;
}

const nameInverter = function(name) {
  if(name === undefined) {
    return Error;
  }
  if (name === "") {
    return "";
  }
  name = name.trim();
  let prefixSlice = name.slice(0,4);
  let honorific = '';
  if (prefixSlice === 'Dr. ' || prefixSlice === 'Mr. ' || prefixSlice === 'Ms. ' || prefixSlice === 'Mrs.') {
    honorific = prefixSlice;
    name = name.slice(4, name.length).trim(); 
  }
  name = nameSwapper(name);
  honorific += name;
  name = honorific;
  if (name === "Dr." || name === "Mr." || name === "Mrs." || name === "Ms." ) {
    return "";
  }
  return name;
}



module.exports = nameInverter;