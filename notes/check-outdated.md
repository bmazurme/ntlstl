#### package.json
```json
  "scripts": {
    "check-outdated": "npm outdated --depth=9999"
  },
```

Для более детального контроля можно использовать дополнительные инструменты:
> Установка npm-check-updates

```shell
  $ npm install -g npm-check-updates 
```

```json
    "generate-report": "npm outdated --json | node -e \"process.stdin.on('data', data => { const json = JSON.parse(data.toString()); const cleanJson = JSON.stringify(json, null, 2); require('fs').writeFileSync('outdated-report.json', cleanJson); });\""
```
