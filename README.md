# Obligra Verify Examples

Integration examples for the Obligra Verify platform.

## Available Examples

| Example | Language | Description |
|---|---|---|
| [Node Basic Capture](./node/basic-capture/) | Node.js | Capture a retained decision record using the Verify SDK |

## Getting Started

Each example includes its own README with setup instructions.

All examples require:

1. A Verify Builder account
2. An active key for the intended Test workspace/environment with `records:write`, available through your approved secret mechanism
3. The approved capture origin (`https://api.obligra.ai` for the existing deployment)

## Status

Public Preview — the Node example pins the reviewed SDK correction merged in [SDK PR #1](https://github.com/obligra/verify-node-sdk/pull/1). On November 15, 2026, one direct synthetic Test capture using that SDK runtime returned a real receipt; exact displayed prompt, output and references matched in the Console, and the saved record-integrity result passed. The temporary key was revoked. This validates the SDK path; the standalone example application has not itself been run live. Extra AI context not displayed by the Console remains unverified live.

The 0.2.0 release source is merged in [SDK PR #2](https://github.com/obligra/verify-node-sdk/pull/2), and `@obligra/verify-sdk@0.2.0` is published on npm. This example continues to install its pinned GitHub source. Follow its runtime and explicit environment-loading instructions.

## License

Apache License 2.0
