
const arr = [3,1,6,15,4,8,11,2,9,7,12,5,23];
const n = arr.length;

// min/max in array
function swap(arr, a, b)
{
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}
 
function bubbleSort( arr, n){
    var i, j;
    for (i = 0; i < n-1; i++)
    {
        for (j = 0; j < n-i-1; j++)
        {
            if (arr[j] > arr[j+1])
            {
            swap(arr,j,j+1);
             
            }
        }
     
    }
    console.log(`min = ${arr[0]} max = ${arr[n-1]}`)
}

bubbleSort(arr,n)

// prime nums in array
function prime(arr,n){
    prime = [];
    for(i=0;i<n;i++){
        if(arr[i]<=1){
            prime;
        }
        else if (arr[i] % 2 == 0) {
            prime;
        }
        else{
            prime.push(arr[i])
        }
    }
    console.log(`The prime numbers are ${prime}`)
}

prime(arr,n)

// even/odd in array
function evenOdd (arr){
    even = [];
    odd = [];
    for(i=0;i<arr.length;i++){
        if(arr[i]%2 == 0){
            even.push(arr[i])
        }else{
            odd.push(arr[i])
        }
    }
    console.log(`odd = ${odd} even = ${even}`)
}

evenOdd(arr)