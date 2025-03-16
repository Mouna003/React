import { useState } from "react";

const FormComponent = () => {
  // State to store form input values
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form>
      <label>First Name</label>
      <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />

      <label>Last Name</label>
      <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />

      <label>Email</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} />

      <label>Password</label>
      <input type="password" name="password" value={formData.password} onChange={handleChange} />

      <label>Confirm Password</label>
      <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />

      <button type="submit">Create User</button>
    </form>
  );
};

export default FormComponent;
