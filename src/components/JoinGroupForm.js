// // JoinGroupForm.js
// import React, { useState } from 'react';
// import {useParams, useNavigate} from 'react-router-dom';

// const states = [
//   "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado",
//   "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois",
//   "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland",
//   "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana",
//   "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York",
//   "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania",
//   "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah",
//   "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
// ];

// const JoinGroupForm = ({ onComplete }) => {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     preferredLanguage: '',
//     userName: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     firstName: '',
//     lastName: '',
//     phone: '',
//     address1: '',
//     address2: '',
//     city: '',
//     state: '',
//     zip: '',
//     dob: '',
//     sex: '',
//     race: '',
//     ethnicity: '',
//     guardianFirstName: '',
//     guardianLastName: '',
//     relationship: '',
//   });

//   const { section } = useParams();
//   const navigate = useNavigate();

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const nextStep = () => setStep(step + 1);
//   const prevStep = () => setStep(step - 1);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (typeof onComplete === 'function'){
//       onComplete(formData);
//     navigate(`/group/${section}`);
//     } else {
//       console.error ('onComplete is not a function');
//     }
    
//   };

//   const steps = [
//     <div key="step1">
//       <h3>Step 1: Preferred Language</h3>
//       <label>Preferred Language:</label>
//       <select
//         name="preferredLanguage"
//         value={formData.preferredLanguage}
//         onChange={handleInputChange}
//       >
//         <option value="">Select Language</option>
//         <option value="English">English</option>
//         <option value="French">French</option>
//         <option value="German">German</option>
//         <option value="Chinese">Chinese</option>
//         <option value="Japanese">Japanese</option>
//         <option value="Korean">Korean</option>
//         <option value="Italian">Italian</option>
//         <option value="Portuguese">Portuguese</option>
//         <option value="Russian">Russian</option>
//         <option value="Arabic">Arabic</option>
//         <option value="Hindi">Hindi</option>
//         <option value="Bengali">Bengali</option>
//         <option value="Urdu">Urdu</option>
//         <option value="Turkish">Turkish</option>
//         <option value="Dutch">Dutch</option>
//         <option value="Greek">Greek</option>
//         <option value="Hebrew">Hebrew</option>
//         <option value="Swedish">Swedish</option>
//         <option value="Danish">Danish</option>
//         <option value="Norwegian">Norwegian</option>
//         <option value="Finnish">Finnish</option>
//         <option value="Polish">Polish</option>
//         <option value="Spanish">Spanish</option>
//         <option value="Czech">Czech</option>
//         <option value="Hungarian">Hungarian</option>
//         <option value="Thai">Thai</option>
//         <option value="Vietnamese">Vietnamese</option>
//         <option value="Indonesian">Indonesian</option>
//         <option value="Malay">Malay</option>
//         <option value="Swahili">Swahili</option>
//         <option value="Romanian">Romanian</option>
//         <option value="Bulgarian">Bulgarian</option>
//         <option value="Ukrainian">Ukrainian</option>
//         <option value="Serbian">Serbian</option>
//         <option value="Croatian">Croatian</option>
//         <option value="Slovak">Slovak</option>
//         <option value="Lithuanian">Lithuanian</option>
//         <option value="Latvian">Latvian</option>
//         <option value="Estonian">Estonian</option>
//         <option value="Malayalam">Malayalam</option>
//         <option value="Tamil">Tamil</option>
//         <option value="Telugu">Telugu</option>
//         <option value="Sinhala">Sinhala</option>
//         <option value="Pashto">Pashto</option>
//       </select>
//       <button type="button" onClick={nextStep}>Next</button>
//     </div>,

// <div key="step2">
// <h3>Step 2: Terms of Service</h3>
// <p>Please agree to the terms of service to continue.</p>
// <button type="button" onClick={nextStep}>Agree</button>
// <button type="button" onClick={prevStep}>Back</button>
// </div>,

