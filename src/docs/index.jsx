import React from "react";
import { render } from "react-dom";
import GoogleChart from "../../lib";
import Banner from './banner';
import "./styles.css";
var pieData=[
  ['Task', 'Hours per Day'],
  ['Work',     11],
  ['Eat',      2],
  ['Commute',  2],
  ['Watch TV', 2],
  ['Sleep',    7]
];
var AreaData=[
  ['Year', 'Sales', 'Expenses'],
  ['2013',  1000,      400],
  ['2014',  1170,      460],
  ['2015',  660,       1120],
  ['2016',  1030,      540]
];
var barData=[
  ['Year', 'Visitations', { role: 'style' } ],
  ['2010', 10, 'color: gray'],
  ['2020', 14, 'color: #76A7FA'],
  ['2030', 16, 'opacity: 0.2'],
  ['2040', 22, 'stroke-color: #703593; stroke-width: 4; fill-color: #C5A5CF'],
  ['2050', 28, 'stroke-color: #871B47; stroke-opacity: 0.6; stroke-width: 8; fill-color: #BC5679; fill-opacity: 0.2']
];
var babbleData=[
  ['ID', 'Life Expectancy', 'Fertility Rate', 'Region',     'Population'],
  ['CAN',    80.66,              1.67,      'North America',  33739900],
  ['DEU',    79.84,              1.36,      'Europe',         81902307],
  ['DNK',    78.6,               1.84,      'Europe',         5523095],
  ['EGY',    72.73,              2.78,      'Middle East',    79716203],
  ['GBR',    80.05,              2,         'Europe',         61801570],
  ['IRN',    72.49,              1.7,       'Middle East',    73137148],
  ['IRQ',    68.09,              4.77,      'Middle East',    31090763],
  ['ISR',    81.55,              2.96,      'Middle East',    7485600],
  ['RUS',    68.6,               1.54,      'Europe',         141850000],
  ['USA',    78.09,              2.05,      'North America',  307007000]
];
var geoData=[
  ['Country', 'Popularity'],
  ['Germany', 200],
  ['United States', 300],
  ['Brazil', 400],
  ['Canada', 500],
  ['France', 600],
  ['RU', 700]
];
function Demo() {
  return (
    <div>
      <Banner />
      <div className="container">
    <div className="row">
      <div className="col-md-4">
        <h2>Pie Chart</h2>
        <GoogleChart color="brown" chart="Pie" style={{height:"300px"}} data={pieData} options={{title:"Pie Chart"}}></GoogleChart>
      </div>
      <div className="col-md-4">
        <h2>Area Chart</h2>
        <GoogleChart color="brown" chart="Area" style={{height:"300px"}} data={AreaData} options={{title:"Area Chart"}}></GoogleChart>
      </div>
      <div className="col-md-4">
        <h2>Bar Chart</h2>
        <GoogleChart color="brown" chart="Bar" style={{height:"300px"}} data={barData} options={{title:"Bar Chart"}}></GoogleChart>
      </div>
      <div className="col-md-4">
        <h2>Bubble Chart</h2>
        <GoogleChart color="brown" chart="Bubble" style={{height:"300px"}} data={babbleData} options={{title:"Bubble Chart",hAxis: {title: 'Life Expectancy'},
        vAxis: {title: 'Fertility Rate'},
        bubble: {textStyle: {fontSize: 14}}}}></GoogleChart>
      </div>
    </div>
    <div className="row">
    <div className="col-md-12">
        <h2>Geo Chart</h2>
        <GoogleChart color="brown" chart="Geo" style={{height:"300px"}} data={geoData} options={{title:"Geo Chart"}}></GoogleChart>
      </div>
    </div>
    </div>
    </div>
  );
}

render(<Demo />, document.getElementById("app"));
