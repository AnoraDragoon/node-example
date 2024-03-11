import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

@Component({
    selector: 'app-mapbox1-page',
    templateUrl: './mapbox1-page.component.html',
    styleUrls: ['./mapbox1-page.component.scss']
})
export class Mapbox1PageComponent implements OnInit {

    public map: mapboxgl.Map;
    // mapboxgl = new mapboxgl();
    ngOnInit(): void {

        // // TO MAKE THE MAP APPEAR YOU MUST
        // // ADD YOUR ACCESS TOKEN FROM
        // // https://account.mapbox.com
        // mapboxgl.accessToken = '<your access token here>';
        // const map = new mapboxgl.Map({
        //     container: 'map', // container ID
        //     style: 'mapbox://styles/mapbox/streets-v12', // style URL
        //     center: [-74.5, 40], // starting position [lng, lat]
        //     zoom: 9, // starting zoom
        // });

    }

}
