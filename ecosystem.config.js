module.exports = {
  apps: [
    {
      // ===============================================
      // AIM TRAINER PRO SERVER - PRODUCTION CONFIG
      // ===============================================
      name: 'aim-trainer-pro',
      script: 'dist/src/index.js',
      cwd: '/opt/aim-trainer-server',
      
      // ===============================================
      // PROCESS MANAGEMENT
      // ===============================================
      instances: 1, // Single instance to avoid port conflicts
      exec_mode: 'fork', // Fork mode for single instance
      
      // ===============================================
      // ENVIRONMENT
      // ===============================================
      env: {
        NODE_ENV: 'production',
        PORT: 3002,
        HOST: '0.0.0.0'
      },
      
      // ===============================================
      // MONITORING & RESTART
      // ===============================================
      watch: false, // Production'da false
      ignore_watch: [
        'node_modules',
        'logs',
        '.git',
        'uploads'
      ],
      
      // Auto restart settings
      restart_delay: 4000,
      max_restarts: 5,
      min_uptime: '10s',
      
      // Memory management
      max_memory_restart: '1G',
      
      // ===============================================
      // LOGGING
      // ===============================================
      log_file: '/var/log/aim-trainer/combined.log',
      out_file: '/var/log/aim-trainer/out.log',
      error_file: '/var/log/aim-trainer/error.log',
      log_type: 'json',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      
      // ===============================================
      // ADVANCED SETTINGS
      // ===============================================
      // Kill timeout
      kill_timeout: 5000,
      
      // Listen timeout
      listen_timeout: 3000,
      
      // Source map support
      source_map_support: true,
      
      // Node.js options
      node_args: [
        '--max-old-space-size=2048',
        '--optimize-for-size'
      ],
      
      // ===============================================
      // HEALTH CHECK
      // ===============================================
      health_check_url: 'http://localhost:3002/health',
      health_check_grace_period: 3000
    }
  ]
} 