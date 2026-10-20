
import BaseUrl from "@/Api/BaseUrl";
import Link from "next/link";

interface TNavLinks {
  id: string;
  slug: string;
  nameBn: string;
  icon: string;
}

const NavLinks = async () => {
  const res = await fetch(`${BaseUrl}/categories`, {
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  const data: TNavLinks[] = await res.json();

  return (
    <div className="bg-base-200 mt-4 sm:mt-5 w-full">
      <div className="container mx-auto w-full px-3 sm:px-4">
        <div className="flex items-center gap-4 sm:gap-6 md:gap-8 p-3 sm:p-4 overflow-x-auto whitespace-nowrap scrollbar-hide">

          {data.map((d) => (
            <div key={d.id} className="shrink-0">
              <Link
                className="flex items-center gap-1.5 text-sm sm:text-base transition-colors hover:text-green-600"
                href={`/category/${d.slug}`}
              >
                <span>{d.icon}</span>
                <span>{d.nameBn}</span>
              </Link>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default NavLinks;
