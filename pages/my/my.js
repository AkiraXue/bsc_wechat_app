Page({
	data: {

	},
	// 跳转到指定页面
	toPage(event) {
		var type = event.currentTarget.dataset.type;
		console.log(type);
		switch (type) {
			case "1":
				wx.navigateTo({
				  url: '../myHealth/myHealth'
				});
				break;
			case "2":
				wx.navigateTo({
				  url: '../myLife/myLife'
				});
				break;
			case "3":
				wx.navigateTo({
				  url: '../myWealth/myWealth'
				});
				break;
			case "4":
				wx.navigateTo({
				  url: '../myGrow/myGrow'
				});
				break;
		}
	}
})
