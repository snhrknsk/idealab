const Web = {
    domain: 'idealab.site',
    port: 3000,
}

const DatabaseSettings = {
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '!1234Password',
    database: 'idealab_dev',
    database_dev: 'idealab_dev',
}

const TwitterConfig = {
  redirect: ''
}

module.exports = {
    'webSetting': Web,
    'databaseSetting': DatabaseSettings,
    'twitterOAuth': TwitterConfig,
}