function addTwoNumbers(nums, target) {
    let obj = {}
    for(let i=0; i <nums.length; i++) {
        obj[target - nums[i]] = i;
        if(obj[nums[i]] !== undefined) {
            console.log(obj[nums[i]], i);
            return[nums[i],i]
        } 
    }
    console.log('invalid');
}

addTwoNumbers([0,1,2,3,6],7);
