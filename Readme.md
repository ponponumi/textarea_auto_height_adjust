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

## NPMでのインストールについて

次のコマンドを実行する事で、インストール可能です。

```bash
npm i textarea-auto-height-adjust
```

## ライセンスについて

このパッケージは、MITライセンスとして作成されています。
