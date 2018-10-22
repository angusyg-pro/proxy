const request = require('request');
// Récupération d'une 2eme instance de request pour requêtes externes
delete require.cache[require.resolve('request')];
const proxiedRequest = require('request');
const http = require('http');

const port = process.env.PORT || 8888;

// Si une proxy de sortie est donné on va l'utiliser pour les URLs autre que SOLAR
if (process.env.PROXY_OUT) {
  console.log('Add of out going proxy:', process.env.PROXY_OUT);
  proxiedRequest.defaults({ 'proxy': process.env.PROXY_OUT });
}

// Serveur de proxy
const proxy = http.createServer((req, res) => {
  let x = null;
  if (req.url.startsWith('http://solar')) {
    // URL vers SOLAR
    x = request(req.url);
    console.log('Proxying:', req.url);
  } else if (process.env.PROXY_OUT) {
    // URL externes
    x = proxiedRequest(req.url);
    console.log('Proxying through', process.env.PROXY_OUT, req.url);
  } else {
    // URL externe mais pas de proxy pour sortir => erreur
    console.log('No Proxy to go out for URL:', req.url);
    res.statusCode = 500;
    res.end();
  }

  // Si la requête a été proxifiée, on la forwarde
  if (x) {
    req.pipe(x);
    x.on('error', err => console.error(err));
    x.pipe(res);
  }
});

// Démarrage du serveur
proxy.listen(port, process.env.COMPUTERNAME, () => {
  console.log(process.env.COMPUTERNAME, '- Proxy running on port', port);
});
