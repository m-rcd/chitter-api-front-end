import React from 'react';

export default class NewPeep extends React.Component {
  render() {
    return (
      <form>
        <input type="text" name="peep" />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
