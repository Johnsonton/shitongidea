var timer;

    function move(obj,attr,speed,target,callback){
        clearInterval(obj.timer);
        //if(target<=0){target=1;}
        var current=parseInt(getStyle(obj,attr));
        if(current>target){speed=-speed;}
        //向执行动画的对象中添加一个timer属性，用来保存自己的定时器标识
        obj.timer=setInterval(function(){
            var oldvalue=parseInt(getStyle(obj,attr));
            var newvalue=oldvalue+speed;
            if(newvalue>target&&speed>0||speed<0&&newvalue<target){
                newvalue=target;
            }
            obj.style[attr]=newvalue+"px";
            if(newvalue==target){
                clearInterval(obj.timer);
                //动画执行完毕，执行回调函数
                callback&&callback();//有callback就执行，否则也不报错
            }

        },30);

    }
    function getStyle(obj ,name){
        if(window.getComputedStyle)   // //正常浏览器方式
        //window.getComputedStyle是属性
        //而如果只用getComputedStyle则会当做不存在的变量报错
        //优先使用getComputedStyle
        return getComputedStyle(obj,null)[name];//通过[]获取变量
        else{//ie8方式
        return obj.currentStyle[name];}}
    
//hasClass函数
function hasClass(obj,cn){
    var reg=new RegExp("\\b"+cn+"\\b");
    return reg.test(obj.className);
}
////定于addClass()函数
function addClass(obj,cn){
    
    if(!hasClass(obj,cn)){obj.className+=" "+cn;}
}
//删除指定的class
function removeClass(obj,cn)
{
    var reg=new RegExp("\\b"+cn+"\\b");
    obj.className=obj.className.replace(reg,"");
}
//toggleClass函数用来切换一个类
function toggleClass(obj,cn){
    if(hasClass(obj,cn)){removeClass(obj,cn);}
    else{addClass(obj,cn);}

}
