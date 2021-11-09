//判断一个数是不是质数
function isPrime(num) {
    if (num == 1) {
        return false;
    }
    for (var i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}
//找出这个数的所有质因数,放在一个数组里面
function ArrFactor(num) {
    var arr = [];
    for (var i = 1; i <= num; i++) {
        if (num % i == 0 && isPrime(i)) {
            arr.push(i);
        }
    }
    return arr
}


//展示出来这个数
function showNum(num) { //思想为: 90/2=45 45/3=15 15/3=5 结果为 2 3 3 5
    var arr = ArrFactor(num);
    var remain = num; //存储num每次除因数剩下的数
    var str = num + "=";
    var flag = true;

    while (flag) {
        for (var j = 0; j < arr.length; j++) {
            if (remain % arr[j] == 0) {
                str += arr[j] + "*";
                remain /= arr[j];
                break;
            }
        }
        for (var i = 0; i < arr.length; i++) {    //判断这个数字是否在数组中存在
            if (remain == arr[i]) {
                str += arr[i];
                flag = false;    //如果存在的话就终止循环
                break
            }
        }
    }
    console.log(str);
}
showNum(12);