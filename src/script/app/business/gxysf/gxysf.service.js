(function(){
angular.module("app.business")
	.factory('gxysfService',function(){
            
		var civilian = [{"name":"阿达","age":"30","sf_time":"2016/09/05","sf_address":"广州市天河区软件路15号"},{"name":"阿达","age":"30","sf_time":"2016/09/05","sf_address":"广州市天河区软件路15号"},{"name":"阿凡达","age":"30","sf_time":"2016/09/05","sf_address":"广州市天河区软件路15号"},{"name":"阿凡提","age":"30","sf_time":"2016/09/05","sf_address":"广州市天河区软件路15号"},{"name":"布鲁斯","age":"30","sf_time":"2016/09/05","sf_address":"广州市天河区软件路15号"},{"name":"高原","age":"30","sf_time":"2016/09/05","sf_address":"广州市天河区软件路15号"}];
	    return {civilian:civilian};

	})
})();
