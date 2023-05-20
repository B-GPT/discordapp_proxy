export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    url.host = "cdn.discordapp.com";
    return fetch(url, {
      headers: request.headers,
      method: request.method,
      body: request.body
     // redirect: 'follow'
    });
  }
}
