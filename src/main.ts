class TextareaAutoHeightAddjust{
    addjustElemCore(elem: HTMLElement) {
        // 要素を判定する
        console.log(elem);
        let height = getComputedStyle(elem).getPropertyValue("height");
        height = height.replace(/\D/g, '');
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
