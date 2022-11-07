
importClass(android.bluetooth.BluetoothSocket)
importClass(android.bluetooth.BluetoothAdapter)
importClass(android.bluetooth.BluetoothDevice)
importClass(android.bluetooth.BluetoothServerSocket)
importClass(android.bluetooth.BluetoothClass)
importClass(android.bluetooth.BluetoothProfile)
importClass(android.content.BroadcastReceiver)
importClass(java.util.UUID)
importClass(java.io.BufferedReader);
importClass(java.io.IOException);
importClass(java.io.InputStream);
importClass(java.io.InputStreamReader);
importClass(java.io.OutputStream);
importClass(java.io.PrintWriter);


var REQUEST_ENABLE_BT = 1;
var bluetoothAdapter = BluetoothAdapter.getDefaultAdapter();
function getbluetooth() {
    if (bluetoothAdapter == null) {
        return ("抱歉，您的设备不支持蓝牙")
        exit()
    }

    //检查蓝牙状态
    if (bluetoothAdapter.isEnabled()) {
        return ("蓝牙已开启")
    } else {
        return ("蓝牙未开启")
    }
}

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
toast(networkInfo());



var window = floaty.window(
    <vertical h="300dp" w="200dp">
        <button layout_weight="1" id="mYbattery" line="2" color="#9C8BB6" bg="#FDF5E6" textSize="19sp">电量</button>
        <button layout_weight="1" id="mYtime" line="2" bg="#FAF0E6" textSize="19sp">时间</button>
        <button layout_weight="1" id="mYwifi" line="2" bg="#FAEBD7" textSize="19sp">网络</button>
        <button layout_weight="1" id="mYBluetooth" line="2" bg="#FFF0F5" textSize="19sp">蓝牙</button>
        <button id="test" text="调整悬浮窗" bg="#FFE4E1" textSize="19sp"></button>
    </vertical>
);

window.setPosition(300, 300);
window.exitOnClose();

window.test.click(function () {
    window.setAdjustEnabled(!window.isAdjustEnabled());
})

setInterval(() => {
    //对控件的操作需要在UI线程中执行
    ui.run(function () {
        window.mYbattery.setText("🔋" + device.getBattery() + '%');
        window.mYtime.setText("🕐" + getDayTimer());
        window.mYwifi.setText("" + networkInfo());
        window.mYBluetooth.setText(getbluetooth());
    });
}, 1000);
