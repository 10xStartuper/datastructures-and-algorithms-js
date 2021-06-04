function name(a, b) {
  //getting arrays of property names
  let aProps = Object.getOwnPropertyNames(a);
  let bProps = Object.getOwnPropertyNames(b);
  console.log(`${aProps}\n${bProps}`); //logging them

  //   Cheacking proprty lengths are different
  if (aProps.length != bProps.length) {
    return false;
  }

  for (let i = 0; i < aProps.length; i++) {
    let propName = aProps[i];
    if (a[propName] !== b[propName]) {
      return false;
    }
  }
  //   If everything matched correct
  return true;
}
