auto();
events.observeNotification();
events.onNotification(function (notification) {
    setNotification(notification);
});

var window = floaty.window(
    <vertical h="500dp">
        <horizontal layout_weight="1">
            <img src="https://www.baidu.com/img/flexible/logo/pc/result.png" id="icon"></img>
            <text layout_weight="1" id="text" line="5">...</text>
        </horizontal>
        <horizontal layout_weight="1">
            <button id="test" text="ajust"></button>
        </horizontal>
    </vertical>
);

window.exitOnClose();

window.test.click(function () {
    window.setAdjustEnabled(!window.isAdjustEnabled());
})

function setNotification(notification) {
    // log("应用包名: " + notification.getPackageName());
    // log("通知文本: " + notification.getText());
    // log("通知优先级: " + notification.priority);
    // log("通知目录: " + notification.category);
    // log("通知时间: " + new Date(notification.when));
    // log("通知数: " + notification.number);
    // log("通知摘要: " + notification.tickerText);
    // log("图片" + notification.icon);
    ui.run(function () {
        window.text.setText(notification.tickerText);
        window.icon.setSrc(notification.icon);
        //window.img.setSrc(notification.icon);
    })
}

setInterval(() => { }, 1000);