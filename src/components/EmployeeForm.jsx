import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Col, FormButton, FormError, FormLabel, Row } from './Fragments';
import { FieldRules } from '../config/const';

export default function EmployeeForm({ defaultValues = {}, onSubmit }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty },
  } = useForm({
    defaultValues,
  });
  const navigate = useNavigate();

  const dob = watch('dob');
  const joinedDate = watch('joinedDate');

  const handleFormSubmit = (data) => {
    console.log('here', data);

    onSubmit(data);
    navigate('/');
  };

  console.log('errors', errors);

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className='p-3'>
      <Row>
        <Col>
          <FormLabel>First Name</FormLabel>
          <input
            {...register('firstName', {
              ...FieldRules.firstName,
            })}
            placeholder='First Name'
          />
          <FormError data={errors.firstName} />
        </Col>
        <Col>
          <FormLabel>Last Name</FormLabel>
          <input
            {...register('lastName', {
              ...FieldRules.lastName,
            })}
            placeholder='Last Name'
          />
          <FormError data={errors.lastName} />
        </Col>
      </Row>
      <Row>
        <Col>
          <FormLabel>Email</FormLabel>
          <input
            {...register('email', {
              ...FieldRules.email,
            })}
            placeholder='Email'
          />
          <FormError data={errors.email} />
        </Col>

        <Col>
          <FormLabel>Phone</FormLabel>
          <input
            {...register('phone', {
              ...FieldRules.phone,
            })}
            placeholder='Phone Number'
          />
          <FormError data={errors.phone} />
        </Col>
      </Row>
      <Row>
        <Col>
          <FormLabel>Gender</FormLabel>
          <div className='flex flex-row gap-4'>
            <label>
              <input
                type='radio'
                value='M'
                {...register('gender', { ...FieldRules.gender })}
              />
              Male
            </label>
            <label>
              <input
                type='radio'
                value='F'
                {...register('gender', { ...FieldRules.gender })}
              />
              Female
            </label>
          </div>
          <FormError data={errors.gender} />
        </Col>
      </Row>
      <Row>
        <Col>
          <FormLabel>Date of Birth</FormLabel>
          <input type='date' {...register('dob', { ...FieldRules.dob })} />
          <FormError data={errors.dob} />
        </Col>
        <Col>
          <FormLabel>Joined Date</FormLabel>
          <input
            type='date'
            {...register('joinedDate', {
              validate: (value) => {
                if (new Date(value) < new Date(dob)) {
                  return 'Joined Date must be after DOB';
                }
              },
            })}
          />
          <FormError data={errors.joinedDate} />
        </Col>
      </Row>{' '}
      <FormButton type='submit'>Submit</FormButton>
    </form>
  );
}
