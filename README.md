# Koolituste kataloog – Tehnikakeskus

> Outline: headings are in Estonian, notes are in English. Write the Estonian text yourself in your own words.

## 1. Kolme struktuuri võrdlus (8.1)

The same UI in all three: header with nav, heading, category pills, course grid, card, footer.

### A. Üks suur komponent

```
App          (all JSX inline: header, nav links, pills, cards, footer)
```

### B. Väga palju väikeseid komponente

```
App
├── Header
│   ├── CompanyName
│   ├── Tagline
│   └── Navigation
│       └── NavLink
├── Main
│   ├── PageHeading
│   │   ├── Title
│   │   └── Intro
│   ├── CategoryList
│   │   └── CategoryPill
│   └── CourseList
│       └── CourseCard
│           ├── CourseCategory
│           ├── CourseBadge
│           ├── CourseTitle
│           ├── CourseDescription
│           ├── CourseDetails
│           │   └── DetailItem
│           └── CoursePrice
└── Footer
    ├── Copyright
    └── ContactInfo
```

### C. Vastutuse järgi (valitud)

```
App
├── Header
│   └── Navigation
├── main
│   ├── PageHeading
│   ├── CategoryList
│   └── CourseList
│       └── CourseCard
└── Footer
```

Note: `main` is a plain semantic tag in `App`, not a component. Mention this, because the teacher's example has a `Main` component.

### Võrdlus

| Küsimus | A | B | C |
|---|---|---|---|
| Easiest to understand | Easy at first, one file, but gets long | Hardest to trace, too many files for tiny things | Component names match what you see on the page |
| Change only course display | Dig through a large file, risk touching other parts | Edit several tiny components | One file (`CourseCard` + its CSS) |
| Most repeated code | Card markup, nav links and pills written out inline | Little duplication, but lots of boilerplate (imports, prop passing) | Little, one card rendered via `map` |
| Reusable elsewhere | Nothing | Many pieces, but mostly trivial (`Title`, `Intro`), small gain | `CourseCard`, `CourseList`, `Navigation`, `Header`, `Footer` |

### Probleemid liiga paljude väikeste komponentidega

Your own words. Points to cover:

- Props get passed down through several layers.
- You have to open many files to see one card.
- Naming overhead; a new reader can't find things.
- Indirection without any reuse payoff.

### Valik

C. Write 2–3 reasons of your own. Ideas: each component maps to a visible block; `CourseCard` is the one real repeating unit; course display can be changed in one place.

## 2. Komponentide hierarhia (8.2)

Reuse the tree from C, then:

| Komponent | Ülesanne | Sisaldab | Propsid |
|---|---|---|---|
| `App` | Composes the page, imports the data | all below | none |
| `Header` | Brand name and tagline, holds the nav | `Navigation` | `companyName`, `tagline` |
| `Navigation` | In-page links | none | `ariaLabel` |
| `PageHeading` | The h1 and the intro | none | `title`, `intro` |
| `CategoryList` | Category pills | none | `categories`, `courses` (counts – decide if kept) |
| `CourseList` | Section heading and the card grid | `CourseCard` | `courses` |
| `CourseCard` | One course | none | `title`, `description`, `duration`, `price`, `category`, `instructor`, `popular` |
| `Footer` | Copyright and contact details | none | `companyName`, `email`, `phone` |

Data flow: `data/courses.js` → `App` → `CourseList` → `CourseCard`.

### Põhjendus

- Each component is one visible block with one job.
- `CourseCard` repeats 6 times, so it is the reusable unit.
- `CourseList` and `CourseCard` are separate: layout and iteration vs rendering one item.
- Data lives outside the UI, so content changes don't touch components.
- Title and price are not split out: never used outside the card.
- CSS: global variables and base styles in `index.css`, everything else scoped per component.

## 3. Projekti käivitamine

```bash
npm install
npm run dev
```

## 4. Komponentide vastutus

Fill in from the table above, one or two sentences per component, in your own words.

## 5. Propsid

Explain: where props come from (`CourseList` passes them from the `courses` array), how `CourseCard` uses them, and the destructured-vs-`props` difference (same UI, only syntax differs).

## 6. Populaarsed koolitused (8.4)

To fill in after 8.4.

## 7. Ekraanipildid

To add after 8.4 (desktop and 375px).
