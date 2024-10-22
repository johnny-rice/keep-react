'use client'
import { Title } from '@radix-ui/react-dialog'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { cn } from '../../utils/cn'

const NotificationTitle = forwardRef<ElementRef<typeof Title>, ComponentPropsWithoutRef<typeof Title>>(
  ({ className, ...props }, ref) => (
    <Title
      ref={ref}
      className={cn('text-body-4 font-medium text-metal-900 lg:text-body-1 dark:text-white', className)}
      {...props}
    />
  ),
)
NotificationTitle.displayName = Title.displayName

export { NotificationTitle }
