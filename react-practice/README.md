## 000 - 熟悉環境、React.js 基礎

因為 CodeSandbox 已經架好 react 的環境， 所以之後會用 CodeSandbox 來練習 react，他可以用 github 登入，可以先去熟悉一下。
這次練習的目標是要看完從 __Hello World__ 到 __Components and Props__，然後把下面的 __Hello__ 範例看懂。

### [000.Hello](https://codesandbox.io/s/g5qo6nVKk)

### Reference

- [CodeSandbox](https://codesandbox.io/)
- [React Doc](https://facebook.github.io/react/docs/hello-world.html)

---

## 001 - State ~ List

看完從 __State and Lifecycle__ 到 __Lists and Keys__，然後把下面的 __Hello Repeat__ 範例看懂。

### [001.Hello Repeat](https://codesandbox.io/s/ElXwr84yW)

### Reference

- [React Doc](https://facebook.github.io/react/docs/state-and-lifecycle.html)
- [Inline Styles](https://zhenyong.github.io/react/tips/inline-styles.html)

---

## 002 - basic practice

練習做一個可以放大、縮小字型的網站

### [demo](https://k5koxljzx.codesandbox.io/)

---

## 003 - calculator

練習做一個簡單的計算機

### [demo](https://njvmzm8m.codesandbox.io/)

---

## 004 - Markdown 即時預覽

這次的練習不會很難，主要讓你練習使用別人開源的 component 跟 library

### [demo](https://0o6w295ynn.codesandbox.io/)

### Reference

把 React Doc 的 __QUICK START__ 全部看完
- [React Doc](https://facebook.github.io/react/docs/state-and-lifecycle.html)

### Component

這些是我用到的 component 跟 library，如果你覺得這些 component 不好用你也可以再找找其他的，或是自己刻一個然後開源回饋給 React 社群 XD

- [marked](https://github.com/chjj/marked)
- [react-textarea-autosize](https://github.com/andreypopp/react-textarea-autosize)
- [react-render-html](https://github.com/noraesae/react-render-html)

---

## 005 - 用 `create-react-app` 架設 local 開發環境

基本的 react 你已經差不多會了，之後多練習就可以。為了讓你更接近真實開發的狀況，所以這次打算讓你練習自己架環境，我們以後就不再用 codesandbox，而是用 `create-react-app` 架設開發環境，並部屬到 github page 上。

### [demo](https://w5151381guy.github.io/frontend-demo/react-005-larry/)

### [create-react-app](https://github.com/facebookincubator/create-react-app) 簡介

`create-react-app` 是 Facebook 推出的 CLI 小工具，他幫你把一些複雜的設定(`webpack`,`babel`,`minify`...)都包裝好了，所以你不需要自己做任何設定，只要專注在寫 react code 就可以了。

### 1. 安裝

在安裝之前先確定你有沒有裝 `node >= 6` 以上的版本，沒有的話到 https://nodejs.org/en/ 安裝。<br />

確認有裝 `node` 之後用 `npm install create-react-app -g` 或是 `yarn global add create-react-app` 把 `create-react-app` 安裝成全域的指令，安裝完之後跑 `create-react-app --version` 看有沒有版本號。<br />

### 2. 用 `create-react-app` 建立一個專案

先把 `w5151381guy/frontend-demo` 這個 repo clone 到本機上，進到 `react-practice` 這個資料夾之後，看一下是不是有一個 `react-005-larry`，確認有之後你可以跑 `create-react-app react-005-andy` 建立一個你的專案，建立之後內部的目錄結構應該會長這樣

```
react-005-andy
├── README.md
├── build
├── node_modules
├── package.json
├── public
├── src
└── yarn.lock
```

### 3. 開發

進到你的專案之後可以看一下 `package.json`，`create-react-app` 已經幫你把 `scripts` 都寫好了，你只要在目錄下跑 `npm start` 或是 `yarn start` 就可以開始開發，他這個 script 就很像我們在 c9 上面的 `yarn run dev`，會自動幫你監聽檔案變化還有重新編譯。跑起來之後他會幫你監聽 `port 3000`，你到 `localhost:3000` 就可以看到結果。<br />

成功看到網頁之後，進到 `src/App.js` 裡面把 `p.App-intro` 的內容改成 `Hello World ~ I am Andy Chen`，看網頁有沒有馬上變化，有的話就沒問題了，以後就是這樣子開發。

### 4. 部屬到 github page 上

在部屬之前要先 build，但因為我們要部屬到 github page 上，首頁不像在 local 端開發時是 localhost:3000/ 而是 https://w5151381guy.github.io/frontend-demo/react-005-andy/ ，所以要在 `package.json` 裡面加上一個欄位 `homepage: "https://w5151381guy.github.io/frontend-demo/react-005-andy/"`，這樣他才知道首頁在哪裡，如下圖，不然會有路由的問題。

![](https://i.imgur.com/RPt3k2V.png)

設定完之後我們就可以在專案目錄下跑 `yarn build` 或是 `npm run build` 開始 build，在 build 的過程中他會幫你把 `js`, `css` 等等壓縮，然後包成幾個檔案，你跑完他有可能會跑出像是下圖的訊息，因為我們是自己設定 github page 的資料夾，所以那個可以不要理他。

![](https://i.imgur.com/yeSUKsv.png)

build 完之後會在專案目錄下多一個 `build/` 資料夾，目錄結構大概長這樣

```
build
├── asset-manifest.json
├── favicon.ico
├── index.html
├── manifest.json
├── service-worker.js
└── static
    ├── css
    ├── js
    └── media
```

把這整個資料夾複製一份到 `frontend-demo/docs` 裡面然後改名叫 `react-005-andy`，這時候 `docs` 目錄應該會長這樣，`react-005-andy` 就是你剛剛的 `build` 資料夾，裡面應該有一個 `index.html`。

```
docs
├── js-001
├── js-002
├── js-003
├── js-004
├── js-005
├── js-006
├── js-007
├── react-005-andy
└── react-005-larry
```

### 5. push 到 github 上

這步應該不用多說，就 commit 一下然後 push 到 github 上，這樣就部屬完成了，完成了之後到 https://w5151381guy.github.io/frontend-demo/react-005-andy/ 看看有沒有成功

----

我們之後應該就這樣練習，你可以在本地端開發到一段落之後再 build 然後 push 上來，這樣也比較接近真實開發的過程，等你夠熟練了之後我再教你怎麼架環境，包刮設定 `babel`, `webpack`, `loader`, `css-module` 等等。<br />

等你 react 學到一個程度之後，就會發現要把 UI 刻出來還滿容易的，難的是怎麼管理數據，包刮什麼時候要去抓數據、各個 component 之間如何溝通、不同頁面如何共享數據等等，之後應該會慢慢有體會。

