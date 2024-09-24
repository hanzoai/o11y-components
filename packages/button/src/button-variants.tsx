import { cva } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
      theme: {
        light: "",
        dark: "dark",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      theme: "light",
    },
    compoundVariants: [
      {
        theme: "dark",
        variant: "default",
        className:
          "bg-primary-dark text-primary-foreground-dark shadow hover:bg-primary-dark/90",
      },
      {
        theme: "dark",
        variant: "destructive",
        className:
          "bg-destructive-dark text-destructive-foreground-dark shadow-sm hover:bg-destructive-dark/90",
      },
      {
        theme: "dark",
        variant: "outline",
        className:
          "border border-input-dark bg-background-dark shadow-sm text-primary-foreground hover:bg-background-dark/80",
      },
      {
        theme: "dark",
        variant: "secondary",
        className:
          "bg-secondary-dark text-primary-foreground shadow-sm hover:bg-secondary-dark/80",
      },
      {
        theme: "dark",
        variant: "ghost",
        className: "hover:bg-accent-dark hover:text-accent-foreground-dark",
      },
      {
        theme: "dark",
        variant: "link",
        className: "text-primary-dark underline-offset-4 hover:underline",
      },
    ],
  }
);

export default buttonVariants;
