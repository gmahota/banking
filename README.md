# Banking App

https://www.youtube.com/watch?v=PuOVqP_cjkE&t=8122s

This project is a banking application developed using Next.js 14, based on the tutorial by Adrian Hajdin. The application features a finance management dashboard that connects multiple bank accounts, displays real-time transactions, and allows users to transfer money to other users on the platform.

## Overview

The Banking App provides the following functionalities:

- **Connect Multiple Bank Accounts**: Link and manage various bank accounts in one place.
- **Real-Time Transactions**: View real-time transactions across all linked accounts.
- **Money Transfers**: Transfer money to other users on the platform securely and efficiently.

## Tutorial

This project was created following the tutorial by Adrian Hajdin. You can find the tutorial on [YouTube](https://www.youtube.com/watch?v=PuOVqP_cjkE).

## Features

- **Next.js 14**: Utilizes the latest features of Next.js 14 for server-side rendering, static site generation, and more.
- **Responsive Design**: Optimized for various screen sizes and devices.
- **Secure Authentication**: Implemented secure authentication and authorization for user accounts.
- **Interactive Dashboard**: Provides an interactive dashboard for managing finances.
- **API Integration**: Integrates with banking APIs for real-time data fetching.

## Installation

To get started with the project, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/adrianhajdin/banking.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd banking
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Create a `.env.local` file:**

    Add your environment variables as required. Here is an example:

    ```plaintext
    NEXT_PUBLIC_API_URL=your_api_url_here
    NEXT_PUBLIC_API_KEY=your_api_key_here
    ```

5. **Run the development server:**

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Usage

1. **Sign Up**: Create a new account or log in with your existing account.
2. **Connect Bank Accounts**: Link your bank accounts to the application.
3. **View Transactions**: Monitor real-time transactions from your linked accounts.
4. **Transfer Money**: Send money to other users on the platform.

## Deployment

To deploy the application, you can use platforms like Vercel, Netlify, or any other hosting service that supports Next.js applications. For Vercel, follow these steps:

1. **Install Vercel CLI (if not already installed):**

    ```bash
    npm install -g vercel
    ```

2. **Deploy the application:**

    ```bash
    vercel
    ```

    Follow the instructions in the terminal to complete the deployment.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Adrian Hajdin](https://github.com/adrianhajdin) for the comprehensive tutorial on building this application.
- [YouTube Tutorial](https://www.youtube.com/watch?v=PuOVqP_cjkE) for providing the guidance and resources for this project.
