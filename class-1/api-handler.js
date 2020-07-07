const axios = require('axios').default;

class ApiHandler {

    constructor(url) {
        this.axios = axios;
        this.url = url;
    }

    get() {
        return this.axios.get(this.url);
    }
}

module.exports = ApiHandler;