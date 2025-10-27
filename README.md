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
   [https://raw.githubusercontent.com/<你的帳號>/cake-insights-cleaner/main/cake-insights-cleaner.user.js](https://raw.githubusercontent.com/<你的帳號>/cake-insights-cleaner/main/cake-insights-cleaner.user.js)
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