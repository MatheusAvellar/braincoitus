function braincoitus(code) {
    let i,w=console.warn;
    code = code.replace(/[^\(\)0-9\[\]\+\-\.\,\>\<]/g,"");

    while((i = code.indexOf("(")) != -1 && code.indexOf(")") != -1) {
        let len,
            count = "",
            operation = code[++i],
            new_str,
            _code = code;

        if(/[^\+\-\.\,\>\<]/g.test(operation)) {
            w("Invalid op " + code[i]);
            return false;
        }

        for(;code[++i]&&code[i] != ")";) count += code[i];

        if(count.trim().length == 0 || isNaN(len = +count)) {
            w(count + " is NaN");
            return false;
        }

        for(count = len, new_str = ""; count --> 0;) new_str += operation;

        code = code.replace("(" + operation + len + ")", new_str);

        if(_code == code && len>=0)
            code = code.replace("(" + operation + "+" + len + ")", new_str);
        if(_code == code && !len)
            code = code.replace("(" + operation + ")", new_str);
    }
    return code.replace(/[\(\)0-9]/g,"");
}