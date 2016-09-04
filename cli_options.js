const  optionDefinitions = [
  { name: 'input', alias: 'i', type: String },
  { name: 'output', alias: 'o', type: String},
  { name: 'width', alias: 'w', type: Number, defaultValue: 400 }
]

const sections = [
   {
    header: 'Resize jpg-png',
    content: 'Resizes an input image, given a max width'
   },
   {
      header: 'Options',
      optionList: [
   {
      name: 'input',
      typeLabel: '[underline]{directory}',
      description: 'The input directory containing files to be processed.'
  },
  {
     name: 'output',
     typeLabel: '[underline]{directory}',
     description: 'The output directory containing processed files'
 },
 {
      name: 'help',
      description: 'Print this usage guide.'
  }
  ]
 },
 {
     header:"npm script",
     content: "If you use npm start, remember the [italic]{--} before parameters"
 },
{
	header:"Example",
	content:"npm start --  --input=/Volumes/EXT_001/biosmart/Campionamenti/luglio2016/ --output=/Volumes/EXT_001/biosmart/Campionamenti/luglio2016/Export --width=400"
},
 {
         content:"f.invernizzi@libero.it"
 }
]

module.exports.optionDefinitions = optionDefinitions;
module.exports.sections = sections;
