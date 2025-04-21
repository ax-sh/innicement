import clsx from 'clsx';

function Circle({
  children,
  className,
  rotate,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & { rotate?: number }) {
  return (
    <div
      className={clsx(
        className,
        'solar rounded-full border-2 border-black h-full w-full p-9',
      )}
      style={{ transform: `rotateX(${rotate}deg)` }}
      {...props}
    >
      {children}
    </div>
  );
}

export default function Circles() {
  return (
    <div
      className="w-[60vh] h-[60vh] flex justify-center m-auto"
      style={{ perspective: '50rem' }}
    >
      <Circle rotate={70}>
        <Circle>
          <Circle rotate={0}></Circle>
        </Circle>
      </Circle>
    </div>
  );
}
