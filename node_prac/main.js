// responsible for execution of other code

//destructuring
const convertInitials = require('./utils');
const { readFile } = require('fs') //built in, read file
const chalk = require('chalk')

readFile('./stuff.txt', 'utf8', (err, data) => {
    if (err) console.log('error', err);
    else {
        // const a = parseInt(data.substring(0, 2))
        // const b = parseInt(data.substring(3, 5))
        // const c = parseInt(data.substring(6, 8))
        // const d = parseInt(data.substring(9, 11))
        // console.log(a + b + c + d)
        const array = data.split(' ')
        const map = array.map(x => parseInt(x));
        const reducer = (total, curr) => total + curr;
        console.log(map.reduce(reducer));
    }
})

readFile('./names.txt', 'utf8', (err, data) => {
    if (err) console.log('error', err);
    else {
        // const names = data.split('\n')
        // const ret = names.map(name => convertInitials(name))
        // console.log(ret)

        const names = data.split('\n').map(convertInitials)
        console.log(chalk.red(names))
    }
})


