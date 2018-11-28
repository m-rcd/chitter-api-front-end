import React from 'react';

export default class Peep extends React.Component {
  constructor() {
    super();
    this.state = {
      peeps: [],
    };
  }

  componentDidMount() {
    fetch('https://chitter-backend-api.herokuapp.com/peeps')
      .then(response => response.json()).then((responseJson) => {
        const peeps = responseJson.map(peep => (
          <div id={peep.id}>
            <h3>
              {peep.user.handle}
            </h3>
            <p>
              {peep.body}
            </p>
            <h6>
              {peep.created_at}
            </h6>
          </div>
        ));
        this.setState({ peeps });
      });
  }

  render() {
    return (
      <div className="peeps">
        {this.state.peeps}
      </div>
    );
  }
}
