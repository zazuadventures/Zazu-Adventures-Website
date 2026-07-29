import { Link } from "react-router-dom";

function Breadcrumbs({ items }) {
  if (!items?.length) {
    return null;
  }

  return (
    <nav aria-label="Breadcrumb" className="mx-auto w-full max-w-6xl px-6 py-8">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-[#666666]">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={`${item.label}-${item.href ?? index}`} className="flex items-center gap-2">
              {index > 0 ? (
                <span aria-hidden="true" className="text-[#C29B5A]">
                  /
                </span>
              ) : null}

              {item.href && !isLast ? (
                <Link
                  to={item.href}
                  className="font-medium text-[#203A4A] transition hover:text-[#8A6A3D]"
                >
                  {item.label}
                </Link>
              ) : (
                <span aria-current="page" className="font-medium text-[#8A6A3D]">
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumbs;
