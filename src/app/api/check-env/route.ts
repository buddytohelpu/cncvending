import { NextResponse } from "next/server";

export async function GET() {
  const envVars = {
    SMTP_HOST: process.env.SMTP_HOST ? "✅ Set" : "❌ Missing",
    SMTP_PORT: process.env.SMTP_PORT ? "✅ Set" : "❌ Missing",
    SMTP_USER: process.env.SMTP_USER ? "✅ Set" : "❌ Missing",
    SMTP_PASS: process.env.SMTP_PASS ? "✅ Set" : "❌ Missing",
    GA_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ? "✅ Set" : "❌ Missing",
  };

  return NextResponse.json({
    environment: process.env.NODE_ENV,
    status: "Environment Variables Check",
    variables: envVars,
    note: "Visit this URL to check if your Vercel environment variables are configured correctly.",
  });
}

