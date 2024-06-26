-- CreateTable
CREATE TABLE "AboutUs" (
    "id" SERIAL NOT NULL,
    "metaTitle_am" VARCHAR(255) NOT NULL,
    "metaTitle_en" VARCHAR(255) NOT NULL,
    "metaTitle_ru" VARCHAR(255) NOT NULL,
    "metaDescription_am" VARCHAR(255) NOT NULL,
    "metaDescription_en" VARCHAR(255) NOT NULL,
    "metaDescription_ru" VARCHAR(255) NOT NULL,
    "projects" INTEGER NOT NULL,
    "freeCourse" INTEGER NOT NULL,
    "employess" INTEGER NOT NULL,
    "content_am" TEXT NOT NULL,
    "content_en" TEXT NOT NULL,
    "content_ru" TEXT NOT NULL,

    CONSTRAINT "AboutUs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AboutWork" (
    "id" SERIAL NOT NULL,
    "work_am" VARCHAR(255) NOT NULL,
    "work_en" VARCHAR(255) NOT NULL,
    "work_ru" VARCHAR(255) NOT NULL,

    CONSTRAINT "AboutWork_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Applicant" (
    "id" SERIAL NOT NULL,
    "fullName" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(255) NOT NULL,
    "isAgreed" BOOLEAN NOT NULL,
    "profession" VARCHAR(255) NOT NULL,
    "level" VARCHAR(255) NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "Applicant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Approach" (
    "id" SERIAL NOT NULL,
    "serviceId" INTEGER NOT NULL,
    "approach_am" VARCHAR(255) NOT NULL,
    "approach_en" VARCHAR(255) NOT NULL,
    "approach_ru" VARCHAR(255) NOT NULL,

    CONSTRAINT "Approach_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Benefits" (
    "id" SERIAL NOT NULL,
    "serviceId" INTEGER NOT NULL,
    "title_am" VARCHAR(255) NOT NULL,
    "title_en" VARCHAR(255) NOT NULL,
    "title_ru" VARCHAR(255) NOT NULL,
    "description_am" VARCHAR(255) NOT NULL,
    "description_en" VARCHAR(255) NOT NULL,
    "description_ru" VARCHAR(255) NOT NULL,

    CONSTRAINT "Benefits_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Blog" (
    "id" SERIAL NOT NULL,
    "metaTitle_am" VARCHAR(255) NOT NULL,
    "metaTitle_en" VARCHAR(255) NOT NULL,
    "metaTitle_ru" VARCHAR(255) NOT NULL,
    "metaDescription_am" VARCHAR(255) NOT NULL,
    "metaDescription_en" VARCHAR(255) NOT NULL,
    "metaDescription_ru" VARCHAR(255) NOT NULL,
    "image" VARCHAR(255) NOT NULL,
    "duration_am" VARCHAR(255) NOT NULL,
    "duration_en" VARCHAR(255) NOT NULL,
    "duration_ru" VARCHAR(255) NOT NULL,
    "content_am" TEXT NOT NULL,
    "content_en" TEXT NOT NULL,
    "content_ru" TEXT NOT NULL,
    "url" VARCHAR(255) NOT NULL,
    "bigImage" VARCHAR(255) NOT NULL,
    "altText" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Blog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Careers" (
    "id" SERIAL NOT NULL,
    "metaTitle_am" VARCHAR(255) NOT NULL,
    "metaTitle_en" VARCHAR(255) NOT NULL,
    "metaTitle_ru" VARCHAR(255) NOT NULL,
    "metaDescription_am" VARCHAR(255) NOT NULL,
    "metaDescription_en" VARCHAR(255) NOT NULL,
    "metaDescription_ru" VARCHAR(255) NOT NULL,
    "url" VARCHAR(255) NOT NULL,
    "term" VARCHAR(255) NOT NULL,
    "type" VARCHAR(255) NOT NULL,
    "location_am" VARCHAR(255) NOT NULL,
    "location_en" VARCHAR(255) NOT NULL,
    "location_ru" VARCHAR(255) NOT NULL,
    "dueDate" VARCHAR(255) NOT NULL,
    "jobDescription_am" VARCHAR(255) NOT NULL,
    "jobDescription_en" VARCHAR(255) NOT NULL,
    "jobDescription_ru" VARCHAR(255) NOT NULL,

    CONSTRAINT "Careers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Company" (
    "id" SERIAL NOT NULL,
    "name_am" VARCHAR(255) NOT NULL,
    "name_en" VARCHAR(255) NOT NULL,
    "name_ru" VARCHAR(255) NOT NULL,
    "metaTitle_am" VARCHAR(255) NOT NULL,
    "metaTitle_en" VARCHAR(255) NOT NULL,
    "metaTitle_ru" VARCHAR(255) NOT NULL,
    "metaDescription_am" VARCHAR(255) NOT NULL,
    "metaDescription_en" VARCHAR(255) NOT NULL,
    "metaDescription_ru" VARCHAR(255) NOT NULL,
    "title_am" VARCHAR(255) NOT NULL,
    "title_en" VARCHAR(255) NOT NULL,
    "title_ru" VARCHAR(255) NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contacts" (
    "id" SERIAL NOT NULL,
    "fullName" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(255) NOT NULL,
    "company" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "isAgreed" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Contacts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CoreValues" (
    "id" SERIAL NOT NULL,
    "title_am" VARCHAR(255) NOT NULL,
    "title_en" VARCHAR(255) NOT NULL,
    "title_ru" VARCHAR(255) NOT NULL,
    "description_am" TEXT NOT NULL,
    "description_en" TEXT NOT NULL,
    "description_ru" TEXT NOT NULL,

    CONSTRAINT "CoreValues_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Courses" (
    "id" SERIAL NOT NULL,
    "metaTitle_am" VARCHAR(255) NOT NULL,
    "metaTitle_en" VARCHAR(255) NOT NULL,
    "metaTitle_ru" VARCHAR(255) NOT NULL,
    "metaDescription_am" VARCHAR(255) NOT NULL,
    "metaDescription_en" VARCHAR(255) NOT NULL,
    "metaDescription_ru" VARCHAR(255) NOT NULL,
    "url" VARCHAR(255) NOT NULL,
    "start" TIMESTAMP(3) NOT NULL,
    "duration_am" VARCHAR(255) NOT NULL,
    "duration_en" VARCHAR(255) NOT NULL,
    "duration_ru" VARCHAR(255) NOT NULL,
    "price_am" VARCHAR(255) NOT NULL,
    "price_en" VARCHAR(255) NOT NULL,
    "price_ru" VARCHAR(255) NOT NULL,
    "deadline" TIMESTAMP(3) NOT NULL,
    "description_am" TEXT NOT NULL,
    "description_en" TEXT NOT NULL,
    "description_ru" TEXT NOT NULL,
    "level_am" VARCHAR(255) NOT NULL,
    "level_en" VARCHAR(255) NOT NULL,
    "level_ru" VARCHAR(255) NOT NULL,
    "type_am" VARCHAR(255) NOT NULL,
    "type_en" VARCHAR(255) NOT NULL,
    "type_ru" VARCHAR(255) NOT NULL,
    "days_am" VARCHAR(255) NOT NULL,
    "days_en" VARCHAR(255) NOT NULL,
    "days_ru" VARCHAR(255) NOT NULL,
    "lessonTime_am" VARCHAR(255) NOT NULL,
    "lessonTime_en" VARCHAR(255) NOT NULL,
    "lessonTime_ru" VARCHAR(255) NOT NULL,
    "courseDescription_am" TEXT NOT NULL,
    "courseDescription_en" TEXT NOT NULL,
    "courseDescription_ru" TEXT NOT NULL,
    "image" VARCHAR(255) NOT NULL,
    "altText" VARCHAR(255) NOT NULL,

    CONSTRAINT "Courses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EducationCategory" (
    "id" SERIAL NOT NULL,
    "educationId" INTEGER NOT NULL,
    "category_am" VARCHAR(255) NOT NULL,
    "category_en" VARCHAR(255) NOT NULL,
    "category_ru" VARCHAR(255) NOT NULL,

    CONSTRAINT "EducationCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Educations" (
    "id" SERIAL NOT NULL,
    "type_am" VARCHAR(255) NOT NULL,
    "type_en" VARCHAR(255) NOT NULL,
    "type_ru" VARCHAR(255) NOT NULL,
    "education_am" VARCHAR(255) NOT NULL,
    "education_en" VARCHAR(255) NOT NULL,
    "education_ru" VARCHAR(255) NOT NULL,
    "metaTitle_am" VARCHAR(255) NOT NULL,
    "metaTitle_en" VARCHAR(255) NOT NULL,
    "metaTitle_ru" VARCHAR(255) NOT NULL,
    "metaDescription_am" VARCHAR(255) NOT NULL,
    "metaDescription_en" VARCHAR(255) NOT NULL,
    "metaDescription_ru" VARCHAR(255) NOT NULL,
    "image" VARCHAR(255) NOT NULL,
    "url" VARCHAR(255) NOT NULL,
    "content_am" TEXT NOT NULL,
    "content_en" TEXT NOT NULL,
    "content_ru" TEXT NOT NULL,

    CONSTRAINT "Educations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Faq" (
    "id" SERIAL NOT NULL,
    "serviceId" INTEGER NOT NULL,
    "question_am" VARCHAR(255) NOT NULL,
    "question_en" VARCHAR(255) NOT NULL,
    "question_ru" VARCHAR(255) NOT NULL,
    "answer_am" VARCHAR(255) NOT NULL,
    "answer_en" VARCHAR(255) NOT NULL,
    "answer_ru" VARCHAR(255) NOT NULL,

    CONSTRAINT "Faq_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HireUs" (
    "id" SERIAL NOT NULL,
    "hire_am" VARCHAR(255) NOT NULL,
    "hire_en" VARCHAR(255) NOT NULL,
    "hire_ru" VARCHAR(255) NOT NULL,

    CONSTRAINT "HireUs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Jobs" (
    "id" SERIAL NOT NULL,
    "fullName" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(255) NOT NULL,
    "jobRole" VARCHAR(255) NOT NULL,
    "coverLetter" TEXT NOT NULL,
    "image" VARCHAR(255) NOT NULL,
    "isAgreed" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Jobs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Offers" (
    "id" SERIAL NOT NULL,
    "serviceId" INTEGER NOT NULL,
    "offers_am" VARCHAR(255) NOT NULL,
    "offers_en" VARCHAR(255) NOT NULL,
    "offers_ru" VARCHAR(255) NOT NULL,

    CONSTRAINT "Offers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PageTitles" (
    "id" SERIAL NOT NULL,
    "metaTitle_am" VARCHAR(255) NOT NULL,
    "metaTitle_en" VARCHAR(255) NOT NULL,
    "metaTitle_ru" VARCHAR(255) NOT NULL,
    "metaDescription_am" VARCHAR(255) NOT NULL,
    "metaDescription_en" VARCHAR(255) NOT NULL,
    "metaDescription_ru" VARCHAR(255) NOT NULL,
    "students" INTEGER NOT NULL,
    "joinedOurTeam" VARCHAR(255) NOT NULL,
    "image" VARCHAR(255) NOT NULL,
    "type" VARCHAR(255) NOT NULL,

    CONSTRAINT "PageTitles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PrivacyPolicy" (
    "id" SERIAL NOT NULL,
    "metaTitle_am" VARCHAR(255) NOT NULL,
    "metaTitle_en" VARCHAR(255) NOT NULL,
    "metaTitle_ru" VARCHAR(255) NOT NULL,
    "metaDescription_am" VARCHAR(255) NOT NULL,
    "metaDescription_en" VARCHAR(255) NOT NULL,
    "metaDescription_ru" VARCHAR(255) NOT NULL,
    "content_am" TEXT NOT NULL,
    "content_en" TEXT NOT NULL,
    "content_ru" TEXT NOT NULL,

    CONSTRAINT "PrivacyPolicy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Projects" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "metaTitle_am" VARCHAR(255) NOT NULL,
    "metaTitle_en" VARCHAR(255) NOT NULL,
    "metaTitle_ru" VARCHAR(255) NOT NULL,
    "metaDescription_am" VARCHAR(255) NOT NULL,
    "metaDescription_en" VARCHAR(255) NOT NULL,
    "metaDescription_ru" VARCHAR(255) NOT NULL,
    "image" VARCHAR(255) NOT NULL,
    "url" VARCHAR(255) NOT NULL,

    CONSTRAINT "Projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjectCategory" (
    "id" SERIAL NOT NULL,
    "projectId" INTEGER NOT NULL,
    "category_am" VARCHAR(255) NOT NULL,
    "category_en" VARCHAR(255) NOT NULL,
    "category_ru" VARCHAR(255) NOT NULL,

    CONSTRAINT "ProjectCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjectDetail" (
    "id" SERIAL NOT NULL,
    "projectId" INTEGER NOT NULL,
    "industry_am" VARCHAR(255) NOT NULL,
    "industry_en" VARCHAR(255) NOT NULL,
    "industry_ru" VARCHAR(255) NOT NULL,
    "location_am" VARCHAR(255) NOT NULL,
    "location_en" VARCHAR(255) NOT NULL,
    "location_ru" VARCHAR(255) NOT NULL,
    "duration_am" VARCHAR(255) NOT NULL,
    "duration_en" VARCHAR(255) NOT NULL,
    "duration_ru" VARCHAR(255) NOT NULL,
    "team_am" VARCHAR(255) NOT NULL,
    "team_en" VARCHAR(255) NOT NULL,
    "team_ru" VARCHAR(255) NOT NULL,
    "overview_am" TEXT NOT NULL,
    "overview_en" TEXT NOT NULL,
    "overview_ru" TEXT NOT NULL,
    "challenge_am" TEXT NOT NULL,
    "challenge_en" TEXT NOT NULL,
    "challenge_ru" TEXT NOT NULL,
    "solution_am" TEXT NOT NULL,
    "solution_en" TEXT NOT NULL,
    "solution_ru" TEXT NOT NULL,
    "result_am" TEXT NOT NULL,
    "result_en" TEXT NOT NULL,
    "result_ru" TEXT NOT NULL,
    "image" VARCHAR(255) NOT NULL,

    CONSTRAINT "ProjectDetail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjectObjective" (
    "id" SERIAL NOT NULL,
    "projectId" INTEGER NOT NULL,
    "objective_am" VARCHAR(255) NOT NULL,
    "objective_en" VARCHAR(255) NOT NULL,
    "objective_ru" VARCHAR(255) NOT NULL,

    CONSTRAINT "ProjectObjective_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjectTechStach" (
    "id" SERIAL NOT NULL,
    "projectName_am" VARCHAR(255) NOT NULL,
    "projectName_en" VARCHAR(255) NOT NULL,
    "projectName_ru" VARCHAR(255) NOT NULL,
    "techStackId" INTEGER NOT NULL,

    CONSTRAINT "ProjectTechStach_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Services" (
    "id" SERIAL NOT NULL,
    "type_am" VARCHAR(255) NOT NULL,
    "type_en" VARCHAR(255) NOT NULL,
    "type_ru" VARCHAR(255) NOT NULL,
    "service_am" VARCHAR(255) NOT NULL,
    "service_en" VARCHAR(255) NOT NULL,
    "service_ru" VARCHAR(255) NOT NULL,
    "metaTitle_am" VARCHAR(255) NOT NULL,
    "metaTitle_en" VARCHAR(255) NOT NULL,
    "metaTitle_ru" VARCHAR(255) NOT NULL,
    "metaDescription_am" VARCHAR(255) NOT NULL,
    "metaDescription_en" VARCHAR(255) NOT NULL,
    "metaDescription_ru" VARCHAR(255) NOT NULL,
    "image" VARCHAR(255) NOT NULL,
    "url" VARCHAR(255) NOT NULL,
    "altText" VARCHAR(255) NOT NULL,

    CONSTRAINT "Services_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StudentsReview" (
    "id" SERIAL NOT NULL,
    "fullName_am" VARCHAR(255) NOT NULL,
    "fullName_en" VARCHAR(255) NOT NULL,
    "fullName_ru" VARCHAR(255) NOT NULL,
    "info_am" VARCHAR(255) NOT NULL,
    "info_en" VARCHAR(255) NOT NULL,
    "info_ru" VARCHAR(255) NOT NULL,
    "review_am" TEXT NOT NULL,
    "review_en" TEXT NOT NULL,
    "review_ru" TEXT NOT NULL,
    "image" VARCHAR(255) NOT NULL,

    CONSTRAINT "StudentsReview_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TeamMember" (
    "id" SERIAL NOT NULL,
    "order" INTEGER NOT NULL,
    "name_am" VARCHAR(255) NOT NULL,
    "name_en" VARCHAR(255) NOT NULL,
    "name_ru" VARCHAR(255) NOT NULL,
    "position_am" VARCHAR(255) NOT NULL,
    "position_en" VARCHAR(255) NOT NULL,
    "position_ru" VARCHAR(255) NOT NULL,
    "image" VARCHAR(255) NOT NULL,

    CONSTRAINT "TeamMember_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TechStack" (
    "id" SERIAL NOT NULL,
    "name_am" VARCHAR(255) NOT NULL,
    "name_en" VARCHAR(255) NOT NULL,
    "name_ru" VARCHAR(255) NOT NULL,
    "image" VARCHAR(255) NOT NULL,

    CONSTRAINT "TechStack_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Testimonials" (
    "id" SERIAL NOT NULL,
    "fullName_am" VARCHAR(255) NOT NULL,
    "fullName_en" VARCHAR(255) NOT NULL,
    "fullName_ru" VARCHAR(255) NOT NULL,
    "info_am" VARCHAR(255) NOT NULL,
    "info_en" VARCHAR(255) NOT NULL,
    "info_ru" VARCHAR(255) NOT NULL,
    "review_am" TEXT NOT NULL,
    "review_en" TEXT NOT NULL,
    "review_ru" TEXT NOT NULL,
    "image" VARCHAR(255) NOT NULL,

    CONSTRAINT "Testimonials_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TheyTrustUs" (
    "id" SERIAL NOT NULL,
    "image" VARCHAR(255) NOT NULL,

    CONSTRAINT "TheyTrustUs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "surname" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "username" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
