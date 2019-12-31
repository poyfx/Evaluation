import {http} from "@/utils/request/index.js"


export default{
	getmsg({
		mobile,
		success,
		fail,
		complete,
	}){
		http.get('app/base/get_login_sms',{
			params:{
				mobile:mobile,
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
	
	
	login({
		mobile,
		code,
		success,
		fail,
		complete,
	}){
		http.post('app/base/login',{
			mobile:mobile,
			code:code
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

