const qs = require("qs");
export const baseURL = (() => {
  let url = window.location.href.split("/")[2];
  let splitUrl = url.split(".");
  if (splitUrl[1] === "portalmurid") {
    return `https://backend.${splitUrl[1]}.id`;
  } else {
    return `https://backend.portalmurid.id`;
  }
})();

export const homeUrl = (() => {
  let url = window.location.href.split("/")[2];
  let splitUrl = url.split(".");
  if (splitUrl[1] === "dian") {
    return `dian.com`;
  } else if (splitUrl[1] === "dian") {
    return `dian.com`;
  } else {
    return `localhost`;
  }
})();

const EPStore = {
  logIn: { url: "api/auth/login/", method: "POST" },
  logout: { url: "api/auth/logout/", method: "POST" },
};
export const generateRequestOptions = (key, options = {}) => {
  if (!key) {
    return null;
  }

  if (options && options.hasOwnProperty("queryParams")) {
    return {
      ...EPStore[key],
      url: EPStore[key].hasOwnProperty("baseURL")
        ? `${EPStore[key].baseURL}/${EPStore[key].url}?${qs.stringify(
            options.queryParams
          )}`
        : `${baseURL}/${EPStore[key].url}?${qs.stringify(options.queryParams)}`,
    };
  }

  if (options && options.hasOwnProperty("urlParams")) {
    return {
      ...EPStore[key],
      url: EPStore[key].hasOwnProperty("baseURL")
        ? `${EPStore[key].baseURL}/${EPStore[key].url}${options.urlParams}`
        : `${baseURL}/${EPStore[key].url}${options.urlParams}`,
    };
  }
  return {
    ...EPStore[key],
    url: EPStore[key].hasOwnProperty("baseURL")
      ? `${EPStore[key].baseURL}/${EPStore[key].url}`
      : `${baseURL}/${EPStore[key].url}`,
  };
};
export const generateURL = (key) => {
  return `${homeUrl}/${EPStore[key].url}`;
};
