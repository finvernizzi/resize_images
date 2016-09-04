// The MIT License (MIT)
// Copyright (c) 2016 nisi1973@gmail.com
// 
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// 
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

fs = require('fs')
  , gm = require('gm')
  , path = require("path")
  , commandLineArgs = require('command-line-args')
  , getUsage = require('command-line-usage')
  , optionDefinitions = require("./cli_options.js").optionDefinitions
  , sections = require("./cli_options.js").sections

// Usage and cli arg parsing
const usage = getUsage(sections)
const options = commandLineArgs(optionDefinitions)
// Are all needed params out there?
if (!options.input || !options.output) {
	console.log(usage)
	return;
}

var files = fs.readdirSync(options.input)

console.log("---> INPUT:"+options.input)
console.log("---> OUTPUT:"+options.output)
console.log("---> WIDTH:"+options.width)


files.forEach(function(name, index){
	if (path.extname(name) == ".JPG"){
		console.log("--->"+name)
		// resize and remove EXIF profile data
		gm(options.input+"/"+name)
		.resize(options.width)
		.autoOrient()
			.write(options.output+''+name+"_"+options.width+".png", function (err) {
  				if (!err) console.log("..." + name+ '  done')
				else console.log(err)
			});
		}
})
