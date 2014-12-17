({
    appDir: './',
    baseUrl: './',
    dir: './dist',
    modules: [
        {
            name: 'gdt.page'
        }
    ],
    fileExclusionRegExp: /^(r|build)\.js$/,
    optimizeCss: 'standard',
    removeCombined: true,
    paths: {
        plugin: "gdt.plugins"
    },
    shim: {

    }
})