function request(url, method, data, showLoading=true){
    return new Promise((resolve, reject)=>{
		if(showLoading){
			uni.showLoading({
			    title: '加载中...'
			});
		};
		data = data || {};
		
        uni.request({
            url: url,
			header:{'Content-Type':'application/x-www-form-urlencoded'},
            data: data,
            method: method,
			dataType:'json',
            success: function(res) {
				if(showLoading){
					uni.hideLoading();
				};
                if(res.statusCode==200){
					resolve(res.data);
                }else{
                    showToast("系统错误!");  //提示信息
                    reject();
                } 
            }
        });
    })
};

function request1(url, method, data, showLoading=true){
    return new Promise((resolve, reject)=>{
		if(showLoading){
			uni.showLoading({
			    title: '加载中...'
			});
		};
		data = data || {};
		
        uni.request({
            url: url,
			header:{'Content-Type':'application/json'},
            data: data,
            method: method,
			dataType:'json',
            success: function(res) {
				if(showLoading){
					uni.hideLoading();
				};
                if(res.statusCode==200){
					resolve(res.data);
                }else{
                    showToast("系统错误!");  //提示信息
                    reject();
                } 
            }
        });
    })
};

//toast提示信息
export function showToast(title, icon='none'){
    uni.showToast({
        title: title,
        icon
    });
};

//提示功能开发中...
export function showTipPending(){
	showToast('功能开发中...');
}

//Modal弹窗
export function showModal(title, content, showCancel=false){
    uni.showModal({
    	title: title,
		content:content,
		showCancel:false
    });
};

export function get(url, data, showLoading=true){
    return request(url, 'GET', data, showLoading);
}

export function post(url, data, showLoading=true){
    return request(url, 'POST', data, showLoading);
}

export function post1(url, data, showLoading=true){
    return request1(url, 'POST', data, showLoading);
}