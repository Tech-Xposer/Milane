import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Handles POST requests to /api/sendmail
export async function POST(request) {
  try {
    const body = await request.json();
    const { name, orders, phone, email, address, zipcode } = body;

    const response = await sendEmail(
      name,
      orders,
      phone,
      email,
      address,
      zipcode
    );
    return NextResponse.json({ message: "Email sent successfully!", response });
  } catch (error) {
    console.error("Error in API route:", error);
    return NextResponse.json(
      { message: "Error sending email", error: error.message },
      { status: 500 }
    );
  }
}

// Configure nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 587,
  secure: false, // Use secure: false for STARTTLS, true if you're using SSL
  auth: {
    user: process.env.NEXT_PUBLIC_NODEMAILER_USERNAME,
    pass: process.env.NEXT_PUBLIC_NODEMAILER_PASSWORD
  }
});

// Function to send email
const sendEmail = async (name, orders, phone, email, address, zipcode) => {
  console.log("Sending email to:", email); // Log the recipient's email
  try {
    const mail = await transporter.sendMail({
      from: `"Ashutosh" <${process.env.NEXT_NODEMAILER_USERNAME}>`, // Use the actual email as the sender
      to: `${process.env.NEXT_NODEMAILER_RECIPIENT}, ${email}`,
      subject: `Order from ${name}`,
      html: `
        <h3>New Order Details</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Orders:</strong></p>
        <ul>
          ${orders
            .map(
              (order) => `
                <li>
                  ${order.name} - Quantity: ${order.quantity}, Price: ${
                order.price
              } €
                  <ul>
                    <li>Option: ${order.option}</li>
                  </ul>
                  <strong>Total: ${(order.price * order.quantity).toFixed(
                    2
                  )} €</strong>
                  ${
                    address
                      ? `<p><strong>Address:</strong> ${address}</p><p><strong>City:</strong> ${zipcode}</p>`
                      : ""
                  }
                </li>`
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
