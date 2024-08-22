import { React, Component } from 'react';
import ErrorMessage from './ErrorMessage';
import Actions from './Actions';

class BillingProblem extends Component {
  render() {
    return(
      <div className="flex h-screen w-screen items-center justify-center">
        <div className="flex-col w-[330px] h-[413px]">
          <h1 className="font-bold">
            Billing Problem
          </h1>
          <div className="rotate-11">
          😅
          </div>

          <ErrorMessage message={this.props.errorMessage} reason={this.props.reason} />
          <Actions primary={this.props.primaryAction} secondary={this.props.secondaryAction} />

          <div className="">
            {this.props.reconciliation}
          </div>

          <div className="w-240 h-80">
            <a href="localhost:3000" className="mx-3">
              Email Us
            </a>
            |
            <a href="localhost:3000" className="mx-3">
              Live Chat
            </a>
          </div>
        </div>
      </div>
    );
  };
};

export default BillingProblem;