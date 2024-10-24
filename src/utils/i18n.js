import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Translation files (sample JSON for two languages)
const resources = {
  jp: {
    translation: {
      welcome: "当サイトへようこそ！",
      description: "これはシンプルな多言語対応のウェブサイトです。",
      oripaHomepage: "Oripa ホームページ",
      helperCenter: "ヘルパーセンター",
      contactUs: "お問い合わせ",
      partnerLogin: "パートナーログイン",
      partnerRegister: "パートナーアカウントを登録する",
      login: "ログイン",
      register: "アカウント登録",
      admin: "管理者",
      home: "ホーム",
      regulation:
        "Oripa Limitedはセーシェル金融サービス局（FSA）によって、証券ディーラーライセンス番号SD010のもとで規制されています。| プライバシーポリシー | クッキーポリシー | 利用規約 FinTrade Limitedはモーリシャス金融サービス委員会（FSC）によって、投資ディーラーライセンス番号GB20025835のもとで規制されています。| プライバシーポリシー | クッキーポリシー | 利用規約 TPS Management Limitedは、住所がキプロス、ニコシア、アギオス・パヴロス、2364、ステリオウ・マヴロマッティ80Bにあり、Tradexfin Limitedが完全に所有しています。 リスク警告: 外国為替およびデリバティブ取引には、投資された資本に対する重大なリスクが伴います。当社のリスク開示 (Tradexfin) とリスク開示 (Fintrade) を必ずお読みいただき、十分に理解してください。免責事項：当社のオンライン取引施設およびサービスの使用は、金融市場での取引を行うための勧誘でも、取引の提案でもありません。お住まいの国に関連する法律、規制、指令に違反しないことを確認するのは、あくまでお客様の責任です。当社のサービスへのアクセスに制限が適用される場合があり、以下の国々に該当する国民または居住者が含まれることがありますが、これに限定されません：アルバニア、バハマ、バルバドス、ボツワナ、カンボジア、ガーナ、ジャマイカ、モーリシャス、ミャンマー、ニカラグア、パキスタン、パナマ、シリア、ウガンダ、イエメン、ジンバブエ、フィリピン、トルコ、ヨルダン、アフガニスタン、アンギラ、バヌアツ。私たちは、米国、カナダ、EU諸国、イラン、北朝鮮、ベリーズの市民にサービスを提供していません。18歳以上または、お住まいの国で法定年齢とされる年齢に達している必要があります。アカウントを登録する際、自身の意思でXMTradingに登録していることを認めます。",
      adverTitle: "支払いごとに最大10％",
      adverContent1: "48,000人以上のアフィリエイトおよびIBが",
      adverContent2: "60カ国以上からOripaをパートナーに選んでいます。",
      becomePartner: "今すぐOripaパートナーになりましょう",
      readMore: "ORIPAについてもっと読む",
      testmonials: "お客様の声",
      testimonials1:
        "Oripaは、私たちが取引している中で最も信頼できるブローカーの一つです。トラッキング、コンバージョン、アカウント管理は抜群です。",
      testimonials2:
        "Oripaのパートナープログラムは、私が見た中で最も優れたプログラムの一つです。幸運にも、素晴らしいマネージャーに出会い、マーケティングのサポートと、顧客への的確なサポートを提供してもらいました。",
      testimonials3:
        "Oripaとは数年間取引していますが、彼らが最高で最も誠実なブローカーであると信じています。多くのブローカーを試しましたが、今もXMTradingが私のリストのトップにあります。",
      affId: "アフィリエイトID",
      password: "パスワード",
      wantRegister: "登録しますか？",
      forgotPwd: "パスワードをお忘れですか？",
      isRequired: " は必須です。",
      partnerAccount: "パートナーアカウント登録",
      fullName: "氏名",
      email: "メールアドレス",
      phNumber: "電話番号",
      country: "国",
      invalidPwd1: "パスワードは8文字以上でなければなりません。",
      invalidPwd2:
        "パスワードには、少なくとも1つの文字、1つの数字、および1つの特殊文字を含める必要があります。",
      regCommentTitle1: "ロットごとに最大¥100",
      regCommentDesc1:
        "Oripa.comに紹介したクライアントが取引するロットごとに、最大¥100を獲得できます！",
      regCommentTitle2: "コミッションに制限なし",
      regCommentDesc2:
        "Oripaパートナープログラムは、クライアントの紹介に対して無制限の収益の可能性を提供します。",
      regCommentTitle3: "リアルタイムレポート",
      regCommentDesc3:
        "パートナープログラムでは、最新の統計とレポートを使用して、資金を定期的に監視できる最先端のパートナーエリアが提供されます。",
      regCommentTitle4: "毎回時間通りの支払い",
      regCommentDesc4:
        "Oripaパートナーとして、あなたの資金は安全であり、すべてのコミッションも時間通りに、あなたの都合で支払われます。",
      contactUsDesc:
        "私たちは、あなたの質問に対する正確な答えを簡単に見つけ、最高のユーザー体験を提供するためにここにいます！ お探しのものが見つからない場合や、さらにサポートが必要な場合は、ライブチャットまたはメールでお問い合わせください。",
      supportDesk: "サポートデスク",
      affDepart: "アフィリエイト部門",
      account: "アカウント",
      my: "マイ",
      level: "レベル",
      logOut: "ログアウト",
      unrelaizedBalance: "未実現残高",
      widthrawalBalance: "引き出し可能残高",
      nextBalance: "次回リベート支払い",
      total: "合計",
      balance: "残高",
      homepage: "ホームページ",
      links: "リンク",
      payment: "支払い",
      current: "現在",
      Normal: "ノーマル",
      Bronze: "ブロンズ",
      Silver: "シルバー",
      Gold: "ゴールド",
      Platinum: "プラチナ",
      statistics: "統計",
      statisticsDesc: "詳細情報は各項目をクリックしてください",
      period: "期間",
      deposit: "入金",
      clicks: "クリック",
      registeration: "登録",
      earn: "稼ぐ",
      name: "名前",
      today: "今日",
      thisWeek: "今週",
      thisMonth: "今月",
      sClients: "'s クライアント",
      noClient: "クライアントなし",
      affLinks: "アフィリエイトリンク",
      add: "追加",
      new: "新しい",
      link: "リンク",
      title: "タイトル",
      noLink: "リンクはまだありません",
      copyLink: "リンクをコピー",
      copied: "コピーしました",
      delLink: "リンクを削除",
      successAdded: "データが正常に追加されました。",
      successSaved: "データが正常に保存されました。",
      successEdited: "データが正常に編集されました。",
      successUpdated: "データが正常に更新されました。",
      successChanged: "データが正常に変更されました。",
      successDeleted: "データが正常に削除されました。",
      failedAdded: "データの追加に失敗しました。",
      failedSaved: "データの保存に失敗しました。",
      failedEdited: "データの編集に失敗しました。",
      failedUpdated: "データの更新に失敗しました。",
      failedChanged: "データの変更に失敗しました。",
      failedDeleted: "データの削除に失敗しました。",
      failedRequest: "リクエストに失敗しました。",
      withdrawDesc: "ご希望の振込先銀行口座に残高を引き出します",
      withdrawing: "引き出し中",
      history: "履歴",
      financial: "金融",
      transferAccount: "振込先口座",
      type: "タイプ",
      transferType1: "銀行（ゆうちょ銀行以外）、信用金庫など",
      transferType2: "ゆうちょ銀行",
      financialName: "金融機関名",
      number: "番号",
      ordinary: "普通",
      noteAccountNumber:
        "注意: 7桁未満の番号の場合は、先頭にゼロを付けてください。",
      nameAccountHolder: "口座名義人の名前",
      noteAccountHolder:
        "注意: 送金先口座の名義欄に記載された名前を必ず入力してください。",
      onlyDigit: "数字のみである必要があります",
      invalidBalance: "残高が不足しています！",
      request: "リクエスト",
      amount: "金額",
      send: "送信",
      withdrawal: "引き出し",
      address: "住所",
      date: "日付",
      viewMore: "もっと見る",
      viewLess: "少なく表示",
      bank: "銀行",
      confirm: "確認",
      invalidCurrentPwd: "パスワードの確認が必要です",
      haveAccount: "すでにアカウントをお持ちですか？",
      status: "ステータス",
      perDeposit: "1回の入金あたり",
      perRegister: "1回の登録あたり",
      toNextLevel: "次のレベルまで",
      completed: "完了",
      benifit: "利益",
      levelHint:
        "アフィリエイトレベルポイントを獲得してレベルアップし、手数料やその他の特典を増やしましょう。",
      howGetLevel: "どのように機能しますか？",
      howGetLevelDesc:
        "新規アクティブ入金クライアントとその取引活動によりアフィリエイトレベルポイントを獲得します。ポイント獲得開始時点から30日間のパフォーマンスで評価され、できるだけ多くのポイントを集めます。十分なポイントを獲得すると、レベルが自動的に翌日にアップグレードされます。レベルアップごとに手数料が増加します。30日以内に新しいレベルに到達できなかった場合、ポイントは次の期間にリセットされます。",
      all: "すべて",
      for2Months: "2ヶ月間",
      manage: "管理",
      message: "メッセージ",
      rank: "ランク",
      manager: "マネージャー",
      affiliate: "アフィリエイト",
      searchResults: "検索結果...",
      searchHolder: "何でも検索",
      user: "ユーザー",
      requiredRole: "ロールを選択する必要があります",
      cancel: "キャンセル",
      back: "戻る",
      role: "役割",
      action: "アクション",
      Admin: "管理者",
      Manager: "マネージャー",
      Affiliate: "アフィリエイト",
      view: "表示",
      edit: "編集",
      Previous: "前へ",
      Next: "次へ",
      All: "すべて",
    },
  },
  en: {
    translation: {
      welcome: "Welcome to our site!",
      description: "This is a simple multi-language website.",
      oripaHomepage: "Oripa Homepage",
      helperCenter: "Helper Center",
      contactUs: "Contact Us",
      partnerLogin: "Partner Login",
      partnerRegister: "Register a Partner Account",
      login: "Log in",
      register: "Register An Account",
      admin: "Admin",
      home: "Home",
      regulation:
        "Oripa Limited is regulated by the Seychelles Financial Services Authority (FSA) under Securities Dealer’s License number SD010. | Privacy Policy | Cookie Policy | Terms and Conditions FinTrade Limited is regulated by the Mauritius Financial Services Commission (FSC) under Investment Dealer’s License number GB20025835. | Privacy Policy | Cookie Policy | Terms and Conditions TPS Management Limited with offices at Steliou Mavrommati 80B, Agios Pavlos, 2364, Nicosia, Cyprus. TPS Management Limited is wholly owned by Tradexfin Limited. Risk Warning: Forex and derivative trading involves significant risk to your invested capital. Please read and ensure you fully understand our Risk Disclosure (Tradexfin) and Risk Disclosure (Fintrade). Disclaimer: The use of our Online Trading Facility and services are neither a solicitation, nor an offer to enter into any transactions on the financial market(s); it is your sole responsibility to ensure that trading in financial contracts does not violate any law, regulation or directive, relevant to your country of residency. Restrictions to accessing our services may apply to individuals being a national of, or a resident of, the following — but not limited to — countries: Albania, The Bahamas, Barbados, Botswana, Cambodia, Ghana, Jamaica, Mauritius, Myanmar, Nicaragua, Pakistan, Panama, Syria, Uganda, Yemen, Zimbabwe, Philippines, Turkey, Jordan, Afghanistan, Anguilla and Vanuatu. We do not provide our service to citizens of the United States of America, Canada, EU countries, Iran, North Korea, and Belize.You must be 18 years old, or of legal age as determined in your country. Upon registering an Account, you acknowledge that you are registering at your own free will, without solicitation on behalf of XMTrading.",
      adverTitle: "UP TO 10% PER PAYMENT",
      adverContent1: "More than 48,000 Affiliates and IBs from",
      adverContent2: "Over 60 countries choose Oripa as their partner.",
      becomePartner: "BECOME AN ORIPA PARTNER NOW",
      readMore: "Read More about ORIPA",
      testmonials: "Testmonials",
      testimonials1:
        "Oripa is one of the most trustworthy brokers we work with. Tracking, conversions and account management are second to none.",
      testimonials2:
        "Oripa partner program is one of the best programs, which I have seen in between the biggest brokers, fortunately I got one of the best manager, and he helped me a lot in marketing plus for sure helping my clients correct.",
      testimonials3:
        "Working with Oripa for few years now, and I really believe they are the best and most honorable broker out there, tested many and still XMTrading is on the top of my list.",
      affId: "Affiliate ID",
      password: "Password",
      wantRegister: "Do you want to register? ",
      forgotPwd: "Forgot Password?",
      isRequired: " is required.",
      partnerAccount: "Partner Account Registration",
      fullName: "Full Name",
      email: "Email",
      phNumber: "Phone Number",
      country: "Country",
      invalidPwd1: "Password must be at least 8 characters long.",
      invalidPwd2:
        "Password must contain at least one letter, one number, and one special character.",
      regCommentTitle1: "Up to ¥100 per lot",
      regCommentDesc1:
        "Earn up to ¥100 per lot traded on each client you refer to Oripa.com!",
      regCommentTitle2: "No Limit on Commissions",
      regCommentDesc2:
        "The Oripa Partner Program offers unlimited earning potential, with no restrictions on how much you can earn for you client referral.",
      regCommentTitle3: "Real-Time Reporting",
      regCommentDesc3:
        "The Partner Program provides you with a state of the art Partners Area, where you can regularly monitor your funds by means of live statistics and reports.",
      regCommentTitle4: "Payments on Time, Everytime",
      regCommentDesc4:
        "As an Oripa Partner not only are your funds safe but all your commissions are also in time and at your convenience.",
      contactUsDesc:
        "We are here to help you easily find the exact answers to your questions and offer you the best user experience! If you can't find what you are looking for, or need further help please contact us by live chat or email.",
      supportDesk: "SUPPORT DESK",
      affDepart: "AFFILIATE DEPARTMENT",
      account: "Account",
      account: "Account",
      my: "My",
      level: "Level",
      logOut: "Log Out",
      unrelaizedBalance: "Unrelaized Balance",
      widthrawalBalance: "Withdrawable Balance",
      nextBalance: "Next Rebate payment",
      total: "Total",
      balance: "Balance",
      homepage: "Homepage",
      links: "Links",
      payment: "Payment",
      current: "Current",
      Normal: "Normal",
      Bronze: "Bronze",
      Silver: "Silver",
      Gold: "Gold",
      Platinum: "Platinum",
      statistics: "Statistics",
      statisticsDesc: "For more information, click each item",
      period: "Period",
      deposit: "Deposit",
      clicks: "Clicks",
      registeration: "Registeration",
      earn: "Earn",
      name: "Name",
      deposit: "Deposit",
      today: "Today",
      thisWeek: "This Week",
      thisMonth: "This Month",
      sClients: "'s Clients",
      noClient: "No Client",
      affLinks: "Affiliate Links",
      add: "Add",
      new: "New",
      link: "Link",
      title: "Title",
      noLink: "No your link yet",
      copyLink: "Copy the link",
      copied: "Copied",
      delLink: "Delete the link",
      successAdded: "Successfully added data.",
      successSaved: "Successfully saved data.",
      successEdited: "Successfully edited data.",
      successUpdated: "Successfully updated data.",
      successChanged: "Successfully changed data.",
      successDeleted: "Successfully deleted data.",
      failedAdded: "Failed to add data.",
      failedSaved: "Failed to save data.",
      failedEdited: "Failed to edit data.",
      failedUpdated: "Failed to update data.",
      failedChanged: "Failed to change data.",
      failedDeleted: "Failed to delete data.",
      failedRequest: "Failed to request.",
      withdrawDesc: "Withdraw balance to your preferred transfer bank account",
      withdrawing: "Withdrawing",
      history: "History",
      financial: "Financial",
      transferAccount: "a transfer account",
      type: "Type",
      transferType1: "Banks (other than Japan Post Bank), Shinkin banks, etc.",
      transferType2: "Japan Post Bank",
      financialName: "Name of finacial institution",
      number: "Number",
      ordinary: "Ordinar",
      noteAccountNumber:
        "Note: If the number is less than 7 digits, please add a leading zero.",
      nameAccountHolder: "Name of Account Holder",
      noteAccountHolder:
        "Note: Please make sure to enter the name as it appears in the Nominee column of the account to which the money is to be transferred.",
      onlyDigit: "Must be only digits",
      invalidBalance: "Your balance is not enough!",
      request: "Request ",
      amount: "Amount",
      send: "Send",
      withdrawal: "Withdrawal",
      address: "Address",
      date: "Date",
      viewMore: "View More",
      viewLess: "View Less",
      bank: "Bank",
      confirm: "Confirm",
      invalidCurrentPwd: "Confirm password",
      haveAccount: "Already have an account?",
      status: "Status",
      perDeposit: "PER DEPOSIT",
      perRegister: "PER REGISTER",
      toNextLevel: "TO REACH NEXT LEVEL",
      completed: "Completed",
      benifit: "Benifit",
      levelHint:
        "Move through the levels by earning Affiliate Level Points and benefit from increased commissions and other exclusive rewards.",
      howGetLevel: "How Does It Work?",
      howGetLevelDesc:
        "Affiliate Level Points are earned from new active depositing clients, as well as your clients’ trading activity. Your performance is measured across a 30-day period, starting the first time you earn points. The goal is to collect as many points as possible in that period. Your level will be automatically upgraded the day after you earn enough points. Each time you level-up, your commission increases. In the event you are unable to reach a new level within 30 days, your points will be reset for the next period.",
      all: "All",
      for2Months: "For 2 Months",
      manage: "Manage",
      message: "Message",
      rank: "Rank",
      manager: "Manager",
      affiliate: "Affiliate",
      searchResults: "Search results...",
      searchHolder: "Search anything",
      user: "User",
      requiredRole: "You must choose a role",
      cancel: "Cancel",
      back: "Back",
      role: "Role",
      action: "Action",
      Admin: "Admin",
      Manager: "Manager",
      Affiliate: "Affiliate",
      view: "View",
      edit: "Edit",
      Previous: "Previous",
      Next: "Next",
      All: "All",
    },
  },
};

i18n
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Passes i18n instance to react-i18next
  .init({
    resources,
    fallbackLng: "jp", // Default language
    interpolation: {
      escapeValue: false, // React already escapes strings to avoid XSS
    },
  });

export default i18n;
