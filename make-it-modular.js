const mymodule = require("./mymodule");

const directoryPath = process.argv[2];
const fileExtension = process.argv[3];

mymodule(directoryPath, fileExtension, (err, data) => {
  if (err) {
    console.error(err);
  } else {
    data.forEach((file) => console.log(file));
  }
});
