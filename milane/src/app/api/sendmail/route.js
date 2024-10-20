import { NextResponse } from "next/server";
const nodemailer = require("nodemailer");

// Handles POST requests to /api/sendmail
export async function POST(request) {
  try {
    const body = await request.json();
    const { name, orders, phone } = body;

    const response = await sendEmail(name, orders, phone);
    return NextResponse.json({ message: "Email sent successfully!", response });
  } catch (error) {
    console.error("Error in API route:", error);
    return NextResponse.json(
      { message: "Error sending email", error },
      { status: 500 }
    );
  }
}

// Configure nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 587,
  secure: true, // Use SSL
  auth: {
    user: process.env.NEXT_PUBLIC_NODEMAILER_USERNAME,
    pass: process.env.NEXT_PUBLIC_NODEMAILER_PASSWORD
  }
});

// Function to send email
const sendEmail = async (name, orders, phone) => {
  try {
    const mail = await transporter.sendMail({
      from: "Ashutosh",
      to: process.env.NEXT_PUBLIC_NODEMAILER_RECIPIENT,
      subject: `Order from ${name}`,
      html: `
        <h3>New Order Details</h3>
        <p><strong>Name:</strong> ${name}</p>
    
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Orders:</strong></p>
        <ul>
          ${orders
            .map(
              (order) =>
                `<li>${order.name} - Quantity: ${order.quantity}, Price: ${order.price} €</li>`
            )
            .join("")}
        </ul>
      `
    });

    return mail; // Return mail info on success
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email");
  }
};
