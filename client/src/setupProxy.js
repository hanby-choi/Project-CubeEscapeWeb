const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/api', {
            target: 'https://cube-escape-hanby-choi.koyeb.app',
            changeOrigin: true,
        })
    );
};