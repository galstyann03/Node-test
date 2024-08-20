# Directory and File Printer

## Objective

This project provides a Node.js function that prints the contents of a given directory in a well-structured and readable format. It distinguishes between directories and files, representing the hierarchy visually using indentation.

## Features

- Recursively print directories and files in a readable format.
- Display directories and files with visual indicators (e.g., 📁 for directories and 📄 for files).
- Handle indentation automatically without needing to pass indentation levels.

## Requirements

- Node.js (v12 or higher)

## Installation

1. Clone this repository:

    ```bash
    git clone <repository-url>
    ```

2. Navigate to the project directory:

    ```bash
    cd <project-directory>
    ```

3. Install dependencies (if any):

    ```bash
    npm install
    ```

## Usage

The main function `filePrinter(dirPath)` prints the contents of the directory at `dirPath`. It recursively traverses directories, displaying the hierarchy of files and directories with indentation.

Given a directory structure like:

root/
  ├── file1.txt
  ├── dir1/
  │   ├── file2.txt
  │   └── dir2/
  │       └── file3.txt


The output would look like:

📄 file1.txt
📁 dir1/
  📄 file2.txt
  📁 dir2/
    📄 file3.txt

