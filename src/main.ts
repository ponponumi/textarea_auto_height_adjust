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
        elem.style.height = "0px";

        // パディングを取得
        let paddingTop: string = getComputedStyle(elem).getPropertyValue("padding-top");
        let paddingBottom: string = getComputedStyle(elem).getPropertyValue("padding-bottom");

        let paddingTopNum: number = this.numberConvert(paddingTop);
        let paddingBottomNum: number = this.numberConvert(paddingBottom);

        // スクロールの高さを取得
        let scrollHeight: number = elem.scrollHeight;

        // 最小の高さを取得
        let minHeight: string = getComputedStyle(elem).getPropertyValue("min-height");
        let minHeightNum: number = this.numberConvert(minHeight);

        // 新たな高さを計算
        let newHeight: number = scrollHeight + paddingTopNum + paddingBottomNum;

        // 新たな高さを反映
        elem.style.height = String(newHeight) + "px";

        let test: object = {
            "height": heightNum,
            "paddingTop": paddingTopNum,
            "paddingBottom": paddingBottomNum,
            "scrollHeight": scrollHeight,
            "minHeight": minHeightNum,
            "newHeight": newHeight,
        };

        console.log(test);
    }

    addjustElem(elem,oninputMode=true) {
        const elemCheck = elem instanceof HTMLElement;

        if (elemCheck) {
            let addjust = this;

            if (oninputMode) {
                // イベント追加なら
                elem.addEventListener("input", function () {
                    addjust.addjustElemCore(elem);
                });
            } else {
                // 1回のみの実行なら
                this.addjustElemCore(elem);
            }
        } else {
            console.error("これはHTMLではないか、このHTMLは見つかりません");
        }
    }

    addjustId(idName: string, oninputMode = true) {
        let elem = document.getElementById(idName);
        this.addjustElem(elem, oninputMode);
    }
}

export default new TextareaAutoHeightAddjust();
