// let someThing = 'something';
// let x = 5;

// module.exports = {
//     someThing,
//     x: x
// }

const convertInitials = (phrase) => {
    const arrayWords = phrase.split(' ');
    const firstLetter = arrayWords.map(word => word[0])
    const initials = firstLetter.join('')
    return initials
}

module.exports = convertInitials;




