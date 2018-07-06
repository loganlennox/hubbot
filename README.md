# HubBot - Node Powered Discord Bot
HubBot can be used for general server management and other miscellaneous tasks.

## Setup and Configuration for Forks
In order to create your own version of HubBot, you'll need to write a ``config.json`` file in the project root. This is what a basic ``config.json`` file looks like.

```
{
  "token": "YOUR_BOT_TOKEN_HERE",
  "cmdPrefix": "%",
  "baseColor": [247, 152, 23],
  "homeChannel": "HOME_CHANNEL_ID",
  "logsChannel": "LOG_CHANNEL_ID"
}
```

``token`` is the application token used to identify your bot. If you're unsure what this is, refer to [Discord's official documentation](https://discordapp.com/developers/docs/intro).

``cmdPrefix`` is what each command must be prefixed with in order to be recognized as a valid command.

``baseColor`` is the default color used to accent rich embed messages. This value will be overwritten when displaying specific types of messages.

## License
[MIT](https://github.com/loganlennox/hubbot/blob/master/LICENSE)
