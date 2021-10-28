-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 29, 2021 at 01:36 AM
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
(4, 2, '6.363743', '7.4383399', '2021-10-28 16:48:59'),
(5, 3, '6.748383', '7.658586', '2021-10-28 23:05:45');

-- --------------------------------------------------------

--
-- Table structure for table `trucks`
--

CREATE TABLE `trucks` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `datetime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `imageurl` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `trucks`
--

INSERT INTO `trucks` (`id`, `name`, `description`, `datetime`, `imageurl`) VALUES
(1, 'Datsun Truck', 'This truck is meant for delivery of boots ordered from our sites', '2020-10-17 13:01:45', NULL),
(2, 'Nissan Frontier', 'Mid-Size Pickup Truck', '2020-10-19 13:01:45', NULL),
(3, 'Volkswagon Trucks', 'for delivering refurbished electronics', '2021-10-28 16:50:55', NULL),
(4, 'Trucks 001', 'for delivering staples', '2021-10-28 20:56:37', NULL),
(5, 'Femi Truck', 'test driving and trainingss', '2021-10-28 20:57:02', NULL),
(6, 'Trucks 003', 'for delivering refurbished electronics', '2021-10-28 20:57:37', NULL),
(7, 'Trucks 004', 'Truck ern is a multipurpose truck used when any tuck is down', '2021-10-28 20:58:17', NULL),
(8, 'Trucks 005', 'for movind houseold loads', '2021-10-28 20:59:10', NULL),
(9, 'Trucks 006', ' is for moving unskilled farm workers  around', '2021-10-28 21:00:03', NULL),
(10, 'Trucks 007', 'This truck is meant for delivery of boots ordered from our sites', '2021-10-28 21:00:43', NULL),
(12, 'Trucks 783', 'Truck ern is a multipurpose truck used when any tuck is down', '2021-10-28 22:26:54', NULL),
(13, 'Trucks jdk', 'Truck hfj is for moving unskilled farm workers  around', '2021-10-28 22:27:15', NULL),
(14, 'Trucks hjwk', ' is for moving unskilled farm workers  around', '2021-10-28 22:27:34', NULL),
(15, 'Truck 782', ' is for moving unskilled farm workers  around', '2021-10-28 22:27:52', NULL),
(16, 'Femi Truck', 'test driving and training', '2021-10-28 22:35:19', NULL),
(17, 'Oho Truck', 'oho trucks from Ohio', '2021-10-28 22:55:25', NULL),
(18, 'Oho Truck', 'oho trucks from Ohio', '2021-10-28 23:58:15', NULL),
(19, 'Oho Truck', 'oho trucks from Ohio', '2021-10-28 23:59:59', 'https://gemmahomecare.com/backend/bejamas/p1_cities_city.jpg');

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
  MODIFY `location_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `trucks`
--
ALTER TABLE `trucks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

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
