# NodeJS File System Utility

Comfortable utility to read and write files, oriented to agile and synchronous programming of scripts in NodeJS.

## Installation


```bash
npm install nodejs-fu --save
```

## API Documentation

```javascript
const fu = require('nodejs-fu');
```

### fu.readFile(path[, options])

 - Inputs:
   - `path`: filename or file descriptor
   - `options`: https://nodejs.org/api/fs.html#fs_fs_readfilesync_path_options
 - Returns: a string with contents of file 
 
