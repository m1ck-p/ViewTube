# ViewTube - An Extension for Visualizing the Views-to-Likes Ratio of YouTube Videos

## Overview

**ViewTube** is a browser extension designed to display the ratio of a YouTube video's count of 'views' to its amount of 'likes'. All information relevant to this metric is obtained solely/entirely from the video's rendered page itself, and the resulting visualization is equally embedded directly within its interface - thus making **ViewTube** operate /entirely/ without the need for access to personal data, and/or YouTube's (or any other external) APIs.

## Features

- **Data Presentation**: This extension dynamically presents the ratio of view counts to like counts derived directly from the currently viewed video's page. This information is intended to provide users with quick insights into the video's engagement metrics without navigating away from the video itself.
- **Non-intrusive**: Information is retrieved from the rendered webpage of the current video, ensuring the process is unobtrusive and respects user privacy, as well as YouTube's terms of service.
- **No Data Storage**: No video-specific information is stored by this extension, ensuring that each viewing session remains independent and private.
- **User Data Privacy**: This extension does not access, process, or store any user-specific information. The only settings retained pertain to functional preferences, such as the 'on/off state' when activating or deactivating the extension.

## User Privacy and Data Policy

This extension has been designed with a privacy-first approach, ensuring that user data integrity and privacy are preserved. Here's how:

- **No User Data Collection**: This extension does not collect, process, or store any personally identifiable information. All functionality is designed to operate without the need for user data.
- **Functional Data**: The only information retained by **ViewTube** pertains to operational settings (e.g., whether the extension is activated or deactivated), which are essential for user preferences and do not involve any personal or sensitive data.
- **No External Data Retrieval**: Since this extension does not utilize YouTube's or any external APIs, it operates independently of any data collection frameworks.

## Installation and Usage

### Prerequisites
- Make sure you are using Google Chrome as your browser.
- Ensure that your Chrome browser is up to date to avoid any compatibility issues.
- Also, note that this extension is designed and intended for desktop view. 

### Installation
**ViewTube** is currently not available on the Chrome Web Store, so it needs to be installed manually. Follow these steps to install the extension:

1. **Download the Extension**:
   - Navigate to the GitHub repository where the extension is hosted (which is probably where you are at right now).
   - Download the latest release from the releases section.
   - Extract the downloaded ZIP file to a folder on your computer. Remember the location of this folder, as you will need to access it again during the installation process.

2. **Load the Extension in Chrome**:
   - Open Google Chrome.
   - Click on the three dots in the upper right corner to open the menu.
   - Go to `More tools > Extensions` to open the Extensions page. Alternatively, you can type `chrome://extensions/` in the address bar and press Enter.
   - Enable 'Developer mode' at the top right corner of the Extensions page.
   - Click on `Load unpacked` button.
   - Navigate to the folder where you extracted the ZIP file.
   - Select the folder and click 'Select Folder'. Chrome will now install the extension.

### Usage
After installation, **ViewTube** will require you to toggle it on to enable it. After that, it will automatically start functioning whenever you watch YouTube videos, until you toggle it off again. Here’s additional information on how to use it:

- **Viewing the Ratio**:
  - Open any YouTube video.
  - Look for the **ViewTube** interface, which will display the views-to-likes ratio. This will typically appear near the like and dislike buttons.
  
- **Enabling/Disabling the Extension via Chrome's Extension Settings**:
  - If you wish to disable the extension temporarily, go to `chrome://extensions/` and find **ViewTube**.
  - Toggle the extension off to disable it, or back on to re-enable it.

### Updating the Extension
To update the extension when a new version is released:
- Download the new version following the same steps as above.
- Remove the previous version by clicking `Remove` on the Chrome Extensions page (`chrome://extensions/`).
- Install the new version by clicking `Load unpacked` as described in the installation steps.

## Contributing

All kinds of questions, feedback and contributions regarding the development of **ViewTube** are very welcomed and encouraged. If you have suggestions for improvements or have identified issues, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [License](LICENSE.md) file for details.