// <div key="step3">
// <h3>Step 3: Enter Account Information</h3>
// <label>User Name:</label>
// <input
//   type="text"
//   name="userName"
//   value={formData.userName}
//   onChange={handleInputChange}
// />
// <br />
// <label>Email:</label>
// <input
//   type="email"
//   name="email"
//   value={formData.email}
//   onChange={handleInputChange}
// />
// <br />
// <label>Password:</label>
// <input
//   type="password"
//   name="password"
//   value={formData.password}
//   onChange={handleInputChange}
// />
// <br />
// <label>Confirm Password:</label>
// <input
//   type="password"
//   name="confirmPassword"
//   value={formData.confirmPassword}
//   onChange={handleInputChange}
// />
// <br />
// <button type="button" onClick={prevStep}>Back</button>
// <button type="button" onClick={nextStep}>Next</button>
// </div>,

// <div key="step4">
// <h3>Step 4: Tell Us Who You Are</h3>
// <label>First Name:</label>
// <input
//   type="text"
//   name="firstName"
//   value={formData.firstName}
//   onChange={handleInputChange}
// />
// <br />
// <label>Last Name:</label>
// <input
//   type="text"
//   name="lastName"
//   value={formData.lastName}
//   onChange={handleInputChange}
// />
// <br />
// <label>Phone:</label>
// <input
//   type="text"
//   name="phone"
//   value={formData.phone}
//   onChange={handleInputChange}
// />
// <br />
// <label>Address Line 1:</label>
// <input
//   type="text"
//   name="address1"
//   value={formData.address1}
//   onChange={handleInputChange}
// />
// <br />
// <label>Address Line 2:</label>
// <input
//   type="text"
//   name="address2"
//   value={formData.address2}
//   onChange={handleInputChange}
// />
// <br />
// <label>City:</label>
// <input
//   type="text"
//   name="city"
//   value={formData.city}
//   onChange={handleInputChange}
// />
// <br />
// <label>State:</label>
// <select
//   name="state"
//   value={formData.state}
//   onChange={handleInputChange}
// >
//   <option value="">Select State</option>
//   {states.map((state) => (
//     <option key={state} value={state}>{state}</option>
//   ))}
// </select>
// <br />
// <label>Zip Code:</label>
// <input
//   type="text"
//   name="zip"
//   value={formData.zip}
//   onChange={handleInputChange}
// />
// <br />
// <label>Date of Birth:</label>
// <input
//   type="date"
//   name="dob"
//   value={formData.dob}
//   onChange={handleInputChange}
// />
// <br />
// <label>Sex:</label>
// <select
//   name="sex"
//   value={formData.sex}
//   onChange={handleInputChange}
// >
//   <option value="">Please Select</option>
//   <option value="male">Male</option>
//   <option value="female">Female</option>
//   <option value="other">Other</option>
// </select>
// <br />
// {/* Add other fields as needed */}
// <button type="button" onClick={prevStep}>Back</button>
// <button type="button" onClick={nextStep}>Next</button>
// </div>,

// <div key="step5">
//     <h3>Step 5: Confirm Details</h3>
//     <p>Please review your details and confirm.</p>
//     <div>
//       <h4>Account Information</h4>
//       <p><strong>User Name:</strong> {formData.userName}</p>
//       <p><strong>Email:</strong> {formData.email}</p>
//       <h4>Personal Information</h4>
//       <p><strong>First Name:</strong> {formData.firstName}</p>
//       <p><strong>Last Name:</strong> {formData.lastName}</p>
//       <p><strong>Phone:</strong> {formData.phone}</p>
//       <p><strong>Address Line 1:</strong> {formData.address1}</p>
//       <p><strong>Address Line 2:</strong> {formData.address2}</p>
//       <p><strong>City:</strong> {formData.city}</p>
//       <p><strong>State:</strong> {formData.state}</p>
//       <p><strong>Zip Code:</strong> {formData.zip}</p>
//       <p><strong>Date of Birth:</strong> {formData.dob}</p>
//       <p><strong>Sex:</strong> {formData.sex}</p>
//       {/* Add more fields as needed */}
//     </div>
//     <button type="button" onClick={prevStep}>Back</button>
//     <button type="submit" onClick={handleSubmit}>Confirm</button>
//   </div>
// ];

// return (
// <form>
// {steps[step - 1]}
// </form>
// );
// };

// export default JoinGroupForm;