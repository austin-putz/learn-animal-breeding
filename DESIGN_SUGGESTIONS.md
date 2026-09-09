# Visual design review and suggestions

Reviewed from the rendered local build on the `redesign/design-system-v2` branch on September 8, 2026. No application code was changed.

## What I reviewed

I viewed the actual site rather than judging only from the source. The review covered:

- Homepage in light and dark themes
- Books index
- Animal breeding book catalog
- Software index
- Blog index and the long-form article view
- About page
- Desktop at approximately 1135 × 930
- Mobile at 390 × 844, including the navigation menu and horizontal category rail

## Overall assessment

The site is already at a strong, credible design level. It feels more like a carefully edited academic library than a typical university resource site, and it avoids most of the visual habits that make redesigns look generic: there are no loud gradients, excessive badges, oversized rounded cards, or decorative animation competing with the material.

Visually, I would place it around **7.5–8 out of 10** for its current scope. It is coherent enough to publish and unusually polished for a specialist educational resource. The remaining gap is not “make it prettier.” The gap is making the expertise behind the collection more visible and helping a learner understand what to do first, what matters most, and what to do next.

The strongest long-term direction is a hybrid:

- **Homepage and orientation pages:** teaching-led, selective, and directional
- **Catalog pages:** library-led, compact, and optimized for scanning
- **Articles and course material:** reading-led, quiet, and navigable

## What is working especially well

### 1. The visual identity is calm and credible

The warm neutral palette, moss accent, and restrained use of lines fit the subject. The design feels scholarly without resembling a university department template. Light and dark modes clearly belong to the same system.

The dark theme is particularly cohesive. The off-black ground, muted green, and book-cover color create a comfortable research-library atmosphere. The light theme remains warm rather than becoming clinical white.

### 2. The homepage hero gives the site a memorable entrance

The genetics artwork, livestock silhouettes, formulas, and dark green treatment immediately establish the field. It is much more distinctive than a generic DNA stock image. The headline is clear, and the primary and secondary actions are easy to understand.

This is the strongest visual moment on the site and should remain the visual anchor.

### 3. Detailed resource lists are handled very well

The animal breeding book page is one of the best parts of the design. The wide rows are easier to scan than a wall of conventional cards. Cover, title, author, level, description, tags, and access options form a sensible hierarchy.

On mobile, the 76-pixel cover beside the content works surprisingly well. Descriptions shorten, tags disappear, and actions wrap without the page feeling broken. This is a good example of responsive reduction rather than simple stacking.

### 4. Typography has a useful editorial hierarchy

Instrument Sans, Geist, and the mono metadata voice work well together. Headings have enough presence without becoming promotional. The mono labels make years, levels, counts, categories, and ISBNs feel systematic.

The long-form article also has a comfortable measure and a clear heading hierarchy. The design is quiet enough for technical reading.

### 5. The About page builds trust

The three real photographs add warmth and credibility that the catalog pages intentionally lack. They make the project feel authored by a real expert rather than assembled by an anonymous content operation. The presentation and award photographs are especially useful because they establish professional context without requiring more explanatory copy.

### 6. The system is consistent without being overdecorated

Borders, spacing, button treatments, focus states, cover proportions, and metadata are consistently applied. Interactions are present but restrained. The system generally avoids cards inside cards and does not use color merely to create variety.

## Highest-value improvements

### Priority 1: Give first-time learners a clear starting decision

The site currently answers “what resources exist?” better than “what should I do?” The homepage moves from hero to six resource-type cards: books, my books, blog, course notes, short courses, and software. That structure is excellent for someone who already knows the field, but it asks a beginner to choose a format before they understand their learning need.

Add one compact learner-orientation moment near the top of the homepage. It could offer three or four routes such as:

- New to animal breeding
- Ready to learn BLUP and genetic evaluation
- Moving into genomic selection
- Looking for software for a specific analysis

This should not become a quiz or wizard. A concise “Start here” band with an expert recommendation would be enough. Keep the existing resource catalog immediately available for experienced visitors.

### Priority 1: Make Austin’s curation visible earlier

The site’s strongest competitive advantage is not the count of books or tools. It is that a working geneticist selected, ranked, and contextualized them. At present, much of that judgment is implicit.

Use concise editorial signals such as:

- Best first book
- Read this before Henderson
- Use this when you need variance components
- Austin’s recommended sequence
- Why this resource is included

