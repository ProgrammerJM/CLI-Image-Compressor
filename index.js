const fs = require("fs");
const path = require("path");
const sharp = require("sharp");
const { program } = require("commander");

program
  .option("-i, --input <type>", "Input directory")
  .option("-o, --output <type>", "Output directory");

program.parse(process.argv);

const options = program.opts();

if (!options.input) {
  console.error("Input directory is required");
  process.exit(1);
}

const outputPath = options.output || options.input;

fs.readdir(options.input, (err, files) => {
  if (err) {
    console.error("Error reading directory:", err.message);
    process.exit(1);
  }

  files.forEach((file) => {
    const inputFile = path.join(options.input, file);
    const outputFile = path.join(outputPath, file);

    sharp(inputFile)
      .resize(800)
      .toFile(outputFile, (err, info) => {
        if (err) {
          console.error("Error compressing image:", err.message);
        } else {
          console.log(`Compressed ${inputFile} to ${outputFile}`);
        }
      });
  });
});
