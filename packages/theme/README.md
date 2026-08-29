# `@signozhq/theme`

The theme layer for the SigNoz design system: one stylesheet, no build step.

Colour, spacing and typography values live in `@signozhq/design-tokens`. This
package adds the two things tokens alone do not provide:

- the per-accent overrides selected by `[data-theme-color]` (blue, green, amber,
  cherry, aqua), in light and dark
- base element defaults — the global border colour that a bare `border`
  declaration resolves against, the keyboard-only focus ring, and the page
  background and text colour

## Usage

```css
@import "@signozhq/design-tokens/dist/style.css";
@import "@signozhq/design-tokens/dist/themes/signoz-tokens.css";
@import "@signozhq/theme";
```

Order matters: the tokens define the variables, this file consumes them.

Pick an accent by setting the attribute on any ancestor, and dark mode with the
`dark` class:

```html
<html class="dark" data-theme-color="aqua">
```
