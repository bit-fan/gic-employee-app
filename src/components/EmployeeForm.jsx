import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Col, Row } from './Fragments';
import { FieldRules } from '../config/const';
import { FormLabel, FormButton, FormError, FormInput } from './FormFragment';
import { useNavigationConfirmation } from '../hooks/useNavigationConfirmation';

export default function EmployeeForm({ defaultValues = {}, onSubmit }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty },
  } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    defaultValues,
  });
  useNavigationConfirmation(
    isDirty,
    'Are yodddu sure you want to leave? Unsaved changes will be lost.'
  );
  //   const navigate = useNavigate();

  const dob = watch('dob');
  // const joinedDate = watch('joinedDate');

  const handleFormSubmit = (data) => {
    onSubmit(data);
    // navigate('/');
  };

  console.log('errors', errors);

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className=''>
      <Row>
        <Col>
          <FormLabel>First Name</FormLabel>
          <FormInput
            key={register}
            {...register('firstName', {
              ...FieldRules.firstName,
            })}
            error={errors.firstName}
            placeholder='First Name'
            data-testid='first-name'
          />
          <FormError data={errors.firstName} />
        </Col>
        <Col>
          <FormLabel>Last Name</FormLabel>
          <FormInput
            {...register('lastName', {
              ...FieldRules.lastName,
            })}
            error={errors.lastName}
            placeholder='Last Name'
            data-testid='last-name'
          />
          <FormError data={errors.lastName} />
        </Col>
      </Row>
      <Row>
        <Col>
          <FormLabel>Email</FormLabel>
          <FormInput
            {...register('email', {
              ...FieldRules.email,
            })}
            error={errors.email}
            placeholder='Email'
            data-testid='email'
          />
          <FormError data={errors.email} />
        </Col>

        <Col>
          <FormLabel>Phone</FormLabel>
          <FormInput
            {...register('phone', {
              ...FieldRules.phone,
            })}
            error={errors.phone}
            placeholder='Phone Number'
            data-testid='phone'
          />
          <FormError data={errors.phone} />
        </Col>
      </Row>
      <Row>
        <Col>
          <FormLabel>Gender</FormLabel>
          <div className='flex flex-row gap-4'>
            <label className='flex items-center justify-center'>
              <input
                type='radio'
                value='M'
                {...register('gender', { ...FieldRules.gender })}
                data-testid='gender-male'
              />
              &nbsp;Male
            </label>
            <label className='flex items-center justify-center'>
              <input
                type='radio'
                value='F'
                {...register('gender', { ...FieldRules.gender })}
                data-testid='gender-female'
              />
              &nbsp;Female
            </label>
          </div>
          <FormError data={errors.gender} />
        </Col>
      </Row>
      <Row>
        <Col>
          <FormLabel>Date of Birth</FormLabel>
          <FormInput
            type='date'
            {...register('dob', { ...FieldRules.dob })}
            error={errors.dob}
            data-testid='dob'
          />
          <FormError data={errors.dob} />
        </Col>
        <Col>
          <FormLabel>Joined Date</FormLabel>
          <FormInput
            type='date'
            {...register('joinedDate', {
              validate: (value) => {
                if (new Date(value) < new Date(dob)) {
                  return 'Joined Date must be after Date of Birth';
                }
              },
            })}
            error={errors.joinedDate}
            data-testid='joined-date'
          />
          <FormError data={errors.joinedDate} />
        </Col>
      </Row>
      <FormButton type='submit' data-testid='submit-button'>
        Submit
      </FormButton>
    </form>
  );
}
