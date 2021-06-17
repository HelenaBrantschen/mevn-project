<template>
    <div id="map">
        <div id="locatation_btn">
        </div>
    </div>
</template>


<style>
    #map {
        height: 93vh;
    }

    .custom-map-control-button-location {
        background-color: white;
        padding: 10px;
        margin-bottom: 15px;
        margin-left: 10px;
    }

    .custom-map-control-button-marker {
        border-radius: 50%;
        width: 20vw;
        height: 20vw;
        background-color: white;
        padding: 10px;
        margin-left: 10px;

        margin-bottom: 20px;
    }
</style>

<script>
    import $Scriptjs from 'scriptjs';
    export default {
        name: "Map",
        data() {
            return {
                map: null
            }
        },
        mounted() {
            $Scriptjs(
                "https://maps.googleapis.com/maps/api/js?key=AIzaSyD7DMKDmNRZ_PcO5VnWpmOVvPCuryVeRkc&liabraries=geometry,places",
                () => {
                    this.initMap();
                });
        },

        methods: {
            initMap() {
                var infoWindow;
                var zoomlevel = 10;
                const map = new google.maps.Map(document.getElementById("map"), {
                    center: {
                        lat: 47.0502,
                        lng: 8.093
                    },
                    zoom: 10,
                    mapId: '5b834a7530257e3d',
                    //disableDefaultUI: true,
                    // mapId: 'ID48699cc8cc40ac31' // at night??
                });
                infoWindow = new google.maps.InfoWindow();
                var locationButton = document.createElement("button");
                locationButton.textContent = "Pan to Current Location";
                map.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(locationButton);
                locationButton.classList.add("custom-map-control-button-location");

                var setMarker = document.createElement("button");
                setMarker.textContent = "save place";
                map.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(setMarker);
                setMarker.classList.add("custom-map-control-button-marker");
                setMarker.addEventListener("click", () => {
                    console.log("hello i will the location");
                    navigator.geolocation.getCurrentPosition(
                        (position) => {
                            const pos = {
                                lat: position.coords.latitude,
                                lng: position.coords.longitude,
                            }
                            console.log(pos, "this is the position?")

                        });
                    setNewMarker
                })
                locationButton.addEventListener("click", () => {
                    // Try HTML5 geolocation.
                    if (navigator.geolocation) {
                        navigator.geolocation.getCurrentPosition(
                            (position) => {
                                const pos = {
                                    lat: position.coords.latitude,
                                    lng: position.coords.longitude,
                                };

                                infoWindow.setPosition(pos);
                                console.log(pos, "position of window");
                                infoWindow.setContent("You are here.");
                                infoWindow.open(map);
                                map.zoom = 15;
                                map.setCenter(pos);
                            },
                            () => {
                                handleLocationError(true, infoWindow, map.getCenter());
                            }
                        );
                    } else {
                        // if Browser doesn't support Geolocation
                        handleLocationError(false, infoWindow, map.getCenter());
                    }
                });
            },
            handleLocationError(browserHasGeolocation, infoWindow, pos) {
                infoWindow.setPosition(pos);
                infoWindow.setContent(
                    browserHasGeolocation ?
                    "Error: The Geolocation service failed." :
                    "Error: Your browser doesn't support geolocation."
                );
                infoWindow.open(map);
            },
            setNewMarker() {
                new google.maps.Marker({
                    position: myLatLng,
                    map,
                    title: "Hello World!",
                });
            }

        }
    }
</script>