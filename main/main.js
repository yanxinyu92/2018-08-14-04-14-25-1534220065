module.exports = function main(str) {
    console.log("Debug Info");

    var num0 = ["._.","|.|","|_|"]
    var num1 = ["...","..|","..|"]
    var num2 = ["._.","._|","|_."]
    var num3 = ["._.","._|","._|"]
    var num4 = ["...","|_|","..|"]
    var num5 = ["._.","|_.","._|"]
    var num6 = ["._.","|_.","|_|"]
    var num7 = ["._.","..|","..|"]
    var num8 = ["._.","|_|","|_|"]
    var num9 = ["._.","|_|","..|"]

    var strList = []
    var res = ""
    for(var i =0;i<String(str).length;i++){
        strList[i] = Number(String(str).charAt(i))  
    }

    for(var i = 0;i<3;i++){
        for(var j = 0;j<String(str).length;j++){
            switch (strList[j]){
                case 0:
                    res += num0[i]
                    break;
                case 1:
                    res += num1[i]
                    break;
                case 2:
                    res += num2[i]
                    break;
                case 3:
                    res += num3[i]
                    break;
                case 4:
                    res += num4[i]
                    break;
                case 5:
                    res += num5[i]
                    break;
                case 6:
                    res += num6[i]
                    break;
                case 7:
                    res += num7[i]
                    break;
                case 8:
                    res += num8[i]
                    break;
                case 9:
                    res += num9[i]
                    break;
            }
            if(j != String(str).length - 1){
                res += " "
            }
        }
        res += "\n"
    }


    console.log(res)
    
    return res;
};