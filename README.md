# Kii Living — コーポレートサイト

株式会社Kii Living のコーポレートサイト。Astro による静的サイト（高速・低コスト・保守レス）。

- **フレームワーク**: Astro 5（静的生成・マルチページ）
- **スタイル**: Tailwind CSS v4
- **言語**: TypeScript
- **デザイン**: モダン／スマートなゴシック（Noto Sans JP）／ホワイト背景
- **ブランドカラー**: オレンジ `#E9781C`（アクセント）× ネイビー `#17263F`（見出し・信頼）。ロゴ由来。`src/styles/global.css` の CSS 変数で一元管理。
- **レスポンシブ**: モバイル / タブレット / デスクトップ
- **SEO**: JSON-LD（`RealEstateAgent`）, OGP, sitemap, robots.txt
- **ホスティング**: Cloudflare Pages 想定

## ページ構成

| ページ           | パス          | 内容                                                              |
| ---------------- | ------------- | ----------------------------------------------------------------- |
| 事業内容（Home） | `/`           | ヒーロー／実績／4事業／私たちについて／選ばれる理由／流れ／お客様の声／FAQ／CTA |
| 会社概要         | `/profile`    | 代表メッセージ／会社情報テーブル                                  |
| お問い合わせ     | `/contact-us` | お問い合わせフォーム／電話・メール・所在地                        |

## 画像について（重要）

- 写真は [`public/images/photos/`](public/images/photos/) に配置。**Unsplash の無料ライセンス**画像を仮置きしています（商用利用可・帰属表示不要）。
- **公開前に、自社で撮影した実際の物件・スタッフ写真への差し替えを推奨**します。同じパスにファイルを置くだけで差し替え可能です。
  - `hero.jpg`（推奨 1400×900） / `service-01〜04.jpg`（4:3, 800×600） / `about.jpg` / `company.jpg`
- ロゴは [`public/logo-mark.svg`](public/logo-mark.svg)（ヘッダー/フッター）と [`public/favicon.svg`](public/favicon.svg)。元の PNG から作成したクリーンな SVG 版です。

※「無料相談」ボタンは `/contact-us` に遷移します（`src/data/site.ts` の `consultHref` で変更可）。

## 開発

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # dist/ に静的出力
npm run preview   # ビルド結果をローカル確認
```

## 公開前に必ず差し替えるもの（重要）

会社情報は [`src/data/site.ts`](src/data/site.ts) に集約しています。
`※要確認` の付いた箇所を正しい情報に差し替えてください。

- 宅地建物取引業免許番号（不動産会社として法令上の掲載必須）
- 会社名・代表者名・設立・資本金
- 所在地（郵便番号・住所）
- 電話番号（`tel` と `telHref` の両方）・メールアドレス
- 営業時間

あわせて次も設定してください:

- `astro.config.mjs` の `site`（本番URL）
- `public/robots.txt` の Sitemap URL
- `public/ogp.png`（OGP画像・1200×630 推奨。未設置でも動作します）

## Cloudflare Pages へのデプロイ

1. GitHub にリポジトリを作成して push
2. Cloudflare Pages で該当リポジトリを接続
3. ビルド設定
   - Build command: `npm run build`
   - Output directory: `dist`
4. `git push` で自動ビルド・自動デプロイ

## 発展（必要になったら）

- **お問い合わせフォーム**: Cloudflare Pages Functions ＋ Turnstile（スパム対策）でメール送信を実装可能。現状は `tel:` / `mailto:` 導線。
- **お知らせ・実績ページ**: Astro のページ追加、または頻繁な自己更新が必要ならヘッドレスCMS の追加で対応。
