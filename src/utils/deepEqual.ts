export const deepEqual = (obj1: any, obj2: any): boolean => {
  // Check nullish
  if (typeof obj1 !== "object" || typeof obj2 !== "object") {
    return obj1 === obj2;
  }

  // Check if both objects are null
  if (obj1 === null && obj2 === null) {
    return true;
  }

  // Check if the number of keys is the same
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  // Recursively check each property
  for (const key of keys1) {
    if (!deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
};
