const BasePlugin = require('@appium/base-plugin').default

class LogSessionDataPlugin extends BasePlugin {
    commands = ['launchApp']

    async launchApp(next, driver){
        const actualEvent = await next()
        console.log('Launching our app')
        return actualEvent
    }
}

module.exports = {
    LogSessionDataPlugin
}
