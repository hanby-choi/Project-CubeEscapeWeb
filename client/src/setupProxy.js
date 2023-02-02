const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/api', {
            target: 'http://cube-escape-hanby-choi.koyeb.app',
            changeOrigin: true,
        })
    );
};