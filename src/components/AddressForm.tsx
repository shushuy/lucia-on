import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';

const AddressForm = () => {
  // State to manage the checkbox state and address input
  const [isAddressEnabled, setIsAddressEnabled] = useState(false);
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const handleCheckboxChange = (event: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
    setIsAddressEnabled(event.target.checked);
  };

  const handleAddressChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setAddress(event.target.value);
  };

  const handlePhoneChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setPhone(event.target.value);
  };

  return (
    <div>
      <div>
        <label>
          <Checkbox
            checked={isAddressEnabled}
            onChange={handleCheckboxChange}
            color="primary"
            />
          Habilitar dirección de envío
        </label>
      </div>

      {isAddressEnabled && (
        <>
        <h2>Dirección de Envío</h2>
        <div>
          <TextField
            label="Dirección"
            variant="outlined"
            fullWidth
            value={address}
            onChange={handleAddressChange}
          />
        </div>
        <div>
          <TextField
            label="Telefono de contact"
            variant="outlined"
            fullWidth
            value={phone}
            onChange={handlePhoneChange}
          />
        </div>
        </>
      )}
    </div>
  );
};

export default AddressForm;
