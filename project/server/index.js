const config = require('./config');
const App = require('./App');

const app = new App({ config });
app.run();
