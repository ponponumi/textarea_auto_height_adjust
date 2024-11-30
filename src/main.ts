class TextareaAutoHeightAddjust{
    addjustElem(elem: HTMLElement | null | undefined) {
        // 要素を判定する
        let elemCheck = elem instanceof HTMLElement;

        if (elemCheck) {
            console.log(elem);
        } else {
            console.error("このHTMLは見つかりません");
        }
    }
}

export default new TextareaAutoHeightAddjust();
