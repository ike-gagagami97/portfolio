export const profile = {
  role: "QA Engineer / Engineering Manager",
  tagline: "品質保証とエンジニアリング組織づくり",
  focusAreas: [
    "Playwright",
    "E2E テスト",
    "AI for QA",
    "QA for AI",
    "品質プロセス改善",
    "エンジニアリングマネジメント",
  ],
  introduction: [
    "2016年に富士通株式会社に入社。システムエンジニアとして公営競技システムの構築、運用保守を幅広く対応しました。",
    "開発チームに所属してメンバーとして開発経験を積んだのち、仕様管理担当やシステムテストリーダー、運用保守サブリーダーとしてマネジメント業務にも取り組みました。",
    "2022年に atama plus 株式会社に入社し、このタイミングで QA エンジニアに転向。インプロセス QA として開発チームにおけるテスト活動および品質改善活動や、横断 QA として E2E テスト（Playwright）やリリース前チェックのテストベンダー管理など幅広く対応しています。",
    "最近は QA プロセスへの生成 AI の活用（AI for QA）や、AI プロダクトの品質保証プロセス（QA for AI）の構築に力を入れています。また、エンジニアリングマネージャーとして QA 内の複数チームのマネジメントや、QA 全体戦略の立案などにも取り組んでいます。",
  ],
} as const;

export type ExperienceProject = {
  title: string;
  items: readonly string[];
};

export type Experience = {
  company: string;
  roles: readonly string[];
  period: string;
  duration: string;
  projects: readonly ExperienceProject[];
};

export const experiences: readonly Experience[] = [
  {
    company: "富士通株式会社",
    roles: ["システムエンジニア"],
    period: "2016年4月 ～ 2021年12月",
    duration: "5年9ヶ月",
    projects: [
      {
        title: "公営競技システム①（2016/8 - 2017/4）",
        items: ["外部接続テストの調整窓口を担当"],
      },
      {
        title: "公営競技システム②（2017/5 - 2021/12）",
        items: [
          "他社リプレース案件に要件定義工程から参画",
          "サブシステムの開発メンバーとして要件定義工程から単体テスト工程まで担当",
          "変更管理案件の要件定義工程からシステムテスト工程までサブリーダーとして推進。主に仕様管理、システムテスト工程でのテスト設計や顧客調整などを担当",
          "本番リリース後は運用保守サブリーダーとして不具合管理や保守作業管理、変更管理開発案件の推進などマネジメント業務を担当",
        ],
      },
    ],
  },
  {
    company: "atama plus 株式会社",
    roles: ["エンジニアリングマネージャー", "QA エンジニア"],
    period: "2022年1月 ～ 現在",
    duration: "在籍中",
    projects: [
      {
        title: "塾向け AI 教材の QA",
        items: [
          "仕様書作成",
          "テスト設計、実行",
          "自動テスト（Playwright）の実装",
          "品質観点でのチーム開発プロセス改善",
        ],
      },
      {
        title: "横断的な QA 業務",
        items: [
          "リリース前チェックの管理者：外部テストベンダーとのやり取り、プロセス改善、テストケース改善",
          "自動テスト（Playwright）管理者：コーディング規約、テストケース改善",
          "バグ対応チーム：不具合管理、月次品質レポート作成、プロセス改善",
        ],
      },
      {
        title: "エンジニアリングマネージャー",
        items: [
          "QA 戦略策定、推進：リリース前チェックの内製化、AI for QA、QA for AI の推進",
          "成長支援：メンバーの成長支援",
          "採用：採用プロセス立ち上げ、面接",
        ],
      },
    ],
  },
];
