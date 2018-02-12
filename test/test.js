// This file tests our application code - open the associated HTML file in a browser to see the test results. 

// It uses QUnit, a unit testing library for JavaScript. 

// Unit testing is a common, professional practice. 

// It helps us verify our code is correct in all cases.

// Modify the code in your appplication to get these tests to pass. 

// References: 
// https://qunitjs.com/
// https://www.sitepoint.com/getting-started-qunit/
// http://jsbin.com/tusuvixi/1/edit?html,js,output

// The following is a helpful summary of all the QUnit asserts: 

//deepEqual(value, expected[, message]): A recursive, strict comparison that works on all the JavaScript types. The assertion passes if value and expected are identical in terms of properties, values, and they have the same prototype;
//equal(value, expected[, message]): Verify the value provided is equal the expected parameter using a non-strict comparison (==).
//notDeepEqual(value, expected[, message]): Same as deepEqual() but tests for inequality;
//notEqual(value, expected[, message]): Same as equal() but tests for inequality;
//propEqual(value, expected[, message]): A strict comparison of the properties and values of an object. The assertion passes if all the properties and the values are identical;
//strictEqual(value, expected[, message]): Verify the value provided is equal to the expected parameter using a strict comparison (===);
//notPropEqual(value, expected[, message]): Same as propEqual() but tests for inequality;
//notStrictEqual(value, expected[, message]): Same as strictEqual() but tests for inequality;
//ok(value[, message]: An assertion that passes if the first argument is truthy;
//throws(function [, expected ] [, message ]): Test if a callback throws an exception, and optionally compare the thrown error;
// QUnit.test( "global failure", extend( function() {
//     QUnit.pushFailure( error, filePath + ":" + linerNr );
// }, { validTest: validTest } ) );

QUnit.test('Testing compute Function with several inputs', function (assert) {
    assert.equal(perimeter(4,4), 16, 'Tested with two positive integers');
   assert.equal(area(7,1), 7,'Tested with two negative integers');
    assert.equal(tan(180), 1.3386902103511544,'For trignometry fun tan '); 
    assert.equal(cos(3), -0.9899924966004454,'For trignometry fun cos 3');  
   // assert.equal(handleClick("0,-8"),0,'Tested with one zero and one negative number');
    //assert.throws(function () { App.compute(null); }, /The given argument is not a number/, 'Passing in null correctly raises an Error');
  
   
});

