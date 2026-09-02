type MenuItem = {
  label: string;
  description: string;
  href?: string;
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
      <a href={href} className="hover:text-foreground">
        {label}
      </a>
      <div className="invisible absolute left-1/2 top-full -translate-x-1/2 translate-y-1 pt-3 opacity-0 transition duration-200 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
        <div className="flex gap-1 rounded-2xl border border-border bg-panel px-6 pb-6 pt-5 shadow-2xl">
          {columns.map((column, i) => (
            <div key={i} className="flex w-[220px] shrink grow flex-col gap-4">
              <ul className="flex flex-col gap-1">
                {column.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href ?? href}
                      className="flex w-auto flex-col gap-1 rounded-lg p-3 text-left hover:bg-white/5"
                    >
                      <span className="text-sm font-medium text-foreground">
                        {item.label}
                      </span>
                      <p className="text-xs text-foreground/50">{item.description}</p>
                    </a>
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
