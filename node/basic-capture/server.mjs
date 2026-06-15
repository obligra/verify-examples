/**
 * Obligra Verify — Basic Capture Example
 *
 * Demonstrates capturing a retained decision record using the Verify Node.js SDK.
 *
 * Setup:
 *   1. Copy .env.example to .env and fill in your credentials
 *   2. npm install
 *   3. node server.mjs
 */

import { VerifyClient, VerifyError } from "@obligra/verify-sdk";

// Load environment variables (Node.js 20.6+ supports --env-file, or use dotenv)
const BASE_URL = process.env.VERIFY_BASE_URL;
const API_KEY = process.env.VERIFY_API_KEY;

if (!BASE_URL || !API_KEY) {
  console.error("Missing required environment variables.");
  console.error("Copy .env.example to .env and set your credentials:");
  console.error("  VERIFY_BASE_URL=https://verify-console.emergent.host/api/v1");
  console.error("  VERIFY_API_KEY=obv_sandbox_YOUR_PREFIX.YOUR_SECRET");
  process.exit(1);
}

const verify = new VerifyClient({
  baseUrl: BASE_URL,
  apiKey: API_KEY,
  environment: "sandbox",
});

try {
  const result = await verify.captureDecisionRecord({
    workflowId: "claim-review",
    retrievalKey: "claim-2026-00142",
    prompt: "Review this insurance claim and determine if it meets approval criteria.",
    response: "Based on the documentation, this claim meets standard approval criteria.",
    operationalContext: {
      claimId: "claim-2026-00142",
      reviewType: "ai-assisted",
      department: "claims-processing",
      outcome: "approved",
    },
    model: {
      provider: "anthropic",
      modelId: "claude-sonnet-4-20250514",
    },
  });

  console.log("✓ Decision record captured successfully");
  console.log(`  Record ID:    ${result.decisionRecordId}`);
  console.log(`  Status:       ${result.status}`);
  console.log(`  Captured at:  ${result.capturedAt}`);
  if (result.recordUrl) {
    console.log(`  View in console: ${result.recordUrl}`);
  }
} catch (err) {
  if (err instanceof VerifyError) {
    console.error(`✗ Verify error [${err.code}]: ${err.message}`);
    if (err.statusCode === 401) {
      console.error("  → Check your VERIFY_API_KEY is valid and active");
    }
    if (err.code === "MISSING_BASE_URL") {
      console.error("  → Set VERIFY_BASE_URL environment variable");
    }
  } else {
    console.error("✗ Unexpected error:", err.message);
  }
  process.exit(1);
}
