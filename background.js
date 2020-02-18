// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// 点击集数按钮就会出通知，并不是加载完成，所以不能用
// chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
// 	if(changeInfo.status =='loading'){
// 		// alert('changeInfo.status',tab.url);
// 		chrome.tabs.reload(tabId);
// 	}; 

// });
homePage='https://www.cnblogs.com/iMath/p/10936132.html#enhancement';
chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  // console.log('Turning ' + tab.url + ' red!');
  chrome.tabs.create({
            url: homePage
        });
});
