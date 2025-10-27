import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Log the payload (stub for webhook/email integration)
    console.log("=== New Lead Submission ===");
    console.log("Full Name:", body.fullName);
    console.log("Email:", body.email);
    console.log("Company:", body.company);
    console.log("Plan:", body.plan);
    console.log("Timestamp:", new Date().toISOString());
    console.log("===========================");

    // Here you would typically:
    // - Save to database
    // - Send webhook notification
    // - Send email notification
    // - Integrate with CRM

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error("Error processing lead:", error);
    return NextResponse.json(
      { ok: false, error: "Failed to process lead" },
      { status: 500 }
    );
  }
}
