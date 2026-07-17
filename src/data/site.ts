/**
 * サイト全体で使う会社情報・コンテンツの一元管理ファイル。
 *
 * ⚠️ 公開前に必ず「※要確認」の箇所を正しい情報に差し替えてください。
 *    宅地建物取引業免許番号・所在地・代表者名などは不動産会社として
 *    正確な掲載が法令上求められます。
 */

export const company = {
  name: '株式会社Kii Living',
  nameEn: 'Kii Living Inc.',
  tagline: '住まいと暮らしを、まるごと支える。',
  // ヒーローのリード文
  lead: '不動産の売買・仲介からリフォーム、不動産DX、住宅ローンまで。お客様の「住まい」にまつわるすべてを、一つの窓口でご相談いただけます。',
  description:
    '株式会社Kii Livingは、不動産売買・仲介／リフォーム／不動産DX／住宅ローンの4事業で、お客様の住まいと暮らしを総合的にサポートする不動産会社です。',

  // ── 連絡先（※要確認）──────────────────────────────
  tel: '00-0000-0000', // ※要確認
  telHref: 'tel:0000000000', // ※要確認（数字のみ）
  email: 'info@example.com', // ※要確認
  businessHours: '平日 9:00〜18:00（土日祝を除く）', // ※要確認

  // ── 会社概要（※要確認）──────────────────────────────
  established: '設立年月 ※要確認',
  ceo: '代表取締役 ※要確認',
  capital: '資本金 ※要確認',
  license: '宅地建物取引業免許番号 ※要確認（例：東京都知事（1）第00000号）',

  address: {
    postal: '〒000-0000', // ※要確認
    region: '東京都', // ※要確認
    locality: '', // 市区町村 ※要確認
    street: '住所 ※要確認', // 番地・建物名
    full: '〒000-0000 東京都〇〇区〇〇 0-0-0 ※要確認', // 表示用フルテキスト
    // 構造化データ / 地図用（分かれば埋める）
    latitude: '', // ※任意
    longitude: '', // ※任意
    mapUrl: '', // Googleマップの共有URL ※任意
  },

  // ── SNS / 外部リンク（任意）────────────────────────
  social: {
    x: '', // https://x.com/...
    instagram: '',
    line: '',
  },
} as const;

export type Business = {
  no: string;
  title: string;
  subtitle: string;
  description: string;
  points: string[];
  image: string; // /images/... （実写真に差し替え可）
  href?: string; // 詳細ページがある場合のリンク先
};

export const businesses: Business[] = [
  {
    no: '01',
    title: '不動産売買・仲介',
    subtitle: 'Sales & Brokerage',
    description:
      'マイホームの購入・売却から投資用物件まで。地域に根ざした知見で、お客様一人ひとりに最適なご提案と、安心のお取引をサポートします。',
    points: ['売却査定・買取相談', '購入物件のご紹介', '契約・引き渡しまで一貫サポート'],
    image: '/images/photos/service-01.jpg',
  },
  {
    no: '02',
    title: 'リフォーム',
    subtitle: 'Renovation',
    description:
      '住まいの価値を高めるリフォーム・リノベーション。中古住宅の再生から部分的な改修まで、暮らしに合わせた住空間づくりをご提案します。',
    points: ['水回り・内装リフォーム', '中古住宅のリノベーション', '売却前の価値向上提案'],
    image: '/images/photos/service-02.jpg',
  },
  {
    no: '03',
    title: '不動産DX',
    subtitle: 'Real Estate DX',
    description:
      'テクノロジーで不動産取引をなめらかに。オンライン相談・内見から電子契約、データに基づく査定まで、来店不要でスピーディー・透明性の高いお取引を実現します。',
    points: ['オンライン相談・内見（VR／動画）', '電子契約でスムーズ・安全', 'データに基づく査定・提案', '進捗の見える化'],
    image: '/images/photos/service-03.jpg',
    href: '/dx',
  },
  {
    no: '04',
    title: '住宅ローン',
    subtitle: 'Mortgage',
    description:
      '無理のない資金計画を、専門知識でサポート。複数の金融機関の中から、お客様のライフプランに合った住宅ローンをご案内します。',
    points: ['資金計画のご相談', '金融機関のご紹介', '返済シミュレーション'],
    image: '/images/photos/service-04.jpg',
  },
];

// グローバルナビゲーション（各ページへのリンク）
export const nav = [
  { label: '事業内容', href: '/' },
  { label: '売却', href: '/sell' },
  { label: '購入', href: '/buy' },
  { label: '物件紹介', href: '/properties' },
  { label: 'DX', href: '/dx' },
  { label: '会社概要', href: '/about' },
] as const;

// 「無料相談」ボタンのリンク先（お問い合わせと共通）
export const consultHref = '/contact';

// 選ばれる理由（トップページ）
export type Strength = {
  no: string;
  title: string;
  description: string;
};

