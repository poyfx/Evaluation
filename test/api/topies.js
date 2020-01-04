import {
	http
} from "@/utils/request/index.js"

export default {
	getTopies({
		success,
		fail,
		complete
	}) {
		http.get('app/topic/get_topics', {
			header:{
				
			},
			success: res => {
				success && success(res)
			},
			fail: err => {
				fail && fail(err)
			},
			complete: res => {
				complete && complete(res)
			}
		})
	},

	getTopiesHis({
		success,
		fail,
		complete
	}) {
		http.get('app/topic/get_topics_his', {
			
			success: res => {
				success && success(res)
			},
			fail: err => {
				fail && fail(err)
			},
			complete: res => {
				complete && complete(res)
			}
		})
	},

	getTopiesInfo({
		dept_id,
		topic_id,
		success,
		fail,
		complete
	}) {
		console.log(dept_id, topic_id)
		http.get('app/topic/get_topic_info', {
			params: {
				deptId: dept_id,
				topicId: topic_id
			},
			
			success: res => {
				success && success(res)
			},
			fail: err => {
				fail && fail(err)
			},
			complete: res => {
				complete && complete(res)
			}
		})
	},
	// 投票
	getVote({
		dept_id,
		topic_id,
		options,
		success,
		fail,
		complete
	}) {
		console.log(dept_id, topic_id)
		http.post('app/topic/make_vote', {
			deptId: dept_id,
			topicId: topic_id,
			options: options
		}, {
			
			success: res => {
				success && success(res)
			},
			fail: err => {
				fail && fail(err)
			},
			complete: res => {
				complete && complete(res)
			}
		})
	},
	//历史记录详情
	getHistoryList({
		dept_id,
		topic_id,
		success,
		fail,
		complete
	}) {
		console.log(dept_id, topic_id)
		http.get('app/topic/get_his_topic_info', {
			params: {
				deptId: dept_id,
				topicId: topic_id,
			},
			
			success: res => {
				success && success(res)
			},
			fail: err => {
				fail && fail(err)
			},
			complete: res => {
				complete && complete(res)
			}
		})
	},
	//考核接口
	getAssessment({
		dept_id,
		topic_id,
		success,
		fail,
		complete
	}) {
		http.get('app/topic/get_topic_info', {
			params: {
				deptId: dept_id,
				topicId: topic_id,
			},
			
			success: res => {
				success && success(res)
			},
			fail: err => {
				fail && fail(err)
			},
			complete: res => {
				complete && complete(res)
			}
		})
	},
	//提交单人分数
	getOneAssessment({
		dept_id,
		topic_id,
		examinee,
		options,
		success,
		fail,
		complete
	}) {
		http.post('app/topic/save_exam_score', {
			deptId: dept_id,
			topicId: topic_id,
			examinee: examinee,
			options: options,
		}, {
			
			success: res => {
				success && success(res)
			},
			fail: err => {
				fail && fail(err)
			},
			complete: res => {
				complete && complete(res)
			}
		})
	},

	//提交部门总分数
	getAllAssessment({
		dept_id,
		topic_id,
		success,
		fail,
		complete
	}) {
		http.post('app/topic/make_exam', {
			deptId: dept_id,
			topicId: topic_id,
		}, {
			
			success: res => {
				success && success(res)
			},
			fail: err => {
				fail && fail(err)
			},
			complete: res => {
				complete && complete(res)
			}
		})
	},


}
