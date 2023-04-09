import { Flex } from "@chakra-ui/react";
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";

import { useEffect } from "react";
import { visitedCountries } from "./AboutConstants";

export function TravelContent() {
  return (
    <Flex mt="30px">
      <Globe />
    </Flex>
  );

  function Globe() {
    useEffect(() => {
      const root = am5.Root.new("mapdiv");
      let chart = root.container.children.push(
        am5map.MapChart.new(root, {
          projection: am5map.geoOrthographic(),
          panX: "rotateX",
          panY: "rotateY",
        })
      );

      let polygonSeries = chart.series.push(
        am5map.MapPolygonSeries.new(root, {
          geoJSON: am5geodata_worldLow,
          fill: am5.color("#a0a2a3"),
        })
      );

      polygonSeries.mapPolygons.template.setAll({
        tooltipText: "{name}",
        templateField: "polygonSettings",
        strokeWidth: 0.5,
      });

      polygonSeries.mapPolygons.template.states.create("hover", {
        fill: am5.color("#FAB038"),
      });

      polygonSeries.data.setAll(visitedCountries);

      let backgroundSeries = chart.series.unshift(
        am5map.MapPolygonSeries.new(root, {})
      );
      backgroundSeries.mapPolygons.template.setAll({
        fill: am5.color("#e3e1e1"),
        strokeWidth: 1,
      });
      backgroundSeries.data.push({
        geometry: am5map.getGeoRectangle(90, 180, -90, -180),
      });

      return () => root.dispose();
    }, []);

    return <div id="mapdiv" style={{ width: "100%" }} />;
  }
}
