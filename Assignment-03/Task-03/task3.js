function downloadFile(url) {
    console.log(`Start downloading from ${url}`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Downloading completed.`);
            const data = "ABCDEFG";
            resolve(data);
        }, 2500)
    })
}

function writeFile(data, filename) {
    console.log(`${data} is start writing in ${filename}`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Writing completed.`);
            const updatedFileName = "myUpdatedFile.txt";
            resolve(updatedFileName);
        }, 2500)
    })
}

function uploadFile(filename, url) {
    console.log(`${filename} is start uploading at ${url}`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`uploading completed.`);
            const status = "Task-03 completed successfully!!";
            resolve(status);
        }, 5000)
    })
}

async function start() {
    const data = await downloadFile("https://downloadlink.com/");
    const filename = await writeFile(data, "myFile.txt");
    const status = await uploadFile(filename, "https://uploadlink.com/");
    console.log(status);
}
start();