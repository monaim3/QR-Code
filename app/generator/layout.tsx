import BreadcrumbFooter from "@/components/generator/Breadcrumb_footer";
import GeneratorHeader from "@/components/generator/Generator_Header";

export default function GeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <GeneratorHeader />
      {children}
      <BreadcrumbFooter />
    </>
  );
}
