import React, { useEffect, useState } from 'react'
import Item from './Item'
import Page from 'react-page-loading'

function App(props) {
  const [sentiment, setSentiment] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        // let url = 'https://vast-anchorage-28102.herokuapp.com/sentiment'
        let url = 'http://localhost:4000/sentiment'

        let res = await fetch(url, {
          method: 'GET',
          headers: {
            'Accept': 'application/json'
          }
        });

        if (res.ok) {
          let data = await res.json();

          data.map(symbols => {
            setSentiment(prevState => ([...prevState, symbols]))
          })
          setLoading(false)

        }
        else {
          let err = await res.json();
          console.log('err: ', err)
          setLoading(false)
        }
      }
      catch (err) {
        console.log(err)
        setLoading(false)
      }

    }
    fetchData();


  }, []);

  if (sentiment) console.log(sentiment)

  return (
    <div>

      <h1
        style={{ marginBottom: '32px', fontWeight: 'bolder', fontSize: '32px', textAlign: 'center'}}
      >Forex Sentiment (Shorts vs Longs)</h1>

      {loading && (<h1 style={{ textAlign: 'center'}}>Loading...</h1>)}

      {sentiment && sentiment.map((outlook, key) => (
        <Item key={key} outlook={outlook}/>
      ))}
      
    </div>
    
  );
}

export default App;
