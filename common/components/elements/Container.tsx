import cn from "@/common/libs/clsxm";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  backgroundGradient?: boolean;
  [propname: string]: React.ReactNode | string | undefined;
}

const Container = ({
  children,
  className = "",
  backgroundGradient,
  ...others
}: ContainerProps) => {
  return (
    <div
      className={cn(
        "py-8",

        className,
      )}
      {...others}
    >
      {children}
    </div>
  );
};

export default Container;
