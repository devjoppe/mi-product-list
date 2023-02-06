-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Värd: 127.0.0.1:3306
-- Tid vid skapande: 06 feb 2023 kl 10:43
-- Serverversion: 10.6.11-MariaDB-cll-lve
-- PHP-version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Databas: `u260925076_products`
--

-- --------------------------------------------------------

--
-- Tabellstruktur `Order`
--

CREATE TABLE `Order` (
  `id` int(11) NOT NULL,
  `customer_first_name` varchar(191) NOT NULL,
  `customer_last_name` varchar(191) NOT NULL,
  `customer_adress` varchar(191) NOT NULL,
  `customer_postcode` varchar(6) NOT NULL,
  `customer_city` varchar(191) NOT NULL,
  `customer_email` varchar(191) NOT NULL,
  `customer_phone` varchar(191) DEFAULT NULL,
  `order_total` int(11) NOT NULL,
  `order_date` varchar(191) DEFAULT NULL,
  `created_at` varchar(191) DEFAULT NULL,
  `updated_at` varchar(191) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumpning av Data i tabell `Order`
--

INSERT INTO `Order` (`id`, `customer_first_name`, `customer_last_name`, `customer_adress`, `customer_postcode`, `customer_city`, `customer_email`, `customer_phone`, `order_total`, `order_date`, `created_at`, `updated_at`) VALUES
(1, 'Joakim', 'Ottosson', 'Drottninggatan 3', '332 34', 'Malmö', 'nicklas@nordstrom.com', NULL, 1740, '2/3/2023, 2:41:20 PM', '2/3/2023, 2:41:20 PM', '2/3/2023, 2:41:20 PM'),
(2, 'Joakim', 'Ottosson', 'Drottninggatan 3', '332 34', 'Malmö', 'nicklas@nordstrom.com', NULL, 240, '2/3/2023, 2:42:18 PM', '2/3/2023, 2:42:18 PM', '2/3/2023, 2:42:18 PM'),
(3, 'Sven', 'Svensson', 'Häggbergavägen 3', '332 34', 'Malmö', 'sven@svensson.com', NULL, 240, '2/6/2023, 10:29:31 AM', '2/6/2023, 10:29:31 AM', '2/6/2023, 10:29:31 AM');

-- --------------------------------------------------------

--
-- Tabellstruktur `OrderItems`
--

CREATE TABLE `OrderItems` (
  `id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `qty` int(11) NOT NULL,
  `item_price` int(11) NOT NULL,
  `item_total` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumpning av Data i tabell `OrderItems`
--

INSERT INTO `OrderItems` (`id`, `order_id`, `product_id`, `qty`, `item_price`, `item_total`) VALUES
(1, 1, 2, 3, 750, 1500),
(2, 1, 1, 2, 120, 240),
(3, 2, 1, 2, 120, 240),
(4, 3, 1, 2, 120, 240);

-- --------------------------------------------------------

--
-- Tabellstruktur `Products`
--

CREATE TABLE `Products` (
  `id` int(11) NOT NULL,
  `name` varchar(191) NOT NULL,
  `description` longtext NOT NULL,
  `price` int(11) NOT NULL,
  `images` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`images`)),
  `stock_status` varchar(191) NOT NULL,
  `stock_quantity` int(11) NOT NULL,
  `on_sale` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumpning av Data i tabell `Products`
--

INSERT INTO `Products` (`id`, `name`, `description`, `price`, `images`, `stock_status`, `stock_quantity`, `on_sale`) VALUES
(1, 'A New Hope', '<p>The original Star Wars film, it follows Luke Skywalker as he joins forces with Princess Leia and Han Solo to defeat the evil Empire and destroy the Death Star.</p>', 120, '{\"large\": \"https://joakimottosson.se/projects/mi-products/product/01-product_image.jpg\", \"thumbnail\": \"https://joakimottosson.se/projects/mi-products/thumbnails/01-product_image.jpg\"}', 'instock', 10, 0),
(2, 'The Empire Strikes Back', '<p>The second film in the original trilogy, it continues the story of Luke, Leia, and Han as they battle the Empire while Luke begins his Jedi training.</p>', 750, '{\"large\": \"https://joakimottosson.se/projects/mi-products/product/01-product_image.jpg\", \"thumbnail\": \"https://joakimottosson.se/projects/mi-products/thumbnails/01-product_image.jpg\"}', 'instock', 8, 0),
(3, 'Return of the Jedi', '<p>The final film in the original trilogy, it sees Luke, Leia, and Han work to defeat the Empire once and for all and rescue Han from the clutches of Jabba the Hutt.</p>', 890, '{\"large\": \"https://joakimottosson.se/projects/mi-products/product/03-product_image.jpg\", \"thumbnail\": \"https://joakimottosson.se/projects/mi-products/thumbnails/03-product_image.jpg\"}', 'instock', 12, 0),
(4, 'The Phantom Menace', '<p>The first film in the prequel trilogy, it introduces a young Anakin Skywalker and the Jedi Knight Qui-Gon Jinn as they try to save the Galactic Republic from the Trade Federation.</p>', 80, '{\"large\": \"https://joakimottosson.se/projects/mi-products/product/04-product_image.jpg\", \"thumbnail\": \"https://joakimottosson.se/projects/mi-products/thumbnails/04-product_image.jpg\"}', 'instock', 6, 0),
(5, 'Attack of the Clones', '<p>The second film in the prequel trilogy, it sees Anakin and Obi-Wan Kenobi as they protect Senator Amidala from assassination attempts and Anakin starts to fall in love with her.</p>', 180, '{\"large\": \"https://joakimottosson.se/projects/mi-products/product/05-product_image.jpg\", \"thumbnail\": \"https://joakimottosson.se/projects/mi-products/thumbnails/05-product_image.jpg\"}', 'instock', 3, 0),
(6, 'Revenge of the Sith', '<p>The final film in the prequel trilogy, it depicts the fall of Anakin Skywalker to the dark side and the rise of Darth Vader.</p>', 210, '{\"large\": \"https://joakimottosson.se/projects/mi-products/product/06-product_image.jpg\", \"thumbnail\": \"https://joakimottosson.se/projects/mi-products/thumbnails/06-product_image.jpg\"}', 'instock', 9, 0),
(7, 'The Force Awakens', '<p>The first film in the sequel trilogy, it is set 30 years after the events of Return of the Jedi, it follows a new generation of heroes as they try to defeat the remnants of the Empire, now called the First Order, and find Luke Skywalker.</p>', 200, '{\"large\": \"https://joakimottosson.se/projects/mi-products/product/07-product_image.jpg\", \"thumbnail\": \"https://joakimottosson.se/projects/mi-products/thumbnails/07-product_image.jpg\"}', 'instock', 15, 0),
(8, 'The Last Jedi', '<p>The second film in the sequel trilogy, it continues the story of Rey, Finn and Poe as they try to defeat the First Order and Luke Skywalker\'s role in the fate of the galaxy.</p>', 200, '{\"large\": \"https://joakimottosson.se/projects/mi-products/product/08-product_image.jpg\", \"thumbnail\": \"https://joakimottosson.se/projects/mi-products/thumbnails/08-product_image.jpg\"}', 'instock', 21, 0),
(9, 'The Rise of Skywalker', '<p>The final film in the sequel trilogy, it is set one year after the events of \"The Last Jedi\" and it shows how the characters face their destiny and the final showdown against Kylo Ren and the Emperor.</p>', 280, '{\"large\": \"https://joakimottosson.se/projects/mi-products/product/09-product_image.jpg\", \"thumbnail\": \"https://joakimottosson.se/projects/mi-products/thumbnails/09-product_image.jpg\"}', 'instock', 4, 0),
(10, 'The Clone Wars', '<p>Animated series set between Attack of the Clones and Revenge of the Sith, it follows the adventures of Anakin Skywalker, Obi-Wan Kenobi, and Padmé Amidala during the Clone Wars.</p>', 430, '{\"large\": \"https://joakimottosson.se/projects/mi-products/product/10-product_image.jpg\", \"thumbnail\": \"https://joakimottosson.se/projects/mi-products/thumbnails/10-product_image.jpg\"}', 'instock', 9, 0),
(11, 'Rebels', '</p>An animated series set between Revenge of the Sith and A New Hope, it follows a group of rebels as they fight against the Empire.</p>', 380, '{\"large\": \"https://joakimottosson.se/projects/mi-products/product/11-product_image.jpg\", \"thumbnail\": \"https://joakimottosson.se/projects/mi-products/thumbnails/11-product_image.jpg\"}', 'instock', 12, 0),
(12, 'The Mandalorian', '<p>A live-action series set after the events of Return of the Jedi, it follows the journey of a lone gunfighter in the outer reaches of the galaxy.</p>', 920, '{\"large\": \"https://joakimottosson.se/projects/mi-products/product/12-product_image.jpg\", \"thumbnail\": \"https://joakimottosson.se/projects/mi-products/thumbnails/12-product_image.jpg\"}', 'instock', 2, 0),
(13, 'Rogue One: A Star Wars Story', '<p>A standalone film set before the events of A New Hope, it follows a group of rebels as they attempt to steal the plans for the Death Star.</p>', 640, '{\"large\": \"https://joakimottosson.se/projects/mi-products/product/13-product_image.jpg\", \"thumbnail\": \"https://joakimottosson.se/projects/mi-products/thumbnails/13-product_image.jpg\"}', 'instock', 14, 0),
(14, 'Solo: A Star Wars Story', '<p>A standalone film set before the events of A New Hope, it follows the backstory of the character Han Solo.</p>', 230, '{\"large\": \"https://joakimottosson.se/projects/mi-products/product/13-product_image.jpg\", \"thumbnail\": \"https://joakimottosson.se/projects/mi-products/thumbnails/13-product_image.jpg\"}', 'instock', 40, 0),
(15, 'The Clone Wars', '<p>A animated film that precedes the series of the same name, it follows Anakin, Obi-Wan, and Padmé as they try to rescue Jabba the Hutt\'s son and fight against the droid army of the Separatists.</p>', 300, '{\"large\": \"https://joakimottosson.se/projects/mi-products/product/15-product_image.jpg\", \"thumbnail\": \"https://joakimottosson.se/projects/mi-products/thumbnails/15-product_image.jpg\"}', 'instock', 7, 0),
(16, 'The Old Republic', '<p>A massively multiplayer online role-playing game set in the Star Wars universe, it takes place thousands of years before the events.</p>', 470, '{\"large\": \"https://joakimottosson.se/projects/mi-products/product/16-product_image.jpg\", \"thumbnail\": \"https://joakimottosson.se/projects/mi-products/thumbnails/16-product_image.jpg\"}', 'instock', 32, 0),
(17, 'Knights of the Old Republic', '<p>A role-playing video game set in the Old Republic era, it follows a character who is caught in the middle of a war between the Jedi and the Sith.</p>', 410, '{\"large\": \"https://joakimottosson.se/projects/mi-products/product/17-product_image.jpg\", \"thumbnail\": \"https://joakimottosson.se/projects/mi-products/thumbnails/17-product_image.jpg\"}', 'instock', 17, 0),
(18, 'X-Wing', '<p>A space combat simulation game set during the original trilogy, it puts players in the role of a rebel pilot fighting against the Empire.</p>', 440, '{\"large\": \"https://joakimottosson.se/projects/mi-products/product/18-product_image.jpg\", \"thumbnail\": \"https://joakimottosson.se/projects/mi-products/thumbnails/18-product_image.jpg\"}', 'instock', 9, 0),
(19, 'TIE Fighter', '<p>A space combat simulation game that is a spin-off of X-Wing, it puts players in the role of an Imperial pilot fighting against the Rebel Alliance.</p>', 1200, '{\"large\": \"https://joakimottosson.se/projects/mi-products/product/19-product_image.jpg\", \"thumbnail\": \"https://joakimottosson.se/projects/mi-products/thumbnails/19-product_image.jpg\"}', 'instock', 15, 0),
(20, 'Jedi Knight', '<p>A series of first-person shooter and action-adventure games that focuses on the character Kyle Katarn, a former Imperial agent turned Jedi Knight, as he battles the Empire and the Dark Jedi.</p>', 650, '{\"large\": \"https://joakimottosson.se/projects/mi-products/product/20-product_image.jpg\", \"thumbnail\": \"https://joakimottosson.se/projects/mi-products/thumbnails/20-product_image.jpg\"}', 'instock', 3, 0),
(21, 'Jockes Star Wars', '<p>About a crazy person who controls the Death Star</p>', 200, '{\"large\":\"https://joakimottosson.se/projects/mi-products/product/01-product_image.jpg\",\"thumbnail\":\"https://joakimottosson.se/projects/mi-products/thumbnails/01-product_image.jpg\"}', 'instock', 32, 0),
(22, 'Super duper dunder gun', '<p>Crazy Star Wars gun</p>', 200, '{\"large\":\"https://joakimottosson.se/projects/mi-products/product/01-product_image.jpg\",\"thumbnail\":\"https://joakimottosson.se/projects/mi-products/thumbnails/01-product_image.jpg\"}', 'instock', 32, 0),
(23, 'This is just a test product', '<p>Testing with a new product</p>', 250, '{\"large\":\"https://joakimottosson.se/projects/mi-products/product/01-product_image.jpg\",\"thumbnail\":\"https://joakimottosson.se/projects/mi-products/thumbnails/01-product_image.jpg\"}', 'instock', 12, 0),
(24, 'Another product', '<p>Testing with a new product</p>', 550, '{\"large\":\"https://joakimottosson.se/projects/mi-products/product/01-product_image.jpg\",\"thumbnail\":\"https://joakimottosson.se/projects/mi-products/thumbnails/01-product_image.jpg\"}', 'instock', 22, 0),
(25, 'Test product', '<p>Description</p>', 550, '{\"large\":\"https://joakimottosson.se/projects/mi-products/product/01-product_image.jpg\",\"thumbnail\":\"https://joakimottosson.se/projects/mi-products/thumbnails/01-product_image.jpg\"}', 'instock', 22, 0);

-- --------------------------------------------------------

--
-- Tabellstruktur `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) NOT NULL,
  `checksum` varchar(64) NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) NOT NULL,
  `logs` text DEFAULT NULL,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `applied_steps_count` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumpning av Data i tabell `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('e843583f-803d-4bcb-994b-6cc42ec75fa1', 'b7d885496756f44ec55a122a7ea03f1256c3291c84a3aeb3af0152157f025195', '2023-02-03 14:11:24.821', '20230203140345_secondversion', NULL, NULL, '2023-02-03 14:11:23.109', 1);

--
-- Index för dumpade tabeller
--

--
-- Index för tabell `Order`
--
ALTER TABLE `Order`
  ADD PRIMARY KEY (`id`);

--
-- Index för tabell `OrderItems`
--
ALTER TABLE `OrderItems`
  ADD PRIMARY KEY (`id`),
  ADD KEY `OrderItems_order_id_fkey` (`order_id`),
  ADD KEY `OrderItems_product_id_fkey` (`product_id`);

--
-- Index för tabell `Products`
--
ALTER TABLE `Products`
  ADD PRIMARY KEY (`id`);

--
-- Index för tabell `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT för dumpade tabeller
--

--
-- AUTO_INCREMENT för tabell `Order`
--
ALTER TABLE `Order`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT för tabell `OrderItems`
--
ALTER TABLE `OrderItems`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT för tabell `Products`
--
ALTER TABLE `Products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- Restriktioner för dumpade tabeller
--

--
-- Restriktioner för tabell `OrderItems`
--
ALTER TABLE `OrderItems`
  ADD CONSTRAINT `OrderItems_order_id_fkey` FOREIGN KEY (`order_id`) REFERENCES `Order` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `OrderItems_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `Products` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
