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
      alt: "",
    },
    {
      type: "metadata",
      role: "Product Designer",
      timeline: "3 months",
      outcome: "Sole designer",
    },
    {
      type: "text",
      heading: "Background",
      content: (
        <>
          <p>
            Crosswordr by Crossplay Digital is an online platform for uploading,
            sharing, and solving crosswords. As their user base grew, the team was
            preparing to launch a new puzzle embedding feature that would allow
            crosswords to be shared more widely across the web. To support this,
            they needed to improve the platform experience. I joined as a Product
            Designer during my final year at university, focused on enhancing the
            product to align with the embed feature rollout.
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
      heading: "The problem",
      content: (
        <>
          <p>
            Currently, once a puzzle is uploaded to Crosswordr, users have no
            ability to edit, customize, or manage it. The uploaded puzzle is locked
            in its original state and inherits Crosswordr&apos;s default branding and
            design—both on the platform and when embedded on other websites.
          </p>
          <p>
            This creates a disconnect for users who want their puzzles to visually
            align with their own websites when embedding. While full puzzle-editing
            features are planned for the future, <strong>there was an immediate need
            to give users more control over their uploaded puzzles</strong> to better
            support the upcoming embed feature.
          </p>
        </>
      ),
    },
    {
      type: "image",
      src: "/images/crosswordr/problem.png",
      alt: "",
    },
    {
      type: "divider",
    },
    {
      type: "text",
      heading: "Process",
      id: "process",
      content: (
        <></>
      ),
    },
    {
      type: "text",
      heading: "Understanding where we stood in the market",
      content: (
        <>
          <p>
            Over 90% of the market share for puzzle-creating platforms was
            dominated by a single competitor (AmuzeLabs). Understanding where
            Crosswordr stood in comparison was essential to identify gaps,
            highlight opportunities for differentiation, and find ways to grow our
            presence in a highly concentrated market. Our competitive analysis
            helped shape key design decisions moving forward.
          </p>
        </>
      ),
    },
    {
      type: "image",
      src: "/images/crosswordr/competitive-analysis.png",
      alt: "",
    },
    {
      type: "text",
      heading: "Designing with users instead of for users",
      content: (
        <>
          <p>
            User interviews with four experienced users—familiar with both
            AmuzeLabs and Crosswordr—helped us uncover the most critical feature
            gaps. These conversations shaped the direction of Crosswordr&apos;s puzzle
            management system and informed key additions to support embedding,
            such as grouping puzzles and enabling group embeds. A recurring theme
            was the users&apos; need for a clean, modern, and intuitive user
            experience—something noticeably lacking in this space, which hadn&apos;t
            seen meaningful innovation in some time.
          </p>
        </>
      ),
    },
    {
      type: "image",
      src: "/images/crosswordr/user-interviews.png",
      alt: "",
    },
    {
      type: "text",
      heading: "Creating the framework for crosswords puzzle management system",
      content: (
        <>
          <p>
            With all the collected research I began by creating a sitemap for the
            puzzle management system. While features like design and color
            customization were parked for a later phase, the immediate goal was to
            design a scalable puzzle management system that could support those
            capabilities in the future. This meant providing a flexible structure
            that could evolve with the product without requiring a full redesign
            down the line.
          </p>
        </>
      ),
    },
    {
      type: "image",
      src: "/images/crosswordr/sitemap.png",
      alt: "",
    },
    {
      type: "text",
      heading: "Fine tuning designs with users",
      content: (
        <>
          <p>
            Throughout the process, I continuously shared early designs with the
            client and conducted iterative user testing with the same participants.
            The focus was placed on refining user flows and overall UX rather than
            visuals, ensuring the core experience was intuitive and aligned with
            user needs before moving into detailed UI design.
          </p>
        </>
      ),
    },
    {
      type: "image",
      src: "/images/crosswordr/early-wireframing.png",
      alt: "",
    },
    {
      type: "image",
      src: "/images/crosswordr/user-feedback.png",
      alt: "",
    },
    {
      type: "divider",
    },
    {
      type: "text",
      heading: "Solutions",
      id: "solutions",
      content: (
        <></>
      ),
    },
    {
      type: "text",
      heading: "Enhancing the information architecture of the 'My Puzzles' Page",
      content: (
        <>
          <p>
            The &quot;My Puzzles&quot; page was designed to serve as the central hub for the
            puzzle management system. Based on user feedback, I refined the
            information architecture to reduce visual clutter and prioritize the
            details users cared about most. The result was a cleaner, more focused
            interface that made managing puzzles feel intuitive and efficient.
          </p>
        </>
      ),
    },
    {
      type: "image",
      src: "/images/crosswordr/my-puzzles-before-after.png",
      alt: "",
    },
    {
      type: "text",
      heading: "Puzzle grouping and categorization",
      content: (
        <>
          <p>
            To improve organization and flexibility, users can now tag and group
            their uploaded puzzles. This addresses a key limitation of the previous
            system, which only allowed embedding either a single puzzle or all
            puzzles from a profile. With the new grouping feature, users can embed
            specific collections—so all your Star Wars-themed puzzles can be
            separated from your football-themed ones, making puzzle curation and
            sharing more intentional and customizable.
          </p>
        </>
      ),
    },
    {
      type: "image",
      src: "/images/crosswordr/puzzle-grouping.png",
      alt: "",
    },
    {
      type: "text",
      heading: "Group management",
      content: (
        <>
          <p>
            The Group Management feature simplifies editing and embedding for
            puzzle groups by allowing users to customize all puzzles in a group at
            once, ensuring consistent design, colors, messaging, and other
            elements in embedded puzzles.
          </p>
        </>
      ),
    },
    {
      type: "image",
      src: "/images/crosswordr/group-management.png",
      alt: "",
    },
    {
      type: "text",
      heading: "New puzzle upload and editing format",
      content: (
        <>
          <p>
            I designed a new puzzle editing and management format from the ground
            up as part of Crosswordr&apos;s puzzle management system. Built on insights
            from user testing and competitive analysis, the new format streamlines
            key flows—including uploading, editing, exporting into groups, and
            embedding puzzles. It replaces the previous fragmented experience with
            a unified system that gives users more control and streamlines the
            journey from upload to embedding.
          </p>
        </>
      ),
    },
    {
      type: "image",
      src: "/images/crosswordr/puzzle-upload.png",
      alt: "",
    },
    {
      type: "text",
      heading: "Designing for scalability",
      content: (
        <>
          <p>
            The modular puzzle upload/edit design ensures scalability, allowing
            features to be added or removed without disrupting the core experience.
            While Crosswordr is in its early stages, this framework supports
            seamless future updates as the product grows without affecting the
            overall experience.
          </p>
        </>
      ),
    },
    {
      type: "image",
      src: "/images/crosswordr/scalability.png",
      alt: "",
    },
    {
      type: "divider",
    },
    {
      type: "text",
      heading: "Reflection",
      content: (
        <>
          <p>
            I started this part of Crosswordr&apos;s development at a very early stage
            meaning that there were bound to be many changes and growth along the
            road. Hence a key consideration during this entire process was ensuring
            that my designs were scaleable and fit Crosswordr&apos;s goals for long term
            expansion. Additionally documenting and handing over my designs in an
            understandable format for the next designer taking over the project was
            also an invaluable skill I learnt over the 3 months.
          </p>
        </>
      ),
    },
  ],
};
