# Real-Time Data CLI Dashboard
<img width="1438" alt="image" src="https://github.com/user-attachments/assets/285bdbc9-be37-4c85-8b2c-ba65c0710e54" />

> A beautiful terminal dashboard that displays real-time data from around the world, built with Ink, React, and TypeScript.

## Features

- 🛰️ **Live ISS Tracking** - See the International Space Station's current location
- 🌤️ **Weather Information** - Current weather conditions 
- ₿ **Bitcoin Price** - Real-time cryptocurrency prices with change indicators
- 🧠 **Random Facts** - Interesting facts that update automatically
- 💭 **Inspirational Quotes** - Motivational quotes to brighten your day
- ⏰ **Live Clock** - Current time display
- 🌈 **Beautiful UI** - Colorful, responsive terminal interface

## Install

```bash
$ npm install --global realtime-data-cli-tool
```

## Usage

```bash
# Run with default settings
$ realtime-data-cli-tool

# Run with custom name
$ realtime-data-cli-tool --name="Your Name"
```

## CLI Options

```
$ realtime-data-cli-tool --help

  Usage
    $ realtime-data-cli-tool

  Options
    --name  Your name (optional, default: "Stranger")

  Examples
    $ realtime-data-cli-tool
    $ realtime-data-cli-tool --name="John Doe"
```

## Screenshot

The dashboard displays:
- Live ISS coordinates with latitude/longitude
- Current weather information
- Bitcoin price with 24h change
- Random interesting facts
- Inspirational quotes
- Real-time clock

All data updates automatically in the background!

## Development

This project uses a modular architecture with:

- **`source/types.ts`** - TypeScript interfaces and types
- **`source/services/`** - API data fetching services
- **`source/hooks/`** - Custom React hooks for data management
- **`source/components/`** - Reusable UI components
- **`source/app.tsx`** - Main application component
- **`source/cli.tsx`** - CLI entry point

### Setup

```bash
# Clone the repository
$ git clone <your-repo-url>
$ cd realtime-data-cli-tool

# Install dependencies
$ npm install

# Build the project
$ npm run build

# Run in development mode
$ npm run dev

# Run tests
$ npm test
```

### Architecture Benefits

1. **Separation of Concerns** - Each file has a single responsibility
2. **Reusability** - Components and hooks can be easily reused
3. **Maintainability** - Easy to find and modify specific functionality
4. **Testability** - Each module can be tested independently
5. **Type Safety** - All types are centralized

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT © Sakun Panthi

---

Built with ❤️ using [Ink](https://github.com/vadimdemedes/ink), React, and TypeScript.
