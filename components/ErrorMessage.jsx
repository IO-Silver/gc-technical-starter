import React from 'react';

const ErrorMessage = props => <div className="font-bold h-110">
    <div className="text-red-500">
      {props.message}
    </div>
    <div>
      {props.reason}
    </div>
  </div>

export default ErrorMessage;