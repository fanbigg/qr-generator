/**
 * Generates the README.md file for the AuraQR project.
 *
 * Runs under either runtime:
 *   deno run -A generate_readme.js
 *   node generate_readme.js
 */
const readmeContent = `# AuraQR — Minimalist macOS QR Code Generator

A minimalist, unbranded QR Code Generator modeled directly after the native macOS system user interface. It runs entirely inside the client browser, requiring no server dependencies or database storage, ensuring complete privacy.

## Features

- **macOS Native Design**: Replicates the native macOS window styling, title bar, controls, and system typography.
- **System Dark Mode**: Automatically adapts to macOS light or dark appearance preferences.
- **Genuinely Offline**: The encoder (\`vendor-qrcode.min.js\`) ships with the app. No CDN, no network request, works from a plain \`file://\` open or on a plane.
- **Live Preview**: The QR code re-renders as you type, so the preview never lags behind the input. Press \`⌘\`/\`Ctrl\` + \`Enter\` to force a regenerate.
- **Quiet Zone Verification**: Implements a standard 4-module quiet zone margin and dynamically forces a solid white background container when a QR code is generated, ensuring high-contrast boundaries for reliable camera scanning.
- **Save Anywhere**: Renders a 512px PNG. On desktop, **Save Image…** downloads the file; on iOS and Android it opens the native share sheet so the image can be saved to Photos or sent straight to a chat.
- **Mobile Layout**: Below 520px the window goes full-bleed with 44px+ touch targets, 16px input text (no iOS zoom-on-focus), and safe-area padding for notched screens.
- **Zero Server Tracking**: 100% client-side operations. No data is stored, logged, or sent online.

## How to Run

1. Open [index.html](index.html) directly in any web browser (Safari, Chrome, Firefox).
2. Enter text or a URL in the link box — the preview appears as you type.
3. Click **Save Image…** to download or share the PNG.

Keep \`vendor-qrcode.min.js\` in the same folder as \`index.html\`; the app reports an inline error if it is missing.

## Design

Shares one design language with the other Micro Apps ([Event Formatter](https://github.com/fanbigg/whatsappFromatizer), [Wheel of Fortune](https://github.com/fanbigg/wheel_of_fortune)): a simulated macOS window with a traffic-light title bar, one shared set of light/dark colour tokens that follow the system appearance, and the same button, input, and phone-layout rules. The shared block is marked \`shared macOS app shell\` in the stylesheet — edit it in one app and copy it to the others rather than letting them drift.

## Project Structure

\`\`\`
├── index.html              # Core single-page web application
├── vendor-qrcode.min.js    # Bundled QR encoder (node-qrcode 1.4.4)
├── README.md               # Project documentation (auto-generated)
└── generate_readme.js      # Generator script for documentation
\`\`\`
`;

function writeReadme(content) {
  if (typeof Deno !== "undefined") {
    Deno.writeTextFileSync("README.md", content);
    return;
  }
  // Node.js
  require("node:fs").writeFileSync("README.md", content);
}

try {
  writeReadme(readmeContent);
  console.log("SUCCESS: README.md has been generated.");
} catch (error) {
  console.error("ERROR: Failed to write README.md:", error);
}