The “Essential Reading” shelf begins to do this and is stronger than the generic category counts. Extend that sense of expert selection across the important journeys.

### Priority 1: Reduce mobile scroll cost on category indexes

The homepage resource cards look balanced on desktop, but on a 390-pixel screen each card becomes a tall block. Six stacked cards create several screens of navigation before the visitor reaches Essential Reading. The oversized faded count consumes a lot of vertical space without adding much meaning on mobile.

Test a mobile-specific compact index treatment:

- Shorter row-like tiles rather than full desktop cards
- Count, title, and one-line description on one compact surface
- Preserve generous touch targets but remove the fixed visual band height
- Consider showing the full card treatment only for one or two highlighted routes

The desktop three-column grid can remain. This is specifically a mobile pacing issue.

### Priority 1: Put the learning path before the long catalog

The animal breeding page contains excellent beginner, intermediate, advanced, and modern-method guidance, but it appears after twelve books. A new student must first interpret the complete catalog without the guidance designed to help them interpret it.

Move or summarize the learning path near the page title, before “Essential.” It could be a compact horizontal sequence on desktop and a small expandable orientation block on mobile. The complete explanation can still appear below if desired.

This single change would make the catalog feel much more educational without altering the underlying content.

### Priority 2: Raise the contrast of the smallest metadata in dark mode

The large headings and main body text are comfortable, but the smallest mono labels become very faint in dark mode. Category captions, dates, tags, counts, and some secondary links are visually close to the background. The very large card counts also nearly disappear; that looks intentional, but it weakens the first scanning cue.

Do a focused contrast pass on the `faint` role rather than brightening all secondary text. Small 10–12 pixel text needs more contrast than large decorative numerals. Separate those two uses if necessary so metadata is readable while oversized counts can remain atmospheric.

### Priority 2: Break the repetition of equal category-card grids

The homepage, books index, and software index all rely on related equal-card grids. The consistency is useful, but after visiting several pages the system begins to feel more templated than editorial.

Keep one card-grid archetype, then give other indexes a different rhythm. For example:

- Homepage: directional tiles with one highlighted starting route
- Books: cover-led categories, as currently designed
- Software: denser typographic index grouped by task or workflow
- Course notes: institution or course-led rows

The goal is not visual novelty. The composition should reflect how people make decisions in each section.

### Priority 2: Simplify the mobile header controls

At 390 pixels, the logo and site name, three-way theme control, and menu button all fit, but the header feels crowded. The segmented light/dark/system control receives almost as much visual weight as primary navigation.

Consider keeping the three-way control on desktop while placing theme selection inside the mobile menu, or replacing it with one compact control that opens the three choices. The site identity and menu should remain the two dominant header elements on small screens.

The small detailed logo is also difficult to read at 32 pixels. A simplified mark or crop designed specifically for favicon/header scale would look more confident.

### Priority 2: Add navigation for long technical articles

The article reading view is attractive, but a 19-minute technical article with many sections becomes a very long linear page, particularly on mobile. The typography alone cannot provide enough orientation.

Consider:

- A short “In this guide” contents block after the introduction
- Sticky section navigation on wide screens
- A collapsible contents control on mobile
- A subtle reading-progress indicator
- A concise key-takeaways block near the beginning as well as the conclusion

Tables and code-like examples should be tested carefully at narrow widths. Horizontal scrolling is preferable to shrinking technical material until it becomes unreadable.

### Priority 2: Treat the one-post blog as an intentional journal

With one post, the blog index has a large amount of empty space and reads like an incomplete listing template. The featured-post treatment itself is clean, but “Featured Post” implies a larger collection that is not yet visible.

Until the archive grows, present the page more deliberately as a journal or latest essay. Pair the post with a short author/editorial note or a compact list of planned themes. Avoid adding fake cards or placeholders merely to fill the space.

### Priority 2: Clarify horizontal scrolling on mobile category rails

The animal breeding category rail scrolls horizontally and preserves the active category, which is the right interaction. On mobile, the next label is visibly cut off, but there is no explicit cue that the row can be swiped.

Add a subtle end fade, partial next-item peek, or small directional cue. Keep the active underline. The interaction should remain lightweight and should not become a dropdown unless testing shows the rail is difficult to use.

## Page-by-page observations

### Homepage

The hero is visually mature, readable in both themes, and appropriately field-specific. The weakest part is the copy: “Comprehensive resources” and “free access” describe the inventory but not why this collection is trustworthy or urgent. Bring one sentence of the preservation mission or expert-curation story into the hero.

