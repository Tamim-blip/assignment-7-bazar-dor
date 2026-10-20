
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
    <div className="bg-base-200 mt-5">
      <div className="flex gap-8 p-4 container mx-auto">
        {data.map((d) => (
          <div key={d.id}>
            <Link
              className="flex gap-1"
              href={`/category/${d.slug}`}
            >
              <p>{d.icon}</p>
              <p>{d.nameBn}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavLinks;
