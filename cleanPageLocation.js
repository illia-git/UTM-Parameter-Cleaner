function() {
  try {
    var currentURL = new URL(window.location.href);
  } catch (e) {
    console.error("Error parsing the current URL:", e);
    return null;
  }

  var usefulParams = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];

  function isParamUseful(param) {
    return usefulParams.indexOf(param) !== -1;
  }

  var filteredParams = new URLSearchParams();

  try {
    currentURL.searchParams.forEach(function (value, key) {
      if (isParamUseful(key)) {
        filteredParams.append(key, value);
      }
    });

    var newPath = currentURL.pathname;
    if (Array.from(filteredParams).length > 0) {
      newPath += "?" + filteredParams.toString();
    }

    return newPath;
  } catch (e) {
    console.error("Error processing URL parameters:", e);
    return null;
  }
}
