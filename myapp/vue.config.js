module.exports = {
    devServer: {
        proxy: {
            '/lc': {
                target: 'http://106.52.182.134:8080',
                changeOrigin: true
            },
        }
    }
}
