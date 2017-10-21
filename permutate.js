
//记录今晚为freecodecamp的norepeat找到自己的解法
//norepeat的意思为：找到一串字符串的所有排列组合方式，相邻的字母不能重复
// "aab" => "aba" 和 "aba"和 虽然这两个字符串相等，但a在原始字符串中的index是不同的

var str = "abcde"

function permAlone(str) {
	var strArr = str.split('')
	var result = [];

	function permutate(arr, accumlatedStr) {
		arr.forEach((letter, index) => {

			//如果积攒的字符串不存在，说明是第一次遍历
			//或者如果已经积攒的字符串的最后一个字符 不等于 当前遍历到的字母
			if(!accumlatedStr || accumlatedStr.substr(-1) !== letter) {

				//累加字符串
				var tempStr = accumlatedStr ? accumlatedStr + letter : letter;

				//复制当前数组，保持immutable
				var rest = arr.slice();

				//把当前字母剔除
				rest.splice(index, 1)

				//如果剩余字符串的长度大于1，递归遍历
				if(rest.length > 1) {
					permutate(rest, tempStr)

				//等于1的情况
				} else {

					//如果剩下的这个字母跟累加的字符串的最后一个字母不相等的情况下，把最终的字符串push到结果数组中，结束本次字符串的收集
					if(tempStr.substr(-1) !== rest[0]) {
						result.push(tempStr + rest[0])
					}
				}
			}

		})
	}

	permutate(strArr)

	return result
}

var res = permAlone(str)

console.log(res)

