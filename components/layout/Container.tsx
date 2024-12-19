interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`w-full px-4 mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[75%] xl:max-w-[75%] 2xl:max-w-[75%] ${className}`}>
      {children}
    </div>
  );
}