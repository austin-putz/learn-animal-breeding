# About Page - How to Add Your Profile Image

## Your About Page is Ready!

Visit: **http://localhost:3000/about**

The page includes all your current information from learnanimalbreeding.com/about.html

---

## How to Add Your Profile Image

### 1. Save Your Image Here:
```
public/images/profile/austin-putz.jpg
```

**Recommended specs:**
- Size: 400x400px (square) or 800x800px
- Format: JPG or PNG
- Aspect: 1:1 (square)

---

### 2. Update the About Page

Edit: `app/about/page.tsx`

**Find this section (around line 34):**
```tsx
<div className="aspect-square bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 rounded-lg mb-6 flex items-center justify-center">
  {/* You can add your image here */}
  <div className="text-6xl">👨‍🔬</div>
</div>
```

**Replace with:**
```tsx
<div className="aspect-square rounded-lg mb-6 overflow-hidden">
  <Image
    src="/images/profile/austin-putz.jpg"
    alt="Austin Putz"
    width={400}
    height={400}
    className="object-cover w-full h-full"
  />
</div>
```

---

## What's Currently on the Page:

✅ Your name and current position at Hendrix Genetics (Hypor)
✅ Mission statement about the platform
✅ Contact buttons (Email, LinkedIn, GitHub)
✅ Disclaimer about personal project
✅ Contribution section inviting others to share resources
✅ Placeholder for education/background (for you to fill in)

---

## To Customize Further:

### Add Education & Experience:

Edit the "Background" section in `app/about/page.tsx` (around line 130):

```tsx
<section>
  <h2 className="text-2xl font-semibold mb-4">Education</h2>
  <div className="space-y-4">
    <div>
      <h3 className="font-semibold">Ph.D. in Animal Science</h3>
      <p className="text-neutral-600 dark:text-neutral-400">University Name, Year</p>
      <p className="text-sm text-neutral-700 dark:text-neutral-300 mt-1">
        Focus: Quantitative Genetics and Animal Breeding
      </p>
    </div>
    {/* Add more education entries */}
  </div>
</section>

<section className="mt-8">
  <h2 className="text-2xl font-semibold mb-4">Experience</h2>
  <div className="space-y-4">
    <div>
      <h3 className="font-semibold">Geneticist - Hendrix Genetics (Hypor)</h3>
      <p className="text-neutral-600 dark:text-neutral-400">2020 - Present</p>
      <p className="text-sm text-neutral-700 dark:text-neutral-300 mt-1">
        Description of your role...
      </p>
    </div>
    {/* Add more experience entries */}
  </div>
</section>
```

---

## Quick Links Reference:

Your current links point to:
- Email: putz.austin@gmail.com
- LinkedIn: https://www.linkedin.com/in/austin-putz (update if different)
- GitHub: https://github.com/austin-putz (update if different)

To update these, edit the Button components in `app/about/page.tsx` (lines 42-67).

---

## The About page is live and ready to customize!

Just add your profile image and update the background section as needed.
