class TextareaAutoHeightAddjust{
    addjustElemCore(elem: HTMLElement) {
        // 要素を判定する
        console.log(elem);
        let height = getComputedStyle(elem).getPropertyValue("height");
        height = height.replace(/[^0-9.]/g, '');

        // パディングを取得
        let paddingTop = getComputedStyle(elem).getPropertyValue("padding-top");
        let paddingBottom = getComputedStyle(elem).getPropertyValue("padding-bottom");

        paddingTop = paddingTop.replace(/[^0-9.]/g, '');
        paddingBottom = paddingBottom.replace(/[^0-9.]/g, '');

        // スクロールの高さを取得
        let scrollHeight = elem.scrollHeight;

        let test: object = {
            "height": height,
            "paddingTop": paddingTop,
            "paddingBottom": paddingBottom,
            "scrollHeight": scrollHeight,
        };

        console.log(test);
    }

    addjustElem(elem) {
        const elemCheck = elem instanceof HTMLElement;

        if (elemCheck) {
            this.addjustElemCore(elem);
        } else {
            console.error("これはHTMLではないか、このHTMLは見つかりません");
        }
    }
}

export default new TextareaAutoHeightAddjust();
