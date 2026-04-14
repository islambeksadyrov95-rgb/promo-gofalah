import { NextResponse } from "next/server";
import { Resend } from "resend";

const NOTIFY_EMAIL = "newfashionkz@gmail.com";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, company, message } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Имя и телефон обязательны" },
        { status: 400 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "GoFalah <onboarding@resend.dev>",
      to: NOTIFY_EMAIL,
      subject: `Новая заявка с promo.gofalah.com — ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #065F46; border-bottom: 2px solid #065F46; padding-bottom: 10px;">
            Новая заявка с promo.gofalah.com
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px; font-weight: bold; color: #555; width: 140px;">Имя:</td>
              <td style="padding: 10px;">${escapeHtml(name)}</td>
            </tr>
            <tr style="background: #f9f9f9;">
              <td style="padding: 10px; font-weight: bold; color: #555;">Телефон:</td>
              <td style="padding: 10px;">${escapeHtml(phone)}</td>
            </tr>
            ${
              company
                ? `<tr>
              <td style="padding: 10px; font-weight: bold; color: #555;">Компания:</td>
              <td style="padding: 10px;">${escapeHtml(company)}</td>
            </tr>`
                : ""
            }
            ${
              message
                ? `<tr style="background: #f9f9f9;">
              <td style="padding: 10px; font-weight: bold; color: #555;">Сообщение:</td>
              <td style="padding: 10px;">${escapeHtml(message)}</td>
            </tr>`
                : ""
            }
          </table>
          <p style="color: #999; font-size: 12px; margin-top: 20px;">
            Отправлено с promo.gofalah.com &mdash; ${new Date().toLocaleString("ru-RU", { timeZone: "Asia/Almaty" })}
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Lead form error:", error);
    return NextResponse.json(
      { error: "Ошибка отправки. Попробуйте позже." },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
