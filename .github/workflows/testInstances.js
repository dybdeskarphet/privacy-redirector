const axios = require('axios');
const fs = require('fs');

async function checkUrl(url) {
  try {
    console.debug(`Checking URL ${url}`);
    await axios.get(url, { headers: {'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:123.0) Gecko/20100101 Firefox/123.0'}});
    return null;
  } catch (error) {
    if(error.code === 'ENOTFOUND') {
      return "ENOTFOUND";
    }
    if (error.response === 404 || error.response === 403 || error.response >= 500) {
      return "HTTP error: " + error.response;
    }
  }
}

async function checkUrls(instances) {
  let hasFailed = false;

  var checks = []
  for (const k in instances) {
    for(const i in instances[k]){
      const url = `https://${instances[k][i]}`;
      checks.push([url, checkUrl(url)]);
    }
  }

  console.log('\n\n\n\n##########\n\n')

  for(var a in checks) {
    let result = await checks[a][1];
    if(result) {
      console.warn(`Warning: URL ${checks[a][0]} is down! ${result}`);
      // console.debug(result)
      hasFailed = true;
    }
  }

  if (hasFailed) {
    console.error('\n\nThere are offline privacy instances');
    process.exit(1);
  } else {
    console.log('All instances are online');
  }
}

window = {
  location:
    { hostname: "NONE", hash: "x" }
};
let extension = require('../../privacy-redirector.user.js')

checkUrls(extension.Instances);
