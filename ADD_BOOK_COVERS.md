# How to Add Book Cover Images

## Quick Steps:

### 1. Get Images
Download or screenshot book covers from:
- Amazon.com (search for the book, right-click cover, save image)
- Google Books
- Publisher websites
- Your PDF files (screenshot the first page)

**Recommended size:** 400x600px or 600x900px (3:4 aspect ratio)
**Format:** JPG (smaller) or PNG

---

### 2. Save Images Here:
```
public/images/books/
```

**Example filenames:**
```
public/images/books/
├── mrode-linear-models-2023.jpg
├── henderson-animal-models-1984.jpg
├── schaeffer-animal-models-2010.jpg
├── legarra-genomic-prediction.jpg
├── van-vleck-green-book-1993.jpg
├── van-vleck-selection-principles.jpg
├── cameron-selection-index-1997.jpg
├── wur-undergrad-book-2024.jpg
├── weller-economics.jpg
├── gondro-gwas.jpg
└── bif-guidelines.jpg
```

---

### 3. Update Book Data

Edit: `lib/data/books.ts`

Add `coverImage: '/images/books/filename.jpg'` to each book:

```typescript
export const animalBreedingBooks: BookCardProps[] = [
  {
    id: 'mrode-2023',
    title: 'Linear Models for the Prediction of Genetic Merit of Animals',
    authors: ['Raphael A. Mrode', 'Robin Thompson'],
    year: 2023,
    priority: 'essential',
    difficulty: 'advanced',
    description: 'The 4th edition of this comprehensive textbook...',
    coverImage: '/images/books/mrode-linear-models-2023.jpg',  // 👈 ADD THIS
    isbn: '978-1800620483',
    tags: ['BLUP', 'Linear Models', 'Genetic Evaluation'],
    links: [ ... ],
  },

  {
    id: 'henderson-1984',
    title: 'Applications of Linear Models in Animal Breeding',
    authors: ['Charles R. Henderson'],
    year: 1984,
    priority: 'essential',
    difficulty: 'advanced',
    description: 'Classic textbook by C.R. Henderson...',
    coverImage: '/images/books/henderson-animal-models-1984.jpg',  // 👈 ADD THIS
    tags: ['BLUP', 'Mixed Models', 'Henderson'],
    links: [ ... ],
  },

  // ... repeat for all books
]
```

---

### 4. Save and Reload

After adding images and updating the data file:
1. Save `lib/data/books.ts`
2. Your dev server will auto-reload
3. Refresh browser - covers should appear!

---

## 📷 Tips for Getting Good Book Covers:

### From Amazon:
1. Go to amazon.com
2. Search for the book by title
3. Click on the book
4. Right-click the cover image
5. Select "Save Image As..."
6. Save to `public/images/books/`

### From Your PDF:
1. Open the PDF
2. Go to the first page (cover)
3. Take a screenshot (Cmd+Shift+4 on Mac)
4. Crop to just the cover
5. Save to `public/images/books/`

### Resize if Needed:
If images are huge, resize them to 600x900px:
- Use Preview (Mac): Tools → Adjust Size
- Use online tool: https://www.iloveimg.com/resize-image
- Target: 600 width × 900 height (maintains 3:4 ratio)

---

## 🎨 What If I Can't Find a Cover?

No problem! The BookCard will show a nice book icon placeholder if `coverImage` is not provided. You can add covers gradually as you find good images.

---

## Current Books Needing Covers:

1. ⭐ Mrode (2023) - ISBN: 978-1800620483
2. ⭐ Henderson (1984) - Classic text
3. 👍 Schaeffer (2010) - Course notes
4. ⭐ Legarra - Genomic Prediction
5. 👍 Van Vleck (1993) - Green Book
6. 📚 Van Vleck - Selection Principles
7. 👍 Cameron (1997) - ISBN: check PDF
8. 👍 WUR (2024) - Online available
9. 📚 Weller - ISBN: 978-0412597503
10. 👍 Gondro - ISBN: 978-1627034463
11. 📚 BIF Guidelines - Wiki-based

Start with the essential (⭐) books first!
