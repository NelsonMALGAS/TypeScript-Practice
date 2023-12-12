import FormWrapper from "./FormWrapper";

type AccountDataProps = {
  email: string;
  password: string;
  updateInputs: (updatedData: Partial<AccountDataProps>) => void;
};

const AccountForm = ({ email, password, updateInputs }: AccountDataProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { title, value } = e.target;
    updateInputs({ [title]: value });
  };

  return (
    <FormWrapper title="Account Details">
      <label>Email</label>
      <input
        autoFocus
        required
        type="email"
        title="email"
        value={email}
        onChange={handleChange}
      />
      <label>Password</label>
      <input
        required
        type="password"
        title="password"
        value={password}
        onChange={handleChange}
      />
    </FormWrapper>
  );
};

export default AccountForm;
