import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import {IFormFields} from '../intefaces';
import {
  RootState,
  updateAge,
  updateCountries,
  updateCountry,
  updateEmail,
  updateName,
  updatePassword,
  updatePasswordDub
} from '../store/hookForm-slice';

const WithReactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<IFormFields>({mode: 'onChange'});

  const onSubmit: SubmitHandler<IFormFields> = (data) => {
    dispatch(updateName(data.name))
    dispatch(updateAge(data.age))
    dispatch(updateEmail(data.email))
    dispatch(updatePassword(data.password))
    dispatch(updatePasswordDub(data.passwordCheck))
    dispatch(updateCountry(data.country))
    reset()
  };

  const dispatch = useDispatch();
  let countries = useSelector((state: RootState) => state.dataHook.countries);
  const country = useSelector((state: RootState) => state.dataHook.country);


  const [isHiddenListCountries, setIsHiddenListCountries] = useState(true)

  const onClickCountry = () => {
    setIsHiddenListCountries(false)
  }

  const onSelectCountry = (selectedCountry: string) => {
    dispatch(updateCountry(selectedCountry));
    setIsHiddenListCountries(true)
  }

  const onChangeCountry = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    dispatch(updateCountry(value))
    countries = countries

    const filteredCountries = countries.filter((country) =>
      country.toLowerCase().startsWith(value.toLowerCase()),
    )
    dispatch(updateCountries(filteredCountries))
  }

  return (
    <div className="main-wrapper">
      <h2 className="title">With React-Hook-Form</h2>
      <form action="" onSubmit={handleSubmit(onSubmit)} className='form'>
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

        <label htmlFor="country" className="field-container">
          {' '}
          Country
          <input
            {...register('country')}
            name="country"
            id="country"
            className="input"  
            value={country}
            onInput={onChangeCountry}
            onClick={onClickCountry}
            />
              
        </label> 
        <ul
            className={`item-country ${isHiddenListCountries ? 'hidden' : ''}`}
          >
            {countries.map((country) => (
              <li
                className="country"
                key={country}
                onClick={() => onSelectCountry(country)}
              >
                {country}
                </li>
            ))}
          </ul>
        <button type="submit" className="btn" >
          Submit
        </button>
      </form>
    </div>
  );
};

export { WithReactForm };
