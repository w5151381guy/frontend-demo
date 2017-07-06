## 001 - todo list

做一個簡單的 Todo List，打完字按下 Enter 也可以送出哦～

### [demo 網址](https://w5151381guy.github.io/frontend-demo/js-001)

#### [codepen-Larry](https://codepen.io/larrylu/pen/ZyQdvM)
#### [codepen-Andy](https://codepen.io/Andy-Chen/pen/VWaGPK)

### Reference

- [jQuery API 中文文档](http://www.jquery123.com/)
- [jQuery Tutorial](https://www.w3schools.com/jquery/)
- [jQuery: how to add \<li> in an existing \<ul>](https://stackoverflow.com/questions/1145208/jquery-how-to-add-li-in-an-existing-ul)
- [Enter key press event in JavaScript](https://stackoverflow.com/questions/905222/enter-key-press-event-in-javascript)

---

## 002 - 可以儲存的 todo list

幫 001 的 todo list 加上自動儲存(重新整理不會不見)、清除的功能

### [demo 網址](https://w5151381guy.github.io/frontend-demo/js-002)

#### [codepen-Larry](https://codepen.io/larrylu/pen/dRpEGO)
#### [codepen-Andy](https://codepen.io/Andy-Chen/pen/NgdpQv)

### Reference

- [jQuery remove all list items from an unordered list](https://stackoverflow.com/questions/7004059/jquery-remove-all-list-items-from-an-unordered-list)
- [JSON.stringify()](https://www.w3schools.com/js/js_json_stringify.asp)
- [JSON.parse()](https://www.w3schools.com/js/js_json_parse.asp)
- [簡述HTML5的Client端暫存-localStorage/sessionStorage](https://dotblogs.com.tw/jimmyyu/archive/2011/03/27/html5-client-storage.aspx)
- [https://www.w3schools.com/html/html5_webstorage.asp](https://www.w3schools.com/html/html5_webstorage.asp)
- [How do I store an array in localStorage?](https://stackoverflow.com/questions/3357553/how-do-i-store-an-array-in-localstorage)
- [How to delete a localStorage item when the browser window/tab is closed?](https://stackoverflow.com/questions/9943220/how-to-delete-a-localstorage-item-when-the-browser-window-tab-is-closed)
- [ES6篇 - let與const](http://ithelp.ithome.com.tw/articles/10185142)

---

## 003 - 可以刪除的 todo list

幫 002 的 todo list 加上刪除某個 item 的功能

### [demo 網址](https://w5151381guy.github.io/frontend-demo/js-003)

#### [codepen-Larry](https://codepen.io/larrylu/pen/WORowM)
#### [codepen-Andy](https://codepen.io/Andy-Chen/pen/PjmQJz)

### Reference

- [How do I remove a particular element from an array in JavaScript?](https://stackoverflow.com/questions/5767325/how-do-i-remove-a-particular-element-from-an-array-in-javascript)
- [相等比較 - JavaScript | MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Equality_comparisons_and_sameness)
- [深入浅出ES6（一）：ES6是什么](http://www.infoq.com/cn/articles/es6-in-depth-an-introduction)
- [箭頭函式](https://eyesofkids.gitbooks.io/javascript-start-from-es6/content/part4/arrow_function.html)
- [幾個實用的 JS 小技巧](http://larry850806.github.io/2016/07/16/JS-tips/)

---

## 004 - 非同步、Ajax

原本還不想扯到 ajax，但是想不到前端有什麼非同步的操作XD，所以這邊還是會先提到一些 ajax，你可以到下面 reference 看一下`$.get(url, callback)`怎麼用

這邊有三個網址，可以直接連進去看，server 的反應時間是 1 ～ 5 秒不等，這次的目標是要 __同時__ 發三個 ajax 去跟這台 server 要資料，先要到的資料就先 append 在 body，效果可以看下面的 demo
- [網址a](https://ajax-practice-server.herokuapp.com/a)
- [網址b](https://ajax-practice-server.herokuapp.com/b)
- [網址c](https://ajax-practice-server.herokuapp.com/c)

### [demo 網址](https://w5151381guy.github.io/frontend-demo/js-004)

#### [codepen-Larry](https://codepen.io/larrylu/pen/ZyXrMK)
#### [codepen-Andy](https://codepen.io/Andy-Chen/pen/zzjpgJ)

### Reference

- [同步與非同步的差異](http://www.victsao.com/blog/81-javascript/319-javascript)
- [談談JavaScript中的asynchronous和event queue](https://pjchender.blogspot.tw/2016/01/javascriptasynchronousevent-queue.html)
- [SYNC(同步) VS. ASYNC(非同步)](https://zetafield.wordpress.com/2015/08/05/sync%E5%90%8C%E6%AD%A5-vs-async%E9%9D%9E%E5%90%8C%E6%AD%A5/)
> ↓↓↓↓↓ 下面那篇後面的 Promise 可以先不用看 ↓↓↓↓↓ <br>
- [Javascript的非同步之旅 - Part I](http://jazzlion.github.io/2016/06/18/Javascript%E7%9A%84%E9%9D%9E%E5%90%8C%E6%AD%A5%E4%B9%8B%E6%97%85-Part-I/)
- [Window setTimeout() Method](https://www.w3schools.com/jsref/met_win_settimeout.asp)
- [Javascript非同步編程的方法](http://marklin-blog.logdown.com/posts/297482-javascript-asynchronous-programming-methods-settimeout)
- [jQuery.get()](https://api.jquery.com/jquery.get/)

---

## 005 - 非同步、Ajax 2

這次要做的東西跟 js-004 很像，可以直接 fork js-004 改，原本的 js-004 是先到的資料就先顯示出來，現在改成同時發三個 request，但是等所有資料都到了之後再一次顯示出來

### [demo 網址](https://w5151381guy.github.io/frontend-demo/js-005)

#### [codepen-Larry](https://codepen.io/larrylu/pen/MoGzad?editors=0010#0)
#### [codepen-Andy](https://codepen.io/Andy-Chen/pen/MoGzvg)

### Reference

- [jQuery hide](http://api.jquery.com/hide/)
- [JavaScript ES6 Promise Object 物件](http://www.fooish.com/javascript/es6/Promise.html)
- [ES6 Promise 筆記](https://vinta.ws/code/es6-promise-notes.html)
- [Javascript的非同步之旅 - Part I](http://jazzlion.github.io/2016/06/18/Javascript%E7%9A%84%E9%9D%9E%E5%90%8C%E6%AD%A5%E4%B9%8B%E6%97%85-Part-I/)
- [JavaScript 同步延遲 ( Promise + setTimeout )](http://www.oxxostudio.tw/articles/201706/javascript-promise-settimeout.html)

---

## 006 - 非同步、Ajax 3

這次要做的東西跟 js-005 很像，可以直接 fork js-005 改，原本的 js-005 是同時發三個 request，現在改成等 request A 回來才發 request B，B 回來再發 C，回來的資料就馬上 append 到 body 上

### [demo 網址](https://w5151381guy.github.io/frontend-demo/js-006)

#### [codepen-Larry](https://codepen.io/larrylu/pen/MoBJez)
#### [codepen-Andy](https://codepen.io/Andy-Chen/pen/XgBpWO)

### Reference

如果你厭倦了把 jquery 的 ajax 另外包一層變成 Promise，這邊推薦你一個 Promise based 的 library 叫 axios，每個 request 都是一個 Promise 不用另外包
- [mzabriskie/axios](https://github.com/mzabriskie/axios)
