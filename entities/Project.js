import Global_E_commerce_BI_Dashboard from "../images/Global_E_commerce_BI_Dashboard.jpg";
import German_Energy_Market_Price_Forecasting from "../images/German_Energy_Market_Price_Forecasting.png";
export const Projects = [
	{
		id: 1,
		title: "German Energy Market Price Forecasting",
		description: "End-to-end pipeline for German day-ahead electricity prices.",
		detailed_description:
			"Built a data pipeline using Python, Airflow, and Docker to ingest ENTSO-E and SMARD data, engineered features, and stored results in PostgreSQL. Trained XGBoost and quantile regression models with probabilistic forecasts and SHAP explanations. Deployed forecasts via a FastAPI API and an interactive Streamlit dashboard.",
		technologies: [
			"Python",
			"Airflow",
			"Docker",
			"PostgreSQL",
			"XGBoost",
			"Quantile Regression",
			"SHAP",
			"FastAPI",
			"Streamlit",
		],
		category: "machine_learning",
		github_url: "https://github.com/SaklyFiras/German-Energy-Market-Price-Forecasting-Renewables-Impact",
		demo_url: "",
		image_url: German_Energy_Market_Price_Forecasting.src,
		impact:
			"Delivered probabilistic price forecasts to support trading and operational planning.",
		featured: true,
	},
	{
		id: 2,
		title: "Global E-commerce BI Dashboard",
		description: "Interactive BI dashboards for global e-commerce KPIs.",
		detailed_description:
			"Developed an end-to-end BI solution using Power BI, Python, and SQL. Modeled KPIs such as Revenue, Conversion Rate, AOV, CAC, On-Time Delivery %, and Return %. Created executive dashboards with drill-downs by region and channel, integrated revenue and delivery forecasts, and ensured data quality with transformations and a star schema.",
		technologies: [
			"Power BI",
			"DAX",
			"SQL",
			"Python",
			"Pandas",
			"Time Series Forecasting",
		],
		category: "business_intelligence",
		github_url: "https://github.com/SaklyFiras/Global-E-Commerce-KPI-Dashboard-with-Predictive-Insights",
		demo_url: "",
		image_url: Global_E_commerce_BI_Dashboard.src,
		impact:
			"Improved visibility into revenue, delivery, and returns, enabling data-driven decision making.",
		featured: true,
	},
	{
	id: 3,
	title: "Enterprise Customer Churn Analytics Platform (Microsoft Azure)",
	description: "End-to-end customer churn analytics platform built on the Microsoft Azure ecosystem.",
	detailed_description:
		"Designed and implemented an enterprise-style churn analytics platform covering the full data lifecycle. Built a multi-layer data lake (bronze/silver/gold) using Azure Data Lake Storage Gen2, trained interpretable churn models (Logistic Regression, Random Forest), and exposed analytics via Azure Synapse Serverless SQL views. Connected Power BI Desktop via DirectQuery to deliver live executive dashboards with churn KPIs and Revenue-at-Risk insights, following cost-aware and production-oriented cloud best practices.",
	technologies: [
		"Python",
		"SQL",
		"Azure Data Lake Gen2",
		"Azure Synapse Serverless SQL",
		"Power BI",
		"DirectQuery",
		"DAX",
		"Scikit-learn",
		"Pandas",
		"Parquet"
	],
	category: "data_engineering",
	github_url: "https://github.com/FirasSakli/customer-churn-analytics-azure",
	demo_url: "",
	image_url: "https://daxg39y63pxwu.cloudfront.net/images/blog/azure-medallion-architecture/Azure_Medallion_Architecture.webp",
	impact:
		"Enabled live churn monitoring and revenue-at-risk analysis through a serverless, cloud-native analytics architecture suitable for enterprise environments.",
	featured: true
}

];


