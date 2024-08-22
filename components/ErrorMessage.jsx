import React from 'react';

const ErrorMessage = props => <div className="font-semibold h-110 text-center mb-5">
    <div className="text-red-500">
      {props.message}
    </div>
    <br/>
    <div>
      You have a <span className="font-bold">{props.balance}</span> balance owing for longer than 20 days.
    </div>
  </div>

export default ErrorMessage;