-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le :  jeu. 07 juil. 2022 à 21:45
-- Version du serveur :  10.4.8-MariaDB
-- Version de PHP :  7.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `projetsprings2`
--

-- --------------------------------------------------------

--
-- Structure de la table `endroits`
--

CREATE TABLE `endroits` (
  `id` int(11) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `video_link` varchar(255) DEFAULT NULL,
  `ville_id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `endroits`
--

INSERT INTO `endroits` (`id`, `description`, `image`, `name`, `video_link`, `ville_id`) VALUES
(1, 'La mosquée Hassan-II Maroc). Érigée en partie sur la mer, elle est un complexe religieux et culturel, aménagée sur neuf hectares et comporte une salle de prières, une salle d\'ablutions, des bains, une école coranique (madrasa), une bibliothèque, un musée ', 'Rabat.jpg,Rabat4.jpg,Rabat5.jpg,Rabat6.jpg', 'Tour Hassan ', 'https://www.youtube.com/watch?v=Vw6yGKAXcUI', 6),
(2, 'The Kutubiyya Mosque or Koutoubia Mosque is the largest mosque in Marrakesh, Morocco. The mosque\'s name is also variably rendered as Jami\' al-Kutubiyah, Kutubiya Mosque, Kutubiyyin Mosque, and Mosque of the Booksellers. It is located in the southwest medi', 'Marrakech.jpg,Marrakech2.jpg,Marrakech3.jpg', 'Koutobia', 'https://www.youtube.com/watch?v=jPtMO1x_phg', 2),
(3, 'Bab El Had, Rabat Bab El Had is one of the five gates built within the walls of the Old Rabat. The gate is well preserved and looks very beautiful with fascinating ornaments on it.', 'Rabat1.jpg,Rabat2.jpg,Rabat3.jpg', 'Bab Lhed', NULL, 6),
(4, 'The Kasbah of Agadir Oufla is a historical landmark in Agadir, Morocco that housed the old city of Agadir, much of which was affected by the earthquake that struck the city. The fort is located on the top of a mountain rising 236 meters above sea level in', NULL, 'Agadir Oufella', NULL, 1);

-- --------------------------------------------------------

--
-- Structure de la table `hibernate_sequence`
--

CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `hibernate_sequence`
--

INSERT INTO `hibernate_sequence` (`next_val`) VALUES
(129);

-- --------------------------------------------------------

--
-- Structure de la table `messages`
--

CREATE TABLE `messages` (
  `id` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `message` varchar(255) DEFAULT NULL,
  `subject` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `messages`
--

INSERT INTO `messages` (`id`, `email`, `first_name`, `last_name`, `message`, `subject`) VALUES
(17, 'soukaina@gmail.com', 'youssef', 'bouhouch', 'help , i have a problem', 'help'),
(20, 'rachidbouhouch06@gmail.com', 'rachid', 'bouhouch', 'i have a problem', 'help me'),
(21, 'rachidbouhouch06@gmail.com', 'rachid', 'bouhouch', 'i have a problem', 'help me'),
(22, 'rachidbouhouch06@gmail.com', 'rachid', 'bouhouch', 'i have a problem', 'help me'),
(23, 'rachidbouhouch06@gmail.com', 'rachid', 'bouhouch', 'i have a problem', 'help me'),
(24, 'rachidbouhouch06@gmail.com', 'rachid', 'bouhouch', 'i have a problem', 'help me'),
(25, 'rachidbouhouch06@gmail.com', 'rachid', 'bouhouch', 'i have a problem', 'help me'),
(26, 'rachidbouhouch06@gmail.com', 'rachid', 'bouhouch', 'i have a problem', 'help me'),
(27, 'rachidbouhouch06@gmail.com', 'rachid', 'bouhouch', 'i have a problem', 'help me'),
(28, 'rachidbouhouch06@gmail.com', 'rachid', 'bouhouch', 'i have a problem', 'help me'),
(29, 'rachidbouhouch06@gmail.com', 'rachid', 'bouhouch', 'i have a problem', 'help me'),
(30, 'rachidbouhouch06@gmail.com', 'rachid', 'bouhouch', 'i have a problem', 'help me'),
(32, 'rachidbouhouch14@gmail.com', 'Rachid', 'Bouhouch', 'HELP , IF FORGOT MY PASSWORD', 'HELP , IF FORGOT MY PASSWORD'),
(33, 'rachidbouhouch14@gmail.com', 'Rachid', 'Bouhouch', 'HELP , IF FORGOT MY PASSWORD', 'HELP , IF FORGOT MY PASSWORD'),
(34, 'rachidbouhouch14@gmail.com', 'Rachid', 'Bouhouch', 'HELP , IF FORGOT MY PASSWORD', 'HELP , IF FORGOT MY PASSWORD'),
(35, 'rachidbouhouch06@gmail.com', 'rachid', 'bouhouch', 'I FORGOT MY PASSWORD', 'HELP '),
(36, 'rachidbouhouch06@gmail.com', 'rachid', 'bouhouch', 'IF FORGOT MY PASSWORD', 'Help'),
(37, 'rachidbouhouch06@gmail.com', 'Rachid', 'Bouhouch', ',dfdfsfdks', 'HELP , IF FORGOT MY PASSWORD'),
(126, 'rachidbouhouch06@gmail.com', 'rachid', 'bouhouch', 'HELP ME PLEASE ', 'SAT SAT ');

-- --------------------------------------------------------

--
-- Structure de la table `reviews`
--

CREATE TABLE `reviews` (
  `id` int(11) NOT NULL,
  `contenu` varchar(255) DEFAULT NULL,
  `rating` float NOT NULL,
  `endroit_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `reviews`
--

INSERT INTO `reviews` (`id`, `contenu`, `rating`, `endroit_id`, `user_id`) VALUES
(4, 'Nice place', 3, 2, 3),
(5, 'Again', 3.5, 2, 3),
(128, 'HAHAHA', 2.5, 2, 19),
(38, 'NICE PLACE RACHID', 3, 2, 19),
(39, 'NICEE ', 3, 2, 19),
(40, 'LALAA', 1.6, 2, 19),
(42, 'NICEE PLACE', 3.7, 2, 19),
(20, 'GOOD JOB', 3.1, 1, 19),
(21, 'Rachid haha', 3.9, 1, 19),
(43, 'NICE', 3.7, 2, 19),
(44, 'NICE BRO', 2.1, 2, 19),
(45, 'NICEE ', 1.3, 2, 19),
(46, 'NICEE ', 3.5, 2, 19),
(47, 'RAHCID', 3.7, 2, 19),
(48, 'sdcfjsjqkdfsq', 3.4, 2, 19),
(49, 'ksfksdkdkf', 3.7, 2, 19),
(50, 'nicee', 4, 2, 19),
(51, 'xcxwcwxcwcxwcx', 3.8, 2, 19),
(52, 'dqsdqsdqd', 3.6, 2, 19),
(53, 'jsdjcjds', 1, 2, 19),
(54, 'djsdjdjsjd', 2.4, 2, 19),
(59, 'kjdjsdjsjdjsjdsjd', 2.8, 2, 19),
(60, 'ksdkskdfs', 3.3, 2, 19),
(61, 'NICEE ', 2.5, 2, 19),
(62, 'djsjdj', 2.4, 2, 19),
(63, 'NICEEE ', 3.3, 2, 19),
(64, 'jjjfjfjfjf', 2.4, 2, 19),
(66, 'NICEEE ', 3.8, 2, 19),
(67, 'jdjsjdjsjdsds', 2.9, 2, 19),
(68, 'jdsjdjsjdjsjd', 1.5, 2, 19),
(69, 'jdsjjdsd', 2.4, 2, 19),
(70, 'jdsjjdsjdfjsd', 2.5, 2, 19),
(77, 'kqskdkqskdqskd', 2.6, 2, 19),
(78, 'ksdfkskdfsdkf', 1.3, 2, 19),
(79, 'jsjdjqsdjqjsd', 1.2, 2, 19),
(80, 'jsjdjfsdjfjdjf', 3.1, 2, 19),
(81, 'kdkskdskd', 2.1, 2, 19),
(82, 'djsjqdjsqjd', 1.2, 2, 19),
(83, 'fdsfsdf', 1, 2, 19),
(84, 'kskfdksfksdkfsdk', 1.5, 2, 19),
(85, 'ksdfksdkfkds', 2, 2, 19),
(86, 'dqsjdjsjdqsjd', 1.1, 2, 19),
(87, 'jjdfjgdjfgdfjg', 3.3, 2, 19),
(88, 'cjdjsjd nice', 2.9, 2, 19),
(89, 'dkskkdsjdjsqjdsjqj', 2.5, 2, 19),
(90, 'dsqkdkqskd', 2.7, 2, 19),
(91, 'hdshdhsdh', 0.9, 2, 19),
(92, 'nicee one ', 1.8, 2, 19),
(93, 'jdsjdsjdjs', 2.5, 2, 19),
(94, 'jfjdjsfjdsjf', 1.9, 2, 19),
(95, 'jdjsjdjqsd', 2.7, 2, 19),
(96, 'jsdjsjd', 1, 2, 19),
(97, 'sdhshdfhsdhfd', 0.7, 2, 19),
(98, 'jjqsjdjsjd', 2.5, 2, 19),
(99, 'qsdqsd', 1.4, 2, 19),
(100, 'jsjqdjsjd', 2.7, 2, 19),
(101, 'dsqjdsj', 1.4, 2, 19),
(102, 'kdkfdkfkds', 1.3, 2, 19);

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `address`, `email`, `first_name`, `last_name`, `password`, `role`) VALUES
(2, '34 lot el waha', 'rachidbouhouch@gmail.com', 'rachid', 'bouhouch', '$2a$10$g/feZB5rffpEshupOfwWquVBK9BTxNJFHpg9nDVBr7Rf2UBI6yl7i', 'USER'),
(9, 'kdksfds', 'mehdihouss@gmail.com', 'rachid', 'bouhouch', '$2a$10$AHzY7yM5pL.TXa87YZolCuSU6.7/nertuklyLzBZmBcmKMziA5Qv2', 'USER'),
(5, 'jdsjd', 'rachidkhalid@gmail.com', 'youssef', 'bouhouch', '$2a$10$Qc946LB6gxQRmre9P4M2euRJJptTabtkwHvllVsYLs1jiwqfyfClW', 'USER'),
(6, 'jdsjd', 'rachidbouhouch08@gmail.com', 'youssef', 'bouhouch', '$2a$10$ww/icejm.JpKtJZjr50/2.eeo1WKE7AI3ZsGhYyTAJGd/91JHhHya', 'ADMIN'),
(19, 'Lot el waha', 'rachidbouhouch06@gmail.com', 'rachid', 'bouhouch', '$2a$10$.sjzBwvNvukLh82SPdXa3uAQa4JLw77is5NApOvsD10UJTbyNKLdi', 'USER'),
(18, 'kdksfds', 'mehdi@gmail.com', 'rachid', 'bouhouch', '$2a$10$mvUinbsItCvQ6pa.b2kAAOCOihPGhxltanc3IOvzjH22NU1kALlqS', 'USER'),
(3, 'el wahafa', 'khalidbouhouch@gmail.com', 'khalid', 'bouhouch', '$2a$10$a6sPNDJY0KuQv./gKQUX1.zj/jI83JtNrTMMBQQ97rdMSotwTcpy2', 'USER');

-- --------------------------------------------------------

--
-- Structure de la table `villes`
--

CREATE TABLE `villes` (
  `id` int(11) NOT NULL,
  `ville_name` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `villes`
--

INSERT INTO `villes` (`id`, `ville_name`) VALUES
(1, 'Agadir'),
(2, 'Marrakech'),
(3, 'Casablanca'),
(4, 'Dakhlah'),
(5, 'Tanger'),
(6, 'Rabat');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `endroits`
--
ALTER TABLE `endroits`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKs11fyjjoxytfni1rxau315cki` (`endroit_id`),
  ADD KEY `FKcgy7qjc1r99dp117y9en6lxye` (`user_id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `villes`
--
ALTER TABLE `villes`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
