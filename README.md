# Paytm Clone Project

This project is a clone of the Paytm application, built with a frontend and backend to simulate basic functionalities like viewing users and transferring money between accounts. Note that the balance of the user is generated randomly for demonstration purposes.

## Features

- **View Users:** List of all users registered in the application.
- **Transfer Money:** Users can transfer money from their account to another user's account.
- **Random Balance Generation:** User balances are generated randomly using `Math.random` to simulate different account balances.

## Tech Stack

- **Frontend:** React
- **Backend:** Express, MongoDB

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/TusharDubey07/Paytm-.git
    cd Paytm-
    ```

2. **Install dependencies for both frontend and backend:**

    ```bash
    # For backend
    cd backend
    npm install

    # For frontend
    cd ../frontend
    npm install
    ```

3. **Run the project:**

    ```bash
    # Start backend server
    cd backend
    npm start

    # Start frontend server
    cd ../frontend
    npm start
    ```

4. **Open the application in your browser:**

    The backend will be running on `http://localhost:3000`.
    The frontend will be running on `http://localhost:5127`.

## Usage

1. **Viewing Users:** Navigate to the "Users" section to see a list of all registered users.
2. **Transferring Money:** Select a user and initiate a transfer to another user by providing the necessary details.
3. **Random Balance:** The balance for each user is generated randomly to simulate different account scenarios.

## Future Enhancements

- Implement actual balance tracking in the backend.
- Add user authentication and authorization.
- Integrate a secure payment gateway.
- Improve the user interface for better experience.

## Contributing

Contributions are welcome! Please fork this repository and open a pull request to suggest improvements or add new features.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any queries, please reach out to [Tushar Dubey](https://github.com/TusharDubey07).

