function myFunction() {
    var arr=["a","b","c","d"];
    var input = document.getElementById("val").value;
    if(arr.includes(input)){
        document.getElementById("form1").submit();
    }
    else{
    document.getElementById("err").innerHTML="Error invalid address";
    }
}