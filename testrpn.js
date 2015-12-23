var rpn=require("./rpn.js");

exports. addition = function (test) {
	test.expect(4);
	test.equals(rpn.compute(prep("1 2 +")), 3);
	test.equals(rpn.compute(prep("1 2 3 + +")), 6);
	test.equals(rpn.compute(prep("1 2 + 5 6 + +")), 14);
	test.equals(rpn.compute(prep("1 2 3 4 5 6 7 + + + + + +")), 28);
	test.done();
};

function prep(str) {
	return str.trim().split(/[ ]+/);
}

exports. decimals = function (test) {
	test.expect(2);
	test.equals(rpn.compute(prep("3.14159 5 *")), 15.70795);
	test.equals(rpn.compute(prep("100 3 /")), 33.333333333333336);
	test.done();
}

exports. empty = function (test) {
	test.expect(1);
	test.throws(rpn.compute([]));
	test.done();
};

