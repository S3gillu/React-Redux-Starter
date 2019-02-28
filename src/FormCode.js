import React from 'react';
import { Field, reduxForm } from 'redux-form';
import 'react-widgets/dist/css/react-widgets.css';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
        <label className="control-label">{label}</label>
        <div>
            <input {...input} placeholder={label} type={type} className="form-control" />
            {
                touched && ((error && <span className="text-danger">{error}</span>) || (warning && <span>{warning}</span>))
            }
        </div>
    </div>
)

const renderRadioGroup = ({ input, ...rest }) => (
    <RadioButtonGroup
      {...input}
      {...rest}
      valueSelected={input.value}
      onChange={(event, value) => input.onChange(value)}
    />
  )


const validate = values => {
    const errors = {}
    if (!values.name) {
        errors.name = 'Please enter your name'
    } else if (values.name.length < 2) {
        errors.name = 'Minimum be 2 characters or more'
    }
    if (!values.email) {
        errors.email = 'Please enter your email'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid Email Address'
    }
    if (!values.age) {
        errors.age = 'Please enter your age'
    }
    return errors;
}

let FormCode = props => {
    const { handleSubmit } = props;
    return (
        <div className='row' style={{ marginTop: '3%' }}>
            <div className="col-md-3"></div>
            <div className="col-md-6">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <Field name="name" component={renderField} label="Name" />
                    </div>

                    <div className="form-group">
                        <Field name="age" component={renderField} label="Age" />
                    </div>

                    <div className="form-group">
                        <Field name="email" component={renderField} label="Email" />
                    </div>

                    <div>
                        <Field name="sex" component={renderRadioGroup}>
                            <RadioButton value="male" label="Male" />
                            <RadioButton value="female" label="Female" />
                            <RadioButton value="other" label="Other" />
                        </Field>
                    </div>

                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
                </div>
            </div>
    )
}

FormCode = reduxForm({
    form: 'AppForm',
    validate
})(FormCode);

export default FormCode;