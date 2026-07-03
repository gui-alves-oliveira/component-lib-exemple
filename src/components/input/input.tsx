import { Input as InputPrimitive } from "@base-ui/react/input";
import styles from "./input.module.css";
import { cva, type VariantProps } from "class-variance-authority";

const input = cva(styles.base, {
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
    fill: {
      true: styles.fill,
      false: styles.content,
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
    fill: false,
  },
});

export function Input({
  size,
  variant,
  fill,
  ...props
}: InputPrimitive.Props & VariantProps<typeof input>) {
  return (
    <InputPrimitive className={input({ size, variant, fill })} {...props} />
  );
}
