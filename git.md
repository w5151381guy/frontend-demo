## git 基本觀念

1. git 為一種版本控制軟體，所謂版本控制就是你可以針對在檔案中，你曾經動過的地方做控管，也就是說你可以隨時回到之前的版本中<br>
2. 為了達到第一點的方便性，請在做完一個段落後進行 commit，commit 的內容一定要寫得相當清楚，否則你會不知道你曾經改過甚麼東西<br>
3. 在 commit 之前需先將改過的東西加到 staging area，然後再用 commit 進行提交<br>
4. 養成一個好習慣，在準備將檔案上傳(push)到 server 前，記得先檢查一下狀態，語法會在底下說明<br>
---

## git 基本語法

### server 端：
1. 一開始先進到準備新增 git repository 的資料夾中，如桌面之類的，指令為：`cd {資料夾路徑}`，cd 全名為 change directory，意思就是離開目前的資料夾並進入目標資料夾中<br>
2. 建立一個準備變成 git repository，指令為：`mkdir {資料夾名稱}`，`mkdir`全名為 make directory，意思就是新增一個資料夾<br>
3. 利用`cd`進入剛剛建立的資料夾中，並打上`git init --bare`讓原資料夾變成一個 git repository<br>

### client 端：
1. 一樣先進到準備下載 git repository 的資料夾，指令跟上述一樣<br>
2. 打`git clone {username}@{server} IP:/{資料夾路徑}`，過程中系統會要你輸入密碼，輸入後才能下載<br>
3. 下載後即可`cd`進入資料夾中，進入後可打`touch`檔案名稱，來產生檔案，如：`touch test.cs`，系統就會產生一個C#檔案<br>
4. 當打完一個段落想將資料傳到 server 的時候，先打`git add {檔案名稱}`，將檔案加到 staging area，如有多個檔案，可以`git add {檔案1} {檔案2}`，中間用空格隔開即可<br>
5. add 完後，打`git commit -m "內容"`<br>
6. 在 push 前打`git status`看有沒有遺漏的資料未加 staging area，以及需不需要將存在 server 中的資料先 pull 下來，以免造成版本衝突<br>
7. 確認都完成後即可打`git push`將檔案上傳到 server 中<br>
---
## git 進階語法
1. 新增`.gitignore`，此檔案是讓你在 push 的時候可以忽略哪些檔案，如：在`.gitignore`中打上`*.cs`，那你在 push 的時候就不會讓任何`.cs`檔 push 上去<br>
2. 想知道這個 repository 有多少條 commit，可以打`git log`<br>
3. 想回復到之前的 commit，可以打`git reset --hard`後面接commit的ID，如：`git reset --hard 446b0eb`<br>
4. 新增標籤，可以打`git tag`，詳細語法為：`git tag -a 版本名稱(如：v1.0) -m "版本內容"`，之後打git push origin 版本名稱即可上傳版本<br>
5. 如果覺得`git add {file1} {file2} ...`太過麻煩可以用`git add -A`一次把所有檔案加入 staging area
6. 若不慎把檔案加入 staging area，可以用`git reset HEAD {filename}` 進行 unstage
7. 不小心改到某個檔案的內容，可以用`git checkout -- {filename}`恢復原狀