“Explore Resources” is clear but generic. “Essential Reading” has much more personality because it expresses an opinion. Future homepage work should make the upper half feel more like Essential Reading and less like a directory.

The mission section is useful but arrives late and uses two similarly weighted paragraphs. It could become a sharper statement, a small proof point, and a link to the fuller About story.

### Books index

The cover montages successfully distinguish book categories. The layout is polished, although the five equal cards still feel like a navigation grid rather than a learning experience.

The “About These Resources” material is important for trust and copyright clarity. Visually, it should stay secondary. The first major improvement should be learner orientation, not adding more explanation to this page.

### Animal breeding book catalog

This is the strongest functional page. Preserve the row structure, cover scale, clear primary action, and priority grouping.

The main opportunity is ordering the guidance. Show the recommended path before the catalog, then let experienced readers scan the detailed rows. On desktop, the content spans a very wide area while each description forms one long line. A slightly narrower reading column or a deliberate two-column catalog at the widest breakpoint could improve scan speed, but the current one-column layout is still credible.

On mobile, the layout is compact and usable. The hidden tags and clamped descriptions are good decisions. The category rail and crowded header are more important problems than the resource rows themselves.

### Software index

The software categories are understandable, but this is where the equal-card pattern feels most generic because there is no cover art. Large numbers become the visual identity for every category, even though users are more likely to think in tasks: estimate variance components, run an evaluation, manage inbreeding, process genotypes, or simulate a breeding program.

Consider a denser task-oriented index with a small amount of domain-specific notation or workflow labeling. Do not add a different decorative icon to every category; that would reduce the site’s restraint.

### About page

The real photography is an excellent trust signal and provides welcome visual variation. The current three-column gallery is effective but slightly formal. An asymmetric editorial arrangement—one primary portrait and two supporting moments—could create a clearer hierarchy while keeping all three photographs.

The text column is comfortably narrow. The page could connect Austin’s background more directly to the curatorial decisions visitors see elsewhere on the site.

### Blog and article view

The article title, description, measure, and heading hierarchy are strong. The page feels designed for serious reading. Long technical content needs more wayfinding, and the smallest gray text should be tested in dark mode over long sessions.

The blog index should embrace its current small size. One excellent essay presented intentionally is better than a layout that visually promises an archive that does not exist yet.

### Footer

The footer is clear but large relative to the amount of navigation and repeats most of the header structure. On shorter index pages it can occupy a significant part of the experience. A more compact footer could preserve the mission sentence, essential navigation, contact routes, and legal information without looking like another content section.

## Subject-matter visual language to explore later

The hero proves that the field can provide a distinctive visual world. Extend that identity sparingly beyond DNA imagery. Useful motifs include:

- Pedigree paths and relationship diagrams
- Matrix brackets, sparse matrix patterns, and equation fragments
- Selection-response or breeding-value plots
- Archival course-note annotations
- Livestock silhouettes used as taxonomic marks rather than decoration
- Field-journal or lab-notebook conventions

Use these at orientation points, not on every card. Book covers and real photographs should remain the primary imagery.

## What not to change

- Keep the warm neutral and moss palette.
- Keep one primary accent color.
- Keep the homepage hero dark in both themes.
- Keep detailed resources as rows rather than converting them to tall cards.
- Keep motion restrained and functional.
- Keep metadata visually secondary, but make sure it remains readable.
- Do not create a color for every content type.
- Do not add decorative icons to every software category.
- Do not turn the site into a dashboard or an LMS interface.
- Do not hide the complete catalogs behind a guided beginner flow.

## Recommended experiment order

1. Prototype a compact “Start here” section on the homepage.
2. Move a concise learning path above the animal breeding catalog.
3. Prototype compact mobile resource-index rows and compare total scroll length.
4. Adjust dark-mode metadata contrast and test it on the article and book pages.
5. Simplify mobile theme controls and improve the category-rail scroll cue.
6. Add article contents/navigation for long posts.
7. Give the software index a denser, task-oriented composition.
8. Reframe the small blog as an intentional journal until more posts exist.
9. Tighten the footer and explore a simplified small-scale logo mark.

## North star

> A new student should always know where to begin and what to do next. An experienced practitioner should always be able to reach a known resource quickly.

The current design already serves the second half of that statement well. The next design iteration should focus on the first half without sacrificing the site’s calm, expert, library-like character.
