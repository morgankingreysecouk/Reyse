import { products } from "../products/data";

// The first two products are "featured" (half-width); everything after
// that is third-width, which a 6-column grid wraps into rows of three on
// its own — so this keeps working as products are added or removed.
export default function ProductsBento() {
  return (
    <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-6">
      {products.map((product, i) => (
        <div
          key={product.slug}
          className={`group relative col-span-2 flex flex-col overflow-hidden rounded-3xl border border-border bg-panel transition hover:border-foreground/30 ${
            i < 2 ? "sm:col-span-3" : "sm:col-span-2"
          }`}
        >
          <div
            className={`relative flex items-center justify-center overflow-hidden border-b border-border bg-gradient-to-br from-panel to-background ${
              i < 2 ? "h-64" : "h-48"
            }`}
          >
            {/* Placeholder — animated background graphic drops in here */}
            <div
              aria-hidden
              className="h-24 w-24 rounded-full bg-accent/10 blur-2xl transition duration-300 group-hover:bg-accent/20"
            />
            {product.status && (
              <span
                className={`absolute right-4 top-4 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium backdrop-blur ${
                  product.status === "Live" ? "text-accent" : "text-foreground/60"
                }`}
              >
                {product.status}
              </span>
            )}
          </div>
          <div className="p-6">
            <h3 className="text-lg font-semibold">{product.label}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}
