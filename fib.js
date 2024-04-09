// Iterative approach

function fibs(n) {
	let arr = [0, 1];
	for (let i = 2; i < n; i++) {
		arr.push(arr[i - 2] + arr[i - 1]);
	}
	console.log(arr);
}
fibs(8);

// write a function fibs which takes a number and returns an array containing that many numbers from the Fibonacci sequence. Using an example input of 8, this function should return the array [0, 1, 1, 2, 3, 5, 8, 13].

// // Recursive fibonacci approach
function fibsRec(n) {
	if (n === 0) return [0];
	if (n === 1) return [0, 1];
	let arr = fibsRec(n - 1);
	arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
	return arr;
}

console.log(fibsRec(8));
