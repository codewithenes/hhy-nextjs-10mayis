import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "HHY Group — Global Private Label Gıda Üreticisi",
    template: "%s — HHY Group",
  },
  description:
    "HHY Group, Türkiye merkezli, dikey entegrasyona sahip bir gıda üreticisidir. Küresel B2B ortakları için private label çikolata, kuruyemiş, protein bar ve atıştırmalık üretiminde uzmanlaşmıştır.",
  alternates: {
    canonical: "https://hhygroup.com/tr",
    languages: {
      "en-US": "https://hhygroup.com",
      "tr-TR": "https://hhygroup.com/tr",
    },
  },
};

export default function TrLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div lang="tr">
      {children}
    </div>
  );
}
