# Cake Insights Cleaner

## 📄 專案簡介
**Cake Insights Cleaner** 是一個 Tampermonkey 使用者腳本，用於自動清除 [Cake.me Dashboard Insights](https://www.cake.me/dashboard/insights) 頁面上的受鎖定（`itemLocked`）與遮罩（`mask`）元素。  
此腳本可協助改善使用者體驗、簡化 UI 呈現，並保持頁面整潔，特別適用於前端資料分析與 UI 測試環境。

---

## 🚀 功能特點
- 自動偵測並移除所有 `UserImpressionListItem_itemLocked__隨機字串` 類別。
- 自動刪除所有 `UserImpressionListItem_mask__隨機字串` 元素。
- 透過 **MutationObserver** 監控 SPA (Single Page Application) 動態載入內容，確保即時處理。
- 採用正規表達式比對，以適應 Cake 平台動態生成的 class 名稱。
- 無需人工干預，完全自動化運作。

---

## ⚙️ 安裝方式

### 方法一：GreasyFork (建議)
1. 前往 [GreasyFork.org](https://greasyfork.org/)
2. 搜尋「**Cake Insights Cleaner**」
3. 點擊「安裝腳本」
4. Tampermonkey 將自動導入並啟用。

### 方法二：GitHub 安裝
1. 安裝 [Tampermonkey 擴充套件](https://tampermonkey.net/)
2. 開啟以下連結：  
   [https://raw.githubusercontent.com/mlgzackfly/Cake-Insights-Cleaner/main/cake-insights-cleaner.user.js](https://raw.githubusercontent.com/mlgzackfly/Cake-Insights-Cleaner/main/cake-insights-cleaner.user.js)
3. 瀏覽器會自動提示「安裝此腳本」→ 點擊「安裝」。

---

## 🧠 技術細節

| 模組 | 描述 |
|------|------|
| **正規表達式** | 使用 `\bUserImpressionListItem_itemLocked__\w+\b` 與 `\bUserImpressionListItem_mask__\w+\b` 精準匹配隨機生成的 CSS 類別。 |
| **MutationObserver** | 持續監聽 DOM 結構變化，確保 SPA 畫面更新後仍能動態清理。 |
| **非侵入性設計** | 僅移除前端 class 或元素，不干涉後端 API 或業務邏輯。 |

---

## 🔒 資安與合規聲明
本腳本僅限用於**個人學習**。  
本專案不收集、傳輸或儲存任何使用者資料，完全在本機端執行。

---

## 🧩 檔案結構
```
cake-insights-cleaner/
│
├── cake-insights-cleaner.user.js   ← 主腳本檔案
└── README.md                         ← 專案說明文件
```
---

## 🧰 相依條件
- **Tampermonkey 4.18+**
- **Chrome / Edge / Firefox / Brave** 任一支援 Userscript 的瀏覽器。

---

## 📖 使用說明

### 腳本啟用後
1. 開啟瀏覽器並登入 [Cake.me](https://www.cake.me/)
2. 前往 [Dashboard Insights](https://www.cake.me/dashboard/insights) 頁面
3. 腳本會自動執行，移除所有 `itemLocked` 與 `mask` 元素
4. 無需任何手動操作，頁面將保持整潔

### 驗證腳本運作
- 打開瀏覽器開發者工具（F12）
- 觀察 Console 標籤，確認無錯誤訊息
- 檢查頁面元素，確認 `itemLocked` 與 `mask` 類別已被移除

---

## ❓ 常見問題

### Q1: 腳本無法運作？
**A:** 請確認：
- Tampermonkey 擴充套件已正確安裝且啟用
- 腳本在 Tampermonkey 面板中處於「啟用」狀態
- 目前網址符合 `https://www.cake.me/dashboard/insights*` 規則
- 嘗試重新整理頁面（Ctrl+F5 / Cmd+Shift+R）

### Q2: 更新後腳本失效？
**A:** Cake 平台可能更新了 class 命名規則。請至 [GitHub Issues](https://github.com/mlgzackfly/Cake-Insights-Cleaner/issues) 回報問題，我會盡快更新腳本。

### Q3: 可以在其他頁面使用嗎？
**A:** 目前僅針對 `/dashboard/insights` 頁面設計。若需要支援其他頁面，請提出 Issue 或 Pull Request。

### Q4: 腳本會影響網站功能嗎？
**A:** 不會。此腳本僅移除前端視覺元素，不影響 API 請求或業務邏輯。

---

## 🔧 疑難排解

### 腳本未自動執行
1. 檢查 Tampermonkey 圖示，確認腳本已載入
2. 打開腳本編輯器，確認 `@match` 規則正確
3. 清除瀏覽器快取並重新載入頁面

### 元素仍然存在
1. 可能是 Cake 更新了 DOM 結構
2. 開啟開發者工具，檢查元素 class 名稱是否變更
3. 至 GitHub 提交 Issue 並附上截圖

---

## 🤝 貢獻指南

歡迎任何形式的貢獻！

### 如何貢獻
1. Fork 此專案
2. 建立您的功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交您的變更 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 開啟 Pull Request

### 回報問題
若發現 Bug 或有功能建議，請至 [Issues](https://github.com/mlgzackfly/Cake-Insights-Cleaner/issues) 頁面提交。

---

## 📝 更新日誌

### v1.0 (2024)
- ✨ 初始版本發布
- 🔧 支援自動移除 `itemLocked` 類別
- 🔧 支援自動刪除 `mask` 元素
- 🔧 實作 MutationObserver 監聽動態內容

---

## 📄 授權條款

本專案採用 **MIT License** 授權。

```
MIT License

Copyright (c) 2024 mlgzackfly

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 📧 聯絡方式

- **作者**: mlgzackfly
- **GitHub**: [https://github.com/mlgzackfly](https://github.com/mlgzackfly)
- **專案連結**: [https://github.com/mlgzackfly/Cake-Insights-Cleaner](https://github.com/mlgzackfly/Cake-Insights-Cleaner)
- **回報問題**: [GitHub Issues](https://github.com/mlgzackfly/Cake-Insights-Cleaner/issues)

---

## ⭐ 支持專案

如果這個專案對您有幫助，請給予 ⭐ Star 支持！

---

## 📚 相關資源

- [Tampermonkey 官方文件](https://www.tampermonkey.net/documentation.php)
- [Userscript 開發指南](https://wiki.greasespot.net/Greasemonkey_Manual:API)
- [Cake.me 官方網站](https://www.cake.me/)

---

**免責聲明**: 此腳本為非官方工具，與 Cake.me 無任何關聯。使用者需自行承擔使用風險。