interface LogoProps {
  className?: string;
  color?: string;
}

export const CertLogos = {
  BRC: ({ className }: LogoProps) => (
    <svg viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg" className={className || "w-full h-full"}>
      <text x="100" y="55" fontFamily="Arial, sans-serif" fontSize="48" fontWeight="900" fill="#005A9C" textAnchor="middle" letterSpacing="-1">BRCGS</text>
    </svg>
  ),
  ISO22000: ({ className, color }: LogoProps) => (
    <svg viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg" className={className || "w-full h-full"}>
      <text x="100" y="45" fontFamily="Arial, sans-serif" fontSize="36" fontWeight="bold" fill={color || "#1D1D1B"} textAnchor="middle">ISO 22000</text>
      <text x="100" y="65" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="#666" textAnchor="middle" letterSpacing="2">FOOD SAFETY</text>
    </svg>
  ),
  ISO9001: ({ className, color }: LogoProps) => (
    <svg viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg" className={className || "w-full h-full"}>
      <text x="100" y="45" fontFamily="Arial, sans-serif" fontSize="36" fontWeight="bold" fill={color || "#1D1D1B"} textAnchor="middle">ISO 9001</text>
      <text x="100" y="65" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="#666" textAnchor="middle" letterSpacing="2">QUALITY MANAGEMENT</text>
    </svg>
  ),
  HACCP: ({ className }: LogoProps) => (
    <svg viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg" className={className || "w-full h-full"}>
      <rect x="22" y="14" width="156" height="52" rx="8" fill="none" stroke="#007A33" strokeWidth="4" />
      <text x="100" y="45" fontFamily="Arial, sans-serif" fontSize="34" fontWeight="900" fill="#007A33" textAnchor="middle" letterSpacing="1">HACCP</text>
      <text x="100" y="58" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="bold" fill="#666" textAnchor="middle" letterSpacing="2">FOOD SAFETY</text>
    </svg>
  ),
  Halal: ({ className }: LogoProps) => (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className || "w-full h-full"}>
      <circle cx="50" cy="50" r="42" fill="none" stroke="#007A33" strokeWidth="4" />
      <circle cx="50" cy="50" r="34" fill="none" stroke="#007A33" strokeWidth="1" />
      <text x="50" y="56" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold" fill="#007A33" textAnchor="middle">HALAL</text>
    </svg>
  ),
  Kosher: ({ className, color }: LogoProps) => (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className || "w-full h-full"}>
      <circle cx="50" cy="50" r="40" fill="none" stroke={color || "#1D1D1B"} strokeWidth="4" />
      <text x="50" y="62" fontFamily="Arial, sans-serif" fontSize="38" fontWeight="bold" fill={color || "#1D1D1B"} textAnchor="middle">U</text>
    </svg>
  ),
  IFS: ({ className }: LogoProps) => (
    <svg viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg" className={className || "w-full h-full"}>
      <rect x="40" y="20" width="120" height="40" fill="#E3000F" rx="4" />
      <text x="100" y="47" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="bold" fill="#FFF" textAnchor="middle">IFS Food</text>
    </svg>
  ),
  SEDEX: ({ className }: LogoProps) => (
    <svg viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg" className={className || "w-full h-full"}>
      <text x="100" y="52" fontFamily="Arial, sans-serif" fontSize="38" fontWeight="bold" fill="#7AB800" textAnchor="middle" letterSpacing="-1">Sedex</text>
    </svg>
  )
};
