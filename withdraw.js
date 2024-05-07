function Withdraw(){
  const ctx = React.useContext(UserContext);
  return (
    <>
    <h1>Withdraw</h1>
    {JSON.stringify(ctx)}<br/>
    </>
  );
}

// function Withdraw() {
//   const [withdraw, setWithdraw] = React.useState("");
  
//   function handleWithdraw = (amount) => {
//     if (parseFloat(amount) > balance) {
//       alert("You don't have enough balance to withdraw this amount");
//       return false;
//     }
    
//     setBalance(balance - parseFloat(amount));
//     setTransactions([
//       ...transactions,
//       { type: "Withdraw", amount: amount, id: transactions.length + 1, timestamp: new Date()},
//     ]);
//     alert("Withdraw successful!");
//   };

//   function onWithdrawClick() {
//     if (withdraw === "" || withdraw <= 0) {
//       alert("Please enter positive value");
//       return;
//     }
//     handleWithdraw(withdraw);
//     setWithdraw("");
//   }

//   if (!authenticated) {
//     return <Navigate to="/log-in" />;
//   }

//   function onWithdrawChange(e) {
//     if (!validateNumber(e.target.value)) {
//       alert("Please enter a valid number");
//       return;
//     }
//     setWithdraw(e.target.value);
//   }

//   if (!authenticated) {
//     return <Navigate to="/log-in" />;
//   }

//   return (
//     <div className="container mt-5">
//       <HorizontalBalanceCard />
//       <div className="row flex-wrap align-items-center justify-content-center">
//         <div className="col-sm-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
//           <Card
//             bgcolor="danger"
//             header="WITHDRAW"
//             status=""
//             text="Withdraw money from your account"
//             body={
//               <>
//                 <div className="mb-3">
//                   <label htmlFor="deposit" className="form-label">
//                     Amount
//                   </label>

//                   <input
//                     type="number"
//                     className="form-control"
//                     id="deposit"
//                     placeholder="Enter deposit amount"
//                     value={withdraw}
//                     onChange={onWithdrawChange}
//                   />
//                 </div>

//                 <button
//                   type="submit"
//                   className="btn btn-light"
//                   onClick={onWithdrawClick}
//                   disabled={withdraw === ""}
//                 >
//                   Withdraw
//                 </button>
//               </>
//             }
//           />
//         </div>
//       </div>
//     </div>
//   );
// }



// function Withdraw() {
//   const [withdrawAmount, setWithdrawAmount] = useState('');
//   const [status, setStatus] = useState('');
//   const ctx = useContext(UserContext);
  
  
//   function handleWithdraw = () => {
//     const withdrawValue = parseFloat(withdrawAmount);

//     if (isNaN(withdrawValue)) {
//       setStatus('Error: Please enter a valid number for withdrawal.');
//       return;
//     }

//     if (withdrawValue < 0) {
//       setStatus('Error: Withdrawal amount cannot be negative.');
//       return;
//     }

//     if (withdrawValue > ctx.users[0].balance) 
//       setStatus('Error: Withdrawal amount exceeds account balance.');
//       return;
//     }

//     const newBalance = ctx.users[0].balance - withdrawValue; // Calculate new balance

//     // Update balance
//     ctx.users[0].balance = newBalance;

//     // Reset withdraw field
//     setWithdrawAmount('');

//     // Display success message
//     setStatus(`Success: ${withdrawValue} withdrawn successfully.`);
//   };

//   return (
//     <Card
//       bgcolor="primary"
//       header="Withdraw"
//       status={status}
//       body={(
//         <>
//           <p>Balance: {ctx.users[0].balance}</p> 
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Enter withdrawal amount"
//             value={withdrawAmount}
//             onChange={(e) => setWithdrawAmount(e.target.value)}
//           />
//           <button
//             className="btn btn-primary mt-2"
//             onClick={handleWithdraw}
//             disabled={!withdrawAmount}
//           >
//             Withdraw
//           </button>
//         </>
//       )}
//     />
//   );
// }

// export default Withdraw;

