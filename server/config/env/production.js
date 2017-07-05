if (!process.env.SECRET) throw new Error('environment variable SECRET must be set')

module.exports = {
  db: 'mongodb://steve:Ss64139302@ds127878.mlab.com:27878/howmarket' || 'mongodb://localhost:27017/fb-prod',
  sessionSecret: process.env.SECRET,
}

