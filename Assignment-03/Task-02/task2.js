// download function
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
// write function
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
// upload function
function uploadFile(filename, url) {
    console.log(`${filename} is start uploading at ${url}`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`uploading completed.`);
            const status = "Task-02 completed successfully!!";
            resolve(status);
        }, 5000)
    })
}

//chaining
downloadFile("https://downloadlink.com/")
    .then((data) => writeFile(data, "myFile.txt"))
    .then((data) => uploadFile(data, "https://uploadlink.com/"))
    .then((data) => console.log(data))

/*
    downloadFile("https://downloadlink.com/")
    .then((data)=>{
        return writeFile(data,"myFile.txt")
    })
    .then((data)=>{
        return uploadFile(data,"https://uploadlink.com/")
    })
    .then((data)=>{
        console.log(data)
    })
*/

/*
    downloadFile("https://downloadlink.com/")
    .then((data)=>(
        writeFile(data,"myFile.txt")
    ))
    .then((data)=>(
        uploadFile(data,"https://uploadlink.com/")
    ))
    .then((data)=>(
        console.log(data)
    ))
*/