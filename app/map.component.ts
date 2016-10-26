import {Component, OnInit } from 'angular2/core';

declare var ol:any;

@Component({
    selector: 'map',
    template: '<h3>LOOK ON A MAP</h3> <div id="map" class="map"></div>',
    styles: ['#map {width: 80%; margin: 10px auto;} h3{margin-left: 10%;}']

})
export class MapComponent implements OnInit {
    ol: any;
    ngOnInit(): void {

        var ljubljana = [14.5, 46.05];
        var ljubljanaWeb = ol.proj.fromLonLat(ljubljana);

        var map = new ol.Map({

            layers: [
                new ol.layer.Tile({
                    source: new ol.source.OSM()
                })
            ],
            target: 'map',
            view: new ol.View({
                center: ljubljanaWeb,
                zoom: 13
            })
        });

    }

}