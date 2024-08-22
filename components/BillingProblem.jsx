import { React, Component } from 'react';
import ErrorMessage from './ErrorMessage';
import Actions from './Actions';

class BillingProblem extends Component {
  render() {
    return(
      <div className="flex h-screen w-screen items-center justify-center">
        <div className="flex-col w-[330px] h-[413px]">
          <div>
            <h1 className="font-bold text-4xl">
              Billing Problem
            <div className="rotate-[-15deg] float-right">
            😅
            </div>
            </h1>
          </div>
          <br/>
          <ErrorMessage message={this.props.errorMessage} balance={this.props.balance} />
          <Actions primary={this.props.primaryAction} secondary={this.props.secondaryAction} />
          <br/>
          <div className="w-[240px] h-[80px] mx-[45px] text-xs font-semibold">
            <div className="text-center">
              {this.props.reconciliation}
            </div>
            <br/>
            <div className="text-center text-blue-600">
              <a href="localhost:3000" className="mx-2">
                Email Us
              </a>
              |
              <a href="localhost:3000" className="mx-2">
                Live Chat
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default BillingProblem;