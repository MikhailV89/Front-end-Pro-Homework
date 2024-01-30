'use strict';
const parseUrl = function (url) {
  const parsedUrl = new URL(url);

  return {
    href: parsedUrl.href,
    protocol: parsedUrl.protocol,
    host: parsedUrl.host,
    hostname: parsedUrl.hostname,
    pathname: parsedUrl.pathname,
    search: parsedUrl.search,
    hash: parsedUrl.hash,
    origin: parsedUrl.origin,
  };
}

console.log(parseUrl('https://example.com:8080/path/name?query=123#hash'));

const parseUrlExample = function () {
  
  return {
    href: window.location.href,
    protocol: window.location.protocol,
    host: window.location.host,
    hostname: window.location.hostname,
    pathname: window.location.pathname,
    search: window.location.search,
    hash: window.location.hash,
    origin: window.location.origin,
  };
}

console.log(parseUrlExample());