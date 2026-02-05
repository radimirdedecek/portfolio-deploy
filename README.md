# Portfolio Website & Cloud Infrastructure Demo

This repository contains the source code for my professional portfolio website, hosted on **Firebase** and serves as a demonstration of a modern Cloud deployment workflow.


## 🌐 Homepage: 
* [**radimirdedecek.com**](https://radimirdedecek.com)


## 🛠️ Technology Stack
* **Hosting:** Firebase Hosting (Google Cloud)
* **DNS/Security:** Cloudflare
* **Frontend:** HTML5, CSS3, JavaScript
* **Assets:** Custom SVG icons and responsive CSS styling


## 🏛️ Architecture & Infrastructure

This project demonstrates a production-ready deployment pipeline using a "Security-First" approach to web hosting.

### Infrastructure Flow:
**User Request** → **Cloudflare** (DNS & SSL) → **Firebase Hosting** (Global CDN) → **Browser**

* **DNS & Security:** Managed via **Cloudflare** for DDoS protection and optimized routing.
* **Global CDN:** Hosted on **Firebase** to ensure low-latency delivery of assets worldwide.
* **Hosting Provider:** **Firebase (GCP)** chosen for its high-availability Global CDN and seamless integration with CLI deployment workflows.
* **Domain Mapping:** Expertly mapped custom domain using GCP-validated DNS records.
* **SSL/TLS:** Automated certificate provisioning via Firebase, with Cloudflare "Full" encryption mode.


## 📂 Project Structure
* `/public`: Contains the core web pages and assets.
* `/static`: Organized CSS, JS, and image files for better maintainability.
* `firebase.json`: Configuration for deployment and hosting rules


## 🧠 What I Learned
1. **Cloud Infrastructure:** Mapping custom domains and managing DNS records between Cloudflare and GCP.
2. **DevOps Workflow:** Implementing a CLI-based deployment pipeline.
3. **Frontend Organization:** Structuring assets for maintainability and performance.
4. Managing environment configurations and deployment workflows.
5. **Custom Domain & DNS Management:**
   * Configured **Cloudflare** as the primary DNS provider for security and performance.
   * Successfully mapped a custom domain (`radimirdedecek.com`) to **Google Cloud/Firebase** infrastructure.
   * Managed SSL/TLS certification via Firebase's automated provisioning.

## 📜 License & Usage

Copyright (c) 2026 Radimir Dedecek. All Rights Reserved.
The source code is provided for **portfolio review purposes only**.

## ✍️ Author

**Radimir Dedecek** Full-Stack Developer with a primary focus on Backend engineering


## 🚀 How to deploy
If you want to host this yourself or update the live version:

1. **Install Firebase Tools** (Standalone script for Ubuntu/Linux):
    ```bash
    curl -sL https://firebase.tools | bash
    ```

2. **Verify Installation:**
    ```bash
    firebase --version
    ```

3. **Authentication & Project Selection:**
    Log in and ensure you are working within the correct project context:
    ```bash
    firebase login
    firebase use --add  # Select your project from the list
    ```
4. **Deployment:** Since the configuration files (firebase.json, .firebaserc) are already included, you can deploy directly:  
    ```bash
    /portfolio-deploy  # The directory structure could look something like this
    ├── firebase.json
    ├── .firebaserc
    ├── .gitignore
    └── public
        ├── 404.html
        ├── index.html
        └── static
            ├── css
            │   └── styles.css
            ├── images
            │   └── favicon.ico
            └── js
                └── scripts.js

    firebase deploy --only hosting  # final step - deployment      
    ```
