interface SectionHeaderProps {
  id?: string;
  title: string;
  subtitle?: string;
}

const SectionHeader = ({ id, title, subtitle }: SectionHeaderProps) => {
  return (
    <div id={id} className="mb-8 scroll-mt-24">
      <h2 className="text-3xl font-bold text-foreground md:text-4xl font-serif">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-lg text-muted-foreground">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionHeader;
