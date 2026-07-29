CREATE TABLE `intercambiocategoria` (
  `id` INTEGER NOT NULL,
  `codigo` VARCHAR(191) NOT NULL,
  `nombre` VARCHAR(191) NOT NULL,
  `estado` TINYINT NOT NULL DEFAULT 1,
  `creado_en` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `actualizado_en` DATETIME(3) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `intercambiocategoria_codigo_key` (`codigo`),
  INDEX `intercambiocategoria_estado_nombre_idx` (`estado`, `nombre`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `intercambiosubcategoria` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `categoria_id` INTEGER NOT NULL,
  `codigo` VARCHAR(191) NOT NULL,
  `nombre` VARCHAR(191) NOT NULL,
  `energia_kcal` DECIMAL(8,2) NOT NULL,
  `proteina_g` DECIMAL(8,2) NOT NULL,
  `lipidos_g` DECIMAL(8,2) NOT NULL,
  `carbohidratos_g` DECIMAL(8,2) NOT NULL,
  `estado` TINYINT NOT NULL DEFAULT 1,
  `creado_en` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `actualizado_en` DATETIME(3) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `intercambiosubcategoria_codigo_key` (`codigo`),
  INDEX `intercambiosubcategoria_categoria_id_estado_nombre_idx` (`categoria_id`, `estado`, `nombre`),
  CONSTRAINT `intercambiosubcategoria_categoria_id_fkey` FOREIGN KEY (`categoria_id`) REFERENCES `intercambiocategoria` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `intercambioalimento` (
  `id` VARCHAR(191) NOT NULL,
  `codigo` VARCHAR(191) NOT NULL,
  `categoria_id` INTEGER NOT NULL,
  `subcategoria_id` INTEGER NOT NULL,
  `nombre` VARCHAR(191) NOT NULL,
  `peso_gramos` DECIMAL(8,2) NOT NULL,
  `medida_casera` VARCHAR(191) NOT NULL,
  `fuente` VARCHAR(191) NOT NULL DEFAULT 'Guía de intercambio de alimentos — INS/CENAN/MINSA, primera edición, noviembre de 2014',
  `estado` TINYINT NOT NULL DEFAULT 1,
  `creado_en` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `actualizado_en` DATETIME(3) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `intercambioalimento_codigo_key` (`codigo`),
  INDEX `intercambioalimento_nombre_idx` (`nombre`),
  INDEX `intercambioalimento_categoria_id_subcategoria_id_estado_idx` (`categoria_id`, `subcategoria_id`, `estado`),
  INDEX `intercambioalimento_estado_nombre_idx` (`estado`, `nombre`),
  CONSTRAINT `intercambioalimento_categoria_id_fkey` FOREIGN KEY (`categoria_id`) REFERENCES `intercambiocategoria` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `intercambioalimento_subcategoria_id_fkey` FOREIGN KEY (`subcategoria_id`) REFERENCES `intercambiosubcategoria` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
