import { NextRequest, NextResponse } from "next/server";
import { pdf } from "@react-pdf/renderer";
import {
  InclusionPdfDocument,
  type InclusionPdfPayload,
} from "@/lib/pdf/InclusionPdfDocument";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    const payload = (await request.json()) as InclusionPdfPayload;
    const hasBasicIdentity =
      typeof payload?.customerName === "string" && payload.customerName.trim().length >= 2;
    const hasBuildMeta = typeof payload?.buildType === "string" && payload.buildType.trim().length > 0;
    const hasNumbers =
      typeof payload?.estimatedTotal === "number" &&
      Number.isFinite(payload.estimatedTotal) &&
      typeof payload?.selectedPackage?.basePrice === "number";
    const hasDecisionArrays = Array.isArray(payload?.decisions) && Array.isArray(payload?.selectedUpgrades);

    if (!payload?.selectedPackage?.name || !hasBasicIdentity || !hasBuildMeta || !hasNumbers || !hasDecisionArrays) {
      return NextResponse.json({ error: "Invalid request payload" }, { status: 400 });
    }

    const instance = pdf(InclusionPdfDocument(payload));
    const pdfBlob = await instance.toBlob();

    return new NextResponse(pdfBlob, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment; filename=arc-inclusion-sheet.pdf",
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("PDF generation error", error);
    return NextResponse.json({ error: "Failed to generate PDF" }, { status: 500 });
  }
}
