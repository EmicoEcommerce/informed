import React from 'react'
import { expect } from 'chai'
import sinon from 'sinon'
import Enzyme, { mount } from 'enzyme'

import { Form, Text } from '../../src'

describe('Form', () => {
  const sandbox = sinon.createSandbox();

  const checkFormApi = api => {
    expect(api).to.have.own.property('getError')
    expect(api).to.have.own.property('setError')
    expect(api).to.have.own.property('getTouched')
    expect(api).to.have.own.property('setTouched')
    expect(api).to.have.own.property('getValue')
    expect(api).to.have.own.property('setValue')
    expect(api).to.have.own.property('getState')
    expect(api).to.have.own.property('setState')
    expect(api).to.have.own.property('setValues')
    expect(api).to.have.own.property('submitForm')
    expect(api).to.have.own.property('reset')
  }

  afterEach(()=>{
    sandbox.restore();
  });

  const checkFormState = state => {
    const formState = {
      values: {},
      touched: {},
      errors: {},
      pristine: true,
      dirty: false
    }
    expect(JSON.stringify(state)).to.deep.equal(JSON.stringify(formState))
  }

  const getState = state => {
    const defaultState = {
      values: {},
      touched: {},
      errors: {},
      pristine: true,
      dirty: false
    }
    return Object.assign({}, defaultState, state)
  }

  beforeEach(() => {
    sandbox.restore()
  })

  it('should call onChange function when value changes', () => {
    const spy = sandbox.spy();
    const wrapper = mount(<Form onChange={spy}>{() => <Text field="greeting" />}</Form>);
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: 'hello' } });
    expect(spy.called).to.equal(true);
    expect(spy.args[0][0].values).to.deep.equal({ greeting: 'hello' });
  })

  it('should call onSubmit function with values when the form is submitted', done => {
    const spy = sandbox.spy()
    const wrapper = mount(
      <Form onSubmit={spy}>
        <Text field="greeting" />
        <button type="submit">Submit</button>
      </Form>
    );
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: 'hello' } });
    const button = wrapper.find('button');
    button.simulate('submit');
    setImmediate(() => {
      expect(spy.called).to.equal(true);
      expect(spy.args[0][0]).to.deep.equal({ greeting: 'hello' });
      done();
    })
  })

  it('should call preventDefault when the form is submitted', done => {
    const spy = sandbox.spy()
    const wrapper = mount(
      <Form onSubmit={() => {}}>
        <button type="submit">Submit</button>
      </Form>
    );
    const button = wrapper.find('button');
    button.simulate('submit', {
      preventDefault: spy
    })
    setImmediate(() => {
      expect(spy.called).to.equal(true);
      done();
    })
  })

  it('should NOT preventDefault dontPreventDefault is passed in', done => {
    const spy = sandbox.spy()
    const wrapper = mount(
      <Form onSubmit={() => {}} dontPreventDefault>
        <button type="submit">Submit</button>
      </Form>
    )
    const button = wrapper.find('button')
    button.simulate('submit', {
      preventDefault: spy
    })
    setImmediate(() => {
      expect(spy.called).to.equal(false)
      done()
    })
  })

  it('should NOT call onSubmit function with values when the invalid form is submitted', done => {
    const spy = sandbox.spy()
    let api
    const setApi = param => {
      api = param
    }
    const validate = values => ({
      greeting: values.greeting === 'hello!' ? 'ooo thats no good' : null
    })
    const wrapper = mount(
      <Form onSubmit={spy} getApi={setApi} validate={validate}>
        <Text field="greeting" />
        <button type="submit">Submit</button>
      </Form>
    )
    api.setValue('greeting', 'hello!')
    const button = wrapper.find('button')
    button.simulate('submit')
    setImmediate(() => {
      expect(spy.called).to.equal(false)
      done()
    })
  })

  it('should call onSubmitFailure function with errors when the invalid form is submitted', done => {
    const spy = sandbox.spy()
    let api
    const setApi = param => {
      api = param
    }
    const validate = values => ({
      greeting: values.greeting === 'hello!' ? 'ooo thats no good' : null
    })
    const wrapper = mount(
      <Form onSubmitFailure={spy} getApi={setApi} validate={validate}>
        <Text field="greeting" />
        <button type="submit">Submit</button>
      </Form>
    )
    api.setValue('greeting', 'hello!')
    const button = wrapper.find('button')
    button.simulate('submit')
    setImmediate(() => {
      expect(spy.called).to.equal(true)
      expect(spy.args[0][0]).to.deep.equal({ greeting: 'ooo thats no good' })
      done()
    })
  })

  it('should call preSubmit function with values when the form is submitted', done => {
    const spy = sandbox.spy()
    const wrapper = mount(
      <Form preSubmit={spy}>
        <Text field="greeting" />
        <button type="submit">Submit</button>
      </Form>
    )
    const input = wrapper.find('input')
    input.simulate('change', { target: { value: 'hello' } })
    const button = wrapper.find('button')
    button.simulate('submit')
    setImmediate(() => {
      expect(spy.called).to.equal(true)
      expect(spy.args[0][0]).to.deep.equal({ greeting: 'hello' })
      done()
    })
  })

  // SUBMITS TESTS

  it('getApi should give the passed function the formApi', () => {
    let api
    const setApi = param => {
      api = param
    }
    mount(<Form getApi={setApi}>{() => <Text field="greeting" />}</Form>)
    checkFormApi(api)
  })

  it('should set initial values when initial values are passed', () => {
    let api
    const setApi = param => {
      api = param
    }
    mount(
      <Form getApi={setApi} initialValues={{ greeting: 'hello' }}>
        {() => <Text field="greeting" />}
      </Form>
    )
    expect(api.getState().values).to.deep.equal({ greeting: 'hello' })
  })

  it('setState should set the formState', () => {
    let api
    const setApi = param => {
      api = param
    }
    mount(<Form getApi={setApi}>{() => <Text field="greeting" />}</Form>)
    api.setState({ values: { greeting: 'hello' } })
    expect(api.getState().values).to.deep.equal({ greeting: 'hello' })
  })

  it('setValues should set the forms values', () => {
    let api
    const setApi = param => {
      api = param
    }
    mount(<Form getApi={setApi}>{() => <Text field="greeting" />}</Form>)
    api.setValues({ greeting: 'hello' })
    expect(api.getState().values).to.deep.equal({ greeting: 'hello' })
  })

  it('reset should reset the form to its initial state', () => {
    let api
    const setApi = param => {
      api = param
    }
    mount(<Form getApi={setApi}>{() => <Text field="greeting" />}</Form>)
    api.setState({ values: { greeting: 'hello' } })
    expect(api.getState()).to.deep.equal(getState({ values: { greeting: 'hello' }, pristine: false, dirty: true }))
    api.reset()
    expect(api.getState()).to.deep.equal(getState())
  })

  it('setValue should set a value', () => {
    let api
    const setApi = param => {
      api = param
    }
    mount(<Form getApi={setApi}>{() => <Text field="greeting" />}</Form>)
    api.setValue('greeting', 'hello')
    expect(api.getState()).to.deep.equal(getState({ values: { greeting: 'hello' }, pristine: false, dirty: true }))
  })

  it('setError should set an error', () => {
    let api
    const setApi = param => {
      api = param
    }
    mount(<Form getApi={setApi}>{() => <Text field="greeting" />}</Form>)
    api.setError('greeting', 'error')
    expect(api.getState()).to.deep.equal(getState({ errors: { greeting: 'error' } }))
  })

  // SET WARNINGG AND SUCCESS TESTS

  it('should give child function access to formApi', () => {
    const spy = sandbox.spy();
    mount(<Form>{spy}</Form>);
    expect(spy.called).to.equal(true);
    checkFormApi(spy.args[0][0].formApi);
    checkFormState(spy.args[0][0].formState);
  })

  it('should give render function access to formApi and formState', () => {
    const spy = sandbox.spy();
    mount(<Form render={spy}/>);
    expect(spy.called).to.equal(true);
    checkFormApi(spy.args[0][0].formApi);
    checkFormState(spy.args[0][0].formState);
  })

  it('should give component passed in access to formApi as prop', () => {
    const Inputs = () => null
    const comp = mount(<Form component={Inputs} />)
    const inputs = comp.find('Inputs')
    expect(inputs.length).to.equal(1)
    checkFormApi(inputs.props().formApi)
  })

  it('errors should update when input is changed', done => {
    const validate = value => value === 'Foo' ? 'ooo thats no good' : null;
    let api
    const setApi = param => {
      api = param
    }
    const wrapper = mount(
      <Form getApi={setApi}>
        <Text field="name" validateOnChange validate={validate}/>
      </Form>
    )
    expect(api.getState().errors).to.deep.equal({})
    const input = wrapper.find('input')
    input.simulate('change', { target: { value: 'Foo' } })

    setImmediate(() => {
      expect(api.getState().errors).to.deep.equal({ name: 'ooo thats no good' })
      done()
    })
  })

  // WARNINGG AND SUCCESS TESTS ^^

})
