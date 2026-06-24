# ZIP Pricing Shopify App

## Overview

ZIP Pricing Shopify App is a custom Shopify application that enables location-based product pricing using ZIP codes.

The application allows customers to enter their ZIP code on the storefront and instantly receive pricing calculated according to predefined ZIP-specific pricing rules. The solution is implemented using Shopify App Proxy, Theme App Extensions, and a custom pricing engine.

---

## Problem Statement

Different geographic regions may require different product pricing due to factors such as:

* Shipping costs
* Logistics expenses
* Regional taxes
* Market-specific pricing strategies

This application demonstrates how Shopify storefront pricing can be customized dynamically based on customer ZIP codes.

---

## Features

### ZIP-Based Pricing Engine

* Calculates product price using ZIP-specific rules.
* Supports multiple pricing zones.
* Easily extendable for additional ZIP codes.

### Shopify App Proxy

* Secure communication between storefront and backend.
* Customers interact only with Shopify storefront URLs.
* Backend logic remains protected.

### Theme App Extension

* Merchant can add the widget directly from Shopify Theme Editor.
* No theme code modification required.
* Easy installation and removal.

### Dynamic Price Display

* Customers enter ZIP code.
* Frontend requests price from backend.
* Price updates instantly without page reload.

### ZIP Validation

* Prevents empty ZIP submissions.
* Validates basic ZIP format before API requests.

### Loading State

* Displays loading indicator while fetching pricing information.
* Improves user experience.

### Local Storage Support

* Stores customer ZIP code.
* Automatically restores ZIP code on future visits.

---

# Architecture

Customer
↓
Theme App Extension Widget
↓
Shopify App Proxy
↓
Pricing Engine
↓
JSON Response
↓
Updated Storefront Price

---

## Project Structure

zip-pricing-v2/

├── app/
│   ├── routes/
│   │   └── api.proxy.jsx
│   │
│   └── services/
│       └── pricingEngine.js
│
├── extensions/
│   └── zip-pricing-widget/
│       └── blocks/
│           └── zip_pricing.liquid
│
├── prisma/
│
├── shopify.app.toml
├── package.json
├── README.md

---

## Pricing Logic

Current ZIP pricing rules:

| ZIP Code | Region     | Price  |
| -------- | ---------- | ------ |
| 75028    | Texas      | $14.99 |
| 10001    | New York   | $16.99 |
| 90210    | California | $17.99 |
| Others   | Default    | $19.99 |

Example:

Customer enters:

75028

Response:

{
"success": true,
"zipCode": "75028",
"calculatedPrice": 1499
}

---

## App Proxy Endpoint

Configured App Proxy:

/apps/zip-pricing

Example:

/apps/zip-pricing?zip=75028

Response:

{
"success": true,
"zipCode": "75028",
"calculatedPrice": 1499
}

---

## Theme Widget Workflow

1. Customer enters ZIP code.
2. ZIP code is validated.
3. Request sent to App Proxy.
4. Backend calculates price.
5. JSON response returned.
6. Widget displays calculated price.
7. Product price updates dynamically.
8. ZIP stored in Local Storage.

---

## Technologies Used

### Frontend

* Liquid
* JavaScript
* HTML
* CSS

### Backend

* Node.js
* React Router
* Shopify App Framework

### Shopify

* Shopify App Proxy
* Theme App Extensions
* Shopify CLI

### Database

* Prisma (Shopify template)

---

## Setup Instructions

### Clone Repository

git clone https://github.com/ShashankShekhar31/zip-pricing-v2

cd zip-pricing-v2

### Install Dependencies

npm install

### Start Development Server

shopify app dev

### Open Shopify Preview

Add the Theme App Extension widget through:

Online Store
→ Themes
→ Customize
→ Add Block
→ ZIP Pricing Widget

---

## Assumptions

* ZIP codes are predefined.
* Pricing rules are stored in application logic.
* Product prices are updated on the storefront for demonstration purposes.
* Authentication and merchant configuration are handled by Shopify.

---

## Future Improvements

* Database-driven pricing rules.
* Merchant dashboard for managing ZIP pricing.
* Region-level pricing support.
* Product-specific ZIP pricing.
* Real-time shipping cost integration.
* Analytics for ZIP-based customer behavior.
* Geo-location auto detection.

---

## Screenshots

### Product Page Widget

<img width="1692" height="857" alt="Image" src="https://github.com/user-attachments/assets/bf09302d-78ac-4523-b7db-77f2c8f59ae0" />

### ZIP Price Calculation

<img width="1711" height="855" alt="Image" src="https://github.com/user-attachments/assets/77a9350c-4ab7-4774-a903-063d3008cec8" />

---

## GitHub Repository

Repository:
https://github.com/ShashankShekhar31/zip-pricing-v2

---

## Author

Shashank Shekhar

