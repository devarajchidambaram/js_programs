function isSubstrMatched(input, str) {

    var pos = 0,
        i = 0;

    var elementPos = [];

    while (i < input.length) {
        if (input.charAt(i) === str.charAt(pos)) {
            pos++;
        } else {
            pos = 0;
        }
        
        i++;

        if (pos === str.length) {
            //console.log("element found......pos ==",pos, 'i==' , i, "startpos==" , i -pos);
            elementPos.push(i - pos);
            pos = 0;
        }
    }

    return elementPos;
}



console.log(isSubstrMatched('abbcdabbbbbck', 'bck'));
