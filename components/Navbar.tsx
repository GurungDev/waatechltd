"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoMailOpenOutline } from "react-icons/io5";

const NavbarComponent = () => {
  const [scroll, setScroll] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [showPopover, setShowPopover] = useState(false);
  const pathname = usePathname();
  const services = [
    {
      label: "Custom Web Development",
      href: "/services/custom-web-development",
    },
    {
      label: "Custom Software Development",
      href: "/services/custom-software-development",
    },
    { label: "UX/UI Design", href: "/services/ux-ui-design" },
    { label: "SEO Optimization", href: "/services/seo-optimization" },
    { label: "E-Commerce Solution", href: "/services/e-commerce-solution" },
    { label: "Web Maintenance & Care", href: "/services/web-maintenance-care" },
    { label: "Web Analytics", href: "/services/web-analytics" },
    {
      label: "Domain Register & Hosting",
      href: "/services/domain-register-hosting",
    },
  ];
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsClient(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    setActiveLink(pathname);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  const isNotHomePage = pathname !== "/";

  return (
    <nav
      className={`fixed top-0 w-full left-0 right-0 transition-all duration-500 z-50 ${
        scroll > 0 || isNotHomePage ? "bg-zinc-200 shadow-xl" : "bg-transparent"
      } backdrop-blur-sm`}
    >
      <div className="app-layout flex items-center justify-between py-3 px-4">
        <h4
          className={` ${
            scroll > 0 || isNotHomePage ? "text-neutral-700 " : "text-black"
          }`}
        >
          <Link href="/" className="font-[700]">
            WAA Tech Ltd.
          </Link>
        </h4>

        <div
          className={`hidden min-[1100px]:flex gap-5 ${
            scroll > 0 || isNotHomePage ? "text-neutral-800 " : "text-black "
          }`}
        >
          {[
            { href: "/", label: "Home", color: "decoration-red-400" },
            {
              href: "#",
              label: "Services",
              color: "decoration-green-400",
            },
            {
              href: "/aboutus",
              label: "About us",
              color: "decoration-purple-400",
            },
            {
              href: "#contact",
              label: "Contact Us",
              color: "decoration-yellow-400",
            },
          ].map((link) => (
            <div key={link?.label}>
              {link.label === "Services" ? (
                <div
                  className={`${"caption font-[500] tracking-loose leading-[1.2rem]"}`}
                  onClick={() => {
                    setShowPopover(!showPopover);
                  }}
                >
                  <p
                    className={`hover:underline ${
                      link.color
                    } underline-offset-4 ${
                      pathname.startsWith("/services/") ? `underline` : ""
                    }`}
                  >
                    {link.label}
                  </p>
                </div>
              ) : (
                <Link
                  href={link.href}
                  key={link.href}
                  className={`${"caption font-[500] tracking-loose leading-[1.2rem]"}`}
                  onClick={() => {
                    setActiveLink(link.href);

                    setShowPopover(false);
                  }}
                >
                  <p
                    className={`hover:underline ${
                      link.color
                    } underline-offset-4 ${
                      activeLink === link.href ? `underline` : ""
                    }`}
                  >
                    {link.label}
                  </p>
                </Link>
              )}

              {link.label === "Services" && showPopover && (
                <div className="absolute top-full px-8  mt-2 bg-white border border-gray-200 shadow-lg py-5 rounded">
                  <div className="grid gap-3">
                    {services.map((service, index) => (
                      <Link
                        href={service?.href}
                        key={index}
                        onClick={() => {
                          setActiveLink("Services");

                          setShowPopover(false);
                        }}
                        className={`link-underline  `}
                      >
                        {service?.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div
          className={`flex gap-3 ${
            scroll > 0 || isNotHomePage ? "text-neutral-700" : "text-black"
          }`}
        >
          <Link href="https://wa.me/+4915231401084">
            <FaWhatsapp size={24} />
          </Link>
          <Link href="mailto:contact@waa-tech-ltd.com">
            <IoMailOpenOutline size={24} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
