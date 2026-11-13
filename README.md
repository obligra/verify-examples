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

Public Preview — the Node example pins an independently source-reviewed SDK candidate. Package installation and local synthetic fixtures have been checked; authenticated capture, exact retained-content retrieval and integrity acceptance remain pending for this revision. Historical validation of earlier revisions does not establish current production or live SDK acceptance. Follow the example's runtime and explicit environment-loading instructions.

## License

Apache License 2.0
