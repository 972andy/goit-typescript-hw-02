import css from './SearchBar.module.css';
import toast from 'react-hot-toast';
import { FC, FormEvent } from 'react';
import { SearchBarProps } from '../types';

const SearchBar: FC<SearchBarProps> = ({ setValue, resetSubmit }) => {
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const inputValue = (evt.target as HTMLFormElement).elements.namedItem(
      'input'
    ) as HTMLInputElement;
    const value = inputValue.value.trim();
    if (!value) {
      toast.error('Empty input field please enter data', {
        position: 'top-center',
        duration: 2000,
      });
    } else {
      resetSubmit();
      setValue(value);
      (evt.target as HTMLFormElement).reset();
    }
  };

  return (
    <header className={css.formInputFieldContainer}>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          name="input"
          autoComplete="off"
          autoFocus
          placeholder="Search photos"
          className={css.formInput}
        />
        <button type="submit" className={css.button}>
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;

