function setAllNo(){
    var box = document.getElementsByName("selectAll");
    var items = document.getElementsByName("selectItem");
    var shops = document.getElementsByName("selectShop");

    if(box.checked == false){
        for(var i=0;i<items.length;i++){
            items[i].checked = false;
        }
        for(var i=0;i<shopd.length;i++){
            shops[i].checked = false;
        }
    }else{
        for(var i=0;i<items.length;i++){
            items[i].checked = true;
        }
        for(var i=0;i<shops.length;i++){
            shops[i].checked = true;
        }
    }
}

function add(){
    var num = document.getElementById("number").value;
    num = parseInt(num)+1;

    document.getElementById("number").value= num;

    var sum = document.getElementById("sum");
    var price = document.getElementsByClassName("item_pri")[0];
    var pri = price.innerHTML;
    pri=pri.replace(/￥/,"");
    sum = (parseFloat(pri)*parseInt(num)).toFixed(2);

    document.getElementById("sum").innerHTML = "￥"+sum;
}

function min(){
    var num = document.getElementById("number").value;

    if(num <= 1){
        return;
    }
    else{
        num = parseInt(num)-1;
        document.getElementById("number").value= num;

        var sum = document.getElementById("sum");
        var price = document.getElementsByClassName("item_pri")[0];
        var pri = price.innerHTML;
        pri=pri.replace(/￥/,"");
        sum = (parseFloat(pri)*parseInt(num)).toFixed(2);

        document.getElementById("sum").innerHTML = "￥"+sum;
    }
}