export const strengths: Strength[] = [
  {
    no: '01',
    title: 'ワンストップ',
    description:
      '売買・リフォーム・DX・住宅ローンを一つの窓口で。複数の会社を回る手間なく、住まいの相談を完結できます。',
  },
  {
    no: '02',
    title: '地域に根ざした知見',
    description:
      '地域の相場やニーズを熟知した担当者が、データと経験の両面からお客様に最適なご提案をします。',
  },
  {
    no: '03',
    title: '透明性のある取引',
    description:
      'オンライン相談や電子契約などデジタルを活用し、わかりやすく・安心できる取引体験をお届けします。',
  },
];

// 実績の数字（トップページ／※要確認：実数値に差し替え）
export const stats = [
  { value: '1,200', unit: '件+', label: 'ご相談・お取引実績' },
  { value: '15', unit: '年', label: '地域での実績' },
  { value: '98', unit: '%', label: 'お客様満足度' },
  { value: '4', unit: '事業', label: 'ワンストップ対応' },
];

// ご相談の流れ（トップページ）
export const flow = [
  { step: 'STEP 01', title: 'お問い合わせ', description: 'お電話・メール・フォームよりお気軽にご連絡ください。ご相談は無料です。' },
  { step: 'STEP 02', title: 'ヒアリング・ご提案', description: 'ご希望やお悩みを丁寧にお伺いし、最適なプランをご提案します。' },
  { step: 'STEP 03', title: 'お手続き・サポート', description: '売買・リフォーム・ローンまで、専門スタッフが一貫してサポートします。' },
  { step: 'STEP 04', title: 'お引き渡し・アフター', description: 'お取引後も、住まいに関するご相談を継続してお受けします。' },
];

// お客様の声（トップページ／※要確認：実際の声に差し替え）
export const testimonials = [
  {
    name: 'K・S 様',
    role: '戸建て購入',
    body: '初めての住宅購入で不安でしたが、資金計画からローンまで一つの窓口で相談でき、とても心強かったです。',
  },
  {
    name: 'M・T 様',
    role: 'マンション売却',
    body: '地域の相場に詳しく、納得感のあるご提案をいただけました。スピーディーで丁寧な対応に感謝しています。',
  },
  {
    name: 'Y・H 様',
    role: 'リフォーム',
    body: '中古で購入した住まいを理想の空間にリノベーションできました。担当者の提案力が素晴らしかったです。',
  },
];

// よくあるご質問（トップページ / お問い合わせ）
export const faqs = [
  { q: '相談だけでも大丈夫ですか？', a: 'はい、ご相談は無料です。売却・購入・リフォーム・住宅ローンなど、まだ検討段階の方もお気軽にご連絡ください。' },
  { q: '複数の事業をまとめて依頼できますか？', a: '可能です。売買・リフォーム・不動産DX・住宅ローンを一つの窓口でご対応でき、手続きの手間を大きく減らせます。' },
  { q: 'オンラインでの相談は可能ですか？', a: 'はい、オンライン相談・オンライン内見・電子契約に対応しています。ご来店が難しい方もご利用いただけます。' },
  { q: '対応エリアはどこですか？', a: '地域に根ざしたサービスを提供しています。詳しい対応エリアはお問い合わせの際にご確認ください。' },
];

// 代表メッセージ（会社概要ページ／※要確認）
export const message = {
  heading: '住まいを通じて、豊かな暮らしを。',
  body: [
    '私たち株式会社Kii Livingは、不動産の売買・仲介を軸に、リフォーム、不動産DX、住宅ローンまで、住まいにまつわるあらゆる場面でお客様をお支えしています。',
    '一つひとつのご縁を大切に、透明性と誠実さを何よりも重んじ、お客様が心から満足できる住まい選びを実現します。これからも地域とともに歩み、信頼される企業であり続けます。',
  ],
  signature: '代表取締役　※要確認',
};

// ── 売却ページ（/sell）──────────────────────────────
export const sell = {
  eyebrow: 'SELL',
  title: '不動産を売りたい方へ',
  lead: '「まずは今いくらで売れるのか知りたい」——そんな段階でも大歓迎です。無料査定から引き渡しまで、地域に精通したスタッフが一貫してサポートします。',
  reasons: [
    { title: '適正価格の査定', description: '地域の相場・成約事例データをもとに、根拠のある査定価格をご提示します。' },
    { title: 'スピーディーな売却', description: '購入希望者ネットワークと販売活動で、早期・好条件の成約を目指します。' },
    { title: '売却前の価値向上', description: 'リフォームやホームステージングの提案で、物件の魅力を最大化します。' },
  ],
  flow: [
    { step: 'STEP 01', title: '無料査定・ご相談', description: '物件情報をもとに査定価格をご提示。ご相談だけでもお気軽に。' },
    { step: 'STEP 02', title: '媒介契約', description: '売却方針にご納得いただいたうえで、媒介契約を締結します。' },
    { step: 'STEP 03', title: '販売活動', description: '広告掲載・内見対応など、購入希望者へのアプローチを行います。' },
    { step: 'STEP 04', title: '売買契約・引き渡し', description: '条件交渉から契約、引き渡しまで安心してお任せいただけます。' },
  ],
};

