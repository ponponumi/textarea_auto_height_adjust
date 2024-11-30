class TextareaAutoHeightAddjust{
    numberConvert(input: string) {
        // 数字に変換する
        input = input.replace(/[^0-9.]/g, '');
        let output: number = Number(input);

        return output;
    }

    addjustElemCore(elem: HTMLElement) {
        // 要素を判定する
        console.log(elem);
        let height: string = getComputedStyle(elem).getPropertyValue("height");
        let heightNum: number = this.numberConvert(height);

        // パディングを取得
        let paddingTop: string = getComputedStyle(elem).getPropertyValue("padding-top");
        let paddingBottom: string = getComputedStyle(elem).getPropertyValue("padding-bottom");

        let paddingTopNum: number = this.numberConvert(paddingTop);
        let paddingBottomNum: number = this.numberConvert(paddingBottom);

        // スクロールの高さを取得
        let scrollHeight: number = elem.scrollHeight;

        let test: object = {
            "height": heightNum,
            "paddingTop": paddingTopNum,
            "paddingBottom": paddingBottomNum,
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
