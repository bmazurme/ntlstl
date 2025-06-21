```js
  build: {
    terserOptions: {
      format: {
        comments: false,
      },
    },
  },
  esbuild: { legalComments: 'none' },
  publicDir: process.env.VITE_APP_PUBLIC || 'public',
```
