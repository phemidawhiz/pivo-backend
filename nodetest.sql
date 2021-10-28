-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 28, 2021 at 06:10 PM
-- Server version: 10.1.39-MariaDB
-- PHP Version: 7.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nodetest`
--

-- --------------------------------------------------------

--
-- Table structure for table `trucklocations`
--

CREATE TABLE `trucklocations` (
  `location_id` int(11) NOT NULL,
  `truck_id` int(11) DEFAULT NULL,
  `longitude` varchar(25) DEFAULT NULL,
  `latitude` varchar(25) DEFAULT NULL,
  `datetime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `trucklocations`
--

INSERT INTO `trucklocations` (`location_id`, `truck_id`, `longitude`, `latitude`, `datetime`) VALUES
(1, 1, '7.64738', '6.738292', '2020-10-17 13:01:45'),
(2, 1, '8.3288493', '8.437282', '2020-10-20 13:01:45'),
(3, 1, '6.764743', '7.647383', '2021-10-28 16:47:36'),
(4, 2, '6.363743', '7.4383399', '2021-10-28 16:48:59');

-- --------------------------------------------------------

--
-- Table structure for table `trucks`
--

CREATE TABLE `trucks` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `datetime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `trucks`
--

INSERT INTO `trucks` (`id`, `name`, `description`, `datetime`) VALUES
(1, 'Datsun Truck', 'This truck is meant for delivery of boots ordered from our sites', '2020-10-17 13:01:45'),
(2, 'Nissan Frontier', 'Mid-Size Pickup Truck', '2020-10-19 13:01:45'),
(3, 'Volkswagon Trucks', NULL, '2021-10-28 16:50:55');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `trucklocations`
--
ALTER TABLE `trucklocations`
  ADD PRIMARY KEY (`location_id`),
  ADD KEY `truck_id` (`truck_id`);

--
-- Indexes for table `trucks`
--
ALTER TABLE `trucks`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `trucklocations`
--
ALTER TABLE `trucklocations`
  MODIFY `location_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `trucks`
--
ALTER TABLE `trucks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `trucklocations`
--
ALTER TABLE `trucklocations`
  ADD CONSTRAINT `trucklocations_ibfk_1` FOREIGN KEY (`truck_id`) REFERENCES `trucks` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
