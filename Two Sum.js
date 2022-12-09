// const twoSum = function (nums, target)
// {
//     for (let i = 0; i < nums.length; i++)
//     {
//         for (let j = i + 1; j < nums.length; j++)
//         {
//             // if (nums[j] === target - nums[i])
//             if(nums[i] + nums[j] === target)
//             {
//                 return [i, j];
//             }
//         }
//     }
// };

// Use hashmap

// var twoSum = function(nums, target)
// {
// const hashT = new Map();
// let hasilPengurangan = 0;
// for (let i = 0; i < nums.length; i++) 
// {
//     hasilPengurangan = target - nums[i];
//     if (hashT.has(hasilPengurangan))
//     {
//         return [i, hashT.get(hasilPengurangan)];
//     }
//     else
//     {
//         hashT.set(nums[i], i);
//     }
// }

var twoSum = function(nums, target)
{
    const result = [];
    nums.forEach((num, index) =>
    {
        if (nums.includes(target - num))
        {
            result.push(index);
        }
    });
    return result;
};

console.log(twoSum([2, 7, 11, 15], 9));