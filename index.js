function PubSub(){
	var topics = new Map()
	function newtopic(topic){
		if(topics.has(topic)){
			console.warn('一个相同的topic'+topic+'已经被创建了')
		}else{
			topics.set(topic,new Array())
		}
	}
	function pub(topic,...args){
		if(topics.has(topic)){
			let func
			for(func of topics.get(topic)){
				func(...args)
			}
		}else{
			console.warn("没有:"+topic+"这个topic")
		}
	}
	function sub(topic,callback){
		if(topics.has(topic)){
			topics.get(topic).push(callback)
		} else {
			newtopic(topic)
			console.warn("订阅了:"+topic+"这个topic,但是它并不存在, 现在它已经创建了. 请注意以防出现错误.")
			topics.get(topic).push(callback)
		}
	}
	return {
		newtopic,
		pub,
		sub
	}
}
const ps = PubSub()
export default ps