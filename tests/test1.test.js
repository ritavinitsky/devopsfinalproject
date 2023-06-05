const request = require('supertest')
const app = require('../index')
const val = require('../inputValidatiom')

describe("Test suite1:", ()=>{
    test("test 1: ", async ()=>{
        const res = await request(app).get('/')
        expect(res.statusCode).toEqual(200)
    })
    test("test 2: ", async ()=>{
        const res = await request(app).get('/1234')
        expect(res.statusCode).toEqual(404)
    })
})

describe("Check name validation:", ()=>{
    test("test 3:", async()=>{
        expect(val.validName('Yoni')).toBe(false)
    })
    test("test 4:", async()=>{
        expect(val.validName('Matan Tevet')).toBe(true)
    })
    test("test 5:", async()=>{
        expect(val.validName('matan tevet')).toBe(false)
    })
    test("test 6:", async()=>{
        expect(val.validName('Matan9 Tevet')).toBe(false)
    })
})

describe("Check grades validation:", ()=>{
    test("test 7:", async()=>{
        expect(val.validGrade(88,90,100)).toBe(true)
    })
    test("test 8:", async()=>{
        expect(val.validGrade(80,123,7)).toBe(false)
    })
    test("test 9:", async()=>{
        expect(val.validGrade(-80,80,7)).toBe(false)
    })
})