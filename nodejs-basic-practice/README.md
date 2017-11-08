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

提醒：Node.js 的模組採用的是 `CommonJS` 規範，所以不能寫 `import xxx from 'xxx'`，要寫 `const xxx = require('xxx')`。除此之外，因為 Nodejs 更新很快，所以只要是符合 ES 標準的語法都可以使用，不用 babel 轉譯。

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

---

## 003 - 處理 query string, params 跟 body

從前端要傳資料或是跟後端要資料有幾種方法，比較簡單的是透過 qs(query string), params, body，`GET` 的話沒有 body 所以只能用 qs 或是 params，參考下面的 reference，實作出以下幾個 api

#### GET /api/item/1

Response:

```js
"1 in params"
```

#### GET /api/item/100

Response:

```js
"100 in params"
```

#### GET /api/item?id=100

Response:

```js
"100 in qs"
```

#### POST /api/item

Request

```js
// body
// Content-Type: application/json
{
  id: 500
}
```

Response

```
"500 in body"
```

### Reference

- [Express req.params and req.query](https://coursework.vschool.io/express-params-and-query/)
- [Use ExpressJS to Get URL and POST Parameters](https://scotch.io/tutorials/use-expressjs-to-get-url-and-post-parameters)
- [Express API Reference req.query](http://expressjs.com/en/api.html#req.query)
- [How to access the request body when POSTing using Node.js and Express?](https://stackoverflow.com/questions/11625519/how-to-access-the-request-body-when-posting-using-node-js-and-express)
- [expressjs/body-parser](https://github.com/expressjs/body-parser)

---

### 004 - 用 middleware 處理共用邏輯

一個網站會提供很多 API，雖然每個 API 彼此之間是獨立的，但有一些邏輯常常會需要共用，這時候我們就會把它寫成 middleware，像 `body-parser` 就是個 middleware，他在 request 還沒道路由階段之前就先幫你把 body 切好，讓你在 controller 中有 `req.body` 可以用。這次我們要練習自己寫 middleware，要做的事情跟 003 大致上相同，只是多回傳一個 `processTime` 代表這個 request 的處理時間(前端等待的時間)

#### GET /api/item?id=100

Response:

```js
{
  processTime: "3ms",
  body: "100 in qs"
}
```

#### POST /api/item

Request

```js
// body
// Content-Type: application/json
{
  id: 500
}
```

Response

```
{
  processTime: "15ms",
  body: "500 in body"
}
```

### Reference

- [ExpressJS - Middleware](https://www.tutorialspoint.com/expressjs/expressjs_middleware.htm)
- [How to Measure Execution Time in Node.js](https://blog.tompawlak.org/measure-execution-time-nodejs-javascript)
- [res.locals](http://expressjs.com/en/api.html#res.locals)
- [res.json()](http://expressjs.com/en/api.html#res.json)

---

### 005 - 基本 CRUD

這次要讓你練習寫一個具有 CRUD 功能的 API server，分別是新增、讀取、更新、刪除，原則上所有的操作都可以分成這四類，這次還不會用到 db，新增一個檔案然後用 fs 去讀寫那個檔案就好了。

#### CRUD 是啥

| 簡稱 | 動作   | HTTP Method |   
|---  |--------|-------------|
| C   | Create | POST        |
| R   | Read   | GET         |
| U   | Update | PATCH       |
| D   | Delete | DELETE      |

#### POST /api/item

新增一個 item，並回傳一個不重複的 item id

Request

```js
// body
// Content-Type: application/json
{
  content: 'Hello World'
}
```

Response:

```js
{
  id: 'xxxoooaaa'
}
```

#### GET /api/item/:itemId

根據 id 取得某個 item

Response

```
{
  id: 'xxxoooaaa',
  content: 'Hello World'
}
```

#### GET /api/item

取得所有 item id

Response

```
{
  allIds: ['aaa', 'xxx', 'ooo', ...]
}
```

#### PATCH /api/item/:itemId

根據 id 修改某個 item

Response

```
{
  ok: true
}
```

#### DELETE /api/item/:itemId

根據 id 刪除某個 item

Response

```
{
  ok: true
}
```

### Reference

- [ExpressJS - Middleware](https://www.tutorialspoint.com/expressjs/expressjs_middleware.htm)
- [How to Measure Execution Time in Node.js](https://blog.tompawlak.org/measure-execution-time-nodejs-javascript)
- [res.locals](http://expressjs.com/en/api.html#res.locals)
- [res.json()](http://expressjs.com/en/api.html#res.json)


