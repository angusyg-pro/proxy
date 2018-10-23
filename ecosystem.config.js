module.exports = {
  apps: [{
    name: 'proxy',
    script: './src/proxy.js',
    watch: ['./src'],
    ignore_watch: ['./node_modules', './logs'],
    max_memory_restart: '200M',
    wait_ready: true,
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    log_file: './logs/combined.log',
    merge_logs: true,
    env: {},
    env_production: {
      NODE_ENV: 'production',
      PORT: 8888
    },
  }],
};
