# node-fs-1

This command-line application was created by Stefan Klinkusch at Digital Career Institute in Berlin, Germany.

## Features

It reads in the following data from its own ```package.json``` file:
- name
- version
- number of dependencies
- number of devDependencies
- size of the node_modules folder (in the index, not the size of the contents)

## Techniques

- JavaScript
- Node.js
  - file system manipulations (fs)

## Manual

### Setup of the package

1. Clone the repository using ```git clone git@github.com:sklinkusch/node-fs-1.git``` (SSH) or ```git clone https://github.com/sklinkusch/node-fs-1``` (HTTPS).
1. Move into the directory ```node-fs-1``` and run ```npm install``` or ```yarn```.

### Usage

Run ```node index.js```. The output should be:
```
name: node-fs-1
version: 0.0.1
number of dependencies: 0
number of devDependencies: 1
node_modules: 4096 bytes
```