import AutoAdjust from "../../src/main";

// AutoAdjust.addjustElem(document.getElementById("message"));
// AutoAdjust.addjustElem(document.getElementById("messageElem"));
AutoAdjust.addjustAll(function (check) {
    if (check) {
        console.log("高さが変わりました");
    } else {
        console.log("高さが変わりませんでした");
    }
});
