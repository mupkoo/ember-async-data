export default function(server) {
  for (let name of ['Obi-Wan Kenobi', 'Yoda', 'Windu']) {
    server.create('user', { name });
  }
}
