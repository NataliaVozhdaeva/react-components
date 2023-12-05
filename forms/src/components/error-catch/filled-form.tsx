import { RootState } from '../../store/hookForm-slice';
import { useSelector } from 'react-redux';

const FilledForm = () => {
  const name = useSelector((state: RootState) => state.dataHook.name);
  const email = useSelector((state: RootState) => state.dataHook.email);
  const country = useSelector((state: RootState) => state.dataHook.country);

  return (
    <>
      <div className="field">Name: {name}</div>
      <div className="field">E-mail: {email}</div>
      <div className="field">Country: {country}</div>
    </>
  );
};

export { FilledForm };
