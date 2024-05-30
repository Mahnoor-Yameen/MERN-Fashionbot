import React, { Component } from "react";
import { AppRoute } from '../../App';

export default class Spinner extends Component {
  render() {
    return (


      <div>
        <div style={{ opacity:"0.2"}} className="position-fixed bg-dark top-0 left-0 w-100 h-100   d-flex justify-content-center align-items-center">
          <div className="spinner-border   text-primary " style={{height:"16%", width:"8%"}} role="status"></div>
        </div>
      </div>


    );
  }
}
