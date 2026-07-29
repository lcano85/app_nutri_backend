const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const fuente = 'Guía de intercambio de alimentos — INS/CENAN/MINSA, primera edición, noviembre de 2014';

const categorias = [
  [1, 'G1', 'Cereales, tubérculos y menestras'],
  [2, 'G2', 'Verduras'],
  [3, 'G3', 'Frutas'],
  [4, 'G4', 'Lácteos y derivados'],
  [5, 'G5', 'Carnes, pescados y huevos'],
  [6, 'G6', 'Azúcares y derivados'],
  [7, 'G7', 'Grasas'],
];

const subcategorias = [
  ['G1_GENERAL', 1, 'General', 135, 5, 1, 25],
  ['G2_GENERAL', 2, 'General', 25, 1, 0, 5],
  ['G3_GENERAL', 3, 'General', 55, 1, 1, 13],
  ['G4_ALTOS_GRASA', 4, 'Altos en grasa', 130, 7, 7, 10],
  ['G4_BAJOS_GRASA', 4, 'Bajos en grasa', 65, 5, 1, 10],
  ['G4_QUESOS_ALTOS_GRASA', 4, 'Quesos altos en grasa', 130, 10, 9, 1],
  ['G5_ALTOS_GRASA', 5, 'Altos en grasa', 130, 12, 9, 0],
  ['G5_BAJOS_GRASA', 5, 'Bajos en grasa', 55, 11, 1, 0],
  ['G6_GENERAL', 6, 'General', 20, 0, 0, 6],
  ['G7_ACEITES', 7, 'Aceites', 90, 0, 10, 0],
  ['G7_OLEAGINOSAS', 7, 'Oleaginosas', 110, 4, 10, 4],
];

