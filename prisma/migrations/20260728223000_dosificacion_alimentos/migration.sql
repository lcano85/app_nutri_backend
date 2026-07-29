CREATE TABLE `dosificacioncategoria` (
  `id` INTEGER NOT NULL,
  `codigo` VARCHAR(191) NOT NULL,
  `nombre` VARCHAR(191) NOT NULL,
  `estado` TINYINT NOT NULL DEFAULT 1,
  `creado_en` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `actualizado_en` DATETIME(3) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `dosificacioncategoria_codigo_key` (`codigo`),
  INDEX `dosificacioncategoria_estado_nombre_idx` (`estado`, `nombre`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `dosificacionalimento` (
  `id` VARCHAR(191) NOT NULL,
  `codigo` VARCHAR(191) NOT NULL,
  `orden` INTEGER NOT NULL,
  `categoria_id` INTEGER NOT NULL,
  `nombre` VARCHAR(191) NOT NULL,
  `estado` TINYINT NOT NULL DEFAULT 1,
  `creado_en` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `actualizado_en` DATETIME(3) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `dosificacionalimento_codigo_key` (`codigo`),
  UNIQUE INDEX `dosificacionalimento_orden_key` (`orden`),
  INDEX `dosificacionalimento_categoria_id_estado_nombre_idx` (`categoria_id`, `estado`, `nombre`),
  INDEX `dosificacionalimento_nombre_idx` (`nombre`),
  CONSTRAINT `dosificacionalimento_categoria_id_fkey` FOREIGN KEY (`categoria_id`) REFERENCES `dosificacioncategoria` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `dosificacionpreparacion` (
  `id` VARCHAR(191) NOT NULL,
  `alimento_id` VARCHAR(191) NOT NULL,
  `preparacion` VARCHAR(191) NOT NULL,
  `peso_bruto_kg` DECIMAL(10,2) NOT NULL,
  `peso_neto_kg` DECIMAL(10,2) NOT NULL,
  `energia_kcal` DECIMAL(10,2) NULL,
  `proteina_g` DECIMAL(10,2) NULL,
  `grasa_g` DECIMAL(10,2) NULL,
  `carbohidrato_g` DECIMAL(10,2) NULL,
  `hierro_mg` DECIMAL(10,2) NULL,
  `retinol_ug` DECIMAL(12,2) NULL,
  `porcion_comestible_pct` DECIMAL(6,2) NULL,
  `fuente` VARCHAR(191) NOT NULL DEFAULT 'Tabla de dosificación de alimentos para servicios de alimentación colectiva — MINSA/INS/CENAN, 2005',
  `estado` TINYINT NOT NULL DEFAULT 1,
  `creado_en` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `actualizado_en` DATETIME(3) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `dosificacionpreparacion_alimento_id_estado_idx` (`alimento_id`, `estado`),
  INDEX `dosificacionpreparacion_preparacion_idx` (`preparacion`),
  INDEX `dosificacionpreparacion_estado_alimento_id_idx` (`estado`, `alimento_id`),
  CONSTRAINT `dosificacionpreparacion_alimento_id_fkey` FOREIGN KEY (`alimento_id`) REFERENCES `dosificacionalimento` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
