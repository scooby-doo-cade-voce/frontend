import { ReactNode, useCallback } from 'react'
import { Accept, useDropzone } from 'react-dropzone'

import { cn } from '@/lib/utils'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { FilePenLine, UploadCloudIcon, X } from 'lucide-react'

/**
 * Format bytes as human-readable text.
 *
 * @param bytes Number of bytes.
 * @param si True to use metric (SI) units, aka powers of 1000. False to use
 *           binary (IEC), aka powers of 1024.
 * @param dp Number of decimal places to display.
 *
 * @return Formatted string.
 */
function humanFileSize(bytes: number, si = false, dp = 1) {
  const thresh = si ? 1000 : 1024

  if (Math.abs(bytes) < thresh) {
    return bytes + ' B'
  }

  const units = si
    ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
    : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB']
  let u = -1
  const r = 10 ** dp

  do {
    bytes /= thresh
    ++u
  } while (
    Math.round(Math.abs(bytes) * r) / r >= thresh &&
    u < units.length - 1
  )

  return bytes.toFixed(dp) + ' ' + units[u]
}

type DropzoneProps = {
  onChange: (acceptedFiles: File[]) => void
  maxFiles?: number
  maxFileSize?: number
  multiple: boolean

  accept?: Accept
  error?: string

  value?: File[]

  label?: string
  description?: ReactNode
  id: string
  onError?: (error: string) => void
}

const Item = ({
  file,
  handleRemoveFromPreview,
}: {
  file: File
  handleRemoveFromPreview: (file: File) => void
}) => {
  const isImage = file.type.startsWith('image')

  return (
    <div className="relative w-full max-w-[8.125rem] shrink-0 rounded border border-black/[0.08] p-1.5 px-2 lg:max-w-[10.125rem]">
      <div className="relative">
        <div className="flex h-[7.875rem] w-[7.0625rem] items-center justify-center overflow-hidden rounded bg-black/[0.12] lg:size-36">
          {isImage && (
            <img
              src={URL.createObjectURL(file)}
              alt={file.name}
              className="h-[7.875rem] w-[7.0625rem] max-w-full object-cover object-center lg:size-36"
            />
          )}
          {!isImage && <FilePenLine className="size-5 text-white" />}
        </div>

        <span className="absolute bottom-0 left-0 right-0 block min-w-0 truncate bg-black/40 p-1 text-sm text-white">
          {file.name}
        </span>
      </div>

      <button
        type="button"
        onClick={() => handleRemoveFromPreview(file)}
        className="ease-in-out-quint absolute right-1.5 top-1.5 rounded bg-black/40 p-1 text-white transition-colors duration-200 hover:bg-black/60"
      >
        <X className="size-3" />
      </button>
    </div>
  )
}

export function FileUpload({
  onChange: onFileAccepted,

  error,

  label,
  id,

  maxFiles = 1,
  maxFileSize = 20 * 1024 * 1024,
  multiple = false,

  accept = {
    'image/png': ['.png'],
    'image/jpeg': ['.jpg'],
    'image/webp': ['.webp'],
  },
  value = [],
  description = (
    <p className="text-xs text-foreground">
      Arraste e solte o <strong>arquivo</strong> ou{' '}
      <span className="text-primary-500">
        clique para selecionar um arquivo
      </span>
    </p>
  ),
  onError,
}: DropzoneProps) {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      console.log('add', { acceptedFiles })
      onFileAccepted(acceptedFiles)
    },
    [onFileAccepted],
  )
  const [parent] = useAutoAnimate()

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept,
    maxFiles,
    multiple,
    useFsAccessApi: false,
    noClick: value.length === maxFiles,
    noDrag: value.length === maxFiles,
    noKeyboard: value.length === maxFiles,
    validator(file) {
      if (file.size > maxFileSize) {
        const humanReadableSize = humanFileSize(file.size)

        onError?.(
          `O arquivo é muito grande. O tamanho máximo é ${humanReadableSize}.`,
        )

        return {
          code: 'file-too-large',
          message: `O arquivo é muito grande. O tamanho máximo é ${humanReadableSize}.`,
        }
      }
      return null
    },
  })

  const handleRemoveFromPreview = useCallback(
    (file: File) => {
      console.log('remove', { file })
      onFileAccepted(value.filter((f) => f.name !== file.name))
    },
    [onFileAccepted, value],
  )

  return (
    <div className="space-y-1">
      <div
        className={cn(
          'flex min-h-[184px] flex-wrap gap-4 rounded border border-dashed border-black/[0.12] p-3 hover:bg-accent',
          {
            'border-error-400 hover:bg-error-400/20': !!error,
            'border-primary-400 bg-neutral-300': isDragActive,
          },
        )}
        ref={parent}
      >
        {value.length > 0 &&
          value.map((file) => (
            <Item
              key={file.name}
              file={file}
              handleRemoveFromPreview={handleRemoveFromPreview}
            />
          ))}

        <div
          {...getRootProps({})}
          className={cn(
            'flex min-w-52 flex-1 cursor-pointer flex-col items-center justify-center gap-3',
            {
              hidden: value.length === maxFiles,
            },
          )}
        >
          <input
            {...getInputProps({
              id,
            })}
          />
          <UploadCloudIcon className="size-6 text-foreground" />
          {label && (
            <p className="text-center text-base font-semibold text-black/[0.87]">
              {label}
            </p>
          )}

          <div className="h-px w-full bg-gray-50" />

          {description}
        </div>
      </div>

      {error && (
        <p className="text-[0.8rem] font-medium text-destructive">{error}</p>
      )}
    </div>
  )
}
