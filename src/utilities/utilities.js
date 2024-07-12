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

export function addOpacityToColor(color, opacity) {
  color = color.replace("#", "");
  let r = parseInt(color.substring(0, 2), 16);
  let g = parseInt(color.substring(2, 4), 16);
  let b = parseInt(color.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

export const getFormattedResponse = (res) => {
  const response =
    res
      // Replace newlines with HTML line breaks
      .replace(/\n/g, "<br>")
      // Format ## example as h4 and bold, ensuring no extra <br> tags are added
      .replace(/## (.*?)(<br>|$)/g, "<h4><strong>$1</strong></h4>")
      // Format text within **...** as bold and remove **
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      // Add bullet points for each section ending with :
      .replace(/(\b[\w\s]+:)\b/g, "<br><ul><li><strong>$1</strong></li>") + "</ul>";

  const output = response.replace(
    /<br>\* (.*?)(<br>|$)/g,
    "<br><div style='display: inline-block; margin-left: 20px;'>• $1</div>"
  );
  return output.replace(
    /<\/div>\* (.*?)(<br>|$)/g,
    "</div><span style='display: inline-block; margin-left: 20px;'>• $1</span>"
  );
};
