-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 08, 2025 at 10:25 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_crud`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(50) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `address` text NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstName`, `lastName`, `email`, `address`, `password`, `created_at`, `updated_at`) VALUES
(1, 'Omar', 'Farooq', 'omar@gmail.com', 'Karachi, Korangi.', 'omar123', '2025-10-08 20:07:22', '2025-10-08 12:26:06'),
(2, 'Ali', 'Raza', 'ali.raza@example.com', 'Karachi, Pakistan', 'abc123', '2025-10-08 20:12:03', '2025-10-08 15:12:03'),
(3, 'Fatima', 'Sheikh', 'fatima.sheikh@example.com', 'Islamabad, Pakistan', 'mypassword', '2025-10-08 20:12:03', '2025-10-08 15:12:03'),
(6, 'Bilal', 'Hassan', 'bilal.hassan@example.com', 'Multan, Pakistan', 'bilal@123', '2025-10-08 20:12:03', '2025-10-08 15:12:03'),
(7, 'Sana', 'Ali', 'sana.ali@example.com', 'Hyderabad, Pakistan', 'sanaPass', '2025-10-08 20:12:03', '2025-10-08 15:12:03'),
(8, 'Hamza', 'Javed', 'hamza.javed@example.com', 'Peshawar, Pakistan', 'hamza321', '2025-10-08 20:12:03', '2025-10-08 15:12:03'),
(9, 'Ayesha', 'Arshad', 'ayesha.khalid@example.com', 'Quetta, Pakistan', 'ayesha@pw', '2025-10-08 20:12:03', '2025-10-08 12:44:12'),
(10, 'Usman', 'khan', 'usman.qureshi@example.com', 'Sialkot, Pakistan', 'usman987', '2025-10-08 20:12:03', '2025-10-08 12:39:12'),
(11, 'Donald', 'Trump', 'trump@gmail.com', 'America', 'trump123', '2025-10-08 16:30:41', '2025-10-08 11:30:41'),
(12, 'Abdullah', 'Siddique', 'abdullah@gmail.com', 'Karachi, Pakistan.', 'abdullah123', '2025-10-08 16:32:40', '2025-10-08 12:36:26'),
(13, 'Faraz', 'Khan', 'faraz@gmail.com', 'Karachi, Pakistan.', 'faraz123', '2025-10-08 16:32:45', '2025-10-08 12:31:11'),
(15, 'Hassan', 'Amir', 'hassan@gmail.com', 'Karachi, Pakistan.', 'hassan123', '2025-10-08 20:13:27', '2025-10-08 15:14:36');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
