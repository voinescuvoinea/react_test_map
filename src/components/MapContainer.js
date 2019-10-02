
import React, {Component} from 'react';
import  {GoogleApiWrapper, Map} from "google-maps-react";
import {connect} from "react-redux";
import {mapClick, getTime} from '../actions/mapActions'
import {GOOGLE_MAPS_APIKEY} from '../config'

const zoom = {
  default: 8,
  clicked: 10
};

class MapContainer extends Component{
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      zoom: zoom.default
    };
    this.props.getTime(this.props.center.lat,this.props.center.lng);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
  }

  onClick(a,b,c){
   const  lat = c.latLng.lat();
   const  lng = c.latLng.lng();
    this.setState({
      zoom : zoom.clicked
    });
    this.props.mapClick(lat,lng);
    this.props.getTime(lat,lng);
  }

  render() {
    return (
        <Map
            google={this.props.google}
            zoom={this.state.zoom}
            initialCenter={this.props.center}
            onClick={this.onClick}
            center={this.props.center}
            onReady = {(GMaps,map)=>{
              map.addListener('zoom_changed',()=>{
                this.setState({
                  zoom: map.getZoom()
                })
            });
            }}
        >
        </Map>

    );
  }
}

const MapWrapper = GoogleApiWrapper({
  apiKey: GOOGLE_MAPS_APIKEY
})(MapContainer);

const mapStateToProps = state => ({
    center: state.map.center

});

export default connect(mapStateToProps, {mapClick, getTime})(MapWrapper);