// ── 購入ページ（/buy）──────────────────────────────
export const buy = {
  eyebrow: 'BUY',
  title: '住まいを買いたい方へ',
  lead: 'はじめてのマイホームから住み替え、投資用物件まで。資金計画・物件探し・住宅ローン・リフォームまでワンストップでサポートします。',
  supports: [
    { title: '物件探し', description: 'ご希望条件をヒアリングし、非公開物件を含めて最適な物件をご紹介します。' },
    { title: '資金計画・住宅ローン', description: '無理のない返済計画から、金融機関のご紹介・手続きまでサポートします。' },
    { title: 'リフォーム提案', description: '中古物件は購入後のリフォームまで見据えて、理想の住まいづくりをご提案します。' },
  ],
  flow: [
    { step: 'STEP 01', title: 'ご相談・条件整理', description: 'ご予算やご希望のエリア・間取りなどをお伺いします。' },
    { step: 'STEP 02', title: '物件のご紹介・内見', description: '条件に合う物件をご紹介。オンライン内見にも対応します。' },
    { step: 'STEP 03', title: '資金計画・住宅ローン', description: 'ライフプランに合わせた資金計画と、ローンのお手続きをサポートします。' },
    { step: 'STEP 04', title: 'ご契約・お引き渡し', description: '契約から引き渡し、その後のアフターフォローまで対応します。' },
  ],
};

// ── 物件紹介ページ（/properties）──────────────────────
// ※ すべてイメージです。実際の物件情報に差し替えてください。
export type Property = {
  name: string;
  type: string; // 中古マンション / 新築戸建て / 土地 など
  price: string;
  layout: string; // 間取り
  area: string; // 専有面積 / 土地面積
  access: string;
  image: string;
  tags: string[];
};

export const properties: Property[] = [
  {
    name: '〇〇区 中古マンション',
    type: '中古マンション',
    price: '4,980万円',
    layout: '3LDK',
    area: '専有 72.5㎡',
    access: '〇〇駅 徒歩6分',
    image: '/images/photos/hero.jpg',
    tags: ['リノベーション済', '南向き'],
  },
  {
    name: '〇〇市 新築戸建て',
    type: '新築戸建て',
    price: '5,480万円',
    layout: '4LDK',
    area: '土地 120.3㎡',
    access: '〇〇駅 徒歩12分',
    image: '/images/photos/about.jpg',
    tags: ['駐車2台', '南向き'],
  },
  {
    name: '〇〇区 デザイナーズ',
    type: '中古マンション',
    price: '6,200万円',
    layout: '2LDK',
    area: '専有 65.0㎡',
    access: '〇〇駅 徒歩4分',
    image: '/images/photos/service-02.jpg',
    tags: ['ペット可', '角部屋'],
  },
  {
    name: '〇〇市 タワーマンション',
    type: '中古マンション',
    price: '8,900万円',
    layout: '3LDK',
    area: '専有 80.2㎡',
    access: '〇〇駅 徒歩3分',
    image: '/images/photos/company.jpg',
    tags: ['高層階', '眺望良好'],
  },
  {
    name: '〇〇区 リノベ済戸建て',
    type: '中古戸建て',
    price: '4,280万円',
    layout: '3LDK',
    area: '土地 98.6㎡',
    access: '〇〇駅 徒歩9分',
    image: '/images/photos/about.jpg',
    tags: ['リノベーション済', '陽当り良好'],
  },
  {
    name: '〇〇市 売地',
    type: '土地',
    price: '3,150万円',
    layout: '—',
    area: '土地 145.0㎡',
    access: '〇〇駅 徒歩15分',
    image: '/images/photos/hero.jpg',
    tags: ['建築条件なし', '整形地'],
  },
];

// ── 不動産DXページ（/dx）──────────────────────────────
export const dx = {
  eyebrow: 'REAL ESTATE DX',
  title: '不動産DX',
  subtitle: 'オンラインで、かんたん・スピーディーに',
  lead: 'テクノロジーを活用し、不動産取引をもっとなめらかに。ご来店が難しい方や遠方の方も、オンラインで相談から契約まで進められます。',
  features: [
    { title: 'オンライン相談', description: 'ビデオ通話で、来店不要のご相談。ご都合に合わせて、ご自宅からお気軽にどうぞ。' },
    { title: 'オンライン内見', description: '動画やVRで物件を内見。気になる物件を効率よく比較・検討いただけます。' },
    { title: '電子契約', description: '契約書類を電子化。押印・郵送の手間を減らし、スピーディーかつ安全に契約できます。' },
    { title: 'データに基づく提案', description: '相場・成約事例のデータを活用し、根拠のある査定・ご提案を行います。' },
    { title: '進捗の見える化', description: 'お取引の状況をオンラインで共有。いつでも安心して進捗をご確認いただけます。' },
    { title: 'ペーパーレス・安心', description: '書類のデジタル管理でセキュアに。環境にもやさしい取引を実現します。' },
  ],
  benefits: [
    '来店不要で、遠方・多忙な方もスムーズ',
    '手続きが速く、書類の手間を大幅に削減',
    '情報が可視化され、透明性の高い取引',
  ],
};
