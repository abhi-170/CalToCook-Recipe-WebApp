function downloadFile(url, callback) {
    console.log(`Start downloading from ${url}`);
    setTimeout(() => {
        console.log("Downloading completed.");
        const data = "ABCDEFG";
        callback(data);
    }, 2500)
}

function writeFile(data, filename, callback) {
    console.log(`${data} is start writing in ${filename}`);
    setTimeout(() => {
        console.log("Writing completed.");
        const updatedFileName = "myUpdatedFile.txt";
        callback(updatedFileName);
    }, 2500)
}

function uploadFile(filename, url, callback) {
    console.log(`${filename} is start uploading at ${url}`);
    setTimeout(() => {
        console.log("uploading completed.");
        const status = "Task-01 completed successfully!!"
        callback(status);
    }, 5000)
}

downloadFile("https://downloadlink.com/", (data) => {
    writeFile(data, "myFile.txt", (filename) => {
        uploadFile(filename, "https://uploadlink.com/", (data) => {
            console.log(data);
        })
    })
})