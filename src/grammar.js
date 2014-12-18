// Generated automatically by nearley
// http://github.com/Hardmath123/nearley
(function () {
function id(x) {return x[0]; }

var _ = require('lodash');
var grammar = {
    ParserRules: [
    {"name": "main", "symbols": ["begin", "NL", "version", " ebnf$1", "NL", " ebnf$2", "end", " ebnf$3"], "postprocess": 
	function(d) {
		return {
			version: d[2],
			size: _.zipObject( d[3].map(function(e) { return e[2] }) ),
			states: d[5].map(function(e) { return e[0]; })
		};
	}
},
    {"name": "NL", "symbols": [/[\r?\n|\r]/]},
    {"name": "_", "symbols": [" ebnf$4"], "postprocess":  function() {return ''} },
    {"name": "NUMBER", "symbols": [" ebnf$5"], "postprocess": 
	function(d) { return d[0].join(''); }
},
    {"name": "VERSION_NUM", "symbols": ["NUMBER", " ebnf$6"], "postprocess": 
	function(d) { return _.flatten(d).join(''); }
},
    {"name": "string", "symbols": [{"literal":"\""}, " ebnf$7", {"literal":"\""}], "postprocess":  function(d) { return d[1].join('') } },
    {"name": " string$8", "symbols": [{"literal":"B"}, {"literal":"E"}, {"literal":"G"}, {"literal":"I"}, {"literal":"N"}], "postprocess": function joiner(d) {
        return d.join('');
    }},
    {"name": " string$9", "symbols": [{"literal":"D"}, {"literal":"M"}, {"literal":"I"}], "postprocess": function joiner(d) {
        return d.join('');
    }},
    {"name": "begin", "symbols": [{"literal":"#"}, "_", " string$8", "_", " string$9"]},
    {"name": " string$10", "symbols": [{"literal":"v"}, {"literal":"e"}, {"literal":"r"}, {"literal":"s"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}], "postprocess": function joiner(d) {
        return d.join('');
    }},
    {"name": "version", "symbols": [" string$10", "_", {"literal":"="}, "_", "VERSION_NUM"], "postprocess":  function(d) { return d[4] } },
    {"name": " string$11", "symbols": [{"literal":"s"}, {"literal":"t"}, {"literal":"a"}, {"literal":"t"}, {"literal":"e"}], "postprocess": function joiner(d) {
        return d.join('');
    }},
    {"name": "state", "symbols": [" string$11", "_", {"literal":"="}, "_", "string", " ebnf$12"], "postprocess": 
	function(d) {
		return {
			name: d[4],
			properties: _.zipObject( d[5].map(function(e) { return e[2] }) )
		}
	}
},
    {"name": "state_property", "symbols": ["name", "_", {"literal":"="}, "_", "value"], "postprocess":  function(d) { return [d[0], d[4]] } },
    {"name": "name", "symbols": [" ebnf$13"], "postprocess":  function(d) { return d[0].join('') } },
    {"name": "value", "symbols": ["NUMBER", " ebnf$14"], "postprocess": 
	function(d) {
		return _.flatten(d).filter(function(e) {return e != ','});
	}
},
    {"name": " string$15", "symbols": [{"literal":"E"}, {"literal":"N"}, {"literal":"D"}], "postprocess": function joiner(d) {
        return d.join('');
    }},
    {"name": " string$16", "symbols": [{"literal":"D"}, {"literal":"M"}, {"literal":"I"}], "postprocess": function joiner(d) {
        return d.join('');
    }},
    {"name": "end", "symbols": [{"literal":"#"}, "_", " string$15", "_", " string$16"]},
    {"name": " ebnf$1", "symbols": []},
    {"name": " ebnf$1", "symbols": [" subexpression$17", " ebnf$1"], "postprocess": function (d) {
                    return [d[0]].concat(d[1]);
                }},
    {"name": " ebnf$2", "symbols": []},
    {"name": " ebnf$2", "symbols": [" subexpression$18", " ebnf$2"], "postprocess": function (d) {
                    return [d[0]].concat(d[1]);
                }},
    {"name": " ebnf$3", "symbols": ["NL"], "postprocess": id},
    {"name": " ebnf$3", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": " ebnf$4", "symbols": [/[\s]/]},
    {"name": " ebnf$4", "symbols": [/[\s]/, " ebnf$4"], "postprocess": function (d) {
                    return [d[0]].concat(d[1]);
                }},
    {"name": " ebnf$5", "symbols": [/[\d]/]},
    {"name": " ebnf$5", "symbols": [/[\d]/, " ebnf$5"], "postprocess": function (d) {
                    return [d[0]].concat(d[1]);
                }},
    {"name": " ebnf$6", "symbols": []},
    {"name": " ebnf$6", "symbols": [" subexpression$19", " ebnf$6"], "postprocess": function (d) {
                    return [d[0]].concat(d[1]);
                }},
    {"name": " ebnf$7", "symbols": []},
    {"name": " ebnf$7", "symbols": [/./, " ebnf$7"], "postprocess": function (d) {
                    return [d[0]].concat(d[1]);
                }},
    {"name": " ebnf$12", "symbols": []},
    {"name": " ebnf$12", "symbols": [" subexpression$20", " ebnf$12"], "postprocess": function (d) {
                    return [d[0]].concat(d[1]);
                }},
    {"name": " ebnf$13", "symbols": []},
    {"name": " ebnf$13", "symbols": [/[\w]/, " ebnf$13"], "postprocess": function (d) {
                    return [d[0]].concat(d[1]);
                }},
    {"name": " ebnf$14", "symbols": []},
    {"name": " ebnf$14", "symbols": [" subexpression$21", " ebnf$14"], "postprocess": function (d) {
                    return [d[0]].concat(d[1]);
                }},
    {"name": " subexpression$17", "symbols": ["NL", "_", "state_property"]},
    {"name": " subexpression$18", "symbols": ["state", "NL"]},
    {"name": " subexpression$19", "symbols": [{"literal":"."}, "NUMBER"]},
    {"name": " subexpression$20", "symbols": ["NL", "_", "state_property"]},
    {"name": " subexpression$21", "symbols": [{"literal":","}, "NUMBER"]}
]
  , ParserStart: "main"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
