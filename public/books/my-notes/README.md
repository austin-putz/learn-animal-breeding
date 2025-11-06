# My Notes - Quarto Books

This directory contains Quarto books for personal notes on animal breeding and statistics.

## Directory Structure

```
my-notes/
├── animal-breeding/
│   ├── animal-models/          # Animal Models book
│   └── breeding-program-design/ # Breeding Program Design book
└── statistics/
    ├── linear-models/          # Linear Models book
    └── experimental-design/    # Experimental Design book
```

## How to Deploy Quarto Books

### Building Your Quarto Book

1. Build your Quarto book in its source directory:
   ```bash
   quarto render
   ```

2. This will create a `_book/` or `docs/` output directory (depending on your config)

### Copying to Website

After building, copy the output to the appropriate folder:

**For Animal Models:**
```bash
cp -r /path/to/your-book/_book/* public/books/my-notes/animal-breeding/animal-models/
```

**For Breeding Program Design:**
```bash
cp -r /path/to/your-book/_book/* public/books/my-notes/animal-breeding/breeding-program-design/
```

**For Linear Models:**
```bash
cp -r /path/to/your-book/_book/* public/books/my-notes/statistics/linear-models/
```

**For Experimental Design:**
```bash
cp -r /path/to/your-book/_book/* public/books/my-notes/statistics/experimental-design/
```

### Accessing Books

Once deployed, books will be accessible at:
- `https://learnanimalbreeding.com/books/my-notes/animal-breeding/animal-models/`
- `https://learnanimalbreeding.com/books/my-notes/animal-breeding/breeding-program-design/`
- `https://learnanimalbreeding.com/books/my-notes/statistics/linear-models/`
- `https://learnanimalbreeding.com/books/my-notes/statistics/experimental-design/`

### Updating the My Notes Page

When a book is ready, update `app/learn/my-notes/page.tsx`:

1. Remove the "Coming Soon" badge
2. Wrap the book card in an `<a>` tag linking to the book URL
3. Add `hover:scale-105` and other hover effects

Example:
```tsx
<a
  href="/books/my-notes/animal-breeding/animal-models/"
  className="group bg-gradient-to-br from-blue-50 to-indigo-50 ... hover:scale-105"
>
  {/* Book card content */}
</a>
```

## Notes

- Each book should have an `index.html` in its root directory
- Quarto automatically generates this when you build
- The folder structure keeps books organized by category
- Books are served as static files by Next.js
