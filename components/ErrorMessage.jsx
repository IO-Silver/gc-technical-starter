import React from 'react';

const ErrorMessage = props => <div className="font-semibold h-110 text-center mb-5">
    <div className="text-red-500">
      {props.message}
    </div>
    <br/>
    <div>
      {props.reason}
    </div>
  </div>

export default ErrorMessage;