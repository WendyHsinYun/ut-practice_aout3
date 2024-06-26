'use strict';

// our production code (Suite Under Test - SUT)
const { sum } = require('./number-parser');

/**
 * A Test helper function for a simple assertion
 * @param actual (any type)
 * @param expected (any type)
 */
const assertEquals = (expected, actual) => {
  if (actual !== expected) {
    throw new Error(`Expected ${expected} but was ${actual}`);
  }
};

/**
 * A Test Helper Function
 * I named it 'check' so it doesn't get confused with other frameworks.
 * Wraps my code in try-catch and outputs things nicely to the console.
 * @param {string} name
 * @param {function} implementation
 */
const check = (name, implementation) => {
  try {
    implementation();
    console.log(`${name} passed`);
  } catch (e) {
    // console.error(`${name} FAILED`, e.stack);
    console.error(e);
  }
};

/**
 * Our actual tests begin here
 * To run: "node ch1/custom-test-phase2.js
 */
check('sum with 2 numbers should sum them up', () => {
  const result = sum('1,2');
  assertEquals(3, result);
});

check('sum with multiple digit numbers should sum them up', () => {
  const result = sum('11,20');
  assertEquals(30, result);
});
