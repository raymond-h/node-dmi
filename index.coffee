fs = require 'fs'
dmi = require './src'

dmi = new dmi.Stream

fs.createReadStream 'KRrevamp.dmi'
# fs.createReadStream 'MiniKR-Active.dmi'
.pipe dmi

dmi.on 'dmi data', (data) ->
	console.log (require 'util').inspect data, depth: null