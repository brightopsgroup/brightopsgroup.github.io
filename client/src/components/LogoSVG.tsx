import logoImage from "../assets/logo.png";

interface LogoSVGProps {
  className?: string;
  inverted?: boolean;
}

export default function LogoSVG({ className = "", inverted = false }: LogoSVGProps) {
  // For this component, we'll just use the actual logo image
  return (
    <div className={className}>
      <img 
        src={logoImage} 
        alt="BrightOps Group" 
        className={`h-full w-auto ${inverted ? 'brightness-0 invert' : ''}`}
        style={{ objectFit: 'contain' }}
      />
    </div>
  );
}
