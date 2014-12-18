StreamPng = require 'streampng'

{parse} = require './parser'

module.exports = class DmiStream extends StreamPng
	constructor: ->
		super

		@on 'zTXt', (chunk) =>
			chunk.inflate (err, text) =>
				return @emit 'error', err if err?

				@emit 'dmi data', parse text