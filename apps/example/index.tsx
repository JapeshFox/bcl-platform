// import 'react-app-polyfill/ie11';
import React from "react";
import ReactDOM from "react-dom";
import { Accordian } from "bcl-ui-components";

import "bcl-ui-components/main.css";

const App = () => {
  return (
    <div>
      <Accordian
        items={[
          {
            title: "Accordian value 1",
            strongText: "strong text 1",
            body: "Accordian body value 1",
          },
          {
            title: "Accordian value 1",
            strongText: "strong text 2",
            body: "Accordian body value 1",
          },
        ]}
        renderBody={({ body, strongText }) => {
          return (
            <>
              <strong>{strongText}</strong>
              {body}
            </>
          );
        }}
        alwaysOpen={false}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
