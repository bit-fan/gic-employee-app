import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Col, FormButton, FormLabel, Row } from './Fragments';

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

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className='p-3'>
      <Row>
        <Col>
          <FormLabel>First Name</FormLabel>
          <input
            {...register('firstName', { minLength: 6, maxLength: 10 })}
            placeholder='First Name'
          />
          {errors.firstName && <p>First name must be 6-10 characters</p>}
        </Col>
        <Col>
          <FormLabel>Last Name</FormLabel>
          <input
            {...register('lastName', { minLength: 6, maxLength: 10 })}
            placeholder='Last Name'
          />
          {errors.lastName && <p>Last name must be 6-10 characters</p>}
        </Col>
      </Row>
      <Row>
        <Col>
          <FormLabel>Email</FormLabel>
          <input
            {...register('email', {
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            })}
            placeholder='Email'
          />
          {errors.email && <p>Invalid email format</p>}
        </Col>

        <Col>
          <FormLabel>Phone</FormLabel>
          <input
            {...register('phone', {
              pattern: /^(\+65)?[689]\d{7}$/,
            })}
            placeholder='Phone Number'
          />
          {errors.phone && <p>Invalid SG phone number</p>}
        </Col>
      </Row>
      <Row>
        <Col>
          <FormLabel>Gender</FormLabel>
          <div className='flex flex-row gap-4'>
            <label>
              <input type='radio' value='M' {...register('gender')} />
              Male
            </label>
            <label>
              <input type='radio' value='F' {...register('gender')} />
              Female
            </label>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <FormLabel>Date of Birth</FormLabel>
          <input type='date' {...register('dob')} />
        </Col>
        <Col>
          <FormLabel>Joined Date</FormLabel>
          <input
            type='date'
            {...register('joinedDate', {
              validate: (value) => new Date(value) > new Date(dob),
            })}
          />
          {errors.joinedDate && <p>Joined Date must be after DOB</p>}
        </Col>
      </Row>{' '}
      <FormButton type='submit'>Submit</FormButton>
    </form>
  );
}
