import browser from "webextension-polyfill";

export function createAlertStringForMyExtension(
    message: string,
){
    return `${browser.i18n.getMessage("abdm_notification_title")}\n${message}`;
}