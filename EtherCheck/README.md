# ETH Balance Checker

A lightweight, front-end-only "dApp" that fetches and displays the live ETH balance of any public Ethereum wallet address or ENS name. This project is a simple introduction to web3 development, demonstrating how to read data from the blockchain using Ethers.js and a private RPC.

## 🌟 Features

* **Check by Address:** Enter any `0x...` wallet address to get its balance.
* **Check by ENS:** Supports ENS names (e.g., `vitalik.eth`).
* **Fast & Responsive:** Uses a private Alchemy RPC for fast, reliable lookups.
* **Clean UI:** A simple, modern, and clean user interface.
* **Zero Backend:** Runs entirely in the browser (static site).

## 💻 Tech Stack

* **HTML5**
* **CSS3** (with Google Fonts)
* **JavaScript (ES6+)**
* **Ethers.js** (v5) - For interacting with the Ethereum blockchain.
* **Alchemy** - As the JSON-RPC provider to connect to the network.

## 🚀 Getting Started

Follow these instructions to get a copy of the project running on your local machine.

### Prerequisites

You will need a simple local server to run the project, as browsers restrict `file://` protocols for security. The easiest way is using `http-server` via `npx`.

* [Node.js](https://nodejs.org/) (which includes `npm` and `npx`)

### Installation & Setup

1.  **Clone the Repository**
    ```bash
    git clone [https://github.com/YOUR_USERNAME/YOUR_REPONAME.git](https://github.com/YOUR_USERNAME/YOUR_REPONAME.git)
    cd YOUR_REPONAME
    ```

2.  **Get Your Free Alchemy API Key**
    This project will *not* work without a valid RPC URL.
    * Go to [Alchemy.com](https://www.alchemy.com/) and sign up for a free account.
    * Create a new app on the **Ethereum Mainnet**.
    * Click "View Key" on your app and copy the **HTTPS** URL.

3.  **Update `app.js`**
    Open the `app.js` file and find this line:
    ```javascript
    const rpcUrl = "[https://eth-mainnet.g.alchemy.com/v2/YOUR-API-KEY-HERE](https://eth-mainnet.g.alchemy.com/v2/YOUR-API-KEY-HERE)";
    ```
    Replace `YOUR-API-KEY-HERE` with your actual Alchemy API key.

4.  **Run the Local Server**
    From the root of your project folder (where `index.html` is), run the following command:
    ```bash
    npx http-server .
    ```
    This will start a local server, usually at `http://127.0.0.1:8080`.

5.  **Open Your dApp!**
    Open your browser and navigate to **`http://127.0.0.1:8080`**. You can now use the balance checker.
