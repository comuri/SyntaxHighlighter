;(function()
{
	// CommonJS
	typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

	function Brush()
	{
		function process(match, regexInfo)
		{
			var constructor = SyntaxHighlighter.Match,
				code = match[0],
				tag = new XRegExp('^\\[\\s*(?<name>.+?)\\s*\\]', 'xg').exec(code),
				result = []
				;
	
			if (tag != null)
				result.push(
					new constructor(tag.name, match.index + tag[0].indexOf(tag.name), 'color1')
				);
	
			return result;
		}
		
		this.regexList = [
			{ regex: /\b\S+(?=\s*\=)/gm,								css: 'keyword' },	// key
			{ regex: /[^\]^=]+$/gm,										css: 'value' },		// value
			{ regex: /^\[\s*(.+?)\s*\]/gm,								func: process }
			];
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['ini'];

	SyntaxHighlighter.brushes.Ini = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
