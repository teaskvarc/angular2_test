System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var MapComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MapComponent = (function () {
                function MapComponent() {
                }
                MapComponent.prototype.ngOnInit = function () {
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
                };
                MapComponent = __decorate([
                    core_1.Component({
                        selector: 'map',
                        template: '<h3>LOOK ON A MAP</h3> <div id="map" class="map"></div>',
                        styles: ['#map {width: 80%; margin: 10px auto;} h3{margin-left: 10%;}']
                    }), 
                    __metadata('design:paramtypes', [])
                ], MapComponent);
                return MapComponent;
            }());
            exports_1("MapComponent", MapComponent);
        }
    }
});
//# sourceMappingURL=map.component.js.map