module.exports = (numbers) => {
    if (numbers.length>0) {
        let numberArr = numbers.replace("//","").replace(/[ ,:;*_#=]/g,",").split(/[/\n,\,,]/);
        // console.log(numberArr)
        let result = numberArr.reduce((a,b)=> sumNum(a)+sumNum(b) );
        // console.log(result);
        return result;
    }
    return 0
}

const sumNum =(num)=>{
    return isNaN(num)?0:num;
}