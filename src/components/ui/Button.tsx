import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2 focus:ring-offset-primary-900",
  {
    variants: {
      variant: {
        primary: "bg-secondary-500 text-white hover:bg-secondary-600 active:bg-secondary-700",
        secondary: "border border-primary-400 text-primary-100 hover:bg-primary-800 active:bg-primary-700",
        ghost: "text-primary-200 hover:text-white hover:bg-primary-800",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
}

export function Button({ className, variant, size, href, children, ...props }: ButtonProps) {
  if (href) {
    return (
      <a href={href} className={cn(buttonVariants({ variant, size }), className)}>
        {children}
      </a>
    );
  }

  return (
    <button className={cn(buttonVariants({ variant, size }), className)} {...props}>
      {children}
    </button>
  );
}
