# Contributing to Sri Lanka Division Data

Thank you for your interest in contributing to the Sri Lanka Division Data project! We welcome contributions from the community to help keep this data accurate and up-to-date.

## How to Contribute

There are two main ways you can contribute: by reporting issues or by submitting direct changes.

### 1. Reporting Issues

If you notice an error in the data—such as a misspelling, a missing division, or an incorrect hierarchy—but aren't sure how to fix it yourself, please open an Issue.

**When reporting an issue, please include:**

- The location details (Province, District, Divisional Secretariat).
- A description of the error (e.g., "The spelling of 'X' is incorrect").
- The correct information, if known.
- Any official sources or references that verify the correction (optional but helpful).

### 2. Submitting Corrections (Pull Requests)

If you are comfortable editing JSON files and using Git, you can correct the mistakes yourself and submit a Pull Request (PR).

**Steps to submit a change:**

1.  **Fork** this repository to your own GitHub account.
2.  **Clone** your fork to your local machine.
    ```bash
    git clone https://github.com/sahanRanasingha/Sri-Lanka-Division-Data.git
    ```
3.  **Create a new branch** for your changes.
    ```bash
    git checkout -b fix-typo-in-kandy
    ```
4.  **Edit the data**: Open `sri-lanka-division-data.json` and make your corrections.
    - Please ensure you do not break the JSON syntax (watch out for missing commas or brackets).
5.  **Commit your changes** with a descriptive message.
    ```bash
    git commit -m "Fix spelling of [Division Name]"
    ```
6.  **Push** your branch to your fork.
    ```bash
    git push origin fix-typo-in-kandy
    ```
7.  **Open a Pull Request** on the original repository. Describe your changes and why they are necessary.

## Data Guidelines

- **Format**: The data is stored in `sri-lanka-division-data.json`. Please maintain the existing structure:
  ```json
  {
    "provinces": [
      {
        "name": "Province Name",
        "districts": [
          {
            "name": "District Name",
            "divisional_secretariats": ["Division 1", "Division 2"]
          }
        ]
      }
    ]
  }
  ```
- **Language**: Currently, the data is in English. Please ensure consistent capitalization and spelling.

Thank you for helping us maintain accurate data!
