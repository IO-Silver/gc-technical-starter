import Head from 'next/head';
import { React } from 'react';
import Logo from '../components/Logo';
import BillingProblem from '../components/BillingProblem';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Track-Stack</title>
      </Head>

      <Logo />
      <BillingProblem errorMessage="It looks like your billing method on file may not be setup correctly."
                      reason="You have $1,204.03 balance owing for longer than 20 days."
                      primaryAction="View All Invoices"
                      secondaryAction="Fix Payment Method & Pay Now"
                      reconciliation="Once the payment method is fixed and balance is paid, you'll be able to access your account again." />
    </div>
  )
}
