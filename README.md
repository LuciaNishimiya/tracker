# IP Tracker with Cloudflare Worker and Discord

IP tracker using Cloudflare Worker, which captures visitors' IP and location information on a web page and automatically sends it to a Discord channel via a Webhook. It is presented as a CSS link.

## Features

- **IP Tracking**: Retrieves visitors' IP address and location information from the web page.
- **Integration with Discord**: Uses a Discord Webhook to send collected information to a specific channel.
- **Undetectable**: Impossible to detect once implemented, ensuring discreet tracking of visitors.


## Setup

Before using this IP tracker on your web page, make sure to follow these setup steps:

1. **Create a Worker in Cloudflare**: Register an account on Cloudflare and create a new Worker.
2. **Get a Discord Webhook**: Create a channel in Discord and set up a Webhook to receive messages from the IP tracker.
3. **Set Environment Variables**: Define environment variables in the Worker to store the Discord Webhook URL.
4. **Deploy the Worker**: Copy and paste the Worker code into Cloudflare's editor and deploy it.
5. **Import the Worker as a CSS link**: Add the Worker as a CSS link to your web page to start tracking visitors' IPs.

```html
<link rel="stylesheet" href="https://example.com/?family=Noto+Sans"
  media="print"
  onload="this.media='all'"
/>
```
