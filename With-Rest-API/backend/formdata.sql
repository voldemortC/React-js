-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 08, 2023 at 05:47 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `task`
--

-- --------------------------------------------------------

--
-- Table structure for table `formdata`
--

CREATE TABLE `formdata` (
  `id` int(11) NOT NULL,
  `fname` varchar(255) NOT NULL,
  `lname` varchar(255) NOT NULL,
  `pnum` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `uname` varchar(500) NOT NULL,
  `skills` varchar(500) NOT NULL,
  `experienceFrom` date NOT NULL,
  `experienceTo` date NOT NULL,
  `descriptions` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `formdata`
--

INSERT INTO `formdata` (`id`, `fname`, `lname`, `pnum`, `email`, `uname`, `skills`, `experienceFrom`, `experienceTo`, `descriptions`) VALUES
(10, 'Nisha', 'Chanalia', 2147483647, 'nisha@gmail.com', 'nisha', 'html,typesript,javascript', '2023-02-01', '2023-02-06', 'lorem ipsum'),
(11, 'Sunishtha', 'Sharma', 2147483647, 'sunsihtha@gmail.com', 'sunishtha', 'html,css3,css', '2023-02-07', '2023-02-08', 'lorem ipsum'),
(13, 'kajal', 'kajal', 2134567896, 'a@gmail.com', 'kajal', 'html,javascript', '2023-02-08', '2023-02-21', 'dfghjkuyjth'),
(14, 'Dolly', 'Chumber', 2147483647, 'dolly2323@gmail.com', 'dolly', 'html,javascript', '2023-01-31', '2023-02-08', 'lorem ipsum');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `formdata`
--
ALTER TABLE `formdata`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `formdata`
--
ALTER TABLE `formdata`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
