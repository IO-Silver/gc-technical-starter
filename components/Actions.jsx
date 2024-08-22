import { React, Component } from 'react';

class Actions extends Component {
  render() {
    return <div>
      <button className="w-full mb-3 p-2 bg-white text-blue-600 rounded transition-colors ring-1 ring-blue-600 font-semibold text-lg">
        {this.props.primary}
      </button>

      <button className="w-full p-2 bg-blue-600 text-white rounded transition-colors hover:ring-1 hover:ring-blue-600 font-semibold text-lg">
        {this.props.secondary}
      </button>
    </div>
  };
};

export default Actions;