import { Loader2 } from "lucide-react"

interface LoadingProps {
  text?: string
  className?: string
}

export function Loading({ text = "加载中...", className }: LoadingProps) {
  return (
    <div className={`flex flex-col items-center justify-center h-40 ${className}`}>
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
      <p className="mt-2 text-sm text-muted-foreground">{text}</p>
    </div>
  )
} 