```js
          const safeFileName = encodeURIComponent(
            resultAsObject.result[0].fileName,
          );

          return res
            .status(HttpStatus.OK)
            .header('Content-Type', 'application/octet-stream')
            .header(
              'Content-Disposition',
              `attachment; filename*=UTF-8''${safeFileName}`,
            )

            .send(Buffer.from(resultAsObject.result[0].binaryData, 'base64'));
```
