import { React, Component } from 'react';

class Actions extends Component {
  render() {
    return <div>
      <button className="bg-white text-blue-300 rounded transition-colors hover:ring-1 hover:ring-blue-300">
        {this.props.primary}
      </button>
      <br/>
      <button className="bg-blue-300 text-white rounded transition-colors hover:ring-1 hover:ring-blue-300">
        {this.props.secondary}
      </button>
    </div>
  };
};

export default Actions;