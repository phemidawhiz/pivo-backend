# Pivo Backend
Backend for pivo coding test

# Install dependencies

Run the following command `npm install`

# Database Setup

create a db with any relevant name of your choice (e.g. pivotrucks) and run the following query for quick setup

``INSERT INTO `Trucks` VALUES (2, "Nissan Frontier", "Mid-Size Pickup Truck", "2020-10-19 13:01:45")``

``INSERT INTO `trucklocations` VALUES (2, 1, "8.3288493", "8.437282", "2020-10-20 13:01:45")``

create a .env file in the root folder and update as follows:

`````
PORT=3000
DB_HOST=localhost
DB_USER=YOUR_USERNAME
DB_PWD=YOUR_DB_PASSWORD
DB_NAME=YOUR_DB_NAME
````````

RUN THE COMMAND - ``npm run start``


