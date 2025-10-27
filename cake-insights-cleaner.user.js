// ==UserScript==
// @name         Cake Insights Cleaner
// @namespace    https://www.cake.me/
// @version      1.0
// @description  自動移除 itemLocked 與 mask 元素
// @author       mlgzackfly
// @match        https://www.cake.me/dashboard/insights*
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const lockedClassRegex = /\bUserImpressionListItem_itemLocked__\w+\b/;
    const maskClassRegex   = /\bUserImpressionListItem_mask__\w+\b/;


    function cleanPage() {
        const items = document.querySelectorAll('div[class*="UserImpressionListItem_item__"]');
        items.forEach(item => {
            const className = item.getAttribute('class');
            if (lockedClassRegex.test(className)) {
                const newClass = className.replace(lockedClassRegex, '').trim();
                item.setAttribute('class', newClass);
            }
        });

        const masks = document.querySelectorAll('div[class*="UserImpressionListItem_mask__"]');
        masks.forEach(mask => {
            if (maskClassRegex.test(mask.className)) {
                mask.remove();
            }
        });
    }

    cleanPage();

    const observer = new MutationObserver(() => {
        cleanPage();
    });

    observer.observe(document.body, { childList: true, subtree: true });
})();