# Node.js System Resource Monitor

A real-time dashboard that hooks into the host operating system to monitor CPU, memory, and uptime metrics. This project demonstrates Node.js **OS module** integration and asynchronous polling.

## 🚀 Advanced Features
- **Native OS Integration**: Directly interfaces with system-level APIs using the `os` module.
- **Dynamic Polling**: Implements a client-side polling mechanism to refresh data every 2 seconds without page reloads.
- **Memory Optimization**: Calculates and formats raw byte data into human-readable GB/MB formats using math conversion.
- **Stateless API**: Exposes a clean `/api/stats` endpoint for third-party monitoring tools.

## 🛠️ Installation
1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   ```
2. Install Express:
   ```bash
   npm install express
   ```
3. Launch:
   ```bash
   node server.js
   ```

## 📊 Metrics Captured
- **CPU Count**: Total logical processors available.
- **Memory Breakdown**: Real-time Total vs. Free memory usage percentage.
- **System Load**: 1, 5, and 15-minute load averages.
- **Uptime**: Total system running time since last boot.

## 📜 License
MIT