const datos = {
  G1_GENERAL: [
    ['Arroz cocido',118,'7 cucharadas llenas o 3/4 de taza'],['Arroz crudo',38,'2 cucharadas llenas'],
    ['Avena en hojuela',41,'3 cucharadas llenas'],['Fideos tallarín crudo',44,'1/2 taza'],
    ['Fideos tallarín cocido',110,'3/4 de taza'],['Galleta de soda',31,'9 unidades'],
    ['Maíz cancha tostada',40,'4 cucharadas llenas o 1/3 de taza'],['Maíz choclo crudo',117,'3/4 de taza o 1 trozo'],
    ['Maíz mote cocido',131,'2/3 de taza'],['Pan francés',49,'1 1/2 unidades'],
    ['Pan de molde',45,'2 unidades'],['Quinua cocida',157,'8 cucharadas llenas o 3/4 de taza'],
    ['Quinua cruda',39,'3 cucharadas llenas'],['Trigo cocido',149,'8 cucharadas llenas o 3/4 de taza'],
    ['Trigo crudo',38,'3 cucharadas llenas'],['Harina de trigo',38,'3 cucharadas llenas'],
    ['Betarraga cruda',314,'1 unidad grande'],['Camote amarillo crudo',116,'1 unidad mediana'],
    ['Camote amarillo cocido',113,'1 unidad mediana'],['Olluco picado',218,'9 unidades pequeñas o 1 taza'],
    ['Papa amarilla cruda',131,'1 unidad mediana'],['Papa amarilla cocida',128,'1 unidad mediana'],
    ['Papa blanca cruda',139,'1 unidad pequeña'],['Papa blanca cocida',97,'1 unidad pequeña'],
    ['Papa moraya o chuño crudo',42,'3 unidades medianas'],['Yuca blanca cocida',90,'1 rodaja pequeña'],
    ['Yuca blanca cruda',83,'1 rodaja pequeña'],['Arvejas frescas crudas',127,'3/4 de taza'],
    ['Arvejas secas crudas',38,'3 cucharadas llenas'],['Frijoles canario cocidos',159,'3/4 de taza'],
    ['Frijoles canario crudos',40,'2 cucharadas llenas'],['Frijoles castilla crudos',41,'2 cucharadas llenas'],
    ['Garbanzos cocidos',136,'3/4 de taza'],['Garbanzos crudos',37,'2 cucharadas llenas'],
    ['Habas frescas P.C.',89,'1/2 taza'],['Lentejas chicas cocidas',139,'3/4 de taza'],
    ['Lentejas crudas',40,'3 cucharadas llenas'],['Pallares secos cocidos',131,'3/4 de taza'],
    ['Pallares secos crudos',41,'2 cucharadas llenas'],
  ],
  G2_GENERAL: [
    ['Acelga picada cruda',96,'1 taza'],['Apio picado crudo',124,'1 taza'],['Berenjena cruda P.C.',70,'3 rodajas'],
    ['Brócoli crudo',65,'10 ramitas o 2/3 de taza'],['Brócoli cocido',100,'1 taza'],['Caigua cruda',173,'1 unidad grande'],
    ['Cebolla de cabeza cruda',53,'1/2 unidad pequeña'],['Col crespa cruda',108,'3/4 de taza'],
    ['Coliflor picada cruda',93,'3/4 de taza'],['Espinaca negra picada cruda',81,'1 1/2 tazas'],
    ['Lechuga redonda picada cruda',217,'1 unidad mediana o 2 tazas'],['Nabo crudo',163,'1 unidad mediana'],
    ['Pepinillo sin cáscara crudo',236,'18 rodajas o 1/2 unidad mediana'],['Rabanito picado crudo',186,'6 unidades medianas o 1 1/2 tazas'],
    ['Tomate crudo',137,'1 unidad mediana o 9 rodajas'],['Vainitas picadas crudas',70,'1/2 taza'],
    ['Zanahoria picada cruda',63,'1 unidad pequeña o 1/2 taza'],['Zapallo macre crudo',100,'1 trozo pequeño o 3 tajadas gruesas'],
  ],
  G3_GENERAL: [
    ['Carambola P.C.',157,'1 unidad grande'],['Chirimoya P.C.',63,'1/4 de unidad grande'],['Ciruela P.C.',67,'2 unidades medianas'],
    ['Cocona P.C.',134,'1 unidad mediana'],['Fresa P.C.',134,'9 unidades medianas'],['Granadilla P.C.',69,'1 unidad mediana'],
    ['Jugo de limón',183,'3/4 de taza'],['Jugo de naranja agria',167,'2/3 de taza'],['Mandarina P.C.',157,'1 unidad mediana'],
    ['Mango P.C.',92,'1 unidad pequeña'],['Manzana P.C.',102,'1 unidad pequeña'],['Melocotón P.C.',86,'1 unidad mediana'],
    ['Melón P.C.',239,'1 tajada mediana'],['Membrillo P.C.',128,'1 unidad mediana'],['Naranja P.C.',138,'1 unidad pequeña'],
    ['Papaya picada',172,'3/4 de taza'],['Pera P.C.',100,'1 unidad pequeña'],['Piña P.C.',145,'1 rodaja mediana'],
    ['Plátano de isla P.C.',60,'1/2 unidad mediana'],['Plátano de seda P.C.',66,'1/2 unidad mediana'],
    ['Plátano maduro P.C.',49,'1/2 unidad pequeña'],['Plátano manzano P.C.',61,'1 unidad pequeña'],
    ['Sandía P.C.',229,'1 tajada mediana'],['Tumbo serrano P.C.',86,'2 unidades medianas'],['Tuna P.C.',95,'1 unidad mediana'],
    ['Uva P.C.',82,'10 unidades'],
  ],
  G4_ALTOS_GRASA: [
    ['Leche en polvo entera',27,'3 cucharadas llenas'],['Leche evaporada entera',98,'1/3 vaso o 1/4 taza'],
    ['Leche fresca de vaca',206,'3/4 vaso o 2/3 taza'],['Yogur de leche entera',213,'3/4 vaso o 2/3 taza'],
  ],
  G4_BAJOS_GRASA: [
    ['Leche evaporada descremada',82,'1/3 vaso o 1/4 taza'],['Yogur frutado descremado',68,'1/3 vaso o 1/4 taza'],
  ],
  G4_QUESOS_ALTOS_GRASA: [['Queso fresco de vaca',49,'1 tajada mediana'],['Queso mantecoso',33,'1 tajada mediana']],
  G5_ALTOS_GRASA: [
    ['Cerdo pulpa',36,'1/2 filete mediano'],['Huevo de codorniz cocido',78,'9 unidades'],
    ['Huevo de gallina cocido',92,'2 unidades pequeñas'],['Jamón del país',51,'3 rodajas'],
    ['Atún en conserva',69,'4 cucharadas llenas'],['Pollo, corazón crudo',85,'10 unidades'],['Res, hígado crudo',102,'1 filete mediano'],
  ],
  G5_BAJOS_GRASA: [
    ['Pescado anchoveta crudo',35,'2 unidades'],['Pescado fresco crudo',46,'1/2 filete mediano'],
    ['Pollo, carne pulpa cruda',46,'1/2 filete mediano'],['Pollo, hígado',44,'1 unidad pequeña'],
    ['Pollo, sangre cocida',80,'6 cucharadas llenas'],['Pota picada cruda',54,'1/4 de taza'],
    ['Res, carne pulpa cruda',52,'1/2 filete mediano'],['Res, bofe crudo',66,'1/2 de taza'],['Res, riñón crudo',61,'1/2 de taza'],
  ],
  G6_GENERAL: [['Azúcar',6,'1 cucharadita'],['Chancaca',6,'1 cucharadita'],['Chocolate con azúcar',8,'1 cucharadita'],['Mermelada de fresa',10,'2 cucharaditas'],['Miel de abeja',6,'1 cucharadita']],
  G7_ACEITES: [['Aceite vegetal',10,'2 cucharaditas'],['Mantequilla',12,'1 cucharada llena'],['Margarina',13,'1 cucharada llena']],
  G7_OLEAGINOSAS: [['Almendras',19,'17 unidades'],['Maní crudo',20,'20 unidades'],['Nueces',17,'5 unidades']],
};

