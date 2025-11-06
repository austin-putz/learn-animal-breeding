import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { ExternalLink, Github, FileText, Download, BookOpen } from 'lucide-react'
import { SoftwareTool } from '@/lib/data/software'

export function SoftwareCard({
  name,
  developer,
  description,
  status,
  links,
  tags,
}: SoftwareTool) {
  return (
    <div className="group relative flex flex-col border border-neutral-200 dark:border-neutral-800 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 bg-white dark:bg-neutral-900 p-6">
      {/* Status Badge */}
      {status && (
        <div className="absolute top-4 right-4">
          {status === 'paid' && (
            <Badge className="bg-yellow-500 text-white border-0 text-xs">
              💳 Paid
            </Badge>
          )}
          {status === 'deprecated' && (
            <Badge className="bg-red-500 text-white border-0 text-xs">
              ⚠️ Deprecated
            </Badge>
          )}
          {status === 'development' && (
            <Badge className="bg-blue-500 text-white border-0 text-xs">
              🚧 In Development
            </Badge>
          )}
          {status === 'active' && (
            <Badge className="bg-green-500 text-white border-0 text-xs">
              ✓ Active
            </Badge>
          )}
        </div>
      )}

      {/* Software Name */}
      <h3 className="text-xl font-bold mb-2 pr-24 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
        {name}
      </h3>

      {/* Developer */}
      {developer && (
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
          {developer}
        </p>
      )}

      {/* Description */}
      <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-4 flex-1">
        {description}
      </p>

      {/* Tags */}
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-4">
          {tags.map(tag => (
            <span
              key={tag}
              className="text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Links */}
      {links.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {links.map((link, idx) => {
            let icon
            switch (link.type) {
              case 'github':
                icon = <Github className="w-3 h-3" />
                break
              case 'download':
                icon = <Download className="w-3 h-3" />
                break
              case 'docs':
              case 'manual':
                icon = <BookOpen className="w-3 h-3" />
                break
              case 'paper':
                icon = <FileText className="w-3 h-3" />
                break
              default:
                icon = <ExternalLink className="w-3 h-3" />
            }

            return (
              <Button
                key={idx}
                variant="outline"
                size="sm"
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs"
              >
                {icon}
                <span className="ml-1">{link.label}</span>
              </Button>
            )
          })}
        </div>
      )}

      {status === 'deprecated' && (
        <p className="text-xs text-red-600 dark:text-red-400 mt-3 italic">
          This software is no longer maintained
        </p>
      )}
    </div>
  )
}
