import React, { useEffect, useState } from 'react'
import CanvasJSReact from './assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function App(props) {
  const [sentiment, setSentiment] = useState(null)

  useEffect(() => {
    async function fetchData() {
      let url = 'https://vast-anchorage-28102.herokuapp.com/'

      let res = await fetch(url, {
        method: 'GET',
        headers: {
          Authorization: `Bearer `
        }
      });

      if (res.ok) {
        console.log(res)
        // let data = await res.json();
        // console.log('data: ', data);
      }
      else {
        let err = await res.json();
        console.log('err: ', err)
      }
    }
    fetchData();
  }, []);

  const options = {
    title: {
      text: "Popular Majors Opted by Women & Men"
    },
    toolTip: {
      shared: true
    },
    legend: {
      verticalAlign: "top"
    },
    axisY: {
      suffix: "%"
    },
    data: [{
      type: "stackedBar100",
      color: "#9bbb59",
      name: "Women",
      showInLegend: true,
      indexLabel: "{y}",
      indexLabelFontColor: "white",
      yValueFormatString: "#,###'%'",
      dataPoints: [
        { label: "Health & Clinical Science", y: 85 },
        { label: "Education", y: 79 },
        { label: "Psyhcology", y: 77 },
        { label: "Language & Literature", y: 68 },
        { label: "Communication Tech", y: 63 },
        { label: "Art", y: 61 },
        { label: "Biomedical Science", y: 59 },
        { label: "Social Science & History", y: 49 },
        { label: "Business", y: 49 },
        { label: "Computer & Info Science", y: 18 }
      ]
    }, {
      type: "stackedBar100",
      color: "#7f7f7f",
      name: "Men",
      showInLegend: true,
      indexLabel: "{y}%",
      indexLabelFontColor: "white",
      yValueFormatString: "#,###'%'",
      dataPoints: [
        { label: "Health & Clinical Science", y: 15 },
        { label: "Education", y: 21 },
        { label: "Psychology", y: 23 },
        { label: "Language & Literature", y: 32 },
        { label: "Communication Tech", y: 37 },
        { label: "Art", y: 39 },
        { label: "Biomedical Science", y: 41 },
        { label: "Social Science & History", y: 51 },
        { label: "Business", y: 51 },
        { label: "Computer & Info Science", y: 82 }
      ]
    }]
  }

  return (
    <section class="block-content t-block-teal l-block-spacing">
      <div class="l-contained">
        <header class="heading-group">
          <h2>Timeline</h2>
          <p class="subtitle">
            What is this?
          </p>
        </header>
        <ul class="timeline-list">
          <li>
            <div class="content">
              <h3>A timeline?</h3>

              <CanvasJSChart options={options}/>
            </div>
          </li>
          <li>
            <div class="content">
              <h3>A railway map?</h3>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quam felis, rutrum nec enim non, sodales facilisis purus. Vestibulum viverra egestas ipsum eget commodo. Nullam aliquet lorem vitae nulla dictum vestibulum sed quis tellus. Sed diam diam, facilisis tincidunt volutpat nec, auctor quis magna. Proin sed nunc iaculis ipsum scelerisque tincidunt. Cras eleifend leo tellus, fermentum finibus tortor fringilla eu.
              </p>
            </div>
          </li>
          <li>
            <div class="content">
              <h3>Random dots?</h3>


              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quam felis, rutrum nec enim non, sodales facilisis purus. Vestibulum viverra egestas ipsum eget commodo. Nullam aliquet lorem vitae nulla dictum vestibulum sed quis tellus. Sed diam diam, facilisis tincidunt volutpat nec, auctor quis magna. Proin sed nunc iaculis ipsum scelerisque tincidunt. Cras eleifend leo tellus, fermentum finibus tortor fringilla eu.
              </p>
            </div>
          </li>



          <li>
            <div class="content">
              <h3>Absolutely nothing.</h3>


              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quam felis, rutrum nec enim non, sodales facilisis purus. Vestibulum viverra egestas ipsum eget commodo. Nullam aliquet lorem vitae nulla dictum vestibulum sed quis tellus. Sed diam diam, facilisis tincidunt volutpat nec, auctor quis magna. Proin sed nunc iaculis ipsum scelerisque tincidunt. Cras eleifend leo tellus, fermentum finibus tortor fringilla eu.
              </p>
            </div>
          </li>
        </ul>



      </div>

    </section>
  );
}

export default App;
