export const arraysAreEqual = (arr1, arr2) => {
  if (arr1?.length !== arr2?.length) return false;

  for (let i = 0; i < arr1?.length; i++) {
    if (arr1[i].user !== arr2[i].user || arr1[i].res !== arr2[i].res) {
      return false;
    }
  }

  return true;
};

export function getDeviceName() {
  const userAgent = navigator.userAgent;
  if (/android/i.test(userAgent)) {
    return "Android Device";
  } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return "iOS Device";
  } else if (/Windows NT/.test(userAgent)) {
    return "Windows PC";
  } else if (/Macintosh/.test(userAgent)) {
    return "Macintosh";
  } else if (/Linux/.test(userAgent)) {
    return "Linux Device";
  }

  return "Unknown Device";
}
