import React, { useState } from 'react';

import { Cards, CenterTitle, SubmitButton } from './style';
import FormItem from './FormItem';

export interface RegFormData {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
}

const RegForm: React.FC = () => {
  // TODO: implement
  const [formData, setFormData] = useState<RegFormData>({});
  const [formErrors, setFormErrors] = useState<RegFormData>({});
  const handleSubmit = () => {
    alert('handleSubmit');
  };
  const handleChange = () => {
    alert('handleChange');
  };

  return (
    <Cards>
      <CenterTitle> Create Account </CenterTitle>
      <form onSubmit={handleSubmit} noValidate>
        <FormItem
          label="First Name"
        />
        <FormItem
          label="Last Name"
        />
        <FormItem
          label="Email"
          subLabel="ex.sedtg@mail.de"
          placeholder="Your email"
        />
        <FormItem
          label="Password"
          subLabel="ex.Nghrt!$%12345"
          placeholder="Your Password"
        />
        <div>
          <SubmitButton>Create Account </SubmitButton>
          <small>Already exist an Account?</small>
        </div>
      </form>
    </Cards>
  );
};

export default RegForm;
