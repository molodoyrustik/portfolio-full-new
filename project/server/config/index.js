global.__DEV__ = false;
// __STAGE__
global.__PROD__ = true;

module.exports =  {
  name: 'Your super app',
  port: 3000,
  "db": {
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
