
import React from 'react';
import { Button } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';

const Buy = (props) => {
    const onSubmit = (values) => {
      props.buyAsync({
        currencyPair: values.target.currencyPair.value,
        amount: values.target.amount.value,
        rate: values.target.rate.value
      });
    };

    return (<form onSubmit={onSubmit}>
            <h2>Buy</h2>
            <Field component="input" name="currencyPair" type="text" placeholder="currency pair" />
            <Field component="input" name="amount" type="text" placeholder="amount" />
            <Field component="input" name="rate" type="text" placeholder="rate" />
            <Button type="submit" bsStyle="primary" >Buy</Button>

        </form>);
 };

export default reduxForm({
  form: 'buyForm' // a unique name for this form
})(Buy);
