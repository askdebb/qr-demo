import PropTypes from 'prop-types';
import LinkForm from '../forms/Linkform';
import CallForm from '../forms/CallForm';

const CategoryField = ({ selectedCategory, onContentCreate }) => {
  const renderForm = () => {
    switch (selectedCategory?.label) {
      case 'Link':
        return <LinkForm linkContent={onContentCreate} />;
      case 'Call':
        return <CallForm />;
      default:
        return <p style={{ color: "#727070" }} className='px-5'>Select a category to fill the form.</p>;
    }
  };

  return (
    <div className="bg-white shadow-lg p-3 qr-interface-item">
      <h3 className='px-3'>{selectedCategory?.label}</h3>
      {renderForm()}
    </div>
  );
};

CategoryField.propTypes = {
  selectedCategory: PropTypes.shape({
    label: PropTypes.string.isRequired,
  }),
  onContentCreate: PropTypes.func.isRequired,
};

export default CategoryField;
