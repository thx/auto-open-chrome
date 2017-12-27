const execSync = require('child_process').execSync
const path = require('path')

module.exports = function (openUrl) {
    let _path = path.resolve(process.cwd(), './node_modules/auto-open-chrome/openChrome.applescript')

    //自动打开浏览器访问
    //会复用已经打开的标签页，不会一味的新窗口
    try {
        execSync(`osascript ${_path} ${openUrl}`)
    } catch (e) {
        execSync(`open ${openUrl}`)
    }
}