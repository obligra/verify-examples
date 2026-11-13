# Node.js Basic Capture Example

Demonstrates capturing a retained decision record using the Obligra Verify Node.js SDK.

## Prerequisites

- Node.js 22.20+ (tested on 22.20.0 and 24.10.0)
- An Obligra Verify Builder account

## Setup

### 1. Get credentials

1. Create or sign into your Verify Builder account at the Obligra Verify Console
2. Navigate to **Settings → API Keys**
3. Use an existing Test key with `records:write` for the intended workspace/environment. If a new key is needed, create it in the Console through your approved process.
4. Keep the full key in your approved server-side secret mechanism. Never put it in source, shell history, browser code or recordings.

### 2. Configure environment

```bash
cp .env.example .env
```

For an approved local setup, edit the Git-ignored `.env` off-camera and set your Test credentials:

```
VERIFY_BASE_URL=https://api.obligra.ai
VERIFY_API_KEY=obv_sandbox_YOUR_PREFIX.YOUR_SECRET
```

### 3. Install dependencies

The dependency is pinned to the independently source-reviewed correction in [SDK PR #1](https://github.com/obligra/verify-node-sdk/pull/1), commit `01e14863491da7c1eab64932ee8a3fe86c43bfc1`. It remains an unreleased candidate with live acceptance pending.

```bash
npm install
```

### 4. Run

```bash
npm start
```

`npm start` explicitly loads `.env` using Node's `--env-file` option. Creating `.env` alone does not load it. If your secret mechanism already injects the variables into the process, use this instead:

```bash
node server.mjs
```

Run only one of these commands. Each run makes one explicit synthetic capture; no model is called. The key determines the actual environment. The SDK's `sandbox` label does not change scope. `/api/v1` is a separate Cognito-authenticated Console route, not this capture endpoint.

## Expected Output

```
✓ Decision record captured successfully
  ID: dr_example
  Created: 2026-11-13T00:00:00.000Z
  Status: recorded
  Find this ID in the same workspace and Test environment in Verify Console.
```

This output is illustrative, not a live acceptance result. Missing optional receipt fields show `not returned`. Only HTTP 201 with a usable record ID confirms a receipt; no timestamp or status is invented.

## What Happens Next

1. Sign into the [Verify Console](https://console.obligra.ai), select the same workspace and Test environment, and find the returned record ID.
2. Compare the exact retained prompt, output and references with the submitted fictional record.
3. Run the integrity check and inspect the returned result. Integrity does not establish human review, model accuracy or compliance.

Retrieval and integrity require Console Cognito authentication; the capture key cannot perform those operations through this SDK.

## Troubleshooting

| Error | Fix |
|---|---|
| `MISSING_BASE_URL` | Set `VERIFY_BASE_URL` in your `.env` file |
| `MISSING_API_KEY` | Set `VERIFY_API_KEY` in your `.env` file |
| `UNAUTHORIZED` (401) | Check key validity and scope through the approved secret-management process |
| `UNSUPPORTED_FIELD` | You used `output` or `result` — use `response` instead |
| `TIMEOUT` / `NETWORK_ERROR` / `CAPTURE_RESULT_UNCONFIRMED` | Stop and reconcile Records; the record may have been saved. No automatic retry. |

All captures are attempted once, including 429/5xx. `timeoutMs` covers headers and body. Prompts/output are retained without truncation in `aiAssistedContext`; short searchable identifiers belong in `operationalContext`. See the pinned SDK docs for limits and uncertain outcomes.

## Learn More

- [Candidate SDK README](https://github.com/obligra/verify-node-sdk/blob/01e14863491da7c1eab64932ee8a3fe86c43bfc1/README.md)
- [Candidate SDK API Reference](https://github.com/obligra/verify-node-sdk/blob/01e14863491da7c1eab64932ee8a3fe86c43bfc1/docs/api-reference.md)
