import React, { Fragment } from "react";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import Request from "axios-react";
import MatchItem from './components/MatchItem';
import "./styles.css";

const App = () => (
  <Request
    config={{
      method: 'get',
      url: 'https://raw.githubusercontent.com/openfootball/football.json/master/2019-20/es.1.json',
    }}
  >
    {({ loading, response }) => (
      <Fragment>
        <h1 className="page-title">⚽ Laliga 2019-20 Matches Result ⚽</h1>
        {loading ? (
          <p className="loading">Loading...</p>
        ) : (response && response.data) && (
          <AutoSizer>
            {({ height, width }) => (
              <List
                height={window.innerWidth <= 750 ? (height - 70) : (height - 140)}
                itemCount={response.data.matches.length}
                itemSize={window.innerWidth <= 750 ? 170 : 200}
                itemData={response.data.matches}
                width={width}
              >
                {MatchItem}
              </List>
            )}
          </AutoSizer>
        )}
      </Fragment>
    )}
  </Request>
);

export default App;
