@{%
var _ = require('lodash');
%}

main -> begin NL version (NL _ state_property):* NL (state NL):* end NL:? {%
	function(d) {
		return {
			version: d[2],
			size: _.zipObject( d[3].map(function(e) { return e[2] }) ),
			states: d[5].map(function(e) { return e[0]; })
		};
	}
%}

NL -> [\r?\n|\r]
_ -> [\s]:+ {% function() {return ''} %}

NUMBER -> [\d]:+ {%
	function(d) { return d[0].join(''); }
%}

VERSION_NUM -> NUMBER ("." NUMBER):* {%
	function(d) { return _.flatten(d).join(''); }
%}

string -> "\"" .:* "\"" {% function(d) { return d[1].join('') } %}

begin -> "#" _ "BEGIN" _ "DMI"

version -> "version" _ "=" _ VERSION_NUM {% function(d) { return d[4] } %}

state -> "state" _ "=" _ string (NL _ state_property):* {%
	function(d) {
		return {
			name: d[4],
			properties: _.zipObject( d[5].map(function(e) { return e[2] }) )
		}
	}
%}

state_property -> name _ "=" _ value {% function(d) { return [d[0], d[4]] } %}

name -> [\w]:* {% function(d) { return d[0].join('') } %}
value -> NUMBER ("," NUMBER):* {%
	function(d) { return _.flatten(d).filter(function(e) {return e != ','}); }
%}

end -> "#" _ "END" _ "DMI"