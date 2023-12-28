import * as React from 'react';

import { cn } from '@/lib/utils';

const Box = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex justify-center items-center p-4', className)}
    {...props}
  />
));
Box.displayName = 'Box';

export { Box };
