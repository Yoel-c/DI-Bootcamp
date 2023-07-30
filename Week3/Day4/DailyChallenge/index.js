const sentence = "The movie is not that bad, I like it"

const wordNot = sentence.indexOf('not')

const wordBad = sentence.indexOf('bad')

const replace = sentence.replace("not that bad" , "good")

if ( wordBad > wordNot ) {
console.log(replace);     
}
else(console.log(sentence))





