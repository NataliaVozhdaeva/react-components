import { SubmitHandler, useForm } from 'react-hook-form';
import IFormFields from '../intefaces';

const WithReactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormFields>();
  const onSubmit: SubmitHandler<IFormFields> = (data) => {
    console.log(data.name, data.age, data.checkbox);
  };

  return (
    <div className="main-wrapper">
      <h2 className="title">With React-Hook-Form</h2>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name" className="field-container">
          {' '}
          Name
          <input
            {...register('name', {
              required: 'Name is required',
              pattern: {
                message: 'Name should start from the capital letter',
                value: /^[A-Z]{1}[a-z]*$/,
              },
            })}
            type="text"
            name="name"
            id="name"
            className="input"
          />
          {errors?.name && <div className="error">{errors.name.message}</div>}
        </label>

        <label htmlFor="email" className="field-container">
          {' '}
          E-mail
          <input
            {...register('email', {
              pattern: {
                message: 'Please, enter a valid email',
                value:
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              },
            })}
            type="text"
            name="email"
            id="email"
            className="input"
          />
          {errors?.email && <div className="error">{errors.email.message}</div>}
        </label>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export { WithReactForm };
