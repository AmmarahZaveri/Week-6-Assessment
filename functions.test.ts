const {shuffleArray} = require('./utils')


const fruitsArr = [{'fruit':'apple'},{'fruit':'orange'},{'fruit':'kiwi'},{'fruit':'banana'}]

const numArr = [1, 2, 3, 4]


describe('shuffleArray should', () => {
    test('returns an array', ()=> {
        expect(Array.isArray(shuffleArray(fruitsArr))).toBe(true)
        expect(Array.isArray(shuffleArray(numArr))).toBe(true)

    })


    test('the length of the array should be the same as the array out', ()=> {
        expect(shuffleArray(fruitsArr)).toHaveLength(fruitsArr.length)
        expect(shuffleArray(numArr).length).toEqual(numArr.length)

    })
})
