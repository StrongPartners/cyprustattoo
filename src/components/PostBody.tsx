import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Minimal Markdown for blog bodies: ##/### headings, -/* and 1. lists, paragraphs, and inline
 * **bold**, *italic* and [links](url). The old renderer only knew "## " and printed the rest
 * verbatim, so every list, bold phrase and link in 300+ posts showed raw asterisks and brackets.
 * Deliberately tiny (no HTML passthrough) — the content is ours, but nothing here should ever
 * need dangerouslySetInnerHTML.
 */

const INLINE = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)\s]+\)|\*[^*\s][^*]*\*)/g;

function inline(text: string, keyBase: string): ReactNode[] {
    return text.split(INLINE).filter(Boolean).map((part, i) => {
        const key = `${keyBase}-${i}`;
        if (part.startsWith("**") && part.endsWith("**")) {
            return <strong key={key} className="font-semibold text-white">{part.slice(2, -2)}</strong>;
        }
        const link = part.match(/^\[([^\]]+)\]\(([^)\s]+)\)$/);
        if (link) {
            const [, label, href] = link;
            const cls = "text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary";
            return href.startsWith("/") ? (
                <Link key={key} href={href} className={cls}>{label}</Link>
            ) : (
                <a key={key} href={href} target="_blank" rel="noopener noreferrer" className={cls}>{label}</a>
            );
        }
        if (part.length > 2 && part.startsWith("*") && part.endsWith("*")) {
            return <em key={key}>{part.slice(1, -1)}</em>;
        }
        return part;
    });
}

const BULLET = /^\s*[-*]\s+/;
const NUMBERED = /^\s*\d+[.)]\s+/;

export default function PostBody({ content }: { content: string }) {
    const blocks = content.replace(/\r\n/g, "\n").split(/\n\s*\n/);
    const out: ReactNode[] = [];

    blocks.forEach((raw, b) => {
        const block = raw.trim();
        if (!block) return;
        const key = `b${b}`;
        const lines = block.split("\n").map((l) => l.trim()).filter(Boolean);

        const heading = block.match(/^(#{2,4})\s+(.+)$/);
        if (heading && lines.length === 1) {
            const text = inline(heading[2].replace(/\*\*/g, ""), key);
            if (heading[1] === "##") {
                out.push(
                    <h2 key={key} className="mb-8 mt-16 text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
                        <span className="mr-4 text-primary">—</span>
                        {text}
                    </h2>
                );
            } else {
                out.push(<h3 key={key} className="mb-5 mt-10 text-2xl font-bold text-white">{text}</h3>);
            }
            return;
        }

        if (lines.every((l) => BULLET.test(l)) || lines.every((l) => NUMBERED.test(l))) {
            const ordered = NUMBERED.test(lines[0]);
            const items = lines.map((l, i) => (
                <li key={`${key}-${i}`} className="pl-2">{inline(l.replace(ordered ? NUMBERED : BULLET, ""), `${key}-${i}`)}</li>
            ));
            const cls = "mb-8 space-y-3 pl-6 text-lg leading-relaxed text-white/70 marker:text-primary sm:text-xl";
            out.push(ordered ? <ol key={key} className={`list-decimal ${cls}`}>{items}</ol> : <ul key={key} className={`list-disc ${cls}`}>{items}</ul>);
            return;
        }

        // A bold-only first line ("**Do**") followed by list items: label + list.
        if (lines.length > 1 && lines.slice(1).every((l) => BULLET.test(l))) {
            out.push(<p key={`${key}-l`} className="mb-3 text-lg font-semibold text-white sm:text-xl">{inline(lines[0], `${key}-l`)}</p>);
            out.push(
                <ul key={key} className="mb-8 list-disc space-y-3 pl-6 text-lg leading-relaxed text-white/70 marker:text-primary sm:text-xl">
                    {lines.slice(1).map((l, i) => (
                        <li key={`${key}-${i}`} className="pl-2">{inline(l.replace(BULLET, ""), `${key}-${i}`)}</li>
                    ))}
                </ul>
            );
            return;
        }

        out.push(
            <p key={key} className="mb-8 text-lg font-light leading-relaxed text-white/70 sm:text-xl">
                {lines.flatMap((l, i) => (i ? [<br key={`${key}-br${i}`} />, ...inline(l, `${key}-${i}`)] : inline(l, `${key}-${i}`)))}
            </p>
        );
    });

    return <div className="max-w-none">{out}</div>;
}
