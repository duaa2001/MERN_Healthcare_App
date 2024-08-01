// // this is terms of service agreement form required to be accepted by user before joining the group.
// import React from 'react';

// const TermsOfService = ({ nextStep, prevStep }) => {
//   const [agreed, setAgreed] = React.useState(false);

//   const handleAgreeChange = (e) => setAgreed(e.target.checked);

//   return (
//     <div>
//       <h2>Terms of Service</h2>
//       <p>Terms of service content goes here.</p>
//       <form>
//         <label>
//           <input
//             type="checkbox"
//             checked={agreed}
//             onChange={handleAgreeChange}
//           />
//           I agree to the terms of service
//         </label>
//         <button type="button" onClick={prevStep}>Back</button>
//         <button
//           type="button"
//           onClick={() => agreed && nextStep()}
//           disabled={!agreed}
//         >
//           Next
//         </button>
//       </form>
//     </div>
//   );
// };

// export default TermsOfService;
