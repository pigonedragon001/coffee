module.exports = {
    devServer: {
        proxy: {
            '/lc': {
                target: 'http://192.168.52.95:8080',
                changeOrigin: true
            },
        }
    }
}
