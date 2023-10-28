import fs from "fs";
// import path from "path";

//example of new "using" syntax in typescript(js in the future)
const fileName = "test.txt";

const openFile = (fileName: string) => {
  const file = fs.openSync(`content/${fileName}`, "w+");
  console.log("file opened");

  return {
    file,
    [Symbol.dispose]() {
      console.log("file disposed");
      fs.closeSync(file);
    },
  };
};

const writeToFile = () => {
  using file = openFile(fileName);

  fs.writeFileSync(file.file, "Hello world");
};

writeToFile();