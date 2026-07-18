# AuraQR — Minimalist macOS QR Code Generator

A minimalist, unbranded QR Code Generator modeled directly after the native macOS system user interface. It runs entirely inside the client browser, requiring no server dependencies or database storage, ensuring complete privacy.

## Features

- **macOS Native Design**: Replicates the native macOS window styling, title bar, controls, and system typography.
- **System Dark Mode**: Automatically adapts to macOS light or dark appearance preferences.
- **Quiet Zone Verification**: Implements a standard 4-module quiet zone margin and dynamically forces a solid white background container when a QR code is generated, ensuring high-contrast boundaries for reliable camera scanning.
- **Direct Save**: Generates high-quality PNG outputs inside a native `<img>` window, allowing users to save files or right-click to copy direct image blobs to their clipboard.
- **Zero Server Tracking**: 100% client-side operations. No data is stored, logged, or sent online.

## How to Run

1. Open [index.html](index.html) directly in any web browser (Safari, Chrome, Firefox).
2. Enter text or a URL in the link box.
3. Click **Generate** and click **Save Image...** (or right-click the preview area to copy/save).

## Project Structure

```
├── index.html          # Core single-page web application
├── README.md           # Project documentation (auto-generated)
└── generate_readme.js  # Generator script for documentation
```
