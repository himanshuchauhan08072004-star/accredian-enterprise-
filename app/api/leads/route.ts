import { NextResponse } from "next/server";
import { leadFormSchema } from "@/lib/validations/lead";
import type { ApiResponse, LeadFormValues } from "@/types";

// In-memory store — resets on server restart. Stands in for a real
// database/CRM integration (e.g. HubSpot, Salesforce) in production.
const leads: Array<LeadFormValues & { id: string; submittedAt: string }> = [];

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json<ApiResponse<never>>(
      { success: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  const parsed = leadFormSchema.safeParse(body);

  if (!parsed.success) {
    const firstIssue = parsed.error.issues[0];
    return NextResponse.json<ApiResponse<never>>(
      { success: false, error: firstIssue?.message ?? "Invalid form data." },
      { status: 422 },
    );
  }

  const lead = {
    ...parsed.data,
    id: crypto.randomUUID(),
    submittedAt: new Date().toISOString(),
  };

  leads.push(lead);

  return NextResponse.json<ApiResponse<{ id: string }>>(
    { success: true, data: { id: lead.id } },
    { status: 201 },
  );
}

export async function GET() {
  return NextResponse.json<ApiResponse<{ count: number }>>({
    success: true,
    data: { count: leads.length },
  });
}
