// throwing codes on leetcode

[0,1,2,3,4,5];

function addTwoNumbers (nums, target) {
    
    for(let i=0; i<nums.length;i++) {
        for(let j=i + 1; j <nums.length; j++){
            if (nums[i] + nums[j] === target) {
                console.log(i,j);
                return[i,j]
            }
        }
    }
}
addTwoNumbers([0,1,2,3,4],7);