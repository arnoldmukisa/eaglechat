import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {
	FormControl,
	FormHelperText,
	FormControlLabel,
} from 'material-ui/Form';
import Button from 'components/uielements/button';
import TextField from 'components/uielements/textfield';
import Radio, { RadioGroup } from 'components/uielements/radio';
import Checkbox from 'components/uielements/checkbox';
import Select from 'material-ui/Select'
import { MenuItem } from 'components/uielements/menus';
import asyncValidate from './asyncValidate';
import validate from './validate';

const renderTextField = ({
	input,
	label,

	meta: { touched, error },
	...custom
}) => {
	return (
		<FormControl value={input.value}>
			<TextField
				error={touched && error ? true : false}
				label={label}
				{...input}
				{...custom}
			/>
			{touched && error ? <FormHelperText>{error}</FormHelperText> : ''}
		</FormControl>
	);
};
const renderPassword = ({
	input,
	label,

	meta: { touched, error },
	...custom
}) => {
	return (
		<FormControl value={input.value}>
			<TextField
				error={touched && error ? true : false}
				type="password"
				label={label}
				{...input}
				{...custom}
			/>
			{touched && error ? <FormHelperText>{error}</FormHelperText> : ''}
		</FormControl>
	);
};

const renderRadioGroup = ({ input, ...rest }) => (
	<RadioGroup
		{...input}
		{...rest}
		onChange={(event, value) => input.onChange(value)}
	/>
);
const renderToggle = ({ label, input, meta: { touched, error }, ...rest }) => (
	<FormControl value={input.value}>
		<FormControlLabel
			control={
				<Checkbox
					checked={input.value}
					onChange={input.onChange}
					color="primary"
				/>
			}
			label={label}
		/>
		{touched && error ? <FormHelperText>{error}</FormHelperText> : ''}
	</FormControl>
);

const renderSelect = ({ input, label, meta: { touched, error }, children, ...rest}) => (
  <Select value={input.value}
    label={label}
    errorText={touched && error}
    {...input}
    onChange={(event, index, value) => input.onChange(value)}
    children={children}
    {...rest}
  />
)

const MaterialUiForm = ({
	handleSubmit,
	onSubmit,
	handleSubmitFailed,
	pristine,
	reset,
	submitting,
	submitFailed,
}) => {
	return (
		<form onSubmit={handleSubmit} className="mainFormsWrapper">
			<div className="mainFormsInfoWrapper">
				<div className="mainFormsInfoField">
					<Field
						name="firstName"
						component={renderTextField}
						label="First Name"
					/>
				</div>
				<div className="mainFormsInfoField">
					<Field
						name="lastName"
						component={renderTextField}
						label="Last Name"
					/>
				</div>
				<div className="mainFormsInfoField">
					<Field name="email" component={renderTextField} label="Email" />
				</div>
				
				<div className="mainFormsInfoField">
					<Field name="password" component={renderPassword} label="password" />
				</div>
				{/*<div className="mateFormsCheckList">
			      <Field
			        name="favoriteColor"
			        component={renderSelect}
			        label="Favorite Color"
			      >
			        <MenuItem value="ff0000" primaryText="Red" />
			        <MenuItem value="00ff00" primaryText="Green" />
			        <MenuItem value="0000ff" primaryText="Blue" />
			      </Field>
			    </div>*/}
			</div>
			<div className="mateFormsCheckList">
				<h4 className="radiButtonHeader">Gender</h4>
				<div className="mateFormsRadioList">
					<Field name="sex" component={renderRadioGroup}>
						<FormControlLabel
							className="mateFormsRadio"
							value="male"
							control={<Radio />}
							label="Male"
						/>
						<FormControlLabel
							value="female"
							control={<Radio />}
							label="Female"
						/>
					</Field>
				</div>
			</div>
			<div className="mateFormsCheckList">
				<h4 className="radiButtonHeader">Role</h4>
				<div className="mateFormsRadioList">
					<Field name="role" component={renderRadioGroup}>
						<FormControlLabel
							className="mateFormsRadio"
							value="admissions"
							control={<Radio />}
							label="Admissions"
						/>
						<FormControlLabel
							value="business"
							control={<Radio />}
							label="Business"
						/>
						<FormControlLabel
							className="mateFormsRadio"
							value="coach"
							control={<Radio />}
							label="Coach"
						/>
						<FormControlLabel
							value="finance"
							control={<Radio />}
							label="Finance"
						/>
						<FormControlLabel
							value="registrar"
							control={<Radio />}
							label="Registrar"
						/>
						<FormControlLabel
							value="general"
							control={<Radio />}
							label="General"
						/>
					</Field>
				</div>
			</div>
			
			<div className="mateFormsFooter">
				{/*<div className="mateFormsChecBoxList">
					<Field
						name="agredTerms"
						component={renderToggle}
						label="I agree all statements in terms of service"
					/>
				</div>*/}

				<div className="mateFormsSubmit">
					<Button
						type="submit"
						className={pristine || submitting ? '' : 'mateFormsSubmitBtn'}
						disabled={pristine || submitting}
					>
						Submit
					</Button>
					<Button
						color="secondary"
						className="mateFormsClearBtn"
						disabled={pristine || submitting}
						onClick={() => {
							reset();
							onSubmit();
						}}
					>
						Clear Values
					</Button>
				</div>
			</div>
		</form>
	);
};

export default reduxForm({
	form: 'form',
	validate,
	asyncValidate,
})(MaterialUiForm);
