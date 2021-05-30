import rawRequest, { extend } from "umi-request";

const API_KEY = "i469IXnhKZdxzAetTULG83lWhAWcd7gjSM4WUIqq";

const request = extend({
  prefix: "https://api.nal.usda.gov/fdc/v1",
  params: { api_key: API_KEY },
});

export function searchFoods(keyword) {
  return request("/foods/search", {
    params: {
      query: keyword,
    },
  });
}

export function keywordToImages(keyword) {
  return rawRequest("/search", {
    prefix: "https://www.google.com",
    params: {
      q: keyword,
      tbm: "isch",
    },
    getResponse: true,
  })
    .then(({ data }) => {
      const template = `<template${data.split("template")[2]}template>`;
      console.log("template :>> ", template);
      return Array.from(
        template.matchAll(/(?<=(data-src="))http.+?(?=")/g)
      ).map((d) => d[0]);
    })
    .catch(() => []);
}

export function getFood(id) {
  return rawRequest(`/${id}`, {
    prefix: "https://fdc.nal.usda.gov/portal-data/external",
  });
}

export default request;
