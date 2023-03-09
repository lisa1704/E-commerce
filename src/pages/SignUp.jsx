import { useState } from "react";
import { Link } from "react-router-dom";

function SignUp() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Phone:${phoneNumber}, Password: ${password}`);
  };
  const validatePhoneNumber = (phoneNumber) => {
    const re = /^(?:\+88|01)?(?:\d{11}|\d{13})$/;
    return re.test(String(phoneNumber).toLowerCase());
  };
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
        <form onSubmit={handleSubmit}>
        <div className="mb-4">
            <label htmlFor="phone-number" className="block text-gray-700 font-bold mb-2">Phone Number</label>
            <input
              id="phone-number"
              type="text"
              value={phoneNumber}
              onChange={(event) => setPhoneNumber(event.target.value)}
              placeholder="Enter your phone number"
              className={`border border-gray-400 p-2 w-full rounded-md ${validatePhoneNumber(phoneNumber) ? 'border-green-500' : 'border-red-500'}`}
              required
            />
            {!validatePhoneNumber(phoneNumber) && <p className="text-red-500 mt-2">Please enter a valid Bangladeshi phone number</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter your password"
              className="border border-gray-400 p-2 w-full rounded-md"
              required
            />
          </div>
          <div className= "space-y-2">
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Sign Up</button>
          <p>Already have an account? Then sign in</p>
          <button type="submit" className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-blue-600"><Link to="login">Log In</Link></button></div>
          
        </form>
      </div>
    </div>
  );
}

export default SignUp;
