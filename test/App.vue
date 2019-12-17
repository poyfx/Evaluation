<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	input::-webkit-input-placeholder{
		color: #BFC2CA;
	}
	uni-checkbox .uni-checkbox-input {
	    margin-right: 5px;
	    -webkit-appearance: none;
	    appearance: none;
	    outline: 0;
	    border: 1px solid #d1d1d1;
	    background-color: #fff;
	    border-radius: 3px;
	    width: 14px;
	    height: 14px;
	    position: relative;
	}
	uni-checkbox .uni-checkbox-input.uni-checkbox-input-checked:before {
	    font: normal normal normal 14px/1 uni;
	    content: "\EA08";
	    font-size: 22px;
	    position: absolute;
	    top: 50%;
	    left: 50%;
	    transform: translate(-50%,-48%) scale(.73);
	    -webkit-transform: translate(-50%,-48%) scale(.73);
	    background: #3d82ff;
	}
</style>
