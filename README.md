This project is a simple web page that allows users to switch between different descriptions and images of various types of journeys (Road, Train, and Boat) by clicking on respective buttons. The page is styled using Tailwind CSS.

Table of Contents
Demo
Features
Technologies Used
Installation
Usage
Project Structure
Contributing
License
Acknowledgements
Demo
You can see a live demo of the project here.

Features
Display different images and descriptions based on button clicks
Responsive design using Tailwind CSS
Interactive buttons with hover effects
Technologies Used
HTML5
Tailwind CSS
JavaScript
Installation
To get a local copy up and running follow these simple steps:

Clone the repository

sh
Copy code
git clone https://github.com/your-username/journey-selector.git
Navigate to the project directory

sh
Copy code
cd journey-selector
Open the index.html file in your browser

Usage
Once you have the project running locally, you will see three buttons: "Road Journey", "Train Journey", and "Boat Journey". Clicking on each button will change the image and the description accordingly.

Code Explanation
HTML
The main layout of the page is defined using a grid with two columns.
An image element (<img>) displays the current journey image.
Three buttons allow users to switch between different journey types.
A <div> contains a heading and paragraph to show the description of the selected journey.
CSS (Tailwind)
The page uses Tailwind CSS classes for styling.
The background color of the body is set to bg-slate-600.
The buttons have a hover effect that changes their background color and text color.
JavaScript
JavaScript is used to handle button clicks and update the content dynamically.
Event listeners are added to each button to update the image source and text content of the description.
