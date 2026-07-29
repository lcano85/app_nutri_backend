CREATE TABLE `tablaperuanacategoria` (
  `codigo` VARCHAR(191) NOT NULL,
  `nombre` VARCHAR(191) NOT NULL,
  `estado` TINYINT NOT NULL DEFAULT 1,
  `creado_en` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `actualizado_en` DATETIME(3) NOT NULL,
  INDEX `tablaperuanacategoria_estado_nombre_idx` (`estado`, `nombre`),
  PRIMARY KEY (`codigo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

INSERT INTO `tablaperuanacategoria` (`codigo`, `nombre`, `actualizado_en`) VALUES
  ('A', 'Cereales y derivados', CURRENT_TIMESTAMP(3)),
  ('B', 'Verduras, hortalizas y derivados', CURRENT_TIMESTAMP(3)),
  ('C', 'Frutas y derivados', CURRENT_TIMESTAMP(3)),
  ('D', 'Grasas, aceites y oleaginosas', CURRENT_TIMESTAMP(3)),
  ('E', 'Pescados y mariscos', CURRENT_TIMESTAMP(3)),
  ('F', 'Carnes y derivados', CURRENT_TIMESTAMP(3)),
  ('G', 'Leche y derivados', CURRENT_TIMESTAMP(3)),
  ('H', 'Bebidas (alcohólicas y analcohólicas)', CURRENT_TIMESTAMP(3)),
  ('J', 'Huevos y derivados', CURRENT_TIMESTAMP(3)),
  ('K', 'Productos azucarados', CURRENT_TIMESTAMP(3)),
  ('L', 'Misceláneos', CURRENT_TIMESTAMP(3)),
  ('Q', 'Alimentos infantiles', CURRENT_TIMESTAMP(3)),
  ('T', 'Leguminosas y derivados', CURRENT_TIMESTAMP(3)),
  ('U', 'Tubérculos, raíces y derivados', CURRENT_TIMESTAMP(3)),
  ('S', 'Alimentos preparados', CURRENT_TIMESTAMP(3));

ALTER TABLE `tablaperuanaalimento`
  ADD COLUMN `categoria_codigo` VARCHAR(191) NULL;

UPDATE `tablaperuanaalimento`
SET `categoria_codigo` = LEFT(`codigo_grupo`, 1);

ALTER TABLE `tablaperuanaalimento`
  MODIFY `categoria_codigo` VARCHAR(191) NOT NULL,
  ADD INDEX `tablaperuanaalimento_categoria_codigo_idx` (`categoria_codigo`),
  ADD CONSTRAINT `tablaperuanaalimento_categoria_codigo_fkey`
    FOREIGN KEY (`categoria_codigo`) REFERENCES `tablaperuanacategoria` (`codigo`)
    ON DELETE RESTRICT ON UPDATE CASCADE;
