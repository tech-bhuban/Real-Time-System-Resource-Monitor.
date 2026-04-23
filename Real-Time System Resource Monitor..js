
const express = require('express');
const os = require('os');
const app = express();
const PORT = process.env.PORT || 4000;

// Middleware to log requests (standard dev practice)
app.use((req, res, next) => {
    console.log(`[${new Date().toLocaleTimeString()}] ${req.method} ${req.url}`);
    next();
});

// Main logic to grab system stats
const getSystemStats = () => {
    const totalMem = os.totalmem();
    const freeMem = os.freemem();
    const usedMem = totalMem - freeMem;
    const memUsage = ((usedMem / totalMem) * 100).toFixed(2);

    return {
        platform: os.platform(),
        cpus: os.cpus().length,
        architecture: os.arch(),
        uptime: (os.uptime() / 3600).toFixed(2) + ' hours',
        memory: {
            total: (totalMem / 1024 / 1024 / 1024).toFixed(2) + ' GB',
            free: (freeMem / 1024 / 1024 / 1024).toFixed(2) + ' GB',
            usage: memUsage + '%'
        },
        loadAverage: os.loadavg()
    };
};

// API Endpoint
app.get('/api/stats', (req, res) => {
    res.json(getSystemStats());
});

// Dashboard UI
app.get('/', (req, res) => {
    res.send(`
        <body style="font-family: 'Courier New', monospace; background: #000; color: #39FF14; padding: 40px;">
            <h2>🖥️ System Resource Monitor</h2>
            <pre id="data">Loading system metrics...</pre>
            <script>
                const update = () => {
                    fetch('/api/stats')
                        .then(res => res.json())
                        .then(data => {
                            document.getElementById('data').innerText = JSON.stringify(data, null, 4);
                        });
                };
                setInterval(update, 2000); // Poll every 2 seconds
                update();
            </script>
        </body>
    `);
});

app.listen(PORT, () => console.log(`/Monitoring service started on port \${PORT}`));

