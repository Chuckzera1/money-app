import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import labelAndInput from '../common/form/labelAndInput'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { init } from './billingCycleAction'

class BillingCycleForm extends Component {
    render(){
        const { handleSubmit, readOnly, submitClass, submitLabel } = this.props
        return(
            <form role='form' onSubmit={handleSubmit}>
                <div className="box-body">
                <Field name='name' component={labelAndInput} readOnly={readOnly}
                label='Nome' cols='12 4' placeholder='Informe o nome' />
                <Field name='month' component={labelAndInput} readOnly={readOnly}
                label='Mês' cols='12 4' placeholder='Informe o mês' type='number'/>
                <Field name='year' component={labelAndInput} readOnly={readOnly}
                label='Ano' cols='12 4' placeholder='Informe o ano' type='number'/>
                </div>

                <div className="box-footer">
                    <button type='submit' className={`btn btn-${submitClass}`}>{submitLabel}</button>
                    <button type='button' className='btn btn-search' onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}
BillingCycleForm = reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm)
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycleForm)