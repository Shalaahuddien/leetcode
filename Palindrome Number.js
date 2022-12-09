var isPalindrome = function (x)
{
    // return x.toString().split('').reverse().join('') == x;
    // let reversedInteger = 0;
    // let remainder = 0;
    // let num = x;
    // while (num > 0)
    // {
    //     remainder = num % 10; //1
    //     reversedInteger = reversedInteger * 10 + remainder; //1
    //     num = Math.floor(num / 10); //12.1
    // }
    // return x == reversedInteger;

    if (x < 0) return false;
    if (x === 0) return true;
    let temp = x;
    let reverse = 0;
    while (temp > 0)
    {
        reverse = reverse * 10 + (temp % 10);
        temp = Math.floor(temp / 10);
    }
    return x === reverse;
};

console.log(isPalindrome(12321));