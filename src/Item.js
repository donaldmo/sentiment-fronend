import React, { Fragment, useEffect, useState } from 'react';
import moment from 'moment'
import CanvasJSReact from './assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Item = (props) => {
  let { outlook } = props
  let [options, setOptions] = useState([])
  let [sentiment, setSentiment] = useState(null)

  useEffect(() => {

  }, [])

  if (outlook) console.log(outlook.createdAt)

  return (
    <figure>
      <div class="y-axis">
        <h3>Symbol {outlook.symbols && `(${outlook.symbols.length})`}</h3>
      </div>

      <div style={{textAlign: 'center'}}>
        <h3>{outlook.symbols && moment(outlook.createdAt).format(('MMMM Do YYYY, h:mm:ss a'))}</h3>
      </div>

      <div class="graphic">
        {outlook.symbols && outlook.symbols.map((symbol, key) => (
          <div class="row" key={key}>
            <h6>{symbol.name}</h6>
            <div class="chart">
              <span class="block" style={{ width: `${symbol.longPercentage}%` }} title="Category A">
                <span class="value">{symbol.longPercentage}%</span>
              </span>
              <span class="block" title="Category B" style={{ width: `${symbol.shortPercentage}%` }}>
                <span class="value">{symbol.shortPercentage}%</span>
              </span>
            </div>
          </div>
        ))}
      </div>

      <div class="x-axis">
        {/* <h3>X-Axis Title</h3>
        <ul class="legend">
          {outlook.symbols && outlook.symbols.map((symbol, key) => (
            <li key={key}>{symbol.name}</li>
          ))}

        </ul> */}
      </div>

    </figure>
  );
}

export default Item;

// {/* <li>
//   <div class="content">
//     {/* <h3>{moment(Date.now(), 'YYYY/MM/DD')}</h3> */}

//     <CanvasJSChart options={options} />
//   </div>
// </li> */}