import React, { Component } from 'react';

class Home extends Component {


  render() {
    const { isShow, data } = this.props;
    let xhtml = null;
    if (data === null) {
      <h1>...Loading</h1>
    } else {
      xhtml = data.map((value, key) => {
        return (
          <p key={key}>Title : {value.title}</p>
        );
      });
    }
    return (
      <div>
        <h1>{xhtml}</h1>
        <button>Show</button>
      </div>
    );
  }
}

export default Home;
