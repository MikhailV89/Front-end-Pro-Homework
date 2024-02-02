'use strict';
 const updateQueryString = function (url, key, value) {
  const parsedUrl = new URL(url);
  parsedUrl.searchParams.set(key, value);
  
  return parsedUrl.toString();
}

console.log(updateQueryString('https://example.com/search?q=query&sort=ascending&page=2', 'page', '5' ));