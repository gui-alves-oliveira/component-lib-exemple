import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import styles from "./button.module.css";

const button = cva(styles.base, {
  variants: {
    variant: {
      primary: styles.primary,
      secondary: styles.secondary,
      ghost: styles.ghost,
    },
    size: {
      sm: styles.sm,
      md: styles.md,
      lg: styles.lg,
    },
    full: {
      true: styles.full,
      false: "",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
    full: false,
  },
});

type ButtonProps = ButtonPrimitive.Props & VariantProps<typeof button>;

export function Button({
  variant,
  size,
  full,
  className,
  ...props
}: ButtonProps) {
  return (
    <ButtonPrimitive
      className={button({ variant, size, full, className })}
      {...props}
    />
  );
}