async function main() {
  for (const [id, codigo, nombre] of categorias) {
    await prisma.intercambiocategoria.upsert({
      where: { id }, update: { codigo, nombre, estado: 1 }, create: { id, codigo, nombre },
    });
  }
  const ids = {};
  for (const [codigo, categoria_id, nombre, energia_kcal, proteina_g, lipidos_g, carbohidratos_g] of subcategorias) {
    const row = await prisma.intercambiosubcategoria.upsert({
      where: { codigo },
      update: { categoria_id, nombre, energia_kcal, proteina_g, lipidos_g, carbohidratos_g, estado: 1 },
      create: { codigo, categoria_id, nombre, energia_kcal, proteina_g, lipidos_g, carbohidratos_g },
    });
    ids[codigo] = row.id;
  }
  let correlativo = 0;
  for (const [subcategoriaCodigo, alimentos] of Object.entries(datos)) {
    const categoria_id = subcategorias.find(([codigo]) => codigo === subcategoriaCodigo)[1];
    for (const [nombre, peso_gramos, medida_casera] of alimentos) {
      correlativo += 1;
      const codigo = `IA${String(correlativo).padStart(3, '0')}`;
      await prisma.intercambioalimento.upsert({
        where: { codigo },
        update: { categoria_id, subcategoria_id: ids[subcategoriaCodigo], nombre, peso_gramos, medida_casera, fuente, estado: 1 },
        create: { codigo, categoria_id, subcategoria_id: ids[subcategoriaCodigo], nombre, peso_gramos, medida_casera, fuente },
      });
    }
  }
  if (correlativo !== 118) throw new Error(`Se esperaban 118 alimentos y se prepararon ${correlativo}.`);
  console.log(`Importación completada: ${correlativo} alimentos, ${categorias.length} grupos y ${subcategorias.length} listas nutricionales.`);
}

main().finally(() => prisma.$disconnect());
