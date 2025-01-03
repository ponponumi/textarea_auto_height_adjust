import AutoAdjust from "../../src/main";

// グローバル属性に追加する
declare global {
    interface Window {
        AutoAdjust: typeof AutoAdjust;
    }
}

window.AutoAdjust = AutoAdjust;

// AutoAdjust.adjustElem(documenst.getElementById("message"));
// AutoAdjust.adjustId("message");
// AutoAdjust.addjustElem(document.getElementById("messageElem"));

AutoAdjust.adjustAll(function (check, styleData) {
    console.log(styleData);

    if (check) {
        console.log("高さが変わりました");
    } else {
        console.log("高さが変わりませんでした");
    }
});
