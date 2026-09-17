import Link from "next/link";

type MenuItem = {
  label: string;
  description: string;
  href?: string;
  icon?: React.ReactNode;
};

export default function NavDropdown({
  label,
  href,
  columns,
}: {
  label: string;
  href: string;
  columns: MenuItem[][];
}) {
  return (
    <div className="group relative">
      <Link href={href} className="hover:text-foreground">
        {label}
      </Link>
      <div className="invisible absolute left-1/2 top-full -translate-x-1/2 translate-y-1 pt-3 opacity-0 transition duration-200 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
        <div className="flex gap-1 rounded-2xl border border-border bg-panel px-6 pb-6 pt-5 shadow-2xl">
          {columns.map((column, i) => (
            <div key={i} className="flex w-[260px] shrink grow flex-col gap-4">
              <ul className="flex flex-col gap-1">
                {column.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href ?? href}
                      className="flex w-auto items-start gap-3 rounded-lg p-3 text-left hover:bg-black/5"
                    >
                      {item.icon && (
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent-text">
                          {item.icon}
                        </span>
                      )}
                      <span className="flex flex-col gap-0.5">
                        <span className="text-sm font-medium text-foreground">
                          {item.label}
                        </span>
                        <span className="text-xs text-foreground/65">{item.description}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
