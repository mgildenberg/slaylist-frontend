const apiKey = "AIzaSyAiQRWvm5CcUvkcgrVpJISWyTmdfZnt0-I";

export const checkServerResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error: ${res.status}`);
  }
};

function request(url, options) {
  return fetch(url, options).then(checkServerResponse);
}

export default function getChannelData(username) {
  const url = new URL("https://www.googleapis.com/youtube/v3/channels");

  // Adding parameters to the query string
  url.searchParams.append("part", "snippet"); // 'snippet' part includes the channel's thumbnails
  //   url.searchParams.append("forUsername", username);
  url.searchParams.append("forHandle", "@" + username);
  url.searchParams.append("key", apiKey);

  // Configure options for the fetch request
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  return request(url, options);
}
