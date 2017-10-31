## 001 - 用 nodejs 寫一個簡單的 server

這是 Nodejs 比較基礎的部份，自己動手做做看，稍微了解一下 Nodejs 可以做些什麼事

### Reference

- [Node.js](https://nodejs.org/en/)
- [NPM 包管理中package.json文件的使用](https://itbilu.com/nodejs/npm/Nkq9GPy1Z.html)
- [Node.js Tutorial](http://blog.geego.com/2015/08/28/welcome-to-node-js-tutorial/)
> 下面這篇內容很多，看到 __伺服器端的模組放在哪裡__ 就可以了 <br>
- [Node入門](https://www.nodebeginner.org/index-zh-tw.html#javascript-and-nodejs)

---

## 002 - 用 Express 框架寫一個 Hello World server

Express 是 Nodejs 目前最流行的 web 框架，可以很簡單的架起 API server，試著用 express 架一個 server 監聽 port 3000，直接在 `nodejs-basic-practice` 裡面建一個 `002` 的專案，完成以下幾個 API。

#### GET /api/testing

Response:

```js
"Hello World GET"
```

#### POST /api/testing

Response

```
"Hello World POST"
```

### 寫完可以用 Postman 或是 curl 之類的工具測測看

![](https://i.imgur.com/REvpQ7W.png)

### Reference

- [Installing Express](http://expressjs.com/en/starter/installing.html)
- [Hello world example](http://expressjs.com/en/starter/hello-world.html)
- [Basic routing](http://expressjs.com/en/starter/basic-routing.html)
