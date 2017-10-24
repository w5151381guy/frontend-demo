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

### [create-react-app](https://github.com/facebookincubator/create-react-app)

`create-react-app` 是 Facebook 推出的 CLI 小工具，他幫你把一些複雜的設定(`webpack`,`babel`,`minify`...)都包裝好了，所以你不需要自己做任何設定，只要專注在寫 react code 就可以了。

### 安裝

用 `npm install create-react-app` 或是 `yarn global add create-react-app` 把 `create-react-app` 安裝成全域的指令

