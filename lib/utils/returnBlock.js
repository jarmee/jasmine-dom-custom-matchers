module.exports = (fun) => {
	return {
		compare:function(){
			return fun(arguments);
		},
		negativeCompare:function(){
			return fun(arguments,true);
		}
	};
};