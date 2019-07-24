global.__DEV__ = true;
// __STAGE__
global.__PROD__ = false;

module.exports =  {
  name: 'Your super app',
  port: 3000,
  "db": {
    "host": "localhost",
    "port": "27017",
    "name": "test",
    "user": "",
    "password": "",
    "url": 'mongodb://localhost/test',
  },
  "dbProd": {
    "host": "portfolio-cluster-0a3j5.mongodb.net",
    "port": "27017",
    "name": "test",
    "user": "root",
    "password": "p3H7HIAbBlzDtE62",
  },
  "upload": "public/upload",
  "mail": {
    "subject": "Сообщение с сайта-портфолио",
    "smtp": {
      "service": "mail",
      "host": "smtp.mail.ru",
      "auth": {
        "user": "molodoyrustik@mail.ru",
        "pass": "molodoy"
      }
    }
  }
}
