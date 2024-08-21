import React from 'react';

const ErrorMessage = props => <div className="align-middle font-bold">
    <div className="text-red-500 content-center">
      {props.message}
    </div>
    <div>
      {props.reason}
    </div>
  </div>

export default ErrorMessage;