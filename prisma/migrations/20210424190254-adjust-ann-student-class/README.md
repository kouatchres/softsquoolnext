# Migration `20210424190254-adjust-ann-student-class`

This migration has been generated by Kouatchoua Mark at 4/24/2021, 8:02:54 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql

```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20210424135240-prof-modifications..20210424190254-adjust-ann-student-class
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
@@ -66,9 +66,9 @@
 model School {
   id               String    @id @default(cuid())
   schoolName       String
-  schoolNumber     Int
+  schoolNumber     Int       @unique
   schoolSecretCode String    @unique
   schoolCode       String
   section          Section[]
   Town             Town      @relation(fields: [townId], references: [id])
@@ -222,9 +222,9 @@
   student2ndName      String
   student3rdName      String
   placeOfBirth        String
   phoneNumber         Int
-  studentSecretCode   String
+  studentSecretCode   String                @unique
   gender              String
   email               String
   studentMatricule    String
   image               String
@@ -234,34 +234,28 @@
   updatedAt           DateTime              @default(now()) @updatedAt
 }
 model AnnStudentClassroom {
-  id               String     @id @default(cuid())
-  student1stName   String
-  student2ndName   String
-  student3rdName   String
-  sex              String
-  studentMatricule String
-  image            String
-  createdAt        DateTime   @default(now())
-  updatedAt        DateTime   @default(now()) @updatedAt
-  SchoolYear       SchoolYear @relation(fields: [schoolYearId], references: [id])
-  schoolYearId     String
-  Classroom        Classroom  @relation(fields: [classroomId], references: [id])
-  classroomId      String
-  Student          Student    @relation(fields: [studentId], references: [id])
-  studentId        String
-  score            Score[]
-  feePayment       Finance[]
+  id           String     @id @default(cuid())
+  createdAt    DateTime   @default(now())
+  updatedAt    DateTime   @default(now()) @updatedAt
+  SchoolYear   SchoolYear @relation(fields: [schoolYearId], references: [id])
+  schoolYearId String
+  Classroom    Classroom  @relation(fields: [classroomId], references: [id])
+  classroomId  String
+  Student      Student    @relation(fields: [studentId], references: [id])
+  studentId    String
+  score        Score[]
+  feePayment   Finance[]
 }
 model Prof {
   id             String        @id @default(cuid())
   prof1stName    String
   prof2ndName    String
   prof3rdName    String
   profMatricule  String
-  profSecretCode String
+  profSecretCode String        @unique
   gender         String
   image          String
   email          String
   phoneNumber    Int
```


