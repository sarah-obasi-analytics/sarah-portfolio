export interface Project {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  overview: string;
  featuredImage: string;
  tools: string[];
  objectives: string[];
  businessQuestions: {
    category: string;
    questions: string[];
  }[];
  process: {
    number: string;
    title: string;
    description: string;
  }[];
  dashboardSections: {
    title: string;
    description: string;
    image?: string;
  }[];
  insights: {
    title: string;
    description: string;
    implication: string;
  }[];
  recommendations: {
    title: string;
    description: string;
  }[];
  lessonsLearned: string[];
  gallery: {
    src: string;
    alt: string;
    caption?: string;
  }[];
  liveUrl: string;
  githubUrl: string;
  problem?: string;
  outcome?: string;
}

export const portfolioData = {
  personalInfo: {
    name: "Obasi Sarah",
    title: "Finance Data Analyst",
    bio: "I’m a finance and data enthusiast with 2+ years of expertise in leveraging Microsoft Excel, Power Query and Power BI for cleaning, analyzing and visualizing data to support financial and data-driven decisions. My interest in data analytics grew from working with financial data and realizing how much valuable information can be uncovered when data is properly organized, analyzed, and visualized. I am currently expanding my knowledge of SQL. I have also worked on personal and client projects, including building dashboards and an Excel-based business tracker to help monitor income, expenses, and profitability. I am particularly interested in using data to solve business and financial problems and ultimately building a career as a Data Analyst.",
    availability: "Open to Opportunities",
  },
  skills: {
    dataAnalytics: [
      "Data Cleaning",
      "Data Transformation",
      "Data Analysis",
      "Data Visualization",
      "Dashboard Development",
      "Business Reporting"
    ],
    tools: [
      { name: "Microsoft Excel", description: "Data analysis, PivotTables, Formulas, Financial analysis, Reporting" },
      { name: "Power Query", description: "Data cleaning, Transformation, Data preparation" },
      { name: "Power BI", description: "Dashboard development, Data visualization" },
      { name: "SQL", description: "Currently developing skills in querying and analyzing data" }
    ],
    businessAndFinance: [
      "Financial Analysis",
      "Budget Analysis",
      "Financial Reporting",
      "Bank Reconciliation",
      "Accounts Payable & Receivable",
      "Business Performance Tracking"
    ]
  },
  projects: [
    {
      id: "business-income-expense-tracker",
      title: "Business Income & Expense Tracker",
      category: "Excel / Financial Analysis",
      overview: "An Excel-based financial tracker developed for a small lipcare business to help the business owner monitor financial performance more effectively.",
      shortDescription: "An Excel-based financial tracker developed for a small lipcare business to help the business owner monitor financial performance more effectively.",
      featuredImage: "/assets/hero.png", // Using a placeholder for now
      tools: ["Microsoft Excel"],
      objectives: [],
      businessQuestions: [],
      process: [],
      dashboardSections: [],
      insights: [],
      recommendations: [],
      lessonsLearned: [],
      gallery: [],
      liveUrl: "",
      githubUrl: "",
      problem: "The business needed a simple way to keep track of income, expenses, profit, and monthly financial performance without relying on scattered records.",
      solution: "I built a structured Excel tracker that allowed the business owner to record transactions and monitor key financial information.",
      workPerformed: [
        "Structured the financial data",
        "Created income and expense tracking sections",
        "Calculated profit",
        "Organized monthly financial information",
        "Created charts to visualize performance",
        "Designed the tracker to be simple and practical for regular use"
      ],
      outcome: "The tracker provided a centralized way for the business owner to monitor income, expenses, and profitability and gain a clearer understanding of the business's financial performance.",
      projectLink: null,
      githubLink: null
    },
    {
      id: "sales-performance-analysis",
      title: "Sales Performance Analysis",
      category: "Data Analysis & Business Intelligence",
      shortDescription: "An interactive Excel dashboard that transforms sales data into insights across customers, product lines, and geographical markets.",
      overview: "I developed an interactive Sales Data Dashboard in Microsoft Excel to transform raw sales data into meaningful visual insights that can support business decision-making.\n\nThe dashboard provides a high-level view of sales revenue performance and allows users to quickly identify top customers, high-performing product lines, and regions with strong or weak sales performance.",
      featuredImage: "/sales-performance-dashboard.png",
      tools: ["Microsoft Excel", "Pivot Tables", "Pivot Charts", "Data Analysis"],
      objectives: [
        "Analyze overall sales revenue.",
        "Identify the top 10 customers by sales.",
        "Evaluate revenue generated by different product lines.",
        "Compare sales performance across regions/countries.",
        "Identify high- and low-performing areas.",
        "Present the findings in an interactive Excel dashboard."
      ],
      businessQuestions: [
        {
          category: "CUSTOMER PERFORMANCE",
          questions: [
            "Who are the top 10 customers?",
            "Which customers contribute the most to total sales?",
            "Is revenue concentrated among a small number of customers?"
          ]
        },
        {
          category: "PRODUCT PERFORMANCE",
          questions: [
            "Which product lines generate the highest revenue?",
            "Which product lines have relatively low sales?",
            "How is revenue distributed across product categories?"
          ]
        },
        {
          category: "GEOGRAPHICAL PERFORMANCE",
          questions: [
            "Which regions/countries generate the most sales?",
            "Which locations are underperforming?",
            "Are there significant differences between locations?"
          ]
        },
        {
          category: "OVERALL PERFORMANCE",
          questions: [
            "What is the total sales revenue?",
            "What does the overall sales distribution look like?",
            "Which areas should management prioritize for growth?"
          ]
        }
      ],
      process: [
        { number: "01", title: "Data Preparation", description: "Cleaning and organizing raw sales data." },
        { number: "02", title: "Data Aggregation", description: "Summarizing data using Pivot Tables." },
        { number: "03", title: "Visualization", description: "Creating charts to represent data trends." },
        { number: "04", title: "Dashboard Design", description: "Structuring the final dashboard for clarity." }
      ],
      dashboardSections: [
        { title: "Top Ten Customers", description: "The Top Ten Customers visualization ranks customers according to their sales contribution. This allows management to quickly identify customers generating the greatest amount of revenue." },
        { title: "Product-Line Contribution", description: "This visualization shows how sales are distributed across product lines. The analysis indicates that Classic Cars appears to be the strongest contributor." },
        { title: "Sales Performance by Region", description: "The regional analysis compares sales across geographical markets and highlights stronger and weaker-performing locations." },
        { title: "Total Revenue from Sales", description: "This visualization compares revenue generated by different product lines and helps identify the categories driving revenue." }
      ],
      insights: [
        { title: "Sales are concentrated among certain customers.", description: "Some customers contribute significantly more sales than others.", implication: "The business should prioritize retaining high-value customers." },
        { title: "Classic Cars is a major revenue contributor.", description: "The product-line analysis indicates that Classic Cars accounts for a substantial share of total sales.", implication: "Management could investigate what makes this product line successful." },
        { title: "Product-line performance varies considerably.", description: "Some product lines generate considerably more revenue than others.", implication: "Resources could be allocated based on product performance." },
        { title: "Geographical performance is uneven.", description: "Some locations contribute substantially more revenue than others.", implication: "High-performing markets can be studied." }
      ],
      recommendations: [
        { title: "Strengthen relationships with high-value customers", description: "Prioritize customer retention for top accounts." },
        { title: "Learn from high-performing product lines", description: "Investigate success factors of key product lines." },
        { title: "Investigate underperforming markets", description: "Analyze reasons for lower performance in certain regions." },
        { title: "Develop targeted sales strategies", description: "Use analysis to guide sales efforts." }
      ],
      lessonsLearned: [
        "Data cleaning and organization",
        "Pivot Tables",
        "Data aggregation",
        "Chart selection",
        "Dashboard design",
        "Business-question formulation",
        "Data storytelling",
        "Translating analysis into business recommendations"
      ],
      gallery: [
        { src: "/sales-performance-dashboard.png", alt: "Sales Performance Dashboard", caption: "Sales Performance Dashboard" }
      ],
      liveUrl: "",
      githubUrl: ""
    }
  ],
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/sarah-obasi-49a0233a8",
    email: "obasisarah001@gmail.com",
    github: "https://github.com/sarah-obasi-analytics",
    whatsapp: "https://wa.me/2348184966749",
    whatsappDisplay: "+234 818 496 6749",
    instagram: null,
  },
};
