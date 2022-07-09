import PropTypes from 'prop-types';
import { DeleteButton, Contact } from './ContactListItem.styled';

export const ContactListItem = ({ id, name, number, onRemoveContact }) => {
  return (
    <Contact>
      {name}: <span>{number}</span>
      <DeleteButton type="button" onClick={() => onRemoveContact(id)}>
        Delete
      </DeleteButton>
    </Contact>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onRemoveContact: PropTypes.func.isRequired,
};
