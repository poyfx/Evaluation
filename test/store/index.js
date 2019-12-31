import Vue from 'vue'
import Vuex from 'vuex'
import loginService from '@/api/login.js'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		token:null,
		mobile:null,
		position:Array,
		realname:String,
	},
	mutations: {
		//
		setToken(state,token){
			state.token = token
			uni.setStorage({
				key:'token',
				data:token,
			})
			console.log(state.token)
		},
		
		setPhone(state,mobile){
			state.mobile = mobile
			console.log(state.mobile)
		},
		setPosition(state,position){
			state.position = position
		},
		setRealname(state,realname){
			state.realname = realname
		},
	},
	actions: {
		//
		handlLogin({commit},{mobile,code,success}){
		
			return new Promise((resolve,reject) => {
				try{
					loginService.login({
						mobile:mobile,
						code:code,
						success:res=>{
				
							if(res.data.code != 0){
								uni.showToast({
									title:res.data.msg,
									icon:"none",
									duration:3000
								})
								resolve(res.data)
								return
							}
							
							commit('setToken',res.data.token)
							commit('setPhone',res.data.user.mobile)
							commit('setPosition',res.data.user.positionList)
							commit('setRealname',res.data.user.realname)
							success&&success(res)
							resolve(res.data)
						},
						fail:err=>{
							fail&&fail(err)
						},
						complete:res=>{
							complete&&complete(res)
						}
					})
					
				}catch(e){
					//TODO handle the exception
				}
			})
			
		}
	},
	modules: {
		// user
	}
})
export default store