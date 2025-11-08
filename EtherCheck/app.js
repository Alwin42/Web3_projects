// 1. Set up a "provider" to connect to the Ethereum mainnet (read-only)
// We use a default provider from Ethers.js that connects to services 
// like Alchemy and Infura for us.
const rpcUrl = "https://eth-mainnet.g.alchemy.com/v2/YOUR-API-KEY-HERE";
const provider = new ethers.providers.JsonRpcProvider(rpcUrl);

// 2. Get references to our HTML elements
const addressInput = document.getElementById('walletAddress');
const checkButton = document.getElementById('checkButton');
const resultDisplay = document.getElementById('result');

// 3. Set up the button's click event
checkButton.onclick = async () => {
    // Get the address from the input box
    const address = addressInput.value;

    if (!address) {
        resultDisplay.innerText = "Please enter an address.";
        return;
    }

    try {
        // Show a loading message
        resultDisplay.innerText = "Fetching balance...";
        
        // 4. THIS IS THE WEB3 PART:
        // Ask Ethers.js to get the balance for the address
        const balance = await provider.getBalance(address);
        
        // 5. Convert the balance from Wei (a tiny unit) to ETH
        const balanceInEth = ethers.utils.formatEther(balance);

        // Display the result!
        resultDisplay.innerText = `Balance: ${balanceInEth} ETH`;
        
    } catch (error) {
        // Handle errors (like an invalid address)
        console.error(error);
        resultDisplay.innerText = "Error: Invalid address or failed to fetch.";
    }
};