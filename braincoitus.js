function braincoitus(code) {
    let i;
    code = code.replace(/[^\(\)0-9\[\]\+\-\.\,\>\<]/g,"");

    while((i = code.indexOf("(")) != -1) {
        let len,
            count = "",
            operation = code[++i],
            new_str;

        if(/[^\+\-\.\,\>\<]/g.test(operation)) {
            console.warn("Invalid op " + code[i]);
            break;
        }

        for(;code[++i] != ")";) count += code[i];

        if(isNaN(len = +count)){
            console.warn(count + " is NaN");
            break;
        }

        for(count = len, new_str = ""; count --> 0;) {
            new_str += operation;
        }
        code = code.replace("(" + operation + len + ")", new_str)
    }
    return code;
}