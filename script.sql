CREATE TABLE User (
    id INT AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    birthDate DATE NOT NULL,
    address VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE VehicleCategory (
    id INT AUTO_INCREMENT PRIMARY KEY,
    code VARCHAR(4) NOT NULL,
    description VARCHAR(255) NOT NULL
);

CREATE TABLE RentalOffer (
    id INT AUTO_INCREMENT PRIMARY KEY,
    startCity VARCHAR(255) NOT NULL,
    endCity VARCHAR(255) NOT NULL,
    startDate DATE NOT NULL,
    endDate DATE NOT NULL,
    vehicleCategoryId INT NOT NULL,
    price DOUBLE NOT NULL,
    FOREIGN KEY (vehicleCategoryId) REFERENCES VehicleCategory(id)
);

CREATE TABLE Reservation (
    id INT AUTO_INCREMENT PRIMARY KEY,
    startDate DATE NOT NULL,
    endDate DATE NOT NULL,
    status VARCHAR(50) NOT NULL,
    userId INT NOT NULL,
    offerId INT NOT NULL,
    FOREIGN KEY (userId) REFERENCES User(id),
    FOREIGN KEY (offerId) REFERENCES RentalOffer(id)
);
