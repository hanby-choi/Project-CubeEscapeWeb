const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://cube-escape-hanby-choi.koyeb.app/',
            changeOrigin: true,
        })
    );
};