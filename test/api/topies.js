import {http} from "@/utils/request/index.js"
export default{
	getTopies({
		success,
		fail,
		complete
	}){
		http.get('app/topic/get_topics',{
			success:res=>{
				success && success(res)
			},
			fail:err=>{
				fail&&fail(err)
			},
			complete:res=>{
				complete&&complete(res)
			}
		})
	},
	
	getTopiesHis({
		success,
		fail,
		complete
	}){
		http.get('app/topic/get_topics_his',{
			success:res=>{
				success && success(res)
			},
			fail:err=>{
				fail&&fail(err)
			},
			complete:res=>{
				complete&&complete(res)
			}
		})
	},
	
	getTopiesInfo({
		dept_id,
		topic_id,
		success,
		fail,
		complete
	}){
		console.log(dept_id,topic_id)
		http.get('app/topic/get_topic_info',{
			params:{
				deptId:dept_id,
				topicId:topic_id
			},
			success:res=>{
				success && success(res)
			},
			fail:err=>{
				fail&&fail(err)
			},
			complete:res=>{
				complete&&complete(res)
			}
		})
	},
	getVote({
		dept_id,
		topic_id,
		options,
		success,
		fail,
		complete
	}){
		console.log(dept_id,topic_id)
		http.post('app/topic/make_vote',{
			deptId:dept_id,
			topicId:topic_id,
			options:options
		},{
			success:res=>{
				success && success(res)
			},
			fail:err=>{
				fail&&fail(err)
			},
			complete:res=>{
				complete&&complete(res)
			}
		})
	}
	
	
	
	
}