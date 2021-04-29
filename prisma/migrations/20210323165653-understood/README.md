# Migration `20210323165653-understood`

This migration has been generated by Kouatchoua Mark at 3/23/2021, 5:56:53 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql

```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20210323001359-relation_for_town..20210323165653-understood
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
@@ -40,4 +40,20 @@
   Division   Division? @relation(fields: [divisionId], references: [id])
   divisionId String?
 }
+
+
+model Role {
+  id        Int     @id @default(autoincrement())
+  name      String?
+  skills    Skill[]
+}
+
+// 1-n with role
+model Skill {
+  id     Int    @id @default(autoincrement())
+  name   String?
+  role   Role?   @relation(fields: [roleId], references: [id])
+  roleId Int?
+}
+
```

