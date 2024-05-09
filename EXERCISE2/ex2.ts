  // store aperson`s name in aariable, and then print that person`s name in lowercase, uppercase and title case
  let personName ="maria yasir";

  // in lowercase
  console.log("lowercase:", personName.toLowerCase());

  // in uppercase
  console.log("upppercase", personName.toUpperCase());

  // in titlecase   
  console.log("titlecase:", personName.replace(/\b\w/g,c=> c.toUpperCase()));