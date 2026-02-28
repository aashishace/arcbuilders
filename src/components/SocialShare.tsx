"use client";

import { Facebook, Twitter, Linkedin, Link2, Check } from "lucide-react";
import { useState } from "react";

interface SocialShareProps {
  url: string;
  title: string;
  excerpt: string;
}

export default function SocialShare({ url, title, excerpt }: SocialShareProps) {
  const [copied, setCopied] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedExcerpt = encodeURIComponent(excerpt);

  const shareLinks = [
    {
      label: "Facebook",
      Icon: Facebook,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: "hover:bg-[#1877f2] hover:border-[#1877f2]",
    },
    {
      label: "X (Twitter)",
      Icon: Twitter,
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      color: "hover:bg-[#0a0a0a] hover:border-[#0a0a0a]",
    },
    {
      label: "LinkedIn",
      Icon: Linkedin,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      color: "hover:bg-[#0077b5] hover:border-[#0077b5]",
    },
  ];

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      const textarea = document.createElement("textarea");
      textarea.value = url;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1a1a1a]/40">
        Share this article
      </p>
      <div className="flex gap-2">
        {shareLinks.map(({ label, Icon, href, color }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Share on ${label}`}
            className={`flex h-10 w-10 items-center justify-center border border-[#1a1a1a]/10 text-[#1a1a1a]/40 transition-all duration-300 hover:text-white ${color}`}
          >
            <Icon size={16} />
          </a>
        ))}
        <button
          onClick={handleCopyLink}
          aria-label="Copy link"
          className={`flex h-10 w-10 items-center justify-center border transition-all duration-300 ${
            copied
              ? "border-green-500 bg-green-500 text-white"
              : "border-[#1a1a1a]/10 text-[#1a1a1a]/40 hover:border-accent hover:bg-accent hover:text-white"
          }`}
        >
          {copied ? <Check size={16} /> : <Link2 size={16} />}
        </button>
      </div>
    </div>
  );
}
