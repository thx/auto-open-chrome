const execSync = require('child_process').execSync
const path = require('path')

module.exports = function (openUrl) {
    //自动打开浏览器访问
    //会复用已经打开的标签页，不会一味的新窗口
    try {
        execSync(`osascript openChrome.applescript ${openUrl}`, {
            cwd: __dirname
        })
    } catch (e) {
        execSync(`open ${openUrl}`)
    }
}