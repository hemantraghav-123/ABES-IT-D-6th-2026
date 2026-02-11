import { readFile, writeFile } from "./readAndWrite.js";

const fileData = async (path) => {
    try {
        const data = await readFile(path);
        console.log(data);
        return data;
    } catch (error) {
        console.log("Service is not working");
    }
};

const addStudent = async (path, newStudent) => {
    const students = await fileData(path);
    students.push(newStudent);
    await writeFile(path, students);
};
await fileData("./studdents.json");
await addStudent("./studdents.json", { id: 4, name: "D" });
await fileData("./studdents.json");