const fs = require('fs');
const filePath = './movies.txt';

function startServer() {
    loadData().then(() => app.listen(3000, () => console.log('Ready on port 3000!')))
              .catch((err) => console.log(err));
}


function saveData(movies) {
    return new Promise ((resolve, reject) => {
        fs.writeFile(filePath, JSON.stringify(movies), (err) => {
            if (err) {
                console.error('Error: Failed to save data.');
                reject(err);
            } else {
                console.log('Data saved sucessfully.');
                resolve();
            }
        });
    });
}

function loadData() {
    return new Promise ((resolve, reject) => {
        fs.readFile(filePath, "utf8", (err, data) => {
            if (err) {
                console.error('Error: Failed to save data.');
                reject(err);
            } else {
                resolve(JSON.parse(data));
            }
        });
    });
}

module.exports = {
    startServer,
    saveData,
    loadData
}