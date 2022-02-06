import './App.css';
import React from 'react';

import { useMetaMask } from 'metamask-react';

function App() {
  const { status, connect, ethereum } = useMetaMask();

  console.log(status);

  if (status === "connected") {
    const transactionParameters = {
      to: '0x0000000000000000000000000000000000000000',
      from: ethereum.selectedAddress,
    };

    ethereum.request({
      method: 'eth_sendTransaction',
      params: [transactionParameters],
    });
  }

  return (
    <div className="App">
      <header style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="App-header">
        <p>Status: {status}</p>
        <div
          onClick={connect}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            color: 'black',
            cursor: 'pointer',
          }}
        >
          <p style={{ margin: 25 }}>Connect</p>
        </div>
      </header>
    </div>
  );
}

export default App;
