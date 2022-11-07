<template>   

<div class = "container content-field">
        <div class="card" id = "card1">
            <div class="row">
                <div class="col-10">
                    <div class="card-body" id = "card-body1">
                    <h2><li>方案一</li></h2>
                    <br>
                        <div class="text1">
                            <h5>基于LSTM智能流量调度策略</h5>
                            <br>
                            <h5 style="color:#CA0C02 ; font-weight: bolder;">开启之后系统将自动适配当前园区网络状态，并提供最优的流量转发策略</h5>
                        </div>
                    </div>
                </div>
                    <div class="col-2">
                        <div class="form-check form-switch" id = "switch1">
                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                        </div>
                </div>
            </div>
       </div>

       <div class="card" id = "card1">
            <div class="row">
                <div class="col-10">
                    <div class="card-body" id = "card-body1">
                    <h2><li>方案二</li></h2>
                    <br>
                        <div class="text1">
                            <h5>基于带宽的最优路径转发</h5>
                            <br>
                            <h5 style="color:#CA0C02 ; font-weight: bolder;">适用于视频直播业务场景</h5>
                        </div>
                    </div>
                </div>
                    <div class="col-2">
                        <div class="form-check form-switch" id = "switch1">
                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                        </div>
                </div>
            </div>
       </div>

       <div class="card" id = "card1">
            <div class="row">
                <div class="col-10">
                    <div class="card-body" id = "card-body1">
                    <h2><li>方案三</li></h2>
                    <br>
                        <div class="text1">
                            <h5>基于链路质量实现的最短路径转发</h5>
                            <br>
                            <h5 style="color:#CA0C02 ; font-weight: bolder;">适用于多游戏、物联网设备场景</h5>
                        </div>
                    </div>
                </div>
                    <div class="col-2">
                        <div class="form-check form-switch" id = "switch1">
                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                        </div>
                </div>
            </div>
       </div>
   </div>
</template>

<script>


</script>

<style scoped>
#card1{
    height: 250px;
    margin-top: 30px;
}
#card-body1{
    margin-top: 20px;
}
.text1{
    margin-left: 30px;
}
#switch1{
    margin-top: 110px;
}
#flexSwitchCheckDefault{

    width: 50px;
    height: 22px;
}
</style>