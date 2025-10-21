// app/api/metrics/route.ts
import os from "os";

export const runtime = "nodejs"; // ensure Node APIs

function bytesToGB(n: number) {
  return n / (1024 ** 3);
}

export async function GET() {
  // Basic host metrics from Node
  const totalMem = os.totalmem();
  const freeMem = os.freemem();
  const usedMem = totalMem - freeMem;

  // crude CPU % (use a better sampler if you want accuracy)
  const load = os.loadavg()[0]; // 1-min load avg
  const cpuCount = os.cpus()?.length || 1;
  const cpuPct = Math.min(100, Math.max(0, (load / cpuCount) * 100));

  const disks = { used: 120, total: 500 }; // TODO: wire your real disk stats

  const uptimeSec = os.uptime();
  const days = Math.floor(uptimeSec / 86400);
  const hours = Math.floor((uptimeSec % 86400) / 3600);
  const mins = Math.floor((uptimeSec % 3600) / 60);
  const uptime = `${days}d ${hours}h ${mins}m`;

  return Response.json({
    cpu: cpuPct,
    memory: { used: +bytesToGB(usedMem).toFixed(2), total: +bytesToGB(totalMem).toFixed(2) },
    disk: disks,
    uptime,
  });
}
