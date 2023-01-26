const fs = require("fs");
const dir = "src/components";
let componentName = "";

const tsxTemplate = (name) => {
    return `
import styles from "./${name}.module.scss";
import {I${name}Props} from "./${name}.types";

const ${name} = () => {
    return (
      <div>This is ${name}</div>
    )
  }
  export default ${name}`;
};

const typesTemplate = (name) => {
    return `export interface I${name}Props {}`;
};

if (fs.existsSync(dir)) {
    console.log("Directory exists!");
} else {
    console.log("Directory not found.");
    fs.mkdirSync(dir);
}

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question("Enter Component Name : ", (name) => {
    console.log(`Hey there ${name}!`);
    componentName = name;
    checkComponent(dir + "/" + componentName);
    readline.close();
});

function createFile(path, componentName) {
    fs.writeFileSync(
        path + `/${componentName}.tsx`,
        tsxTemplate(componentName)
    );
    fs.writeFileSync(path + `/${componentName}.module.scss`, "");
    fs.writeFileSync(
        path + `/${componentName}.types.ts`,
        typesTemplate(componentName)
    );
}

function checkComponent(path) {
    if (fs.existsSync(path)) {
        console.log("Component Exist Please Enter a different Name");
    } else {
        fs.mkdirSync(path);
        createFile(path, componentName);
    }
}

