import FormWrapper from "./FormWrapper";

type AddressDataProps = {
  street: string;
  city: string;
  state: string;
  zip: string;
  updateInputs: (updatedData: Partial<AddressDataProps>) => void;
};

export const Address = ({ street, city, state, zip, updateInputs }: AddressDataProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { title, value } = e.target;
    updateInputs({ [title]: value });
  };

  return (
    <FormWrapper title="Address">
      <label>Street</label>
      <input
        autoFocus
        required
        type="text"
        title="street"
        value={street}
        onChange={handleChange}
      />
      <label>City</label>
      <input required type="text" title="city" value={city} onChange={handleChange} />
      <label>State</label>
      <input required type="text" title="state" value={state} onChange={handleChange} />
      <label>Zip</label>
      <input required type="text" title="zip" value={zip} onChange={handleChange} />
    </FormWrapper>
  );
};
