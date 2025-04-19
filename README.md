# EpiShield
Welcome to Epishield, your trusted destination for reliable and comprehensive healthcare resources. We are dedicated to promoting wellness by providing valuable medical information, expert guidance, and essential healthcare services to support you on your health.

##  Features

- Doctor consultation directory with profile cards
- Medicine search and health resources
- Blood bank availability checker
- Curated healthcare articles and wellness tips
- Hosted on AWS S3 for scalability and reliability
- User sign-up data stored in Google Sheets using Google Apps Script

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Hosting**: AWS S3 (Static Website Hosting)
- **Design**: Responsive layout with modern UI effects
- **Version Control**: Git & GitHub
- **Backend**: Google Sheets + Apps Script (as lightweight database)

## Run Locally

1. Clone the repo:
git clone https://github.com/VardhanPurwar/epishield.git
2. Open index.html in your browser.

## Data Handling

EpiShield uses Google Sheets as a backend database alternative to store user sign-up information.  
Data is collected via a form and sent to the sheet using Google Apps Script, ensuring easy and efficient storage without traditional server infrastructure.

- Google Sheet: https://docs.google.com/spreadsheets/d/1dLaXh_Gww6VDbn__Mw-9wRoR3lygeLyeISmTaVwEmzg/edit?gid=0#gid=0 (access restricted)
- The sheet is secured and access-controlled for privacy.

## Deployment & Hosting

This project is hosted on **AWS S3** using a static website configuration. It leverages AWS Cloud infrastructure for scalability and performance.

- **Hosting Service**: AWS S3
- **URL**: (http://epishield.s3-website-us-east-1.amazonaws.com)
- **Region**: ap-south-1 (Mumbai)

AWS S3 is used to serve static content including HTML, CSS, JS files, and assets. The bucket is configured for public access with CloudFront CDN (optional).

## Live Demo

⚠️ The project was previously hosted on **AWS S3 (Static Website Hosting)**.  
The live URL is currently **unavailable** because the AWS account is inactive.

### Previous Deployment Details:
- AWS Service: Amazon S3
- Region: ap-south-1 (Mumbai)
- Static Hosting: Enabled
