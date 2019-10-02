
import React, {Component} from 'react';
import {connect} from "react-redux";

class Info extends Component{


    render() {
        return (
                <div
                    className='info'
                >
                    <h1>{this.props.currentTime}</h1>

                </div>

    );
  }
}
const mapStateToProps = state => ({
    currentTime: state.map.currentTime,

});
export default connect(mapStateToProps)(Info);
