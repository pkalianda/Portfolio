import { CaseStudyData } from "@/app/components/case-studies/blocks/types";

export const crosswordrStudy: CaseStudyData = {
  metadata: {
    slug: "crosswordr",
    title: "Designing a Puzzle Management System for Crosswordr",
    subtitle: "Crossplay Digital",
    coverImage: "/images/rectangle17.png",
  },

  content: [
    {
      type: "hero",
      src: "/images/crosswordr/hero.png",
      alt: "Crosswordr puzzle management interface",
    },
    {
      type: "metadata",
      role: "Product Designer",
      timeline: "3 months",
      outcome: "50% reduction in puzzle creation time",
    },
    {
      type: "text",
      heading: "Background",
      content: (
        <>
          <p>
          Crosswordr by Crossplay Digital is an online platform for uploading,
           sharing, and solving crosswords. As their user base grew, the team
           was preparing to launch a new puzzle embedding feature that would 
           allow crosswords to be shared more widely across the web. To support
           this, they needed to improve the platform experience. I joined as a
           Product Designer during my final year at university, focused on
           enhancing the product to align with the embed feature rollout.


          </p>
        </>
      ),
    },
    {
      type: "text",
      heading: "My contribution",
      content: (
        <>
          <p>
          As the sole designer, I led market research, proposed new features, 
          designed user flows and interfaces, and collaborated with the project 
          manager to align design with product goals.
          </p>

        </>
      ),
    },
    {
      type: "text",
      heading: "Problem",
      content: (
        <>
          <p>
          Currently, once a puzzle is uploaded to Crosswordr, users have no ability 
          to edit, customize, or manage it. The uploaded puzzle is locked in its 
          original state and inherits Crosswordr’s default branding and design—both 
          on the platform and when embedded on other websites.
          </p>

          <p>
          This creates a disconnect for users who want their puzzles to visually align 
          with their own websites when embedding. While full puzzle-editing features 
          are planned for the future, there was an immediate need to give users more 
          control over their uploaded puzzles to better support the upcoming embed feature.
          </p>

        </>
      ),
    },
    {
      type: "image",
      src: "/images/crosswordr/problem.png",
      alt: "Previous workflow diagram showing disconnected steps",
      caption: "The existing workflow required switching between multiple interfaces",
    },
    {
      type: "text",
      heading: "Constraints",
      content: (
        <>
          <p>
            The project had several technical and business constraints that
            shaped the design approach:
          </p>
          <ul>
            <li>
              Must integrate with existing puzzle creation tools without requiring
              publishers to migrate content
            </li>
            <li>
              Development timeline of 3 months with a team of 2 engineers
            </li>
            <li>
              Solution must scale to support publishers managing 1000+ puzzles
            </li>
            <li>
              Maintain backward compatibility with the existing API
            </li>
          </ul>
        </>
      ),
    },
    {
      type: "divider",
    },
    {
      type: "text",
      heading: "Design approach",
      content: (
        <>
          <p>
            I conducted a series of design workshops with our key stakeholders
            and power users to understand their mental models and existing
            workarounds. Through these sessions, I identified three core user
            jobs-to-be-done:
          </p>
          <ol>
            <li>Create and edit puzzle content efficiently</li>
            <li>Schedule puzzles for publication with confidence</li>
            <li>Monitor puzzle status and performance at a glance</li>
          </ol>
        </>
      ),
    },
    {
      type: "imageGrid",
      images: [
        {
          src: "/images/crosswordr/sketch1.png",
          alt: "Initial wireframe concept A",
          caption: "Concept A: Calendar-based view",
        },
        {
          src: "/images/crosswordr/sketch2.png",
          alt: "Initial wireframe concept B",
          caption: "Concept B: List-based view",
        },
      ],
      columns: 2,
    },
    {
      type: "text",
      heading: "The solution",
      content: (
        <>
          <p>
            The redesigned puzzle management system consolidates all key
            functions into a unified interface centered around a sortable,
            filterable puzzle library. Publishers can now view, edit, schedule,
            and publish puzzles without leaving the main screen.
          </p>
          <p>
            Key features of the new system include:
          </p>
          <ul>
            <li>Unified puzzle library with real-time status indicators</li>
            <li>Drag-and-drop scheduling interface</li>
            <li>In-context puzzle preview without page navigation</li>
            <li>Batch operations for common workflows</li>
            <li>Smart defaults that reduce repetitive data entry</li>
          </ul>
        </>
      ),
    },
    {
      type: "image",
      src: "/images/crosswordr/solution.png",
      alt: "New unified puzzle management interface",
      caption: "The redesigned interface consolidates all management functions",
    },
    {
      type: "text",
      heading: "Designing with constraints in mind",
      content: (
        <>
          <p>
            Given the limited development timeline, I worked closely with the
            engineering team to identify which features would deliver the most
            value with the least implementation complexity. We prioritized
            features that could leverage existing backend infrastructure and
            designed component patterns that could be reused across different
            parts of the interface.
          </p>
        </>
      ),
    },
    {
      type: "imageGrid",
      images: [
        {
          src: "/images/crosswordr/detail1.png",
          alt: "Status indicator system",
        },
        {
          src: "/images/crosswordr/detail2.png",
          alt: "Scheduling interface",
        },
        {
          src: "/images/crosswordr/detail3.png",
          alt: "Preview modal",
        },
      ],
      columns: 3,
    },
    {
      type: "divider",
    },
    {
      type: "text",
      heading: "Results and impact",
      content: (
        <>
          <p>
            The new puzzle management system launched to beta users in December
            2024. Early feedback has been overwhelmingly positive, with several
            metrics showing significant improvement:
          </p>
          <ul>
            <li>50% reduction in average time to publish a puzzle</li>
            <li>73% decrease in scheduling errors</li>
            <li>
              Publisher satisfaction score increased from 6.2 to 8.7 out of 10
            </li>
            <li>
              Support tickets related to puzzle management decreased by 64%
            </li>
          </ul>
          <p>
            Based on this success, we're now planning to expand the system to
            support additional puzzle types and collaborative editing features.
          </p>
        </>
      ),
    },
    {
      type: "text",
      heading: "Reflections",
      content: (
        <>
          <p>
            This project reinforced several important lessons about designing
            workflow-heavy interfaces. First, spending time understanding the
            existing mental models and workarounds users had developed proved
            invaluable—many of the most successful features were inspired by
            these existing patterns.
          </p>
          <p>
            Second, the close collaboration with engineering throughout the
            design process was critical to shipping on time. By understanding
            the technical constraints early, I could design solutions that were
            both user-friendly and feasible to implement within our timeline.
          </p>
        </>
      ),
    },
  ],
};
