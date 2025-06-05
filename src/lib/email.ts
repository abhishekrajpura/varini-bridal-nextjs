import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const domain = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

export async function sendWelcomeEmail(email: string, name: string) {
  try {
    const data = await resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to: email,
      subject: "Welcome to Varini Bridal Bliss",
      html: `
        <h1>Welcome to Varini Bridal Bliss, ${name}!</h1>
        <p>Thank you for joining our community of brides-to-be.</p>
        <p>Browse our exquisite collection of bridal jewelry and find the perfect pieces for your special day.</p>
        <a href="${domain}/products">Shop Now</a>
      `,
    });

    return { success: true, data };
  } catch (error) {
    return { success: false, error };
  }
}

export async function sendOrderConfirmationEmail(
  email: string,
  orderNumber: string,
  orderTotal: string
) {
  try {
    const data = await resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to: email,
      subject: `Order Confirmation - ${orderNumber}`,
      html: `
        <h1>Thank you for your order!</h1>
        <p>Your order ${orderNumber} has been confirmed.</p>
        <p>Order Total: ${orderTotal}</p>
        <p>We'll send you a shipping confirmation when your order is on its way.</p>
        <a href="${domain}/orders/${orderNumber}">View Order</a>
      `,
    });

    return { success: true, data };
  } catch (error) {
    return { success: false, error };
  }
}

export async function sendPasswordResetEmail(email: string, token: string) {
  try {
    const resetLink = `${domain}/reset-password?token=${token}`;
    
    const data = await resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to: email,
      subject: "Reset your password",
      html: `
        <h1>Reset your password</h1>
        <p>Click the link below to reset your password:</p>
        <a href="${resetLink}">Reset Password</a>
        <p>This link will expire in 1 hour.</p>
        <p>If you didn't request this, please ignore this email.</p>
      `,
    });

    return { success: true, data };
  } catch (error) {
    return { success: false, error };
  }
}