<template>
    <div id="container"></div>
</template>
  
<script lang="ts" setup>
import { defineComponent, onMounted } from "vue";
// import "cesium/Build/Cesium/Widgets/widgets.css";
import * as Cesium from "cesium";

defineComponent({ name: "CesiumView" });

// 设置默认的视角为中国
// Cesium.Camera.DEFAULT_VIEW_RECTANGLE = Cesium.Rectangle.fromDegrees(
//   // 西边经度
//   89.5,
//   // 南边维度
//   20.4,
//   // 东边经度
//   110.4,
//   // 北边维度
//   61.2
// );

onMounted(() => {
    // Cesium.Ion.defaultAccessToken =
    //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxNWYyMTU1Zi1hZjJjLTQxZGEtODAxMS0wNzZhMjBiMWEyNTUiLCJpZCI6Nzk5MzksImlhdCI6MTY3NjI3NzczM30.3aS6vPW1NwvF3FAROmGV6qJepgeNWYbbJnkl1HaIANg";

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
    });

    // 隐藏cesiumLogo
    // viewer.cesiumWidget.creditContainer.style.display = "none";

    // 设置沙箱允许使用JS
    // var iframe = document.getElementsByClassName("cesium-infoBox-iframe")[0];
    // iframe.setAttribute(
    //   "sandbox",
    //   "allow-same-origin allow-scripts allow-popups allow-forms"
    // );
    // iframe.setAttribute("src", "");

    // viewer.camera.flyTo({
    //   destination: Cesium.Cartesian3.fromDegrees(116.39, 39.9, 1000),
    //   orientation: {
    //     heading: Cesium.Math.toRadians(0),
    //     pitch: Cesium.Math.toRadians(-90),
    //     roll: 0.0,
    //   },
    // });
});
</script>
  
<style lang="less" scoped>
#container {
    width: 100%;
    height: 100%;
}
</style>
  