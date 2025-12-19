import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const getTransporter = () => {
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  
  if (!smtpUser || !smtpPass) {
    throw new Error("SMTP credentials not configured");
  }

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || "mail.smtp2go.com",
    port: parseInt(process.env.SMTP_PORT || "2525"),
    secure: false,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (body.website) {
      return NextResponse.json({ success: true });
    }

    const { formType, ...formData } = body;
    const transporter = getTransporter();

    const subject = `New ${formType || "Contact"} Form Submission - CNC Vending`;
    
    const htmlContent = `
      <h2>New ${formType || "Contact"} Form Submission</h2>
      <p><strong>Form Type:</strong> ${formType || "Contact"}</p>
      ${formData.name ? `<p><strong>Name:</strong> ${formData.name}</p>` : ""}
      ${formData.company ? `<p><strong>Company:</strong> ${formData.company}</p>` : ""}
      ${formData.email ? `<p><strong>Email:</strong> ${formData.email}</p>` : ""}
      ${formData.phone ? `<p><strong>Phone:</strong> ${formData.phone}</p>` : ""}
      ${formData.city ? `<p><strong>City/State:</strong> ${formData.city}</p>` : ""}
      ${formData.businessType ? `<p><strong>Business Type:</strong> ${formData.businessType}</p>` : ""}
      ${formData.employees ? `<p><strong>Number of Employees:</strong> ${formData.employees}</p>` : ""}
      ${formData.solutions ? `<p><strong>Solutions Interested In:</strong> ${formData.solutions}</p>` : ""}
      ${formData.message ? `<p><strong>Message:</strong><br>${formData.message.replace(/\n/g, "<br>")}</p>` : ""}
      <hr>
      <p><small>Submitted on: ${new Date().toLocaleString()}</small></p>
    `;

    const textContent = `
New ${formType || "Contact"} Form Submission

Form Type: ${formType || "Contact"}
${formData.name ? `Name: ${formData.name}` : ""}
${formData.company ? `Company: ${formData.company}` : ""}
${formData.email ? `Email: ${formData.email}` : ""}
${formData.phone ? `Phone: ${formData.phone}` : ""}
${formData.city ? `City/State: ${formData.city}` : ""}
${formData.businessType ? `Business Type: ${formData.businessType}` : ""}
${formData.employees ? `Number of Employees: ${formData.employees}` : ""}
${formData.solutions ? `Solutions Interested In: ${formData.solutions}` : ""}
${formData.message ? `Message: ${formData.message}` : ""}

Submitted on: ${new Date().toLocaleString()}
    `;

    await transporter.sendMail({
      from: `"CNC Vending Website" <${process.env.SMTP_USER}@smtp2go.com>`,
      to: "team@cnc-vending.com",
      replyTo: formData.email || "team@cnc-vending.com",
      subject,
      text: textContent,
      html: htmlContent,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email sending error:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { 
        success: false, 
        error: "Failed to send email",
        details: process.env.NODE_ENV === "development" ? errorMessage : undefined
      },
      { status: 500 }
    );
  }
}
