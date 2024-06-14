import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { JobsModule } from './jobs/jobs.module';
import { AboutUsModule } from './about-us/about-us.module';
import { AboutWorkModule } from './about-work/about-work.module';
import { ApplicantModule } from './applicant/applicant.module';
import { ApproachModule } from './approach/approach.module';
import { BenefitsModule } from './benefits/benefits.module';
import { BlogModule } from './blog/blog.module';
import { CareerQualificationsModule } from './career-qualifications/career-qualifications.module';
import { CareerResponsibilitiesModule } from './career-responsibilities/career-responsibilities.module';
import { CareerSkillsModule } from './career-skills/career-skills.module';
import { CareersModule } from './careers/careers.module';
import { ContactsModule } from './contacts/contacts.module';
import { CoreValuesModule } from './core-values/core-values.module';
import { CourseForYouModule } from './course-for-you/course-for-you.module';
import { CourseLessonsModule } from './course-lessons/course-lessons.module';
import { CourseOffersModule } from './course-offers/course-offers.module';
import { CourseResultsModule } from './course-results/course-results.module';
import { CourseSyllabusModule } from './course-syllabus/course-syllabus.module';
import { CoursesModule } from './courses/courses.module';
import { EducationsModule } from './educations/educations.module';
import { FaqModule } from './faq/faq.module';
import { HireUsModule } from './hire-us/hire-us.module';
import { PageTitlesModule } from './page-titles/page-titles.module';
import { PrivacyPolicyModule } from './privacy-policy/privacy-policy.module';
import { ProjectModule } from './project/project.module';
import { ProjectCategoryModule } from './project-category/project-category.module';
import { ProjectDetailModule } from './project-detail/project-detail.module';
import { ProjectObjectiveModule } from './project-objective/project-objective.module';
import { StudentsReviewModule } from './students-review/students-review.module';
import { TeamMemberModule } from './team-member/team-member.module';
import { TechStackModule } from './tech-stack/tech-stack.module';
import { TestimonialsModule } from './testimonials/testimonials.module';
import { TheyTrustModule } from './they-trust/they-trust.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [AboutUsModule, JobsModule, AboutWorkModule, ApplicantModule, ApproachModule, BenefitsModule, BlogModule, CareerQualificationsModule, CareerResponsibilitiesModule, CareerSkillsModule, CareersModule, ContactsModule, CoreValuesModule, CourseForYouModule, CourseLessonsModule, CourseOffersModule, CourseResultsModule, CourseSyllabusModule, CoursesModule, EducationsModule, FaqModule, HireUsModule, PageTitlesModule, PrivacyPolicyModule, ProjectModule, ProjectCategoryModule, ProjectDetailModule, ProjectObjectiveModule, StudentsReviewModule, TeamMemberModule, TechStackModule, TestimonialsModule, TheyTrustModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
