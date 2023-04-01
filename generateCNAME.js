const fs = require('fs')

if (fs.existsSync('./build')) {
  fs.appendFileSync('./build/CNAME', 'stoustawmemcena.pl', {flag: 'w'})
} else {
  throw new Error('Could not create CNAME file - dist dir does not exist.')
}