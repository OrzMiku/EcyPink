import axios from 'axios';

class mikureq {
  constructor(baseURL, timeout = 10000) {
    this.instance = axios.create({
      baseURL,
      timeout,
    });
  }

  req(config) {
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  get(config) {
    return this.req({ ...config, method: 'get' });
  }
  post(config) {
    return this.req({ ...config, method: 'post' });
  }
}

export default mikureq;
