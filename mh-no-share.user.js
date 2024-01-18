// ==UserScript==
// @name         🐭️ MouseHunt - No Share Buttons
// @version      1.2.0
// @description  Remove the "Share" buttons that prompt you to share on Facebook.
// @license      MIT
// @author       bradp
// @namespace    bradp
// @match        https://www.mousehuntgame.com/*
// @icon         https://i.mouse.rip/mouse.png
// @grant        none
// @run-at       document-end
// @require      https://cdn.jsdelivr.net/npm/script-migration@1.1.1
// ==/UserScript==
((function () {
  'use strict';

  const addStyles = document.createElement('style');
  addStyles.innerHTML = `.actionportfolio,
  .canShare .larryTip,
  .canShare,
  .journalactions a[data-share-type="journal"],
  .journalactions a[data-type="journal"],
  .pageSidebarView .fb-page,
  .socialLink,
  *[src="https://www.mousehuntgame.com//images/ui/buttons/share_green.gif"],
  #jsDialog-publishToOwnWall,
  .publishToWall,
  .socialBallots {
    display: none;
  }

  #OnboardArrow.onboardPopup.canShare .closeButton {
    left: 0;
  }`;
  document.head.appendChild(addStyles);

  migrateUserscript('🐭️ MouseHunt - No Share Buttons', 'https://greasyfork.org/en/scripts/452434-mousehunt-no-share-buttons');
})());
