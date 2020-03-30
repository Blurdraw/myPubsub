# myPubsub
一个小巧简洁的事件处理中心

引入方法：

import PubSub from './yourpath/index.js'



其使用十分简单：

首先需要创建一个事件话题 topic：string ，当然你也可以不创建

PubSub.newtopic(topic) 



然后可以设置监听

PubSub.sub(topic ,callback) 

callback即为事件发生后的回调函数，建议写成箭头函数的形式。如果之前没有创建topic，此时会自动创建，并报出警告，防止你输入了个错误的topic却不知情



现在可以发布事件，其它订阅了的函数都将被执行，其中args为你想传的参数，可以有任意多个

PubSub.pub(topic:string ,...args)







