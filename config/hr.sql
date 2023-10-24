-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-10-2023 a las 05:20:25
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `hr`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `employee`
--

CREATE TABLE `employee` (
  `employee_id` int(11) NOT NULL,
  `employee_name` varchar(20) NOT NULL,
  `employee_surnames` varchar(50) NOT NULL,
  `employee_phone` varchar(50) NOT NULL,
  `employee_email` varchar(50) NOT NULL,
  `employee_address` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `employee`
--

INSERT INTO `employee` (`employee_id`, `employee_name`, `employee_surnames`, `employee_phone`, `employee_email`, `employee_address`) VALUES
(4, 'Rodrigo', 'Anaya Hurtado', '4421231277', 'rodrigoanayahurtado@gmail.com', 'Tec.de Mexico 85, El Porvenir, 76158 Santiago de Querétaro, Qro.'),
(5, 'Cristian Julian', 'Melgar Zarraval', '5572217410', 'cristianjulianmelgarzarraval@hotmail.com', 'Universidad 231, Avenida de las Campanas 33, Las Campanas, 76010 Santiago de Querétaro, Qro.'),
(6, 'Mauricio', 'Arredondo Moreno', '4429282837', 'mauricioArredondo@gmail.com', 'Peña Blanca 111, Las Peñitas, 76158 Santiago de Querétaro, Qro.'),
(7, 'Carlos', 'Pérez López', '4421231233', 'carlosperezlopez@gmail.com', 'Av. Universidad 300, Centro Universitario, 76010 Santiago de Querétaro, Qro.'),
(8, 'Ana', 'Gómez Martínez', '4421231234', 'anagomezmartinez@gmail.com', 'Av. 5 de Febrero 104, Niños Héroes, 76010 Santiago de Querétaro, Qro.'),
(9, 'Juan', 'Hernández García', '4421231251', 'juanhernandezgarcia@gmail.com', 'Calle Madero 37, Centro, 76000 Santiago de Querétaro, Qro.'),
(10, 'Luis', 'Ramírez Juárez', '4421231252', 'luisramirezjuarez@gmail.com', 'Calle Corregidora 32, Centro, 76000 Santiago de Querétaro, Qro.'),
(11, 'María', 'Fernández Guzmán', '4421231253', 'mariafernandezguzman@gmail.com', 'Calle Independencia 45, Centro, 76000 Santiago de Querétaro, Qro.'),
(12, 'Jorge', 'Torres Pineda', '4421231254', 'jorgetorrespineda@gmail.com', 'Calle Guerrero 12, Centro, 76000 Santiago de Querétaro, Qro.'),
(13, 'Miguel', 'Castillo Mendoza', '4421231271', 'miguelcastillomendoza@gmail.com', 'Calle Allende 10, Centro, 76000 Santiago de Querétaro, Qro.'),
(14, 'Pedro', 'González Ríos', '4421231272', 'pedrogonzalezrios@gmail.com', 'Calle Zaragoza 15, Centro, 76000 Santiago de Querétaro, Qro.'),
(15, 'Laura', 'Vargas Peña', '4421231273', 'lauravargaspena@gmail.com', 'Calle Hidalgo 20, Centro, 76000 Santiago de Querétaro, Qro.'),
(16, 'Ricardo', 'Méndez Sánchez', '4421231274', 'ricardomendezsanchez@gmail.com', 'Calle Morelos 25, Centro, 76000 Santiago de Querétaro, Qro.'),
(17, 'Fernando', 'Romero Herrera', '4421231291', 'fernandoromeroherrera@gmail.com', 'Calle Juárez 5, Centro, 76000 Santiago de Querétaro, Qro.'),
(18, 'Mauricio', 'López Juárez', '4421231292', 'mauriciolopezjuarez@gmail.com', 'Calle Arteaga 10, Centro, 76000 Santiago de Querétaro, Qro.'),
(19, 'Laura', 'Martínez Pineda', '4421231293', 'lauramartinezpineda@gmail.com', 'Calle Aldama 15, Centro, 76000 Santiago de Querétaro, Qro.'),
(20, 'Jorge', 'Hernández Mendoza', '4421231294', 'jorgehernandezmendoza@gmail.com', 'Calle Matamoros 20, Centro, 76000 Santiago de Querétaro, Qro.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(20) NOT NULL,
  `user_mail` varchar(50) NOT NULL,
  `user_password` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`user_id`, `user_name`, `user_mail`, `user_password`) VALUES
(1, 'Erick Díaz', 'erickdiaz@gmail.com', 'prueba123');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`employee_id`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `employee`
--
ALTER TABLE `employee`
  MODIFY `employee_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
