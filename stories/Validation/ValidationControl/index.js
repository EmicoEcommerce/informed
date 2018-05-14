import React from 'react';
import Code from '../../utils/Code';
import withDocs from '../../utils/withDocs';
import readme from './README.md';

import { Form, Text } from '../../../src';

const validate = (value)=>'Field is not valid';

const ValidationControl = () => (
  <div>
    <Form>
      {({ formApi, formState }) => (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, marginRight: '2rem' }}>
            <form onSubmit={formApi.submitForm} id="validate-form">
              <label htmlFor="validate-color">Color:</label>
              <small>Validate on blur</small>
              <Text
                field="color"
                id="validate-color"
                validateOnBlur
                validate={validate} />
              <label htmlFor="validate-food">Food:</label>
              <small>Validate on change</small>
              <Text
                field="food"
                id="validate-food"
                validateOnChange
                validate={validate} />
              <label htmlFor="validate-car">Car:</label>
              <small>Validate on blur and change</small>
              <Text
                field="car"
                id="validate-car"
                validateOnBlur
                validateOnChange
                validate={validate} />
              <button type="submit">
                Submit
              </button>
            </form>
          </div>
          <div style={{ flex: 2, minWidth: '300px' }}>
            <label>Values:</label>
            <Code language="language-js">
              {JSON.stringify(formState.values, null, 2)}
            </Code>
            <label>Errors:</label>
            <Code language="language-js">
              {JSON.stringify(formState.errors, null, 2)}
            </Code>
          </div>
        </div>
      )}
    </Form>
  </div>
);

export default withDocs( readme, ValidationControl );
