# CLI Image Compressor

This project is a command-line interface (CLI) tool for compressing images. It allows users to reduce the file size of their images without compromising the quality.

## Features

- Supports various image formats, including JPEG, PNG, and GIF.
- Provides options for adjusting compression level and image dimensions.
- Maintains image quality while reducing file size.
- Works efficiently with large batches of images.
- Easy to use with a simple and intuitive command-line interface.

## Installation

1. Clone this repository to your local machine.
2. Make sure you have Node.js installed.
3. Open a terminal and navigate to the project directory.
4. Run the command `npm install` to install the required dependencies.

## Usage

To compress an image, run the following command:

```
node index.js [image-path] [options]
```

Replace `[image-path]` with the path to the image file you want to compress. You can also specify additional options to customize the compression process.

For example, to compress an image with a specific compression level and resize it to a specific width, you can use the following command:

```
node index.js image.jpg --quality 80 --width 800
```

For more information on available options, run `node index.js --help`.
