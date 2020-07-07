const fs = require('fs');
const ApiHandler = require('./api-handler');

class FileHandler {

    constructor(fileName) {
        this.fileName = fileName;
        this.fs = fs;
        this.apiHandler = new ApiHandler("https://jsonplaceholder.typicode.com/todos");
    }

    async writeDataToFile() {
        const JsonData = await this.apiHandler.get();
        const text = JSON.stringify(JsonData.data);
        this.fs.writeFile(this.fileName, text, (err) => {
            if (err) console.log(err);
            console.log("file created successfully...");
        });

    }
}

module.exports = FileHandler;