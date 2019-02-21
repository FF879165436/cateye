/*
    事件绑定一个事件名称对应多个事件函数 应此它们的关系是一对多的关系  数据类型采用对象的形式
    key:val  因为函数有多个  所以val选用数组

    事件仓库
        eventList = {
            key:val,
            key:val
        }

    绑定事件
    on(eventName,cb){}
    
    第一步判断当前事件是否存在   如果不存在 初始化一下   key:[]  然后再将cb push到数据中去即可

    触发事件
    emit(eventName,params){}
    
    第一步判断事件名称是否存在  如果存在 遍历数组中的所有函数调用即可   如果params存在 将params传递函数中

    解绑事件
    off(eventName,cb){}


    第一步判断事件名称是否存在  如果存在  再次判断第二个参数是否存在  如果存在将这个cb从当前数组中移除
    如果第二个参数不存在 清空数据
*/


let eventList = {};


const $on=(eventName,cb)=>{

    if(!eventList[eventName]){
        eventList[eventName] = [];
    }
    eventList[eventName].push(cb)
}




const $emit = (eventName,params)=>{

    if(eventList[eventName]){
        let arr = eventList[eventName];
        arr.map((cb)=>{
            cb(params)
        })
    }
}


const $off = (eventName,cb)=>{
    if(eventList[eventName]){
        if(cb){
            let index = eventList[eventName].indexOf(cb);
            eventList[eventName].splice(index,1);

        }else{
            eventList[eventName].length = 0;
            
        }
    }
}

export default {
	$on,
	$emit,
	$off
}