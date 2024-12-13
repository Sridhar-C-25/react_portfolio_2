import React from "react";
import {Helmet} from "react-helmet";
 
class Head extends React.Component {
  render () {
    return (
        <div className="application">
            <Helmet>
                <meta charSet="utf-8" />
                <title>React app</title>
                <meta name="description" content="React application" />
            </Helmet>
        </div>
    );
  }
};

export default Head