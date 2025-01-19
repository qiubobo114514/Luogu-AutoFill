# Auto Fill Plugin for 洛谷 (Luogu)

This Chrome extension automatically fills in your username, password, and captcha (if known) on the 洛谷 (Luogu) login page, and clicks the login button for you.

## Features

- **Auto-fill**: Automatically fills in the username and password fields.
- **Captcha**: Automatically fills in the captcha field (if you have manually identified it).
- **Auto-submit**: Clicks the "Login" button after filling in the credentials.
- **Customizable**: You can change the username, password, and captcha in the code.

## Installation

### Step 1: Download or Clone the Repository

Download or clone the repository to your local machine.

### Step 2: Load the Extension in Chrome

1. Open Chrome and go to `chrome://extensions/`.
2. Turn on "Developer mode" in the top right corner.
3. Click "Load unpacked" and select the folder containing the extension files.

### Step 3: Configure Your Credentials

Open the `content.js` file, and modify the following variables with your own credentials:

```javascript
const username = 'your_username';  // Replace with your username
const password = 'your_password';  // Replace with your password
const captcha = 'your_captcha';    // Replace with the captcha (if known)c
```
### Step 4: Use the Extension

1. Navigate to the 洛谷 login page (https://www.luogu.com.cn/).
2. The extension will automatically fill in the login form with your credentials.
3. If you have manually identified the captcha, it will be filled in as well.
4. The "Login" button will be clicked automatically.

## Files

- `manifest.json`: The extension configuration file for Chrome.
- `content.js`: The script that runs on the 洛谷 login page and automatically fills in the form fields.
- `background.js`: The background script for the extension.
- `popup.html`: A basic HTML file for the extension's popup (optional, for UI purposes).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Disclaimer

This extension is designed for personal use. Make sure that you comply with the Terms of Service of the websites you interact with and respect their rules regarding automated logins and usage.

## Issues

If you encounter any issues, feel free to open an issue in the repository.

## Contributing

1. Fork the repository.
2. Create your branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

---

Enjoy easy and quick logins with the Auto Fill Plugin!
