import FormWrapper from "./FormWrapper";

type UserFormProps = {
  firstName: string;
  lastName: string;
  age: string;
  updateInputs: (updatedData: Partial<UserFormProps>) => void;
};

const UserForm = ({ firstName, lastName, age, updateInputs }: UserFormProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { title, value } = e.target;
    updateInputs({ [title]: value });
  };

  return (
    <FormWrapper title="User Details">
      <label>First Name</label>
      <input
        autoFocus
        required
        type="text"
        title="firstName"
        value={firstName}
        onChange={handleChange}
      />
      <label>Last Name</label>
      <input
        required
        type="text"
        title="lastName"
        value={lastName}
        onChange={handleChange}
      />
      <label>Age</label>
      <input
        required
        type="number"
        min={1}
        title="age"
        value={age}
        onChange={handleChange}
      />
    </FormWrapper>
  );
};

export default UserForm;
