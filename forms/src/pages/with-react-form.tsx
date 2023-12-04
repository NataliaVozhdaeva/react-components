import { SubmitHandler, useForm } from 'react-hook-form';
import IFormFields from '../intefaces';

const WithReactForm = () => {
  const { register, handleSubmit } = useForm<IFormFields>();
  const onSubmit: SubmitHandler<IFormFields> = (data) => {
    console.log(data.name, data.age, data.checkbox);
  };

  return (
    <div className="main-wrapper">
      <h2 className="title">With React-Hook-Form</h2>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...(register('name'), { required: true })}
          type="text"
          name="name"
          id="name"
          className="input"
        />
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export { WithReactForm };
