import PropTypes from 'prop-types';
import { FilterInput, FilterText } from './Filter.styled';

export const Filter = ({ onChangeFilter, value }) => {
  return (
    <div>
      <FilterText>Find contacts by name</FilterText>
      <FilterInput
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        value={value}
        onChange={onChangeFilter}
        required
      />
    </div>
  );
};

Filter.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
