function Deposit(){
  const ctx = React.useContext(UserContext);
  return (
    <>
    <h1>Deposit</h1>
    {JSON.stringify(ctx)}<br/>
    </>
  );
}

