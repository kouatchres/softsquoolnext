# Migration `20210323001359-relation_for_town`

This migration has been generated by Kouatchoua Mark at 3/23/2021, 1:14:00 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "Division" ADD COLUMN     "regionId" TEXT

ALTER TABLE "Town" ADD COLUMN     "divisionId" TEXT

ALTER TABLE "Division" ADD FOREIGN KEY("regionId")REFERENCES "Region"("id") ON DELETE SET NULL ON UPDATE CASCADE

ALTER TABLE "Town" ADD FOREIGN KEY("divisionId")REFERENCES "Division"("id") ON DELETE SET NULL ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20210322235447-town_added..20210323001359-relation_for_town
--- datamodel.dml
+++ datamodel.dml
@@ -1,7 +1,7 @@
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider = "prisma-client-js"
@@ -15,23 +15,29 @@
 }
 model Region {
-  id      String @id @default(cuid())
-  regName String
-  regCode String
+  id       String     @id @default(cuid())
+  regName  String
+  regCode  String
+  division Division[]
 }
 model Division {
   id           String @id @default(cuid())
   divisionName String
   divisionCode String
+  town         Town[]
+  Region   Region? @relation(fields: [regionId], references: [id])
+  regionId String?
 }
 model Town {
   id       String @id @default(cuid())
   townName String
   townCode String
+  Division   Division? @relation(fields: [divisionId], references: [id])
+  divisionId String?
 }
```

