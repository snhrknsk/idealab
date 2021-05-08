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
    'databaseSetting': DatabaseSettings,
    'twitterOAuth': TwitterConfig,
}