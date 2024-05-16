export const arraysAreEqual = (arr1, arr2) => {
  if (arr1?.length !== arr2?.length) return false;

  for (let i = 0; i < arr1?.length; i++) {
    if (arr1[i].user !== arr2[i].user || arr1[i].res !== arr2[i].res) {
      return false;
    }
  }

  return true;
};
