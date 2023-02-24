<template>
    <div id="container" @click.stop="controlRotate"></div>
</template>
  
<script lang="ts" setup>
import { onBeforeUnmount, onMounted, reactive, } from "vue";
import * as Cesium from "cesium";
import GlobeRotate from '@/utils/map/GlobeRotate';
import { setInterval } from "timers";



const globeRotate = reactive<{ rotate: any, timer: any, state: boolean }>({
    rotate: null,
    timer: 0,
    state: true
})

// 设置默认的视角为中国
// Cesium.Camera.DEFAULT_VIEW_RECTANGLE = Cesium.Rectangle.fromDegrees(
//     89.5, // 西边经度
//     20.4, // 南边维度
//     110.4, // 东边经度
//     61.2 // 北边维度
// );

onMounted(() => {
    Cesium.Ion.defaultAccessToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxNWYyMTU1Zi1hZjJjLTQxZGEtODAxMS0wNzZhMjBiMWEyNTUiLCJpZCI6Nzk5MzksImlhdCI6MTY3NjI3NzczM30.3aS6vPW1NwvF3FAROmGV6qJepgeNWYbbJnkl1HaIANg";

    const viewer = new Cesium.Viewer("container", {
        // infoBox: false, // 是否显示信息窗口
        geocoder: false, // 是否显示右上角的查询按钮
        homeButton: false, // 是否显示HOME按钮
        sceneModePicker: false, // 是否显示场景控制按钮
        baseLayerPicker: false, // 是否显示图层选择器
        navigationHelpButton: false, // 是否显示帮助按钮
        animation: false, // 是否创建动画
        timeline: false, // 是否显示时间轴
        fullscreenButton: false, // 是否显示全屏按钮

        terrainProvider: Cesium.createWorldTerrain({
            requestVertexNormals: true,
            requestWaterMask: true
        })
    });

    // 隐藏cesiumLogo
    (viewer.cesiumWidget.creditContainer as HTMLElement).style.display = "none";

    globeRotate.rotate = new GlobeRotate(Cesium, viewer);
    globeRotate.rotate.start();
    globeRotate.timer = window.setInterval(() => {
        if (!globeRotate.state) {
            globeRotate.state = true;
            globeRotate.rotate.start();
        }
    }, 5000)

    updateLighting(viewer);


});

onBeforeUnmount(() => {
    clearInterval(globeRotate.timer); //清除定时器
    globeRotate.timer = 0;
})


const controlRotate = () => {
    globeRotate.rotate.stop();
    globeRotate.state = false;
}

const updateLighting = (viewer: Cesium.Viewer) => {
    viewer.scene.globe.enableLighting = true//必须开启光照效果，
    var layer = viewer.scene.imageryLayers.addImageryProvider(
        new Cesium.IonImageryProvider({ assetId: 3812 })
    )
    layer.dayAlpha = 0.0 //白天图层透明值
    layer.nightAlpha = 1.0 //夜晚图层透明值
    layer.brightness = 3.5 //图层发光亮度

    viewer.scene.globe.enableLighting = true;//打开光照
    viewer.clock.shouldAnimate = true;//时间轴动画
    viewer.clock.multiplier = 2000;//时间轴速度
    // nightLayer.dayAlpha = 0.0;
}

</script>
  
<style lang="less" scoped>
#container {
    width: 100%;
    height: 100%;
}
</style>
  