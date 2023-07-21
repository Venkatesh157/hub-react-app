const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api/public/hubs",
    createProxyMiddleware({
      target: "https://marketplace-demo.cleanhub.com",
      changeOrigin: true,
    })
  );
};
