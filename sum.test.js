// test/sumTest.js
const assert = require('assert');
const sum = require('./sum');

// 定義一個測試函數
const parserTest = () => {
    try {
        // 測試案例1: 測試 '1,2' 是否返回 3
        let result = sum('1,2');
        assert.strictEqual(result, 3, `Expected 3 but got ${result}`);
        console.log('parserTest example 1 PASSED');

        // 測試案例2: 測試 '10,20,30' 是否返回 60
        result = sum('10,20,30');
        assert.strictEqual(result, 60, `Expected 60 but got ${result}`);
        console.log('parserTest example 2 PASSED');

        // 測試案例3: 測試空字符串是否返回 0
        result = sum('');
        assert.strictEqual(result, 0, `Expected 0 but got ${result}`);
        console.log('parserTest example 3 PASSED');
        
    } catch (e) {
        console.error(e.stack);
    }
};

// 執行測試函數
parserTest();
