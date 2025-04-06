import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

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
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <input
        {...register('firstName', { minLength: 6, maxLength: 10 })}
        placeholder='First Name'
      />
      {errors.firstName && <p>First name must be 6-10 characters</p>}

      <input
        {...register('lastName', { minLength: 6, maxLength: 10 })}
        placeholder='Last Name'
      />
      {errors.lastName && <p>Last name must be 6-10 characters</p>}

      <input
        {...register('email', {
          pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        })}
        placeholder='Email'
      />
      {errors.email && <p>Invalid email format</p>}

      <input
        {...register('phone', {
          pattern: /^(\+65)?[689]\d{7}$/,
        })}
        placeholder='Phone Number'
      />
      {errors.phone && <p>Invalid SG phone number</p>}

      <div>
        <label>
          <input type='radio' value='Male' {...register('gender')} />
          Male
        </label>
        <label>
          <input type='radio' value='Female' {...register('gender')} />
          Female
        </label>
      </div>

      <input type='date' {...register('dob')} />
      <input
        type='date'
        {...register('joinedDate', {
          validate: (value) => new Date(value) > new Date(dob),
        })}
      />
      {errors.joinedDate && <p>Joined Date must be after DOB</p>}

      <button type='submit'>Submit</button>
    </form>
  );
}
