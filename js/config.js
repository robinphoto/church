const isLocal = ["localhost", "127.0.0.1"].includes(window.location.hostname);
export const DATA_BASE_URL = isLocal ? "../data" : "https://robinphoto.github.io/data";
