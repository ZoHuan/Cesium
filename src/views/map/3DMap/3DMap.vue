<template>
    <div class="map">
        <div class="header">
            <div class="title">
                <h4>城市商圈可视化运营中心</h4>
            </div>
        </div>

        <div class="sidebar-left">
            <div class="weather">
                <img src="@/assets/img/3DMap/weather.gif" alt="weather" />
                <span>晴转多云 25℃</span>
            </div>

            <div class="module">
                <div class="module-title">商圈概况</div>
                <div class="module-content">
                    <div class="overview-summary">
                        <div class="summary-left">
                            <div class="summary-left-row">
                                <span>区域总面积</span>
                                <span class="num">151.81</span>
                            </div>
                            <div class="summary-left-row">
                                <span>区域主干道</span>
                                <span class="num">18</span>
                                <span>条</span>
                            </div>
                        </div>
                        <div class="summary-right">
                            <img src="@/assets/img/3DMap/situation.png" alt="situation" />
                        </div>
                    </div>

                    <div class="overview-list">
                        <div class="list-item">
                            <div class="item-title">商业场所</div>
                            <div class="item-num"><span>21</span>个</div>
                        </div>
                        <div class="list-item">
                            <div class="item-title">入驻企业</div>
                            <div class="item-num"><span>13.36</span>万家</div>
                        </div>
                        <div class="list-item">
                            <div class="item-title">商办楼宇</div>
                            <div class="item-num"><span>252</span>幢</div>
                        </div>
                        <div class="list-item">
                            <div class="item-title">各类从业人员</div>
                            <div class="item-num"><span>243</span>万余名</div>
                        </div>
                    </div>
                </div>
                <div class="module-title">商圈配套设施</div>
                <div class="module-content">
                    <div class="facility-list">
                        <div class="list-item item-separate">
                            <img src="@/assets/img/3DMap/facility-icon.png" />
                            <div class="list-content">
                                <span class="content-title">公交站总数</span>
                                <div class="content-num"><span>68</span>个</div>
                            </div>
                        </div>
                        <div class="list-item item-separate">
                            <img src="@/assets/img/3DMap/facility-icon1.png" />
                            <div class="list-content">
                                <span class="content-title">地铁路线</span>
                                <div class="content-num"><span>28</span>个</div>
                            </div>
                        </div>
                        <div class="list-item">
                            <img src="@/assets/img/3DMap/facility-icon2.png" />
                            <div class="list-content">
                                <span class="content-title">停车场</span>
                                <div class="content-num"><span>77</span>个</div>
                            </div>
                        </div>
                        <div class="list-item">
                            <img src="@/assets/img/3DMap/facility-icon3.png" />
                            <div class="list-content">
                                <span class="content-title">消防站</span>
                                <div class="content-num"><span>140</span>个</div>
                            </div>
                        </div>
                        <div class="list-item item-separate">
                            <img src="@/assets/img/3DMap/facility-icon4.png" />
                            <div class="list-content">
                                <span class="content-title">学校总数</span>
                                <div class="content-num"><span>98</span>个</div>
                            </div>
                        </div>
                        <div class="list-item item-separate">
                            <img src="@/assets/img/3DMap/facility-icon5.png" />
                            <div class="list-content">
                                <span class="content-title">医疗机构</span>
                                <div class="content-num"><span>86</span>个</div>
                            </div>
                        </div>
                        <div class="list-item">
                            <img src="@/assets/img/3DMap/facility-icon6.png" />
                            <div class="list-content">
                                <span class="content-title">大型商业综合体</span>
                                <div class="content-num"><span>104</span>个</div>
                            </div>
                        </div>
                        <div class="list-item">
                            <img src="@/assets/img/3DMap/facility-icon7.png" />
                            <div class="list-content">
                                <span class="content-title">公园广场</span>
                                <div class="content-num"><span>47</span>个</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="sidebar-right">
            <div class="time">
                <span class="date">{{ time.date }}</span>
                <span class="now">{{ time.now }}</span>
            </div>
            <div class="module">
                <div class="module-title">商圈产业体系</div>
                <div class="module-content">
                    <div class="system-list">
                        <div class="list-item">
                            <div class="item-title">金融</div>
                            <div class="item-num">30.4%</div>
                        </div>
                        <div class="list-item">
                            <div class="item-title">贸易</div>
                            <div class="item-num">23.6%</div>
                        </div>
                        <div class="list-item">
                            <div class="item-title">服务</div>
                            <div class="item-num">23.8%</div>
                        </div>
                        <div class="list-item">
                            <div class="item-title">文旅</div>
                            <div class="item-num">21.2%</div>
                        </div>
                    </div>

                    <div class="system-core">
                        <div class="core-pic"></div>
                    </div>
                </div>
                <div class="module-title">商圈功能</div>
            </div>
        </div>

        <div class="footer">
            <div class="nav"></div>
        </div>
    </div>
    <cesium-view></cesium-view>
