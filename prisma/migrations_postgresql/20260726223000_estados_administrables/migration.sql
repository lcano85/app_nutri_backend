CREATE TABLE "Status" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "description" TEXT,
    "color" TEXT NOT NULL DEFAULT 'emerald',
    "active" BOOLEAN NOT NULL DEFAULT true,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "Status_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "Status_name_key" ON "Status"("name");
CREATE UNIQUE INDEX "Status_code_key" ON "Status"("code");

INSERT INTO "Status" ("id", "name", "code", "description", "color", "sortOrder", "updatedAt") VALUES
('estado-activo', 'Activo', 'ACTIVO', 'Usuario habilitado para ingresar', 'emerald', 1, CURRENT_TIMESTAMP),
('estado-invitado', 'Invitado', 'INVITADO', 'Usuario pendiente de completar su acceso', 'amber', 2, CURRENT_TIMESTAMP),
('estado-suspendido', 'Suspendido', 'SUSPENDIDO', 'Acceso temporalmente bloqueado', 'red', 3, CURRENT_TIMESTAMP);

ALTER TABLE "User" ADD COLUMN "statusId" TEXT;
UPDATE "User" SET "statusId" = CASE
  WHEN "status"::text = 'ACTIVE' THEN 'estado-activo'
  WHEN "status"::text = 'INVITED' THEN 'estado-invitado'
  ELSE 'estado-suspendido'
END;
ALTER TABLE "User" ALTER COLUMN "statusId" SET NOT NULL;
ALTER TABLE "User" DROP COLUMN "status";
DROP TYPE "UserStatus";

CREATE INDEX "User_statusId_idx" ON "User"("statusId");
ALTER TABLE "User" ADD CONSTRAINT "User_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "Status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
