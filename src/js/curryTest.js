var _ = require('ramda'),
	curry = _.curry;

const NAME = "COCO";

var FJT = (function() {
	console.log(NAME);

	var match = curry(function(reg, str) {
		return str.match(reg);
	});

	// 对数组中每一个元素倒序排列
	var reverseArr = curry(function(reverse,arr){
		return arr.map(reverse);
	});

	// 下列两种方式等价
	console.log(match(/ava/g, "functional Javascript"));
	console.log(match(/ava/g)("functional Javascript"));

	// 下列两种方式等价
	var arr1 = ["abcd","1234"];

	function reverse(str){
		return str.split("").reverse().join("");
	}
	console.log(reverseArr(reverse,arr1));
	console.log(reverseArr(reverse)(arr1));

	// es6
	var arr2 = [1, 3, 2, 5, 4],
		arr3 = [
		{id: 1,name: 'one'},
		{id: 3,name: 'three'},
		{id: 2,name: 'two'},
		{id: 5,name: 'five'},
		{id: 4,name: 'four'}
	];
	// 排序
	console.log(arr2.sort((x, y) => x - y));
	// 逆序排序
	console.log(arr2.sort((x, y) => y - x));
	// 对象数组数组排序
	console.log(arr3.sort((x, y) => x.id - y.id));


})();




exports.FJT = FJT;
