module.exports = {
    apps: [
        {
            name: 'Self__VideoWeb',
            script: './server.js',
            instances: 'max',
            exec_mode: 'cluster',
            autorestart: true,
            env_production: {
                NODE_ENV: 'production',
            },
            env_development: {
                NODE_ENV: 'development',
            },
        },
    ],
}
