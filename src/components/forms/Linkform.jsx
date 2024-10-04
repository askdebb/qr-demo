import { useState } from 'react';
import PropTypes from 'prop-types';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import '../QRInterface/QR-Interface.css';


const theme = createTheme({
  typography: {
    fontFamily: '"Sen", sans-serif',
  },
  components: {
    MuiFilledInput: {
      styleOverrides: {
        root: {
          borderColor: 'black',
          '&:hover': {
            borderColor: 'black',
          },
          '&.Mui-focused': {
            borderColor: 'black',
            backgroundColor: '#e8e8e8',
          },
        },
      },
    },
  },
});

const LinkForm = ({ linkContent }) => {
  const [formInfo, setFormInfo] = useState({
    url: '',
    description: '',
    imageUrl: '',
  });
  const [uploadType, setUploadType] = useState('file'); // Control whether file or URL is used

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInfo({
      ...formInfo,
      [name]: value,
    });
    linkContent({ ...formInfo, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormInfo({
        ...formInfo,
        imageUrl,
      });
      linkContent({ ...formInfo, imageUrl });
    }
  };

  const handleUploadTypeChange = (e) => {
    setUploadType(e.target.value);
    // Clear image URL when switching between file and URL input
    setFormInfo({ ...formInfo, imageUrl: '' });
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        className='link-form'
        component="form"
        noValidate
        autoComplete="off"
      >
        <TextField
          id="link-field"
          label="URL"
          variant="filled"
          color="primary"
          type="text"
          name="url"
          placeholder="https://example.com"
          size="30"
          value={formInfo.url}
          onChange={handleChange}
          required
        />
        <br />
        <TextField
          id="description-field"
          label="Description"
          variant="filled"
          color="primary"
          multiline
          rows={2}
          placeholder="Enter your text here..."
          name="description"
          value={formInfo.description}
          onChange={handleChange}
          required
        />
        <br />
        <RadioGroup
          value={uploadType}
          onChange={handleUploadTypeChange}
          row
        >
          <FormControlLabel value="file" control={<Radio />} label="Upload Image File" />
          <FormControlLabel value="url" control={<Radio />} label="Enter Image URL" />
        </RadioGroup>

        {uploadType === 'file' ? (
          <div>
            <input
              type="file"
              name="imageUrl"
              onChange={handleFileChange}
              accept="image/*"
            />
          </div>
        ) : (
          <TextField
            id="image-url-field"
            label="Image URL"
            variant="filled"
            color="primary"
            type="url"
            name="imageUrl"
            placeholder="https://example.com/image.jpg"
            value={formInfo.imageUrl}
            onChange={handleChange}
            required
          />
        )}
      </Box>
    </ThemeProvider>
  );
};

LinkForm.propTypes = {
  linkContent: PropTypes.func.isRequired,
};

export default LinkForm;
