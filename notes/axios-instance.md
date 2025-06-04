```js
  const axiosInstace = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 2000,
    withCredentials: true,
    headers: {
      // 'cache-control': 'no-cache',
      'Connection': 'keep-alive',
    },
    maxContentLength: -1,
  });
```

```js
  axiosInstace.get('auth');
```
