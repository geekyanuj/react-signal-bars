# react-signal-bars

A lightweight and customizable React component for displaying signal strength bars. Ideal for Wi-Fi indicators, mobile signal strength, network status, or any level-based UI visualization.

## Features

- ⚡ Lightweight and dependency-free
- 🎨 Fully customizable colors and sizes
- 📶 Dynamic signal strength rendering
- ✨ Smooth transition animations
- 🧩 Simple React component API

---

## Installation

```bash
npm install react-signal-bars
```

or

```bash
yarn add react-signal-bars
```

---

## Usage

```jsx
import SignalBars from "react-signal-bars";

export default function App() {
  return (
    <SignalBars strength={4} />
  );
}
```

---

## Example

```jsx
import SignalBars from "react-signal-bars";

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <SignalBars
        strength={3}
        bars={5}
        activeColor="#22c55e"
        inactiveColor="#d1d5db"
        width={8}
        height={40}
      />
    </div>
  );
}
```

---

## Props

| Prop | Type | Default | Description |
|------|------|------|------|
| `strength` | `number` | `4` | Number of active bars |
| `bars` | `number` | `5` | Total number of bars |
| `activeColor` | `string` | `#22c55e` | Color of active bars |
| `inactiveColor` | `string` | `#d1d5db` | Color of inactive bars |
| `width` | `number` | `6` | Width of each bar |
| `height` | `number` | `30` | Total height of the signal indicator |

---

## Preview

The component automatically scales bar heights progressively to create a classic signal strength appearance.

```txt
▂ ▄ ▆ █
```

---

## License

MIT ©