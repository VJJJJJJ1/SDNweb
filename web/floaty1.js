// device.getBattery() 电量

// get Time
function getDayTimer() {
    var date = new Date()
    var y = date.getFullYear()
    var m = date.getMonth() + 1
    m = m < 10 ? ('0' + m) : m
    var d = date.getDate()
    d = d < 10 ? ('0' + d) : d
    var currentdate = y + '-' + m + '-' + d;
    var hh = date.getHours()
    hh = hh < 10 ? ('0' + hh) : hh
    var mm = date.getMinutes()
    mm = mm < 10 ? ('0' + mm) : mm
    var ss = date.getSeconds()
    ss = ss < 10 ? ('0' + ss) : ss
    var time = hh + ':' + mm + ':' + ss;
    return currentdate + " " + time
}
//toast(getDayTimer());

//get wifi
function networkInfo() {
    importClass(android.net.ConnectivityManager);
    var mConnectivityManager = context.getSystemService(context.CONNECTIVITY_SERVICE);
    netInfo = mConnectivityManager.getActiveNetworkInfo();
    if (netInfo != null && netInfo.isAvailable()) {
        //网络连接
        var name = netInfo.getTypeName();
        if (netInfo.getType() == ConnectivityManager.TYPE_WIFI) {
            //WiFi网络
            return "WIFI"
        } else if (netInfo.getType() == ConnectivityManager.TYPE_ETHERNET) {
            //有线网络
            return "有线"

        } else if (netInfo.getType() == ConnectivityManager.TYPE_MOBILE) {
            //3g网络
            return "移动"

        }
        else {
            return "未知"
        }
    } else {
        网络断开
        return "断开"
    }
}
//toast(networkInfo());

var window = floaty.window(
    <vertical h="100dp">
        <text layout_weight="1" id="mYbattery" line="2">电量</text>
        <text layout_weight="1" id="mYtime" line="2">时间</text>
        <text layout_weight="1" id="mYwifi" line="2">网络</text>
        <button id="test" text="ajust"></button>
    </vertical>
);

window.exitOnClose();

window.test.click(function(){
    window.setAdjustEnabled(!window.isAdjustEnabled());
})

setInterval(() => {
    //对控件的操作需要在UI线程中执行
    ui.run(function () {
        window.mYbattery.setText("" + device.getBattery());
        window.mYtime.setText("" + getDayTimer());
        window.mYwifi.setText("" + networkInfo());
    });
}, 1000);