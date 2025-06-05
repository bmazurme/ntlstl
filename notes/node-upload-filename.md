```js
    const binaryFile = new BinaryFile();
    const fileName = Buffer.from(file.originalname, 'latin1').toString('utf8');
    binaryFile.fileName = fileName;
    binaryFile.binaryData = Buffer.from(file.buffer).toString('base64');
```

```js
  export class BinaryFile {
    fileName: string;
    binaryData: string;
  }
```
