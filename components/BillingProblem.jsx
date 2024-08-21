import { React, Component } from 'react';
import ErrorMessage from './ErrorMessage';
import Actions from './Actions';

class BillingProblem extends Component {
  render() {
    return(
      <div className="content-center align-middle">
        <h1 className="float-left h-1 font-bold">
          Billing Problem
        </h1>
        <div className="rotate-11">
        😅
        </div>
        <ErrorMessage message={this.props.errorMessage} reason={this.props.reason} />
        <Actions primary={this.props.primaryAction} secondary={this.props.secondaryAction} />

        <div className="content-center align-middle">
          {this.props.reconciliation}
        </div>

        <div>
          <a href="localhost:3000">
            Email Us
          </a>
          |
          <a href="localhost:3000">
            Live Chat
          </a>
        </div>
      </div>
    );
  };
};

export default BillingProblem;