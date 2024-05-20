import fs from "fs";


const content = "This is a content";

function createFile(content) {
    fs.writeFile("./task/new.txt", content, (err, data) => {
        if (err) {
            console.log("Error: Writing File", err);
        } else {
            console.log("Successfully created content")
        }
    });
};

createFile(content);

const appendContent = "This is appended Content";

function appendFileContent(appendContent) {
    fs.writeFile("./task/new.txt", appendContent, (err, data) => {
        if (err) {
            console.log("Error: Writing File", err);
        } else {
            console.log("Successfully appended content", data)
        }
    });
};

appendFileContent(appendContent);