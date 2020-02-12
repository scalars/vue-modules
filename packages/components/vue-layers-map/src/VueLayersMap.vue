<template>
  <div class="map">
    <div id="olmap" class="mapImg">
      <vl-map
        :load-tiles-while-animating="true"
        :load-tiles-while-interacting="true"
        data-projection="EPSG:4326"
        style="height: 400px"
      >
        <vl-view
          :zoom.sync="zoom"
          :center.sync="center"
          :rotation.sync="rotation"
        />
        <vl-geoloc @update:position="geolocPosition = $event">
          <template slot-scope="geoloc">
            <vl-feature v-if="geoloc.position" id="position-feature">
              <vl-geom-point :coordinates="geoloc.position" />
              <vl-style-box>
                <vl-style-icon
                  :src="marker.url"
                  :scale="0.4"
                  :anchor="[0.5, 1]"
                />
              </vl-style-box>
            </vl-feature>
          </template>
        </vl-geoloc>

        <vl-layer-tile id="osm">
          <vl-source-osm />
        </vl-layer-tile>
        <vl-overlay id="overlay" :position="marker.position">
          <template>
            <img :src="marker.url" :width="marker.width" />
          </template>
        </vl-overlay>
      </vl-map>
    </div>
  </div>
</template>
<script>
const Vue = require("vue");
import "vuelayers/lib/style.css";
import * as VueLayers from "vuelayers";

Vue.use(VueLayers);

export default {
  props: {
    zoom: { type: Number, default: 18 },
    center: { default: [-77.28513, 1.21946] },
    rotation: { type: Number, default: 0 },
    geolocPosition: { default: undefined },
    marker: {
      default: {
        position: [-77.28513, 1.21946],
        width: 30,
        height: 30,
        color: "red",
        url:
          "https://cdn.pixabay.com/photo/2014/04/03/10/03/google-309740_960_720.png"
      }
    }
  }
};
</script>
