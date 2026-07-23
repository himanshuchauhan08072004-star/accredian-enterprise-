import { forwardRef } from "react";
import type { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface FormTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export const FormTextarea = forwardRef<HTMLTextAreaElement, FormTextareaProps>(
  ({ label, error, id, className, ...props }, ref) => {
    const inputId = id ?? label.toLowerCase().replace(/\s+/g, "-");
    const errorId = `${inputId}-error`;

    return (
      <div className="flex flex-col gap-1.5">
        <label htmlFor={inputId} className="text-foreground/80 text-sm font-semibold">
          {label}
        </label>
        <textarea
          ref={ref}
          id={inputId}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          rows={4}
          className={cn(
            "text-foreground placeholder:text-foreground/35 resize-none rounded-xl border bg-white px-4 py-3 text-sm",
            "focus-visible:outline-brand-500 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2",
            error ? "border-red-400" : "border-surface-border hover:border-brand-200",
            className,
          )}
          {...props}
        />
        {error && (
          <p id={errorId} role="alert" className="text-xs font-medium text-red-500">
            {error}
          </p>
        )}
      </div>
    );
  },
);

FormTextarea.displayName = "FormTextarea";
