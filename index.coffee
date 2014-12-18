fs = require 'fs'
dmi = require './src'

dmi = new dmi.Stream

fs.createReadStream 'KRrevamp.dmi'
.pipe dmi

dmi.on 'dmi data', (data) ->
	console.log data