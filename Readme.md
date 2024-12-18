# textarea_auto_height_adjust

このパッケージは、HTMLのtextareaタグの高さを調整する、TypeScriptライブラリです。

改行や折り返しで、textareaからはみ出ると、自動的にtextareaの高さを調整し、はみ出なくします。

また、文字を消して高さが小さくなると、その分textareaの高さも小さくなります。(min-heightよりは小さくなりません)

## 本ライブラリの使い勝手について

<a href="https://textarea-auto-height-addjust.ponponumi.com/" target="_blank" rel="noopener noreferrer">こちらから、使い勝手を試すことができます。</a>

## インポート方法について

次のようにインポートしてください。

```typescript
import TextareaAutoHeightAdjust from "textarea-auto-height-adjust";
```

※インスタンスを生成する必要はありません。

## メソッドについて

メソッドについては、次のものをご用意しております。

### addjustElem

こちらは、textareaタグを渡し、高さの自動調整を行います。

引数は、左から次のようになっています。

* elem: any
* oninputEventAddMode?: boolean
* changeFunc?: (check: boolean, styleData: object) => void

#### elem

こちらには、textareaタグのHTML要素を渡して下さい。

#### oninputEventAddMode

こちらには、oninputイベントを追加するかどうかを、booleanで渡して下さい。

trueを渡した場合は、oninputイベントを追加します。

falseを渡した場合は、1回のみ動作します。

省略した場合はtrueになります。

#### changeFunc

こちらには、textareaの調整後、実行するコールバック関数を渡します。

省略した場合、空の関数を渡します。

check変数は、高さが変わったらtrue、変わらなかったらfalseを渡します。

styleData変数は、次の形式のオブジェクトを渡します。

```json
{
    "height": 100,                  // 高さのピクセル数を数値で返します
    "heightValue": "100px",         // 高さのピクセル数を文字列で返します
    "paddingTop": 2,                // 上部のパディングのピクセル数を数値で返します
    "paddingTopValue": "2px",       // 上部のパディングのピクセル数を文字列で返します
    "paddingBottom": 2,             // 下部のパディングのピクセル数を数値で返します
    "paddingBottomValue": "2px",    // 下部のパディングのピクセル数を文字列で返します
    "scrollHeight": 90,             // textarea内部のscrollHeightを数値で返します
    "minHeight": 100,               // 最小の高さを数値で返します
    "minHeightValue": "100px",      // 最小の高さを文字列で返します
    "newHeight": 99.6,              // 新たな高さを数値で返します
    "boxSizing": "border-box",      // box-sizingの設定を文字列で返します
    "borderTop": 4.8,               // 上部の枠線の幅を数値で返します
    "borderTopValue": "4.8px",      // 上部の枠線の幅を文字列で返します
    "borderBottom": 4.8,            // 下部の枠線の幅を数値で返します
    "borderBottomValue": "4.8px"    // 下部の枠線の幅を文字列で返します
}
```

### addjustId

こちらは、textareaタグのIDを指定し、高さの自動調整を行います。

引数は、左から次のようになります。

* idName: string
* oninputEventAddMode?: boolean
* changeFunc?: (check: boolean, styleData: object) => void

#### idName

こちらには、textareaタグのID名を文字列で渡して下さい。

#### oninputEventAddMode

こちらには、oninputイベントを追加するかどうかを、booleanで渡して下さい。

addjustElemメソッドと、挙動は同じです。

#### changeFunc

こちらには、textareaの調整後、実行するコールバック関数を渡します。

addjustElemメソッドと、挙動は同じです。

## NPMでのインストールについて

次のコマンドを実行する事で、インストール可能です。

```bash
npm i textarea-auto-height-adjust
```

## ライセンスについて

このパッケージは、MITライセンスとして作成されています。