</template>
  
<script lang="ts" setup>
import { onDeactivated, onMounted, reactive, ref } from "vue";
import moment from "moment";

import CesiumView from "./Cesium.vue";

const timer = ref();
const time = reactive({
    date: "",
    now: "",
});

onMounted(() => {
    timer.value = setInterval(() => {
        setNowTimes();
    }, 1000);
});

onDeactivated(() => {
    clearInterval(timer.value);
});

const setNowTimes = () => {
    time.date = moment().format("YYYY-MM-DD");
    time.now = moment().format("HH:mm:ss");
};
</script>
  
<style lang="less" scoped>
.map {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    .header {
        position: absolute;
        top: 0;
        width: 100%;
        height: 10.2rem;
        background: url(@/assets/img/3DMap/mask-head.png) center/cover no-repeat;
        z-index: 10;

        .title {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 73rem;
            height: 4.2rem;
            margin: auto;
            background: url(@/assets/img/3DMap/title.png) center/cover no-repeat;
            font-family: YouSheBiaoTiHei;
            color: rgb(137, 227, 255);
            font-size: 1.8rem;

            h4 {
                margin: 0;
                margin-top: 0.5rem;
                font-weight: 100;
            }
        }
    }

    .sidebar-left {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 24.8rem;
        background: url(@/assets/img/3DMap/mask-left.png) center/cover no-repeat;

        .weather {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 11.2rem;
            height: 4.8rem;
            margin: 1.7rem 0 0 1rem;
            z-index: 10;

            &::after {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                width: 11.2rem;
                height: 6.1rem;
                background: url(@/assets/img/3DMap/frame.png) center/cover no-repeat;
                z-index: -1;
            }

            img {
                height: 2.5rem;
            }

            span {
                font-size: 0.8rem;
                color: #d9d9d9;
            }
        }

        &::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 11.2rem;
            height: 6.1rem;
            margin: 0 0 1.7rem 1rem;
            background: url(@/assets/img/3DMap/frame.png) center/cover no-repeat;
            transform: rotateX(180deg);
            z-index: 11;
        }
    }

    .sidebar-right {
        position: absolute;
        top: 0;
        right: 0;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        height: 100%;
        width: 24.8rem;
        background: url(@/assets/img/3DMap/mask-right.png) center/cover no-repeat;

        .time {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 11.2rem;
            height: 4.8rem;
            margin: 1.7rem 1rem 0 0;
            font-size: 0.8rem;
            color: #d9d9d9;
            z-index: 10;

            &::after {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                width: 11.2rem;
                height: 6.1rem;
                background: url(@/assets/img/3DMap/frame.png) center/cover no-repeat;
                transform: rotateY(180deg);
                z-index: -1;
            }

            .date {
                margin-right: 0.5rem;
            }

            .now {
                margin-right: 1.4rem;
            }
        }

        &::after {
            content: "";
            position: absolute;
            bottom: 0;
            right: 0;
            width: 11.2rem;
            height: 6.1rem;
            margin: 0 1rem 1.7rem 0;
            background: url(@/assets/img/3DMap/frame.png) center/cover no-repeat;
            transform: rotate(180deg);
            z-index: 11;
        }

        .module {
            margin: 0 1.8rem 0 0;
        }
    }

    .module {
        position: relative;
        width: 15rem;
        margin: 0 0 0 1.8rem;
        z-index: 11;

        .module-title {
            width: 100%;
            height: 1.4rem;
            display: flex;
            align-items: center;
            justify-content: center;
            background: url(@/assets/img/3DMap/module-title.png) center/cover no-repeat;
            font-family: 黑体;
            color: #ffffff;
        }

        .module-content {
            position: relative;
            margin: 0.5rem 0 1rem;
            padding: 0.6rem;
            background-color: rgba(39, 139, 186, 0.13);

            .overview-summary {
                display: flex;
                justify-content: space-between;

                .summary-left {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    font-size: 0.6rem;
                    color: #fff;

                    .summary-left-row {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        width: 7.6rem;
                        height: 1.1rem;
                        margin-bottom: 0.5rem;
                        padding: 0 0.4rem 0 1.4rem;
                        background: url(@/assets/img/3DMap/situation-row.png) center/cover no-repeat;

                        .num {
                            font-size: 0.8rem;
                            color: rgb(241, 208, 123);
                        }
                    }
                }

                .summary-right {
                    width: 4.8rem;
                    height: 4rem;

                    img {
                        height: 100%;
                    }
                }
            }

            .overview-list {
                display: flex;
                justify-content: space-between;
                margin-top: 0.5rem;

                .list-item {
                    width: 3.2rem;
                    height: 4.5rem;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding-top: 2.6rem;
                    background: url(@/assets/img/3DMap/situation-column.png) center/cover no-repeat;
                    font-size: 0.6rem;
                    color: #dbdfe2;

                    .item-title {
                        margin-bottom: 0.16rem;
                        white-space: nowrap;
                    }

                    .item-num {
                        white-space: nowrap;

                        span {
                            font-size: 0.8rem;
                            color: #f1d07b;
                        }
                    }
                }
            }

            .facility-list {
                display: flex;
                flex-wrap: wrap;

                .list-item {
                    display: flex;
                    width: calc(50% - 0.7rem);
                    height: 1.8rem;
                    margin: 0.6rem 0.35rem;
                    background: url(@/assets/img/3DMap/facility-row1.png) center/cover no-repeat;

                    img {
                        width: 1.4rem;
                        height: 1.4rem;
                        margin: 0.35rem 0.9rem 0 0.25rem;
                    }

                    .list-content {
                        font-size: 0.6rem;
                        color: #73a3b7;

                        .content-title {
                            white-space: nowrap;
                        }

                        .content-num {
                            margin-top: 0.15rem;

                            span {
                                margin-right: 0.2rem;
                                font-size: 0.8rem;
                                color: #09acf1;
                            }
                        }
                    }
                }

                .item-separate {
                    background: url(@/assets/img/3DMap/facility-row.png) center/cover no-repeat;

                    img {
                        filter: hue-rotate(200deg);
                    }

                    .list-content {
                        color: #a0883f;

                        .content-num {
                            span {
                                color: #f1d07b;
                            }
                        }
                    }
                }
            }

            .system-list {
                display: flex;
                flex-wrap: wrap;

                .list-item {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    width: calc(50% - 0.6rem);
                    height: 2.86rem;
                    margin: 0.26rem 0.3rem;
                    background: url(@/assets/img/3DMap/system-row1.png) center/cover no-repeat;

                    &:nth-child(2) {
                        align-items: flex-end;
                        background: url(@/assets/img/3DMap/system-row2.png) center/cover no-repeat;

                        .item-num {
                            color: #f1d07b;
                        }
                    }

                    &:nth-child(3) {
                        background: url(@/assets/img/3DMap/system-row3.png) center/cover no-repeat;

                        .item-num {
                            color: #60e1e1;
                        }
                    }

                    &:nth-child(4) {
                        align-items: flex-end;
                        background: url(@/assets/img/3DMap/system-row4.png) center/cover no-repeat;

                        .item-num {
                            color: #a7a7a7;
                        }
                    }

                    .item-title {
                        display: flex;
                        justify-content: center;
                        width: 2.1rem;
                        margin-bottom: 0.2rem;
                        font-size: 0.6rem;
                        color: #ffffff;
                    }

                    .item-num {
                        display: flex;
                        justify-content: center;
                        width: 2.1rem;
                        font-size: 0.8rem;
                        color: #09acf1;
                    }
                }
            }

            .system-core {
                position: absolute;
                top: 50%;
                left: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                height: 5rem;
                width: 5rem;
                transform: translate(-50%, -50%);
                background: url(@/assets/img/3DMap/system-logo.png) center/cover no-repeat;

                .core-pic {
                    height: 4.2rem;
                    width: 4.2rem;
                    border: 0.4rem solid;
                    border-color: #09acf1 #f1d07b #a7a7a7 #60e1e1;
                    border-radius: 50%;
                    transform: rotate(-45deg);
                }
            }
        }
    }

    .footer {
        position: absolute;
        bottom: 0;
        display: flex;
        align-items: flex-end;
        width: 100%;
        height: 10rem;
        background: url(@/assets/img/3DMap/mask-foot.png) center/cover no-repeat;
        z-index: 10;

        .nav {
            width: 73rem;
            height: 4.4rem;
            margin: 0 auto 1rem;
            background: url(@/assets/img/3DMap/navigation.png) center/cover no-repeat;
        }
    }
}
</style>
  