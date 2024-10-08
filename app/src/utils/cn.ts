import { clsx, type ClassValue } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

const twMerge = extendTailwindMerge({
  cacheSize: 1000,
  extend: {
    classGroups: {
      'font-size': [
        {
          text: [
            'body-1',
            'body-2',
            'body-3',
            'body-4',
            'body-5',
            'heading-1',
            'heading-2',
            'heading-3',
            'heading-4',
            'heading-5',
            'heading-6',
            'display-1',
          ],
        },
      ],
      'text-color': [
        {
          text: [
            'primary-25',
            'primary-50',
            'primary-100',
            'primary-200',
            'primary-300',
            'primary-400',
            'primary-500',
            'primary-600',
            'primary-700',
            'primary-800',
            'primary-900',
            'success-25',
            'success-50',
            'success-100',
            'success-200',
            'success-300',
            'success-400',
            'success-500',
            'success-600',
            'success-700',
            'success-800',
            'success-900',
            'warning-25',
            'warning-50',
            'warning-100',
            'warning-200',
            'warning-300',
            'warning-400',
            'warning-500',
            'warning-600',
            'warning-700',
            'warning-800',
            'warning-900',
            'metal-25',
            'metal-50',
            'metal-100',
            'metal-200',
            'metal-300',
            'metal-400',
            'metal-500',
            'metal-600',
            'metal-700',
            'metal-800',
            'metal-900',
            'error-25',
            'error-50',
            'error-100',
            'error-200',
            'error-300',
            'error-400',
            'error-500',
            'error-600',
            'error-700',
            'error-800',
            'error-900',
          ],
        },
      ],
      'bg-color': [
        {
          bg: [
            'primary-25',
            'primary-50',
            'primary-100',
            'primary-200',
            'primary-300',
            'primary-400',
            'primary-500',
            'primary-600',
            'primary-700',
            'primary-800',
            'primary-900',
            'success-25',
            'success-50',
            'success-100',
            'success-200',
            'success-300',
            'success-400',
            'success-500',
            'success-600',
            'success-700',
            'success-800',
            'success-900',
            'warning-25',
            'warning-50',
            'warning-100',
            'warning-200',
            'warning-300',
            'warning-400',
            'warning-500',
            'warning-600',
            'warning-700',
            'warning-800',
            'warning-900',
            'metal-25',
            'metal-50',
            'metal-100',
            'metal-200',
            'metal-300',
            'metal-400',
            'metal-500',
            'metal-600',
            'metal-700',
            'metal-800',
            'metal-900',
            'error-25',
            'error-50',
            'error-100',
            'error-200',
            'error-300',
            'error-400',
            'error-500',
            'error-600',
            'error-700',
            'error-800',
            'error-900',
          ],
        },
      ],
      'bg-image': [{ bg: ['sun', 'moon'] }],
      shadow: ['small', 'default', 'medium', 'large', 'xLarge', '2xLarge'],
    },
  },
})

const cn = (...args: ClassValue[]) => {
  return twMerge(clsx(args))
}

export { cn }
