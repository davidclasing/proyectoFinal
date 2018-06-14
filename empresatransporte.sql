-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-06-2018 a las 14:29:11
-- Versión del servidor: 10.1.32-MariaDB
-- Versión de PHP: 7.2.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `empresatransporte`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

CREATE TABLE `pedidos` (
  `cod_pedido` int(255) NOT NULL,
  `matricula_trans` varchar(7) COLLATE utf8_spanish2_ci NOT NULL,
  `origen` varchar(500) COLLATE utf8_spanish2_ci NOT NULL,
  `destino` varchar(500) COLLATE utf8_spanish2_ci NOT NULL,
  `peso` int(10) NOT NULL,
  `descripcion` varchar(800) COLLATE utf8_spanish2_ci NOT NULL,
  `empresa_destino` varchar(500) COLLATE utf8_spanish2_ci NOT NULL,
  `fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `pedidos`
--

INSERT INTO `pedidos` (`cod_pedido`, `matricula_trans`, `origen`, `destino`, `peso`, `descripcion`, `empresa_destino`, `fecha`) VALUES
(2, '1234eee', 'Calle Nitra 16 Guadalajara', 'Badajoz', 40, 'Juguetes', 'Toy R\' Us', '2018-05-22'),
(3, '1234dla', 'Barcelona', 'Badajoz', 40, 'Juguetes', 'Toy R\' Us', '2018-06-06'),
(4, '1234dla', 'Barcelona', 'Cadiz', 90, 'Juguetes', 'Toy R\' Us', '2018-06-06');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `transportistas`
--

CREATE TABLE `transportistas` (
  `id` int(11) NOT NULL,
  `matricula` varchar(7) COLLATE utf8_spanish2_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `nombre` varchar(52) COLLATE utf8_spanish2_ci NOT NULL,
  `apellido1` varchar(52) COLLATE utf8_spanish2_ci NOT NULL,
  `apellido2` varchar(52) COLLATE utf8_spanish2_ci NOT NULL,
  `fechaNac` date NOT NULL,
  `direccion` varchar(128) COLLATE utf8_spanish2_ci NOT NULL,
  `ciudad` varchar(128) COLLATE utf8_spanish2_ci NOT NULL,
  `provincia` varchar(128) COLLATE utf8_spanish2_ci NOT NULL,
  `pais` varchar(128) COLLATE utf8_spanish2_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `telefono` int(12) NOT NULL,
  `CP` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `transportistas`
--

INSERT INTO `transportistas` (`id`, `matricula`, `password`, `nombre`, `apellido1`, `apellido2`, `fechaNac`, `direccion`, `ciudad`, `provincia`, `pais`, `email`, `telefono`, `CP`) VALUES
(2, '1234eee', '', 'David', 'Lopez', 'Lopez', '0111-11-11', 'Plaza Las Burgas 7 3C', 'Guadalajara', 'Guadalajara', 'EspaÃ±a', 'diviiii98@gmail.com', 649087486, 19004),
(3, '1343ert', '', 'David', 'Lopez', 'Lopez', '1111-11-11', 'Plaza Las Burgas 7 3C', 'Guadalajara', 'Guadalajara', 'EspaÃ±a', 'diviiii98@gmail.com', 649087486, 19004),
(4, '1234abc', '', 'David', 'Lopez', 'Lopez', '1111-11-11', 'Plaza Las Burgas 7 3C', 'Guadalajara', 'Guadalajara', 'EspaÃ±a', 'diviiii98@gmail.com', 649087486, 19004),
(5, '1234acd', '', 'David', 'Lopez', 'Lopez', '1111-11-11', 'Plaza Las Burgas 7 3C', 'Guadalajara', 'Guadalajara', 'EspaÃ±a', 'diviiii98@gmail.com', 649087486, 19004),
(6, '1234dla', '', 'David', 'Lopez', 'Lopez', '0111-11-11', 'Plaza Las Burgas 7 3C', 'Guadalajara', 'Guadalajara', 'EspaÃ±a', 'diviiii98@gmail.com', 649087486, 19004),
(7, '1234gfa', '', 'aaaaaa', 'aaaaaaa', 'aaaaaaaaaaa', '0111-11-11', 'aaa', 'Guadalajara', 'Guadalajara', 'EspaÃ±a', 'diviiii98@gmail.com', 649087486, 19004),
(8, '1234asd', '1234asd%aaaaaa', 'aaaaaa', 'aaaaaaa', 'aaaaaaaaaaa', '0111-11-11', 'aaa', 'Guadalajara', 'Guadalajara', 'EspaÃ±a', 'diviiii98@gmail.com', 649087486, 19004),
(9, '1234qwe', '1234qwe%aaaaaa', 'aaaaaa', 'aaaaaaa', 'aaaaaaaaaaa', '0111-11-11', 'aaa', 'Guadalajara', 'Guadalajara', 'EspaÃ±a', 'diviiii98@gmail.com', 649087486, 19004),
(10, '1234awe', '1234awe%aaaaaa', 'aaaaaa', 'aaaaaaa', 'aaaaaaaaaaa', '0111-11-11', 'aaa', 'Guadalajara', 'Guadalajara', 'EspaÃ±a', 'diviiii98@gmail.com', 649087486, 19004),
(11, '1234ppp', '1234ppp%aaaaaa', 'aaaaaa', 'aaaaaaa', 'aaaaaaaaaaa', '0111-11-11', 'aaa', 'Guadalajara', 'Guadalajara', 'EspaÃ±a', 'diviiii98@gmail.com', 649087486, 19004),
(12, '1234ERD', '1234ERD%Carlos', 'Carlos', 'aaaaaaa', 'aaaaaaaaaaa', '0111-11-11', 'aaa', 'Guadalajara', 'Guadalajara', 'EspaÃ±a', 'diviiii98@gmail.com', 649087486, 19004),
(13, '1234ERC', '1234ERC%Carlos', 'Carlos', 'aaaaaaa', 'aaaaaaaaaaa', '0111-11-11', 'aaa', 'Guadalajara', 'Guadalajara', 'EspaÃ±a', 'diviiii98@gmail.com', 649087486, 19004),
(14, '1234EAP', '1234EAP%Carlos', 'Carlos', 'aaaaaaa', 'aaaaaaaaaaa', '0111-11-11', 'aaa', 'Guadalajara', 'Guadalajara', 'EspaÃ±a', 'diviiii98@gmail.com', 649087486, 19004),
(15, '5024DDB', '5024DDB%David', 'David', 'Lopez', 'Diaz', '1998-09-06', 'Plaza Las Burgas 7 3C', 'Guadalajara', 'Guadalajara', 'EspaÃ±a', 'diviiii98@gmail.com', 649087486, 19004);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `IDUSER` int(255) NOT NULL,
  `nombre` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `nickName` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `apellido1` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `password` varchar(513) COLLATE utf8_spanish2_ci NOT NULL,
  `apellido2` varchar(255) COLLATE utf8_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`IDUSER`, `nombre`, `nickName`, `apellido1`, `email`, `password`, `apellido2`) VALUES
(1, 'admin', 'admin', 'admin', 'admin@admin.com', '21232f297a57a5a743894a0e4a801fc3', 'admin');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`cod_pedido`),
  ADD KEY `pedido_trans` (`matricula_trans`);

--
-- Indices de la tabla `transportistas`
--
ALTER TABLE `transportistas`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `matricula` (`matricula`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`IDUSER`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `cod_pedido` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `transportistas`
--
ALTER TABLE `transportistas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `IDUSER` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD CONSTRAINT `pedido_trans` FOREIGN KEY (`matricula_trans`) REFERENCES `transportistas` (`matricula`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
