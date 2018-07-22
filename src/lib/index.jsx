import React, { Component } from "react";
import { setInterval } from "timers";
const uuidv1 = require('uuid/v1');
let chartloader=0;
let chartloaderAfterInit=0;
class PieChart extends Component {
  constructor(props){
    super(props);
    this.state={id:uuidv1(),chartloader:0};
  }
  componentDidMount () 
  {var curobj=this;
    if(document.getElementById("googlechartscript")==null){
      const script = document.createElement("script");
      script.id="googlechartscript";
      script.src = "https://www.gstatic.com/charts/loader.js";
      //script.async = true;
      document.body.appendChild(script);
      
      script.onload=function()
      {
        //google.charts.load("visualization", "1", {packages:["corechart"]});
        google.charts.load('current', {'packages':['corechart','geochart']});
        curobj.timer= setInterval(function(){
          google.charts.setOnLoadCallback(curobj.renderChart());  
        },50);
        curobj.setState({chartloader:curobj.timer});
      }
    }
    else{
      this.timer= setInterval(function(){
        curobj.renderChart();
      },50);
    }
    
  }
  renderChart(){
    if(this.timer!=null && typeof google!=="undefined" && typeof google.visualization !=="undefined" && typeof google.visualization.arrayToDataTable!="undefined")
    {

      switch(this.props.chart){
        case 'Pie':
        {
          this.renderPieChart();
          break;
        }
        case 'Area':
        {
          this.renderAreaChart();
          break;
        }
        case 'Bar':
        {
          this.renderBarChart();
          break;
        }
        case 'Bubble':
        {
          this.renderBubbleChart();
          break;
        }
        case 'Geo':{
          this.renderGeoChart();
          break;
        }
        default:{
          alert("Invalid Chart");
        }
      
    }
    }
  }
  renderPieChart(){
    if(typeof google.visualization.PieChart!="undefined"){

      clearInterval(this.timer._id);
      this.timer=undefined;
      var data = google.visualization.arrayToDataTable(this.props.data);
      var chart = new google.visualization.PieChart(document.getElementById(this.state.id));
      chart.draw(data, this.props.options);
    }
  }
  renderAreaChart(){
    if(typeof google.visualization.AreaChart!="undefined"){

      clearInterval(this.timer._id);
      this.timer=undefined;
    var data = google.visualization.arrayToDataTable(this.props.data);
    var chart = new google.visualization.AreaChart(document.getElementById(this.state.id));
    chart.draw(data, this.props.options);
  }
  }
  renderBarChart(){
    if(typeof google.visualization.BarChart!="undefined"){

      clearInterval(this.timer._id);
      this.timer=undefined;
    var data = google.visualization.arrayToDataTable(this.props.data);
    var chart = new google.visualization.BarChart(document.getElementById(this.state.id));
    chart.draw(data, this.props.options);
    }
}
  renderBubbleChart(){
    if(typeof google.visualization.BubbleChart!="undefined"){

      clearInterval(this.timer._id);
      this.timer=undefined;
    var data = google.visualization.arrayToDataTable(this.props.data);
  
    var chart = new google.visualization.BubbleChart(document.getElementById(this.state.id));
    chart.draw(data, this.props.options);
  }
  }

  renderGeoChart(){
    if(typeof google.visualization.GeoChart!="undefined"){

      clearInterval(this.timer._id);
      this.timer=undefined;
    var data = google.visualization.arrayToDataTable(this.props.data);
  
    var chart = new google.visualization.GeoChart(document.getElementById(this.state.id));
    chart.draw(data, this.props.options);
  }
  }
  render() {
    const { color, children } = this.props;
    return (
      <div id={this.state.id} style={this.props.style} ></div>
    );
  }
}

export default PieChart;
