<details open><summary><b> 009 - ES7 async/await </b></summary>

### ES7 async/await

async/await 是 ES7 的新語法，是目前管理非同步流程的最佳解決方案，從 node `7.6.0` 就開始支援，前端的話支援度還不太高，要用在前端的話要用 babel 轉一下<br />

因為網路上找不到寫得很好的教學，所以我這邊大概講一下，看不太懂的話可以再看看下面的參考資料

#### 1. async function 必定回傳 promise

下面這兩個 function 都回傳一個 promise，那他們有什麼不一樣呢？其實完全一樣，只是 __async function 會保證他回傳的一定是個 promise__，而普通 function 不一定

```js
function sleep1(){
  return new Promise(resolve => {
    setTimeout(resolve, 3000)
  })
}

async function sleep2(){
  return new Promise(resolve => {
    setTimeout(resolve, 3000)
  })
}

// sleep1().then(...).catch(...)
// sleep2().then(...).catch(...)
```

#### 2. 如果 async function 裡面沒有回傳 promise 會怎樣

`foo1` 是個非常簡單的同步 function，回傳 100 <br />

`foo2` 是個非同步 function，他的回傳值是個 promise，`foo2().then(res => { console.log(res) }) // 100` <br />

`foo3` 雖然直接 `return 100`，但是剛剛說過 __async function 一定一定一定要回傳 promise，你不回傳 promise 他就會幫你包裝成 promise__ ，所以他這個 100 會被包進 promise。讓 `foo3()` 是一個 promise 物件，所以 `foo2` 跟 `foo3` 其實是一模一樣的，要這樣用它，`foo3().then(res => { console.log(res) }) // 100` <br />

```js
function foo1(){
  return 100
}

function foo2(){
  return new Promise(resolve => {
    resolve(100)
  })
}

async function foo3(){
  return 100
}
```

async function 就這麼簡單，簡而言之：如果你回傳 promise，那他的回傳值就是那個 promise，你不回傳 promise，他就幫你把回傳值包裝成 promise

#### 3. 用 await 等待 promise

現在要實作睡三秒的功能，`foo1` 用基本的 promise 實作，`foo2` 用 co + generator，`foo3` 則是用 await。三個的效果完全一樣，而且也都回傳 promise，只是 `foo1` 用 `.then(...)` 來等待 sleep() 完成、`foo2` 用 yield，而有了 await 之後可以直接用 `await sleep()` 來等待 promise 完成

```js
// 睡三秒
function sleep(){
  return new Promise(resolve => {
    setTimeout(resolve, 3000)
  })
}

async function foo1(){
  console.log('before sleep')
  return sleep().then(() => {
    console.log('after sleep')
  })
}

async function foo2(){
  return co(function*(){
    console.log('before sleep')
    yield sleep()
    console.log('after sleep')
  })
}

async function foo3(){
  console.log('before sleep')
  await sleep()
  console.log('after sleep')
}
```

#### 4. 錯誤處理

錯誤處理就用 try/catch 就可以了，乍看之下好像在寫同步程式碼

```js
async function foo1(){
  return runA()
    .then(resultA => runB(resultA))
    .then(resultB => {
      console.log(resultB)
    })
    .catch(err => {
      console.error(err)
    })
}

async function foo2(){
  return co(function*() {
    try {
      const resultA = yield runA()
      const resultB = yield runB(resultA)
      console.log(resultB)
    } catch(err){
      console.error(err)
    }
  })
}

async function foo3(){
  try {
    const resultA = await runA()
    const resultB = await runB(resultA)
    console.log(resultB)
  } catch(err) {
    console.error(err)
  }
}
```

#### 5. 套用在現有專案

這邊要提醒一下，`await` 這個關鍵字只能用在 async function 裡面，所以最好的作法就是把所有非同步操作都宣告成 async function，這樣也可以一眼看出一個 function 是不是非同步

```js
// database.js

// before
function insertData(content) {
  return col
    .insertOne({ content })
    .then(result => result.insertedId)
    .catch(err => {
      console.log(err)
    })
}

// after
async function insertData2(content) {
  try {
    const result = await col.insertOne({ content })
    return result.insertedId
  } catch (err) {
    console.log(err)
  }
}
```

```js
// index.js

// before
app.get('/api/item/:itemid', (req, res) => {
  co(function*() {
    const resultData = yield database.getData(req.params.itemid)
    const { _id, content } = resultData
    res.json({
      _id,
      content,
    })
  })
})

// after
app.get('/api/item/:itemid', async (req, res) => {
  const { _id, content } = await database.getData(req.params.itemid)
  res.json({ _id, content })
})
```

### 作業

把 008 複製一份叫做 009，然後把任何非同步操作都宣告成 async function、把 `co + generator` 改成 `async/await`

### Reerence

- [Promise, generator, async 與 ES6](http://huli.logdown.com/posts/292655-javascript-promise-generator-async-es6)
- [告別 JavaScript 的 Promise！迎接 Async/Await 的到來](https://jigsawye.com/2016/04/18/understanding-javascript-async-await/)

</details>
