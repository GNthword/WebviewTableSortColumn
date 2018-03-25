
function mySorTable(position,isAsc) {
    if (isAsc == null) {
        //默认降序
        isAsc = false;
    }
    var mTable = document.getElementsByTagName("table");
    if (mTable == null || mTable.length < 1) {
        return;
    }
    var mHead = mTable[0].tHead;
    var mBody = mTable[0].tBodies;
    
    var rows = mBody[0].getElementsByTagName("tr");
    if (rows == null || rows.length < 1) {
        return;
    }

    var row1;
    var row2;
    var index;
    var n;
    for(i = 0; i < rows.length; i ++){
        row1 = rows[i];
        if(row1.getElementsByTagName("td") == null ||
            row1.getElementsByTagName("td").length < 1){
            continue;
        }
        index = i;
        for(j = i+1; j < rows.length ; j++) {
            row2 = rows[j];
            var col1 = row1.getElementsByTagName("td")[position].innerHTML;
            var col2 = row2.getElementsByTagName("td")[position].innerHTML;
            if (isAsc) {
                if(col1 > col2) {
                    index = j;
                    row1 = row2;
                }
            }else{
                if(col1 < col2) {
                    index = j;
                    row1 = row2;
                }
            }
            
        }
        if (index != i) {
            var temp;
            var col1 = row1.getElementsByTagName("td");
            var col2 = rows[i].getElementsByTagName("td");
            for(n = 0 ; n < col1.length; n++) {
                temp = col1[n].innerHTML;
                col1[n].innerHTML = col2[n].innerHTML;
                col2[n].innerHTML = temp;
            }
        }
    }
}
//mySorTable(2)
