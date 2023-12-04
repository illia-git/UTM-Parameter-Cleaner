# UTM-Parameter-Cleaner

## Overview
This repository offers two JavaScript scripts for marketers and web analysts. These scripts are designed to integrate with Google Tag Manager and assist in refining UTM parameters in URLs. They focus on essential marketing parameters to ensure cleaner tracking and analysis.

### Scripts
1. **cleanPageLocation.js**: This script parses the current page URL and retains only essential UTM parameters like `utm_source`, `utm_medium`, etc., for a cleaner URL structure.
2. **cleanPageReferrer.js**: Similar to the first script, this one focuses on the referrer URL, cleaning and preserving only the necessary UTM parameters.

## Usage
### cleanPageLocation.js
- **Description**: Extracts and retains essential UTM parameters from the current page URL.
- **How to Use**: Implement this script as a Custom JavaScript Variable in Google Tag Manager. It returns the path of the current URL with only the important UTM parameters.

### cleanPageReferrer.js
- **Description**: Filters the referrer URL to include only selected UTM parameters.
- **How to Use**: Use this as a Custom JavaScript Variable in Google Tag Manager. It processes the document referrer URL and returns it with essential UTM parameters.

## Installation
1. Add these scripts as Custom JavaScript Variables in your Google Tag Manager container.
2. Refer to these variables in your GTM tags or triggers as needed.
