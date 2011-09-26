;(function()
{
	// CommonJS
	typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

	function Brush()
	{
		var funcs =	'abs avg case- cast coalesce convert count current_timestamp ' +
					'current_user day isnull left lower month nullif replace right ' +
					'session_user space substring sum system_user upper user year';
	
		var keywords =	'case class data default deriving do else if import in infix infixl ' +
						'infixr instance let module newtype of then type where _';
	
		//var datatypes =	'Bool False True Maybe Nothing Just Eigher Left Right ' +
		//				'Ordering LT EQ GT Char String Eq Ord Enum Bounded Int Integer ' +
		//				'Float Double Rational Ratio Show Num Fractional Floating Real ' +
		//				'RealFrac Monad Functor ShowS ReadS Read IO';

		this.regexList = [
			{ regex: new RegExp('--(.*)$', 'gm'),									css: 'comments' },		// one line comments
			{ regex: new RegExp("{-[\\s\\S]*?-}", 'gm'),							css: 'comments' },		// multiline line comments
			{ regex: SyntaxHighlighter.regexLib.singleQuotedString,					css: 'string' },		// strings
			{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,					css: 'string' },		// strings
			{ regex: /0x[a-f0-9]+|0o[a-f0-9]+|\d+(\.\d+)?/gi,						css: 'value' },			// numbers
			//{ regex: new RegExp(this.getKeywords(datatypes), 'gm'),					css: 'variable' },		// datatypes
			{ regex: /\b[A-Z][a-zA-Z0-9_']*/gm,										css: 'variable' },		// datatypes
			{ regex: new RegExp(this.getKeywords(keywords), 'gm'),					css: 'keyword' },		// haskell keywords
			{ regex: new RegExp(this.getKeywords(funcs), 'gm'),						css: 'functions' }		// functions
			];
	}

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['hs', 'haskell'];

	SyntaxHighlighter.brushes.Haskell = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
