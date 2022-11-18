// ==UserScript==
// @name         🐭️ MouseHunt - No Share Buttons
// @version      1.0.3
// @description  Remove the "Share" buttons that prompt you to share on Facebook.
// @license      MIT
// @author       bradp
// @namespace    bradp
// @match        https://www.mousehuntgame.com/*
// @icon         https://brrad.com/mouse.png
// @grant        none
// @run-at       document-end
// ==/UserScript==
((function () {
	'use strict';

	const addStyles = document.createElement('style');
	addStyles.innerHTML = `
	.journalactions a[data-share-type="journal"],
	.journalactions a[data-type="journal"],
	*[src="https://www.mousehuntgame.com//images/ui/buttons/share_green.gif"],
	*[src="https://www.mousehuntgame.com/images/promo/fbf_live.jpg"],
	.pageSidebarView,
	.mousehuntHeaderView-gameBanner,
	.pageFrameView-footer,
	.mousehuntFooter,
	.socialLink,
	.canShare,
	.pageSidebarView .fb-page,
	.canShare .larryTip,
	.communityGroupView-ad {
	.mousehuntHeaderView-newsTicker,
	.actionportfolio,
	#jsDialog-publishToOwnWall {
		display: none;
	}

	#OnboardArrow.onboardPopup.canShare .closeButton {
		left: 0;
	}

	.pageFrameView {
		grid-template-columns: [first] auto [content-start] 760px [content-end] auto [last];
	}`;
	document.head.appendChild(addStyles);
})());
