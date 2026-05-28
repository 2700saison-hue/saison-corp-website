export interface CaseData {
  slug: string;
  clientName: string;
  industry: string;
  category: string;
  challenge: string;
  solution: string;
  beforeStats: { label: string; value: string }[];
  afterStats: { label: string; value: string }[];
  roi: string;
  testimonial?: string;
  featured: boolean;
  order: number;
  image?: string;
  accountImages?: string[]; // SNSアカウントのスクリーンショット
  // Rich detail fields
  challengeDetail?: string;
  solutionDetail?: string;
  processSteps?: { num: string; title: string; desc: string }[];
  interviewQA?: { q: string; a: string }[];
  testimonialName?: string;
  testimonialRole?: string;
}

export const casesData: CaseData[] = [
  {
    slug: "wedding-film",
    clientName: "結婚式WORLD FILM IF様",
    industry: "ウェディング",
    category: "sns",
    challenge: "集客数をSNSから増やしたい",
    solution: "Instagram・LINEとSNS広告の強化で予約数を増加。月間リーチ数を137倍に引き上げ、予約経由月19人達成。",
    beforeStats: [
      { label: "SNS月間予約数", value: "1人" },
      { label: "月間リーチ数", value: "321回" },
      { label: "LINE友達", value: "80人" },
    ],
    afterStats: [
      { label: "SNS月間予約数", value: "19人（+18人）" },
      { label: "月間リーチ数", value: "44,098回（137倍）" },
      { label: "月間利益", value: "+80万円UP" },
    ],
    roi: "ROI 266% / 半年480万円増収",
    testimonial: "InstagramとLINEの連動で予約がスムーズになりました。半年で大きな変化を実感できています。",
    featured: true,
    order: 3,
    image: "/images/実績/worldfilm.png",
    accountImages: ["/images/account/WORLD FILM IF1.png", "/images/account/WORLD FILM IF2.png"],
    challengeDetail:
      "ウェディング業界は口コミ・紹介に依存しがちで、新規顧客の獲得経路がほぼ固定されていました。SNSアカウントは開設していたものの、投稿内容が統一されておらず、月間リーチはわずか321回にとどまっていました。特に20代後半〜30代前半のカップルへのアプローチが課題で、競合他社がSNSに積極投資する中、情報発信量と質の両面で大きく差をつけられている状況でした。\n\nまた、予約導線もホームページへの単純誘導だけで、SNSからLINEへの連携・シナリオ設計が一切なかったため、せっかく興味を持ったユーザーが離脱してしまうケースが続出していました。月間SNS予約はわずか1件と、SNSが実質的な集客チャネルとして機能していない状態でした。",
    solutionDetail:
      "まず、Instagramアカウントのプロフィール・ハイライト・投稿テンプレートを全面刷新し、式場の世界観と感動を伝えるリール動画を週2〜3本ペースで継続投稿。プロのカメラマンと連携してショートムービー素材を月次で制作し、視覚的なクオリティを大幅に引き上げました。ハッシュタグ戦略と投稿時間の最適化で、狙ったターゲット層へのリーチを急拡大させました。\n\nLINE公式アカウントはリッチメニューとステップ配信を整備し、SNSから流入したユーザーをLINEへ誘導→初回相談予約まで自動化するシナリオを構築。さらにInstagram広告を組み合わせてリターゲティング配信を行い、検討中のカップルに対して継続的にアプローチする仕組みを整えました。半年間の運用を通じ、月間リーチを137倍・予約数を19倍に伸長させました。",
    processSteps: [
      {
        num: "01",
        title: "現状診断・競合分析",
        desc: "既存SNSアカウントのインサイト分析と、婚礼業界上位10社のSNS戦略を調査。改善優先順位を明確化。",
      },
      {
        num: "02",
        title: "コンテンツ戦略設計",
        desc: "ターゲットペルソナ（25〜32歳カップル）に響くリール動画・フィード投稿のテーマカレンダーを3ヶ月分作成。",
      },
      {
        num: "03",
        title: "LINE導線の構築",
        desc: "リッチメニュー設計・ステップ配信シナリオ（全7通）を構築。SNS→LINE→予約の自動化フローを完成。",
      },
      {
        num: "04",
        title: "リール動画の量産・配信",
        desc: "プロ撮影と既存素材を組み合わせ、感動シーンを凝縮した30秒リールを週2〜3本ペースで継続配信。",
      },
      {
        num: "05",
        title: "広告×SNSの相乗効果",
        desc: "Instagram広告でリターゲティング配信を実施。オーガニックとの相乗効果でROI 266%・半年480万円増収を達成。",
      },
    ],
    interviewQA: [
      {
        q: "セゾンに依頼する前はどのような状況でしたか？",
        a: "SNSは開設していたものの、月1件も予約が取れない状態が続いていました。何をすべきか全くわからず、正直焦りを感じていました。",
      },
      {
        q: "支援を受けて最も変わったと感じることは何ですか？",
        a: "リール動画で式の感動が伝わるようになり、問い合わせの質が変わりました。以前は価格だけを聞いてくる方が多かったのに、今は式場の世界観に共感して連絡してくださる方が増えました。",
      },
      {
        q: "導入を検討している同業者にアドバイスをするとしたら？",
        a: "迷っているなら早く始めた方がいいです。半年でここまで変わるとは思っていませんでした。費用対効果は非常に高かったです。",
      },
    ],
    testimonialName: "伊藤 香織",
    testimonialRole: "代表取締役",
  },
  {
    slug: "yamazaki-gumi",
    clientName: "建設会社 山﨑組様",
    industry: "建設・施工",
    category: "sns",
    challenge: "建設採用が困難、若い世代がなかなか採用できない",
    solution: "InstagramとLINEの強化でミスマッチの少ない人材採用を実現。",
    beforeStats: [
      { label: "フォロワー数", value: "349人" },
      { label: "月間リーチ数", value: "4,295回" },
    ],
    afterStats: [
      { label: "フォロワー数", value: "11,287人" },
      { label: "月間リーチ数", value: "97,824回（22.7倍）" },
    ],
    roi: "採用費120万円削減 / 3名採用",
    featured: false,
    order: 5,
    image: "/images/実績/yamazakigumi.png",
    accountImages: ["/images/account/yamazakigumi1.png", "/images/account/ymazakigumi2.png"],
    challengeDetail:
      "建設業界の若年層離れは深刻で、山﨑組様も例外ではありませんでした。求人誌・ハローワークへの掲載を継続していましたが、20代の応募はほぼゼロ。「建設＝3K（きつい・汚い・危険）」というネガティブなイメージを払拭する手段がなく、優秀な若手技術者の獲得が事業継続上の最大課題となっていました。\n\nInstagramアカウントは既に存在していたものの、フォロワー349人・月間リーチ4,295回と低迷しており、発信コンテンツも施工写真の単純掲載にとどまっていました。建設現場のカッコよさやチームワーク、現場職人の誇りやりがいを伝えるコンテンツが皆無でした。",
    solutionDetail:
      "「建設はカッコいい」というブランドメッセージを軸に、Instagram運用を全面刷新しました。ドローン映像・タイムラプス動画・職人インタビューリールを組み合わせ、建設現場の迫力と職人の誇りを視覚的に伝えるコンテンツを週3本ペースで配信。若手社員が自分の仕事をSNSで誇れる文化を社内から醸成しました。\n\nLINE採用導線を新たに構築し、フォロワーから直接応募・相談できる仕組みを整備。3名の若手採用を実現し、求人媒体掲載費を年間120万円削減しました。フォロワー数は349人→11,287人（32倍）、月間リーチは22.7倍に拡大し、業界内でのSNS存在感を大きく高めました。",
    processSteps: [
      {
        num: "01",
        title: "現状分析・方向性策定",
        desc: "既存SNSのインサイトデータを分析し、建設業界で成功している採用SNS事例を参照。コンテンツの方向性を決定。",
      },
      {
        num: "02",
        title: "ビジュアルブランディング設計",
        desc: "統一されたカラー・フォント・写真トーンを設定。プロフィール・ハイライトを全面刷新し、第一印象を大幅改善。",
      },
      {
        num: "03",
        title: "動画コンテンツの企画・制作",
        desc: "ドローン空撮・タイムラプス・職人インタビューの3種類の動画シリーズを企画。月12本のコンテンツ量産体制を確立。",
      },
      {
        num: "04",
        title: "LINE採用フローの整備",
        desc: "採用専用LINEアカウントのリッチメニュー・FAQ・応募フォームを構築。求職者が24時間いつでも問い合わせできる体制を整備。",
      },
      {
        num: "05",
        title: "運用定着・内製化支援",
        desc: "現場スタッフが自走できるよう撮影・投稿マニュアルを作成。月次レビューで改善を継続し、3名の採用成功を達成。",
      },
    ],
    interviewQA: [
      {
        q: "SNS採用を始めようと思ったきっかけは何ですか？",
        a: "若い子に求人誌を見てもらえないと感じていたからです。同業他社がInstagramで採用しているのを見て、うちも変えなければと思いました。",
      },
      {
        q: "コンテンツ作りで苦労したことはありましたか？",
        a: "最初は職人たちがカメラを嫌がっていましたが、セゾンさんが自然に撮影できるよう工夫してくれて、今では自分たちから「撮って」と言ってくれるようになりました。",
      },
      {
        q: "採用できた3名はどのような方でしたか？",
        a: "全員20代で、SNSで現場の雰囲気を見て『ここで働きたい』と思ったと言っていました。最初からモチベーションが高く、現場にもすぐ馴染んでくれました。",
      },
    ],
    testimonialName: "山﨑 勇一",
    testimonialRole: "代表取締役",
  },
  {
    slug: "atre-ebisu",
    clientName: "アトレ恵比寿店様",
    industry: "商業施設・駅ビル",
    category: "sns",
    challenge: "SNSで若年層の集客が必須。従来のオフライン告知では限界。",
    solution: "季節テーマの投稿設計、モデル起用、参加型企画、店舗イベントとの連動で集客に波及。",
    beforeStats: [
      { label: "フォロワー数", value: "2,200人" },
      { label: "月間リーチ数", value: "18,473回" },
    ],
    afterStats: [
      { label: "フォロワー数", value: "12,000人（+約10,000人）" },
      { label: "月間リーチ数", value: "92,849回（+7万回）" },
    ],
    roi: "イベント動員数10〜20%増",
    testimonial: "SNSを見るのが楽しみになり、実際に店にも足を運ぶようになりました。",
    featured: false,
    order: 8,
    image: "/images/実績/atre.png",
    accountImages: ["/images/account/atre1.png", "/images/account/atre2.png"],
    challengeDetail:
      "恵比寿という好立地に構えるアトレ恵比寿店様は、駅利用者からの安定した来客がある一方で、新規の若年層顧客の取り込みに課題を抱えていました。従来の集客施策は駅構内のポスター・チラシが中心で、デジタルネイティブ世代へのリーチが極めて限定的でした。SNSアカウントは運用していたものの投稿頻度が低く、フォロワー2,200人・月間リーチ18,473回と伸び悩んでいました。\n\n季節ごとのイベントやセール情報をSNSで効果的に発信できておらず、競合の商業施設や周辺の商業ゾーンと比較してSNSでの存在感が希薄でした。特に20代〜30代前半の女性ターゲットへのリーチと、来店への行動変容につなげるコンテンツ設計が急務でした。",
    solutionDetail:
      "恵比寿エリアのライフスタイルと親和性の高い「ファッション×グルメ×カルチャー」をテーマに、季節ごとのコンテンツカレンダーを設計しました。モデルを起用したスタイリング提案投稿・テナント店舗とのコラボレーション企画・参加型ストーリーズキャンペーンを組み合わせ、エンゲージメントを高める多層的なSNS施策を展開。ハッシュタグ戦略と投稿頻度の最適化で、オーガニックリーチを大幅に拡大しました。\n\nイベント告知の際はInstagramとLINEを連動させ、予約・参加登録まで一気通貫で対応できる導線を整備。リール動画でイベントのハイライトシーンを発信することで、参加者によるシェアを促し二次拡散も獲得。フォロワーを2,200人から12,000人に増やし、イベント動員数10〜20%増を達成しました。",
    processSteps: [
      {
        num: "01",
        title: "ターゲット分析・コンセプト策定",
        desc: "恵比寿エリアの顧客層データを分析し、メインターゲット（25〜35歳女性）に響くSNSコンセプトと年間コンテンツ方針を策定。",
      },
      {
        num: "02",
        title: "季節別コンテンツカレンダー作成",
        desc: "春夏秋冬の季節イベントに合わせた投稿テーマを設計。モデル撮影スケジュールとテナントコラボ企画を3ヶ月先まで計画。",
      },
      {
        num: "03",
        title: "モデル起用・撮影ディレクション",
        desc: "ターゲット層に親和性の高いモデルを選定し、アトレ恵比寿の世界観に合ったビジュアル撮影をプロデュース。",
      },
      {
        num: "04",
        title: "参加型キャンペーンの設計",
        desc: "フォロー＆シェアキャンペーン・ユーザー投稿（UGC）促進施策を設計・実施。フォロワーの自発的な拡散を促進。",
      },
      {
        num: "05",
        title: "イベント告知・来店誘導の最適化",
        desc: "LINE公式アカウントとInstagramを連動し、イベント告知→予約→来店の導線を一元化。動員数10〜20%増を達成。",
      },
    ],
    interviewQA: [
      {
        q: "SNS強化前の最大の課題は何でしたか？",
        a: "イベントを企画しても若いお客様に届いていないと感じていました。ポスターだけでは限界があると薄々気づいていたところに、セゾンさんから具体的な提案をいただきました。",
      },
      {
        q: "コンテンツの方向性についてはどのように決めましたか？",
        a: "セゾンさんがターゲット分析のデータを見せてくれて、どんなコンテンツが響くかを一緒に考えてくれました。私たちだけでは思いつかなかったアイデアばかりで助かりました。",
      },
      {
        q: "実際に来店増加の手応えはありましたか？",
        a: "イベント期間中に『Instagramで見た』とおっしゃるお客様が明らかに増えました。以前はほとんどそういう声がなかったので、効果をはっきり実感できています。",
      },
    ],
    testimonialName: "佐藤 美咲",
    testimonialRole: "マーケティング部長",
  },
  {
    slug: "hama-topi",
    clientName: "浜トピ様",
    industry: "飲食・旅行メディア",
    category: "sns",
    challenge: "地域密着グルメメディアとして、情報発信の頻度・統一感・導線設計に課題",
    solution: "テンプレート投稿の体系化、LINE誘導→フォーム→問い合わせ対応まで一気通貫で構築",
    beforeStats: [
      { label: "フォロワー数", value: "0人" },
      { label: "LINE登録者", value: "未整備" },
    ],
    afterStats: [
      { label: "フォロワー数", value: "25,000人" },
      { label: "LINE登録者", value: "1,000人" },
      { label: "月間問い合わせ", value: "5件（100万円近い売上）" },
    ],
    roi: "広告費0円で月100万円近い売上",
    featured: false,
    order: 9,
    image: "/images/実績/hamatopi.png",
    accountImages: ["/images/account/hamatopi1.png", "/images/account/hamatopi2.png"],
    challengeDetail:
      "浜松エリアを中心にグルメ・旅行情報を発信したいという明確なビジョンはあったものの、0からのスタートで何をどう発信すべきかが整理されていませんでした。投稿のトンマナがバラバラで継続性がなく、フォロワーが定着しない状態が続いていました。また、情報発信の先にある「収益化」の仕組みも描けておらず、労力だけがかかる状況でした。\n\n地域メディアとしての差別化ポイントも曖昧で、全国的なグルメメディアとの違いを打ち出せず、フォロワーが増えない悪循環から抜け出せていませんでした。SNSで認知を獲得し、そこから問い合わせ・マネタイズにつなげるまでの一貫した設計が課題でした。",
    solutionDetail:
      "「浜松・静岡西部エリアのリアルなグルメ情報メディア」というポジショニングを明確に設定し、統一感のある投稿テンプレートを設計しました。飲食店紹介・観光スポット・地域イベントの3本柱でコンテンツシリーズを体系化し、毎日の安定配信体制を構築。地元にしかわからないリアルな情報発信がフォロワーの信頼を獲得し、0人から25,000人へ成長しました。\n\nLINE公式アカウントを収益化の核として設計し、フォロワーをLINE友達に誘導→飲食店への広告掲載提案・タイアップ企画の問い合わせフローを整備。広告費ゼロで月5件の法人問い合わせを獲得し、月間売上100万円近いマネタイズを実現しました。",
    processSteps: [
      {
        num: "01",
        title: "メディアコンセプト・差別化戦略策定",
        desc: "浜松エリアに特化した地域密着グルメメディアとしてのポジショニングを確立。競合メディアとの差別化ポイントを明文化。",
      },
      {
        num: "02",
        title: "投稿テンプレート・ブランドガイドライン作成",
        desc: "カラー・フォント・写真スタイルを統一したテンプレートを作成。誰が投稿しても統一感が保てる仕組みを構築。",
      },
      {
        num: "03",
        title: "コンテンツカレンダー運用開始",
        desc: "飲食店紹介・観光・イベントの3シリーズを週6投稿ペースで運用開始。地元密着情報でオーガニックリーチを急拡大。",
      },
      {
        num: "04",
        title: "LINE収益化フローの設計",
        desc: "SNSからLINEへの誘導導線を整備。飲食店向けの広告掲載・タイアップパッケージを設計し、問い合わせ対応フローを構築。",
      },
      {
        num: "05",
        title: "マネタイズの本格稼働",
        desc: "月5件の法人問い合わせから広告掲載・タイアップ契約を継続獲得。広告費ゼロで月100万円近い売上を安定的に達成。",
      },
    ],
    interviewQA: [
      {
        q: "メディアを始めようと思ったきっかけを教えてください。",
        a: "地元の美味しいお店をもっと多くの人に知ってほしいという思いからでした。でも最初は何から始めればいいか全くわからなくて、セゾンさんに相談しました。",
      },
      {
        q: "0からのスタートで不安はありましたか？",
        a: "すごく不安でした。でもセゾンさんが段階的に目標を設定してくれて、毎月少しずつ数字が伸びていくのを見て自信がついてきました。25,000人になるとは夢にも思っていませんでした。",
      },
      {
        q: "収益化できるようになったときの感想を教えてください。",
        a: "広告費ゼロで月100万円近くになったときは本当に驚きました。地元のお店に喜んでもらえて、私も嬉しいし、やっていて本当によかったと思っています。",
      },
    ],
    testimonialName: "鈴木 大輔",
    testimonialRole: "メディア運営者",
  },
  {
    slug: "oomugi-app",
    clientName: "おおむぎAPP（自社運用）",
    industry: "自社メディア",
    category: "sns",
    challenge: "自社SNSアカウントの成長と法人案件獲得",
    solution: "独自コンテンツ戦略で1年間の集中運用。フォロワー1.6万人達成、広告費効果年間1,000万円超。",
    beforeStats: [
      { label: "フォロワー数", value: "0人" },
      { label: "案件数", value: "0件" },
    ],
    afterStats: [
      { label: "フォロワー数", value: "16,000人" },
      { label: "成約案件", value: "5件以上" },
      { label: "広告費効果", value: "年間1,000万円以上" },
    ],
    roi: "広告費換算年間1,000万円超",
    featured: false,
    order: 10,
    accountImages: ["/images/account/oomugiapp1.png", "/images/account/oomugiapp2.png"],
  },
  {
    slug: "quatresaison",
    clientName: "キャトルセゾン浜松様",
    industry: "飲食・ブランド",
    category: "sns",
    challenge: "SNSでブランド認知を高め、集客数を増やしたい",
    solution: "Instagram・LINE運用の強化でブランド価値を可視化。継続的なコンテンツ配信で認知拡大を実現。",
    beforeStats: [{ label: "SNS集客", value: "低水準" }],
    afterStats: [{ label: "月間リーチ", value: "大幅増加" }],
    roi: "ブランド認知向上・集客改善",
    featured: false,
    order: 11,
    image: "/images/実績/quatresaison.png",
    accountImages: ["/images/account/quatresaison1.png", "/images/account/quatresaison2.png"],
    challengeDetail:
      "クアトロセゾン様は質の高い料理と洗練された空間を持ちながら、そのブランド価値がSNS上で十分に表現できていませんでした。投稿内容がメニュー写真の単純掲載にとどまり、店の世界観・シェフのこだわり・食材のストーリーが伝わらず、来店動機を生み出せていませんでした。フォロワー数も伸び悩み、SNSが集客に機能していない状態が続いていました。\n\nまた、ランチ・ディナー・記念日コースなど複数の顧客層にアプローチしたいにもかかわらず、ターゲットを絞り込んだコンテンツ設計がなく、誰にでも向けた曖昧な発信に終始していました。高単価の飲食店ならではのブランドプレミアムを訴求する戦略的なSNS運用が必要でした。",
    solutionDetail:
      "「料理×空間×ストーリー」を三本柱にしたブランドコンテンツ戦略を策定しました。シェフによる食材選びの裏側・調理プロセスの動画・季節メニューのビジュアル撮影を組み合わせ、クアトロセゾンでしか体験できない価値を継続発信。統一されたビジュアルトーンでブランドイメージを確立し、プレミアムな世界観を演出しました。\n\n記念日・デート利用をターゲットにしたストーリーズ投稿と限定コースの先行告知をLINE配信と連動させ、エンゲージメントの高いフォロワーの予約行動を促進。季節ごとのコンテンツ戦略で月間リーチを大幅に拡大し、ブランド認知と集客の両面で改善を実現しました。",
    processSteps: [
      {
        num: "01",
        title: "ブランドコンセプトの整理",
        desc: "クアトロセゾンの強み・ターゲット顧客・競合との差別化ポイントを整理。SNSで表現すべきブランドの世界観を言語化。",
      },
      {
        num: "02",
        title: "ビジュアルアイデンティティの統一",
        desc: "フィードのカラートーン・写真スタイル・フォントを統一。プロカメラマンによる料理・空間撮影を定期実施。",
      },
      {
        num: "03",
        title: "コンテンツシリーズの設計",
        desc: "「シェフのこだわり」「季節メニュー」「食材の産地物語」など5シリーズを企画。週3投稿の安定配信体制を構築。",
      },
      {
        num: "04",
        title: "LINE連携と予約導線の整備",
        desc: "LINE公式アカウントに限定コース先行告知・予約リンクを設置。SNS→LINE→予約の流れをシームレスに設計。",
      },
      {
        num: "05",
        title: "季節キャンペーンの実施",
        desc: "バレンタイン・誕生日・記念日などのシーズンキャンペーンをInstagramとLINEで同時展開。予約数の季節変動を平準化。",
      },
    ],
    interviewQA: [
      {
        q: "SNS運用を強化しようと思ったきっかけを教えてください。",
        a: "お客様から『SNSを見て来ました』と言われることが増えてきたのに、発信がまだまだ弱いと感じていました。もっと料理の美味しさや店の雰囲気を伝えたかったんです。",
      },
      {
        q: "コンテンツ制作で特に効果があったものは何ですか？",
        a: "シェフが食材のこだわりを語る動画が特に反響が大きかったです。『こんなに丁寧に料理しているお店に行ってみたい』というコメントをたくさんいただきました。",
      },
      {
        q: "ブランドイメージに変化はありましたか？",
        a: "SNSを通じて高級感だけでなく、温かみや誠実さも伝わるようになりました。予約のお客様の質も上がり、記念日や大切な日に選んでいただけることが増えました。",
      },
    ],
    testimonialName: "中村 健太",
    testimonialRole: "オーナーシェフ",
  },
  {
    slug: "mazasu",
    clientName: "マザアス様",
    industry: "サービス業",
    category: "sns",
    challenge: "既存顧客の維持と新規獲得の両立",
    solution: "LINE公式アカウントとSNSの連携により、既存顧客へのリピート訴求と新規獲得を同時に実現。",
    beforeStats: [{ label: "リピート率", value: "低水準" }],
    afterStats: [{ label: "LINE友達", value: "増加" }, { label: "リピート率", value: "向上" }],
    roi: "顧客維持率・リピート率改善",
    featured: false,
    order: 15,
    image: "/images/実績/mazasu.png",
    accountImages: ["/images/account/mazasu1.png", "/images/account/mazasu2.png"],
  },
  {
    slug: "floom",
    clientName: "Floom様",
    industry: "各種業態",
    category: "sns",
    challenge: "SNSを核にした集客・採用の強化",
    solution: "ターゲット分析から始め、最適なプラットフォーム選定と投稿設計で着実に成果を出した。",
    beforeStats: [{ label: "SNS集客", value: "低水準" }],
    afterStats: [{ label: "SNS集客", value: "大幅改善" }],
    roi: "集客コスト削減・成果向上",
    featured: false,
    order: 21,
    image: "/images/実績/23.png",
    accountImages: ["/images/account/floom1.png", "/images/account/floom2.png"],
  },
  {
    slug: "ginza-whitening-web",
    clientName: "銀座deホワイトニング様",
    industry: "美容・エステ",
    category: "web",
    challenge: "ブランドイメージに合った高級感のあるホームページで新規顧客を獲得したい",
    solution: "ターゲットに響くデザイン・コピーライティング・SEO対策を一気通貫で制作。集客に直結するLP構成を採用。",
    beforeStats: [
      { label: "Web経由問い合わせ", value: "月数件" },
      { label: "SEO順位", value: "圏外" },
    ],
    afterStats: [
      { label: "Web経由問い合わせ", value: "大幅増加" },
      { label: "ブランド認知", value: "向上" },
    ],
    roi: "Web経由集客・ブランド価値向上",
    featured: true,
    order: 22,
    image: "/images/works/ginza-whitening.png",
    challengeDetail:
      "銀座という高級エリアで展開するホワイトニングサロン様は、施術の品質と接客に絶対の自信を持ちながらも、Webサイトがそのブランド価値を十分に表現できていませんでした。既存サイトはテンプレートベースで情報量も少なく、初めて訪問したユーザーが予約ボタンを押す前に離脱してしまう課題がありました。SEO対策も不十分でGoogleでの検索順位は圏外にとどまり、Web経由の問い合わせはほぼゼロの状態でした。\n\n銀座・ホワイトニングというキーワードで検索するユーザーは比較検討を十分に行う傾向があり、サイトの信頼感・高級感・安心感が予約の決め手になります。競合他院が充実したサイトを展開する中で、差別化できるサイト制作と集客最適化が急務でした。",
    solutionDetail:
      "「銀座の上質さ」を体現する黒×ゴールドを基調としたデザインを制作し、施術メニューの特長・料金の透明性・実績写真を丁寧に整理したページ構成を設計しました。ファーストビューに強力なキャッチコピーと予約ボタンを配置し、スクロールするごとに信頼感が高まる情報設計を採用。スマートフォン最適化を徹底し、表示速度の改善にも注力しました。\n\nSEO対策として「銀座 ホワイトニング」「恵比寿 ホワイトニング」など地域×施術名のキーワードを中心にコンテンツ最適化を実施。Googleビジネスプロフィールとの連携も整備し、検索流入とMapからの集客を強化。Web経由の問い合わせが大幅に増加し、ブランド認知の向上と新規顧客獲得を同時に実現しました。",
    processSteps: [
      {
        num: "01",
        title: "競合調査・SEOキーワード選定",
        desc: "同エリア競合10サイトのSEO状況を調査し、獲得可能なキーワードを優先順位付け。コンテンツ戦略の骨格を設計。",
      },
      {
        num: "02",
        title: "デザインコンセプト・ワイヤーフレーム作成",
        desc: "銀座ブランドに相応しいデザインシステム（カラー・フォント・余白感）を定義。全ページのワイヤーフレームをご確認いただきながら設計。",
      },
      {
        num: "03",
        title: "コピーライティング・コンテンツ制作",
        desc: "ターゲットの不安・疑問に答える情報設計でコピーを制作。施術説明・料金ページ・よくある質問を充実させ離脱率を低下。",
      },
      {
        num: "04",
        title: "フォト・ビジュアル撮影",
        desc: "サロン内装・スタッフ・施術イメージの撮影をプロカメラマンが担当。高品質なビジュアルでブランド価値を視覚的に訴求。",
      },
      {
        num: "05",
        title: "公開・SEO・予約導線の最適化",
        desc: "公開後もアクセス解析データをもとに離脱ポイントを特定し改善を継続。予約フォームのUX改善でコンバージョン率を向上。",
      },
    ],
    interviewQA: [
      {
        q: "サイト制作をセゾンに依頼しようと思った理由を教えてください。",
        a: "デザインのセンスと、集客に直結する実績があることを決め手にしました。銀座という場所に恥ずかしくないサイトを作ってほしかったので、クオリティを重視しました。",
      },
      {
        q: "完成したサイトへの第一印象はいかがでしたか？",
        a: "想像以上の仕上がりで正直驚きました。高級感と清潔感のバランスが絶妙で、これなら自信を持ってお客様に見せられると思いました。",
      },
      {
        q: "公開後の反響はいかがでしたか？",
        a: "Web経由の問い合わせが目に見えて増えました。サイトを見て『ここなら安心』と感じて来てくださるお客様が増え、スタッフのモチベーションも上がっています。",
      },
    ],
    testimonialName: "林 由美子",
    testimonialRole: "オーナー",
  },
  {
    slug: "remeo-web",
    clientName: "Re:Meo様",
    industry: "EC・ファッション",
    category: "web",
    challenge: "ECサイトのデザインを一新し、コンバージョン率を改善したい",
    solution: "ブランドコンセプトを映えるビジュアルで表現。商品の魅力が伝わるUI設計とスムーズな購入フローを構築。",
    beforeStats: [
      { label: "CV率", value: "低水準" },
      { label: "滞在時間", value: "短い" },
    ],
    afterStats: [
      { label: "CV率", value: "改善" },
      { label: "ブランド認知", value: "向上" },
    ],
    roi: "CV率改善・ブランド価値向上",
    featured: false,
    order: 23,
    image: `https://s0.wordpress.com/mshots/v1/${encodeURIComponent("https://remeo.base.shop")}?w=1280&h=800&vpw=1280&vph=960`,
  },
  {
    slug: "gotoku-web",
    clientName: "五徳帝王道場様",
    industry: "飲食・格闘技",
    category: "web",
    challenge: "店舗の世界観・魅力を伝えるホームページで新規来店を増やしたい",
    solution: "「帝王」らしい力強いビジュアルデザインで世界観を表現。店舗情報・メニュー・アクセスをわかりやすく整理。",
    beforeStats: [
      { label: "Web経由来店", value: "少数" },
      { label: "ブランド認知", value: "低水準" },
    ],
    afterStats: [
      { label: "Web経由来店", value: "増加" },
      { label: "ブランド認知", value: "向上" },
    ],
    roi: "Web経由来店増加・ブランディング強化",
    featured: false,
    order: 24,
    image: "/images/works/gotoku.png",
    challengeDetail:
      "五徳帝王道場様は、本格的な格闘技指導と絶品料理という二つの顔を持つユニークな複合施設です。しかし既存のWebサイトはその独自性・世界観をほとんど表現できておらず、検索で訪問したユーザーが「どんな場所なのか」を理解する前に離脱してしまう状況でした。特に「格闘技×飲食」という珍しい組み合わせのコンセプトが伝わらず、潜在的なファンを取りこぼしていました。\n\nSEO対策も手つかずで、地域名×道場・地域名×料理で検索しても上位表示されず、口コミ以外の新規来客経路がほぼ存在しない状態でした。力強くダイナミックなブランドイメージをWebで表現しつつ、来店・問い合わせに直結する設計が求められていました。",
    solutionDetail:
      "「帝王の風格」をコンセプトに、重厚感のある黒×赤×金を基調としたデザインを制作しました。ファーストビューに道場の迫力ある写真と力強いキャッチコピーを配置し、スクロールするごとに道場の世界観・格闘技クラスの案内・料理の魅力が自然に伝わるページ設計を採用。道場通いのお客様も、料理目的のお客様も、それぞれにアプローチできる情報設計を実現しました。\n\n地域SEO対策として道場名・地域・格闘技キーワードを組み合わせたコンテンツを充実させ、Googleビジネスプロフィールとの連携で地図検索からの流入を強化。施設の地図・アクセス・各種SNSへの導線も整備し、Web経由の来店増加とブランド認知の向上を同時に実現しました。",
    processSteps: [
      {
        num: "01",
        title: "ヒアリング・コンセプト設計",
        desc: "道場の歴史・理念・ターゲット（格闘技ファン・グルメ好き・地域住民）を整理。両方の顧客層に響くコンセプトを策定。",
      },
      {
        num: "02",
        title: "デザインシステム構築",
        desc: "帝王のブランドを体現する黒×赤×金のデザインシステムを設計。フォント・素材・余白感を統一したスタイルガイドを作成。",
      },
      {
        num: "03",
        title: "コンテンツ・写真撮影",
        desc: "道場での練習シーン・師範のポートレート・料理の本格撮影を実施。世界観を最大限に引き出す撮影ディレクションを担当。",
      },
      {
        num: "04",
        title: "ページ制作・SEO実装",
        desc: "ファーストビュー最適化・ページ速度改善・地域SEOを実装。格闘技・飲食両方のキーワードで検索上位を狙う構成を採用。",
      },
      {
        num: "05",
        title: "公開後の改善・SNS連携",
        desc: "アクセスデータを分析し離脱ポイントを継続改善。InstagramへのSNS連携を整備し、サイトとSNSが相乗効果を生む体制を構築。",
      },
    ],
    interviewQA: [
      {
        q: "サイト制作で最も伝えたかったことは何でしたか？",
        a: "ここは普通の道場でも普通の飲食店でもない、唯一無二の場所だということです。その世界観をサイトで表現してほしかったのですが、セゾンさんがそれを完璧に形にしてくれました。",
      },
      {
        q: "制作過程で印象に残っていることはありますか？",
        a: "ヒアリングの丁寧さが印象的でした。ただ作るのではなく、道場の哲学や想いまで深掘りして聞いてくれて、それがデザインに反映されているのを感じました。",
      },
      {
        q: "公開後、来客数に変化はありましたか？",
        a: "『サイトを見て来ました』という方が確実に増えました。特に遠方から初めて来てくださる方が増えており、Webの力を実感しています。",
      },
    ],
    testimonialName: "高橋 龍之介",
    testimonialRole: "道場主・オーナー",
  },
  {
    slug: "kawayama-farm-web",
    clientName: "カワヤマファーム様",
    industry: "観光・アウトドア",
    category: "web",
    challenge: "キャンプ場の魅力を伝え、オンライン予約を増やしたい",
    solution: "自然の雰囲気が伝わる高品質な写真・映像を活用したサイト制作。予約導線をシンプルに設計し予約率を向上。",
    beforeStats: [
      { label: "オンライン予約", value: "低水準" },
      { label: "Web流入", value: "少ない" },
    ],
    afterStats: [
      { label: "オンライン予約", value: "大幅増加" },
      { label: "Web経由集客", value: "向上" },
    ],
    roi: "オンライン予約増加・集客改善",
    featured: false,
    order: 25,
    image: `https://s0.wordpress.com/mshots/v1/${encodeURIComponent("https://kanna-camp-clone.vercel.app/")}?w=1280&h=800&vpw=1280&vph=960`,
  },
  // ── 動画制作実績（YouTube） ──────────────────────────────
  {
    slug: "tikato-titanic",
    clientName: "株式会社ティ・カトウ様",
    industry: "製造業",
    category: "video",
    challenge: "製品『タイトニック』の魅力をわかりやすく映像で伝えたい",
    solution: "製品の特長・使用シーンをプロ映像で表現。視聴者が直感的に価値を理解できる構成で制作。",
    beforeStats: [{ label: "製品認知度", value: "限定的" }],
    afterStats: [{ label: "動画視聴", value: "多数" }, { label: "問い合わせ", value: "増加" }],
    roi: "製品認知向上・問い合わせ増加",
    featured: true,
    order: 26,
    image: "https://img.youtube.com/vi/fI721GYnk6Y/hqdefault.jpg",
  },
  {
    slug: "lsi-medience",
    clientName: "LSIメディエンス様",
    industry: "医療・検査",
    category: "video",
    challenge: "企業の信頼性・事業内容を映像でわかりやすく伝えたい",
    solution: "企業の強みと実績をストーリー形式で表現。ビジネスパートナーへの信頼訴求を映像で実現。",
    beforeStats: [{ label: "動画コンテンツ", value: "なし" }],
    afterStats: [{ label: "企業PR動画", value: "完成・公開" }],
    roi: "企業ブランディング強化",
    featured: true,
    order: 27,
    image: "https://img.youtube.com/vi/26502QBOIOE/hqdefault.jpg",
  },
  {
    slug: "arkata-girl",
    clientName: "在り方ガール様",
    industry: "コンテンツ・エンタメ",
    category: "video",
    challenge: "コンテンツのオープニング映像でブランドの世界観を表現したい",
    solution: "ブランドコンセプトに合わせたビジュアルデザインで高品質なオープニング映像を制作。",
    beforeStats: [{ label: "オープニング映像", value: "なし" }],
    afterStats: [{ label: "コンテンツ完成度", value: "大幅向上" }],
    roi: "ブランド価値・コンテンツ品質向上",
    featured: false,
    order: 28,
    image: "https://img.youtube.com/vi/2yApw8YpNVY/hqdefault.jpg",
  },
  {
    slug: "mitsubishi-estate",
    clientName: "三菱地所レジデンス様",
    industry: "不動産",
    category: "video",
    challenge: "大手デベロッパーとしてのブランドイメージを映像で訴求したい",
    solution: "高品質な映像表現で物件・ブランドの魅力を最大化。VFX・CGを活用した迫力ある映像を制作。",
    beforeStats: [{ label: "ブランド動画", value: "なし" }],
    afterStats: [{ label: "PR動画", value: "完成・展開" }],
    roi: "ブランド認知向上",
    featured: true,
    order: 29,
    image: "https://img.youtube.com/vi/4tYhzANXgXs/hqdefault.jpg",
  },
  {
    slug: "gotoku-ad",
    clientName: "五徳帝王道場様（広告動画）",
    industry: "飲食・格闘技",
    category: "video",
    challenge: "コンサルティングサービスの魅力を広告動画で訴求したい",
    solution: "ターゲットに刺さるコンサルティング広告動画を制作。視聴者の心に響くストーリーで問い合わせを誘導。",
    beforeStats: [{ label: "動画広告", value: "なし" }],
    afterStats: [{ label: "広告動画", value: "完成・配信" }],
    roi: "問い合わせ増加",
    featured: false,
    order: 30,
    image: "https://img.youtube.com/vi/ugc421m7MLw/hqdefault.jpg",
  },
  {
    slug: "ginza-whitening-ad",
    clientName: "銀座deホワイトニング様（SNS広告）",
    industry: "美容・エステ",
    category: "video",
    challenge: "SNS広告動画で新規顧客の獲得を加速させたい",
    solution: "スマートフォン視聴に最適化したSNS広告動画を制作。ファーストビューで興味を引き、予約へ誘導。",
    beforeStats: [{ label: "SNS広告動画", value: "なし" }],
    afterStats: [{ label: "動画広告配信", value: "開始・反響増" }],
    roi: "SNS経由予約増加",
    featured: false,
    order: 31,
    image: "https://img.youtube.com/vi/Oc0d_6sAIqQ/hqdefault.jpg",
  },
  {
    slug: "seison-case-01",
    clientName: "制作事例①",
    industry: "各種業態",
    category: "video",
    challenge: "企業の強みを映像コンテンツとして発信したい",
    solution: "ターゲットに刺さる映像構成とプロの映像技術で高品質なPR動画を制作。",
    beforeStats: [{ label: "映像コンテンツ", value: "なし" }],
    afterStats: [{ label: "PR動画", value: "完成・公開" }],
    roi: "ブランディング強化",
    featured: false,
    order: 32,
    image: "https://img.youtube.com/vi/95GWHIbJptc/hqdefault.jpg",
  },
  {
    slug: "bridal-shooting",
    clientName: "ブライダル撮影",
    industry: "ウェディング",
    category: "video",
    challenge: "結婚式の感動を高品質な映像で永遠に残したい",
    solution: "プロカメラマン・ディレクターによる感動的なブライダル映像制作。編集・演出にこだわった仕上がり。",
    beforeStats: [{ label: "動画クオリティ", value: "標準的" }],
    afterStats: [{ label: "満足度", value: "非常に高い" }],
    roi: "顧客満足度向上・口コミ増加",
    featured: false,
    order: 33,
    image: "https://img.youtube.com/vi/jS1ABfk42oQ/hqdefault.jpg",
  },
  {
    slug: "pyrosparx",
    clientName: "PyroSparX様",
    industry: "エンタメ・イベント",
    category: "video",
    challenge: "ブランドのアイキャッチ映像でインパクトを残したい",
    solution: "VFX・CGを駆使した迫力あるアイキャッチ映像を制作。ブランドの世界観を瞬時に伝える映像表現を実現。",
    beforeStats: [{ label: "アイキャッチ映像", value: "なし" }],
    afterStats: [{ label: "映像完成", value: "高評価" }],
    roi: "ブランド認知・インパクト向上",
    featured: false,
    order: 34,
    image: "https://img.youtube.com/vi/fM19NU3qUWg/hqdefault.jpg",
  },
  {
    slug: "sakura-opening",
    clientName: "SAKURA様",
    industry: "エンタメ・コンテンツ",
    category: "video",
    challenge: "コンテンツのオープニング映像で視聴者を引き込みたい",
    solution: "映像・音楽・エフェクトを組み合わせた高品質なオープニング映像を制作。",
    beforeStats: [{ label: "オープニング映像", value: "なし" }],
    afterStats: [{ label: "視聴者反響", value: "好評" }],
    roi: "コンテンツ品質・視聴率向上",
    featured: false,
    order: 35,
    image: "https://img.youtube.com/vi/jcj6CtX7gsU/hqdefault.jpg",
  },
  {
    slug: "app-opening",
    clientName: "アプリOP",
    industry: "IT・テクノロジー",
    category: "video",
    challenge: "アプリのオープニング映像でユーザーの期待感を高めたい",
    solution: "アプリのコンセプトと世界観に合わせたオープニング映像を制作。ユーザー体験を向上させるモーショングラフィックスを採用。",
    beforeStats: [{ label: "アプリOP映像", value: "なし" }],
    afterStats: [{ label: "ユーザー体験", value: "向上" }],
    roi: "アプリ品質・ユーザー満足度向上",
    featured: false,
    order: 36,
    image: "https://img.youtube.com/vi/y20eikGQpGc/hqdefault.jpg",
  },
  {
    slug: "airlock-pr",
    clientName: "AirLock様",
    industry: "製造・テクノロジー",
    category: "video",
    challenge: "革新的な製品の機能・価値を映像でわかりやすく訴求したい",
    solution: "製品の技術的強みと使用メリットを視覚的にわかりやすく伝える製品紹介動画を制作。",
    beforeStats: [{ label: "製品紹介動画", value: "なし" }],
    afterStats: [{ label: "製品認知度", value: "向上" }, { label: "問い合わせ", value: "増加" }],
    roi: "製品認知・商談増加",
    featured: true,
    order: 37,
    image: "https://img.youtube.com/vi/NcVi06sLznU/hqdefault.jpg",
  },
];
