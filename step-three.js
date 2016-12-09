//write a function to console log last value in array

logLast(['dog', 'cat', 'bat']); //logs 'bat'

function logLast(arr){
		console.log(arr[arr.length - 1]);
}

//write a function to console log numbers 0 - 10

logTen(); //logs numbers 0 - 10

function logTen(arr){
	for(var i = 0 ; i <= 10; i++){
		console.log(i)
	}
}

//write a function to console log values of an array

logArr(['dog', 'cat', 'bat']); //logs 'dog', 'cat', 'bat'

function logArr(arr){
	for(var i = 0; i < arr.length; i++){
		console.log(arr[i])
	}
}
//write a function to console log i based on length of array

logArrI(['dog', 'cat', 'bat']); //logs 0, 1, 2

function logArrI(arr){
	for(var i = 0; i < arr.length; i++){
		console.log(i)
	}
}
//write a function to sum numbers 0 - 10

sumZeroToTen(); //55

function sumZeroToTen(arr){
	var sum = 0;
	for(var i = 0; i <= 10; i++){
		sum += i 
	}
}
//write a function to sum an array

sumArr([1, 2, 3, 4, 5]); //15

function sumArr(arr){
	var sum = 0;
	for(var i = 0; i < arr.length; i++){
		sum += arr[i];
	}
}

//write a function to sum i based on length of an array

sumArrI([10, 20, 30, 40, 50]); //10

function sumArrI(arr){
	var sum = 0;
for(var i = 0; i < arr.length ; i++){
	sum += i;
}

//if i is greater than the value in the array, log i, otherwise log the array val

logValOrI([10, 5, 3, 1, 0]); //logs: 10, 5, 3, 3, 4

function logValOrI(arr){
	for(var i = 0; i < arr.length; i++){
		if( i > arr[i]){
			console.log(i);
		}else{
			console.log(arr[i]);
		}
	}
}

//write a function to log each value in an array, using forEach (do not use a for loop)

forEachLog(['dog', 'cat', 'bat']); //logs 'dog', 'cat', 'bat'

function forEachLog(arr){
	arr.forEach(function(val){
		console.log(val);
	})
}

//write a function to sum each value in an array, using forEach (do not use a for loop)

forEachSum([1, 2, 3, 4, 5]); //15

function forEachSum(arr){
	arr.forEach(function(val){
		console.log(sum += val);
	})
}
