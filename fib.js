// Iterative approach

function fibs(n) {
	let arr = [0, 1];
	for (let i = 2; i < n; i++) {
		arr.push(arr[i - 2] + arr[i - 1]);
	}
	console.log(arr);
}
fibs(8);

// Recursicve approach
function fibsRec(n) {}
