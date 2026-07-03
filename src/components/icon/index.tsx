import { cva, type VariantProps } from "class-variance-authority";
import styles from "./icon.module.css";

const icon = cva(styles.base, {
  variants: {
    size: {
      sm: styles.sm,
      md: styles.md,
      lg: styles.lg,
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type IconProps = React.HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof icon> & {
    icon: React.ElementType; // Lucide icon component
  };

export function Icon({
  icon: LucideIcon,
  size,
  className,
  ...props
}: IconProps) {
  return (
    <span className={icon({ size, className })} {...props}>
      <LucideIcon />
    </span>
  );
}
