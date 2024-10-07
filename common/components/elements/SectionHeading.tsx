interface SectionHeadingProps {
  title: string;
  icon?: React.ReactNode;
  className?: string;
  [propname: string]: React.ReactNode | string | undefined;
}

const SectionHeading = ({
  title,
  icon,
  className = "",
  ...others
}: SectionHeadingProps) => {
  return (
    <div
      className={`flex items-center gap-1.5 text-2xl font-medium text-neutral-800 dark:text-neutral-300 lg:text-4xl ${className}`}
      {...others}
    >
      {icon ? <i>{icon}</i> : null}
      <h2 className="capitalize">{title}</h2>
    </div>
  );
};

export default SectionHeading;
