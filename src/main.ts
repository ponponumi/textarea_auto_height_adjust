class TextareaAutoHeightAddjust{
    addjustElem(elem: HTMLElement) {
        // 要素を判定する
        console.log(elem);
        let height = getComputedStyle(elem).getPropertyValue("height");
        height = height.replace(/\D/g, '');
    }
}

export default new TextareaAutoHeightAddjust();
