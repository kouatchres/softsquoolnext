# Migration `20210322234434-division_added`

This migration has been generated by Kouatchoua Mark at 3/23/2021, 12:44:34 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "Region" DROP COLUMN "reCode",
ADD COLUMN     "regCode" TEXT NOT NULL

ALTER TABLE "User" ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "image" TEXT NOT NULL

CREATE TABLE "Division" (
    "id" TEXT NOT NULL,
    "divisionName" TEXT NOT NULL,
    "divisionCode" TEXT NOT NULL,

    PRIMARY KEY ("id")
)
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20210322112004-trial..20210322234434-division_added
--- datamodel.dml
+++ datamodel.dml
@@ -1,21 +1,30 @@
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider = "prisma-client-js"
 }
 model User {
-  id   String @id @default(cuid())
-  name String
+  id    String @id @default(cuid())
+  name  String
+  email String
+  image String
 }
 model Region {
   id      String @id @default(cuid())
   regName String
-  reCode  String
+  regCode String
 }
+
+model Division {
+  id           String @id @default(cuid())
+  divisionName String
+  divisionCode String
+
+}
```

