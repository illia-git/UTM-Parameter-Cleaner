function() {
  if (!document.referrer) {
    return null;
  }

  try {
    var referrerURL = new URL(document.referrer);
  } catch (e) {
    console.error("Error parsing the referrer URL:", e);
    return null;
  }

  var usefulParams = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];

  function isParamUseful(param) {
    return usefulParams.indexOf(param) !== -1;
  }

  var filteredParams = new URLSearchParams();

  try {
    referrerURL.searchParams.forEach(function (value, key) {
      if (isParamUseful(key)) {
        filteredParams.append(key, value);
      }
    });

    var cleanedUrl = referrerURL.origin + referrerURL.pathname;
    if (Array.from(filteredParams).length > 0) {
      cleanedUrl += "?" + filteredParams.toString();
    }

    return cleanedUrl;
  } catch (e) {
    console.error("Error processing referrer URL parameters:", e);
    return null;
  }
}
