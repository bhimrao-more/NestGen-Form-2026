import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1),
  company: z.string().min(1),
  title: z.string().min(1),
  email: z.string().email(),
  track: z.enum(["visionary", "operator"]),
  challenge: z.string().optional().default(""),
});

export async function POST(request: Request) {
  const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
  if (!webhookUrl) {
    return NextResponse.json(
      { error: "Form submission is not configured." },
      { status: 503 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  const result = schema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      { error: "Validation failed.", details: result.error.flatten().fieldErrors },
      { status: 422 }
    );
  }

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(result.data),
    });

    if (!res.ok) {
      throw new Error(`Google Script responded with ${res.status}`);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Google Sheet submission failed:", err);
    return NextResponse.json(
      { error: "Failed to submit. Please try again." },
      { status: 502 }
    );
  }
}
