import { MDXRemote } from "next-mdx-remote/rsc";
import { CTABox } from "@/components/ui/CTABox";

// Custom components available in MDX files
const mdxComponents = {
  CTABox,
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className="mb-4 mt-8 font-[var(--font-heading)] text-[1.75rem] font-extrabold text-navy md:text-[2rem]"
      {...props}
    />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="mb-3 mt-8 font-[var(--font-heading)] text-[1.25rem] font-bold text-navy md:text-[1.5rem]"
      {...props}
    />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className="mb-2 mt-6 font-[var(--font-heading)] text-lg font-bold text-navy"
      {...props}
    />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="mb-4 text-base leading-relaxed text-navy/80" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="mb-4 ml-5 list-disc space-y-1 text-base text-navy/80" {...props} />
  ),
  ol: (props: React.OlHTMLAttributes<HTMLOListElement>) => (
    <ol className="mb-4 ml-5 list-decimal space-y-1 text-base text-navy/80" {...props} />
  ),
  li: (props: React.LiHTMLAttributes<HTMLLIElement>) => (
    <li className="leading-relaxed" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="font-medium text-orange underline hover:text-orange-hover" {...props} />
  ),
  blockquote: (props: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="mb-4 border-l-4 border-orange pl-4 italic text-navy/60"
      {...props}
    />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code className="rounded bg-navy/5 px-1.5 py-0.5 text-sm text-navy" {...props} />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      className="mb-4 overflow-x-auto rounded-xl bg-navy p-4 text-sm text-cream"
      {...props}
    />
  ),
  table: (props: React.TableHTMLAttributes<HTMLTableElement>) => (
    <div className="mb-4 overflow-x-auto">
      <table className="w-full text-sm text-navy/80" {...props} />
    </div>
  ),
  th: (props: React.ThHTMLAttributes<HTMLTableCellElement>) => (
    <th className="border-b border-navy/10 pb-2 text-left font-bold text-navy" {...props} />
  ),
  td: (props: React.TdHTMLAttributes<HTMLTableCellElement>) => (
    <td className="border-b border-navy/5 py-2" {...props} />
  ),
  hr: () => <hr className="my-8 border-navy/10" />,
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-bold text-navy" {...props} />
  ),
};

export function MdxContent({ source }: { source: string }) {
  return (
    <MDXRemote
      source={source}
      components={mdxComponents}
    />
  );
}
