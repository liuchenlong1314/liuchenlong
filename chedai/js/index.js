function $(id){return document.getElementById(id)}
window.onload = function (){
    $("ipt1").addEventListener("click",function (){
        $("div1").className = "xian";
        $("div2").className = "yin";
    })

    $("ipt2").addEventListener("click",function (){
        $("div2").className = "xian";
        $("div1").className = "yin";
    })
    $("bnt2").addEventListener("click",function (){
        $("s").className = "a";
        $("h").className = "b";
        $("u").className = "c";
        $("d").className = "ki";



    })

    var obj = document.getElementsByName("shang");
        //获取单选按钮的值

}