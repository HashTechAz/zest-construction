# ESLint və Next.js Build Düzəlişləri — Developer Təlimatı

Bu sənəd Vercel build-inin keçməsi üçün edilən düzəlişləri və davamda eyni səhvlərin təkrarının qarşısını almaq üçün qaydaları təsvir edir.

---

## 1. `@ts-ignore` əvəzinə `@ts-expect-error` istifadə et

**Problem:** `// @ts-ignore` ESLint tərəfindən üstünlük verilmir; həm də səbəb izahı olmadan istifadə etmək qadağandır.

**Edilən dəyişiklik:**
- **Fayl:** `src/components/features/home/blog/index.tsx`
- Bütün `// @ts-ignore` ifadələri `// @ts-expect-error` ilə əvəz edildi.
- **Vacib:** Hər `@ts-expect-error`-dan sonra **ən azı 3 simvoldan ibarət izah** yazılmalıdır (məs: `// @ts-expect-error Blog image card props spread`).

**Qayda:** TypeScript xətasını gizlətmək lazımdırsa `@ts-ignore` yox, `@ts-expect-error` istifadə et və səbəbi qısa izahla yaz.

---

## 2. JSX-də apostrof (`'`) escape et — `react/no-unescaped-entities`

**Problem:** JSX mətnində birbaşa apostrof (`'`) və ya Unicode apostrof (`’`) istifadə etmək ESLint xətasına səbəb olur.

**Edilən dəyişikliklər:**
- **contact-info.tsx:** `Let's` → `Let&apos;s`
- **story.tsx və about-content.tsx:** `it's` → `it&apos;s`, `company's` → `company&apos;s` (həm ASCII `'`, həm Unicode `’` apostrof əvəz edildi).

**Qayda:**
- JSX-də mətn içində apostrof lazımdırsa: **`&apos;`** istifadə et (məs: `Don&apos;t`, `We&apos;re`).
- Alternativ: mətn hissəsini JS ifadəsinə alıb `{"We're here"}` kimi yazmaq olar — bu halda apostrof escape etmək lazım deyil.

---

## 3. İstifadə olunmayan import və dəyişənləri sil — `@typescript-eslint/no-unused-vars`

**Problem:** İstifadə olunmayan import və dəyişənlər build zamanı xəta kimi qəbul olunur.

**Edilən dəyişiklik:**
- **Fayl:** `src/components/layout/footer/footer.tsx`
- `Hash` (lucide-react) importu heç yerdə işlədilmirdi, silindi.

**Qayda:** Heç bir komponentdə və ya kodda istifadə etmədiyin importu və dəyişəni saxlama; sil və ya lazım olan yerdə istifadə et.

---

## 4. `useEffect` dependency array-ini tam doldur — `react-hooks/exhaustive-deps`

**Problem:** `useEffect` içində istifadə olunan dəyişənlər dependency array-də olmadıqda ESLint xəbərdarlıq/xəta verir və davranış səhv ola bilər.

**Edilən dəyişiklik:**
- **Fayl:** `src/components/layout/header/mobile-sidebar.tsx`
- Route dəyişəndə sidebar-ı bağlamaq üçün olan `useEffect`-də yalnız `[pathname]` var idi, amma içəridə `open` və `onClose` da istifadə olunurdu.
- **Həll:** `pathname` dəyişəndə bağlamağı dəqiq saxlamaq üçün `useRef` ilə əvvəlki `pathname` saxlanıldı; dependency array-ə **`pathname`, `open`, `onClose`** əlavə edildi. Bağlama yalnız pathname həqiqətən dəyişəndə çağrılır.

**Qayda:** Hər `useEffect`-də istifadə etdiyin bütün dəyişənləri (props, state, context və s.) dependency array-ə əlavə et. Rule-u söndürmə; məntiqi düzgün yaz (lazım olsa ref ilə “əvvəlki dəyər” saxla).

---

## Ümumi qaydalar (Vercel / production build üçün)

1. **ESLint rule-u söndürmə** — `eslint-disable` və ya rule-u konfiqdan söndürmə; problemi həll et.
2. **Apostrof:** JSX mətnində `'` və `’` → `&apos;` və ya `{"..."}` içində yaz.
3. **TypeScript:** Yalnız həqiqətən lazım olanda `@ts-expect-error` istifadə et və izah yaz.
4. **Importlar:** İstifadə etmədiyin heç bir importu saxlama.
5. **Hooks:** `useEffect` / `useCallback` / `useMemo`-da bütün istifadə olunan dəyişənləri dependency array-ə əlavə et.

Bu qaydalara əməl etdikdə `npm run build` yerli və Vercel-də problem çıxmadan keçəcək.
