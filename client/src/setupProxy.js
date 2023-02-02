const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'cube-escape-hanby-choi.koyeb.app',
            changeOrigin: true,
        })
    );
};