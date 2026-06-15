# Node.js Basic Capture Example

Demonstrates capturing a retained decision record using the Obligra Verify Node.js SDK.

## Prerequisites

- Node.js 18 or later
- An Obligra Verify Builder account

## Setup

### 1. Get credentials

1. Create or sign into your Verify Builder account at the Obligra Verify Console
2. Navigate to **Settings → API Keys**
3. Click **Create API Key**
4. Copy the full key shown (format: `obv_sandbox_PREFIX.SECRET`) — it is shown only once

### 2. Configure environment

```bash
cp .env.example .env
```

Edit `.env` and set your credentials:

```
VERIFY_BASE_URL=https://verify-console.emergent.host/api/v1
VERIFY_API_KEY=obv_sandbox_YOUR_PREFIX.YOUR_SECRET
```

### 3. Install dependencies

```bash
npm install
```

### 4. Run

```bash
node server.mjs
```

Or with environment variables inline:

```bash
VERIFY_BASE_URL=https://verify-console.emergent.host/api/v1 \
VERIFY_API_KEY=obv_sandbox_YOUR_PREFIX.YOUR_SECRET \
node server.mjs
```

## Expected Output

```
✓ Decision record captured successfully
  Record ID:    dr_a1b2c3d4-e5f6-7890-abcd-ef1234567890
  Status:       recorded
  Captured at:  2026-06-15T12:00:00.000Z
  View in console: https://console.obligra.ai/records/dr_...
```

## What Happens Next

1. Open the record URL in the Verify Console
2. Review the captured decision record — prompt, response, metadata, timestamps
3. Verify the record to confirm the AI output was reviewed
4. The record is now part of your organization's audit trail

## Troubleshooting

| Error | Fix |
|---|---|
| `MISSING_BASE_URL` | Set `VERIFY_BASE_URL` in your `.env` file |
| `MISSING_API_KEY` | Set `VERIFY_API_KEY` in your `.env` file |
| `UNAUTHORIZED` (401) | Your API key is invalid or revoked — create a new one in the console |
| `UNSUPPORTED_FIELD` | You used `output` or `result` — use `response` instead |
| `TIMEOUT` | Network issue — the SDK will retry automatically |

## Learn More

- [SDK README](https://github.com/obligra/verify-node-sdk)
- [SDK API Reference](https://github.com/obligra/verify-node-sdk/blob/main/docs/api-reference.md)
