-- CreateTable
CREATE TABLE "AboutUs" (
    "id" SERIAL NOT NULL,
    "metaTitle" TEXT NOT NULL,
    "metaDescription" TEXT NOT NULL,
    "projects" INTEGER NOT NULL,
    "freeCourse" INTEGER NOT NULL,
    "employess" INTEGER NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "AboutUs_pkey" PRIMARY KEY ("id")
);
