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
import { CareersModule } from './careers/careers.module';
import { ContactsModule } from './contacts/contacts.module';
import { CoreValuesModule } from './core-values/core-values.module';
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
import { UserModule } from './user/user.module';
import { CompanyModule } from './company/company.module';
import { EducationCategoryModule } from './education-category/education-category.module';
import { OffersModule } from './offers/offers.module';
import { ProjectTechStachModule } from './project-tech-stach/project-tech-stach.module';
import { ServicesModule } from './services/services.module';
import { TheyTrustUsModule } from './they-trust-us/they-trust-us.module';

@Module({
  imports: [AboutUsModule, JobsModule, AboutWorkModule, ApplicantModule, ApproachModule, BenefitsModule, BlogModule, CareersModule, ContactsModule, CoreValuesModule, CoursesModule, EducationsModule, FaqModule, HireUsModule, PageTitlesModule, PrivacyPolicyModule, ProjectModule, ProjectCategoryModule, ProjectDetailModule, ProjectObjectiveModule, StudentsReviewModule, TeamMemberModule, TechStackModule, TestimonialsModule, UserModule, CompanyModule, EducationCategoryModule, OffersModule, ProjectTechStachModule, ServicesModule, TheyTrustUsModule ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
