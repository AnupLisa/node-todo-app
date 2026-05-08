# Love Calculator

A simple Node.js app that displays a love score in the browser.

## Files

- `package.json` - Node.js package metadata and start script.
- `index.js` - The Express server that serves the browser UI.
- `public/index.html` - The browser interface and calculation logic.

## Prerequisites

- Node.js installed (version 14 or newer recommended).
- A terminal or command prompt.

## Install

1. Open a terminal in the project folder.
2. Run:

```bash
npm install
```

## Run the app

In the project folder, run:

```bash
npm start
```

Then open your browser and go to:

```text
http://localhost:3000
```

## Run with Docker

Build the Docker image from the project folder:

```bash
docker build -t love-calculator .
```

Then run the container:

```bash
docker run -p 3000:3000 love-calculator
```

Open your browser at:

```text
http://localhost:3000
```

## Usage

1. Enter the first name.
2. Enter the second name.
3. Click the "Calculate" button.
4. The browser shows the love score and a short message.

## Example

The browser will show a result like:

```text
Alice and Bob have a love score of 73%!
Nice connection.
```

## Notes

- This app is for fun and does not represent real compatibility.
- The score is calculated with a simple deterministic formula based on the characters in the names.
