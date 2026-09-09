import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import type { CSSProperties } from 'react'
import type { RailItem } from '@/lib/navigation'

export interface TileItem extends RailItem {
  /** Up to three real cover images from the category. */
  covers?: string[]
  /** Per-tile unit override, for grids that mix kinds of thing. */
  unit?: string
  unitSingular?: string
}

const gridCols: Record<number, string> = {
  2: 'sm:grid-cols-2',
  3: 'sm:grid-cols-2 lg:grid-cols-3',
  4: 'sm:grid-cols-2 lg:grid-cols-4',
  5: 'sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5',
}

/**
 * Section index as a grid of tiles. Where a section has cover art, three real
 * covers give each tile its own identity, which is what the old per-category
 * gradients were reaching for. Where it does not (software), the count carries
 * the same band so the vertical rhythm matches across the site.
 *
 * `emphasis` is for the top-level grid on the home page, where the tiles are
 * the primary way in and a flat outline reads as unfinished. It adds a moss
 * hairline at the head of each tile, a soft lift off the paper, and a numeral
 * with enough weight to be part of the composition rather than a watermark.
 * Category indexes further down stay plain so they sit under their page title.
 */
export function CategoryTiles({
  items,
  unit = 'items',
  unitSingular,
  cols = 3,
  emphasis = false,
}: {
  items: TileItem[]
  unit?: string
  unitSingular?: string
  cols?: 2 | 3 | 4 | 5
  emphasis?: boolean
}) {
  const tile = emphasis
    ? 'group relative flex flex-col overflow-hidden rounded-lg border border-line bg-surface p-5 shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:border-moss hover:shadow-xl focus-visible:-translate-y-0.5 focus-visible:border-moss'
    : 'group flex flex-col rounded-lg border border-line bg-surface p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-moss hover:shadow-lg focus-visible:-translate-y-0.5 focus-visible:border-moss'

  /*
   * On the emphasised grid the visual band gets its own washed ground and a
   * rule under it, so each tile has a head and a body rather than one
   * undifferentiated rectangle. The band bleeds to the card edge, hence the
   * negative margins against the p-5.
   *
   * The two kinds of band differ in more than height. A count changes colour
   * on hover and carries the state on its own; covers cannot, so their band
   * deepens instead. Covers also need the taller band and the breathing room
   * above them, since a pale scan on white has nothing to sit against.
   */
  const bandFor = (hasCovers: boolean) => {
    if (!emphasis) return 'mb-5 flex h-[92px] items-end'
    const base =
      '-mx-5 -mt-5 mb-5 flex items-end border-b border-line bg-moss-wash px-5 transition-colors duration-200'
    return hasCovers
      ? `${base} h-[124px] justify-between gap-4 pb-4`
      : `${base} h-[92px] pb-4`
  }

  return (
    <div className={`mt-8 grid auto-rows-fr grid-cols-1 gap-5 ${gridCols[cols]}`}>
      {items.map((item) => {
        const covers = item.covers?.slice(0, 3) ?? []
        const many = item.unit ?? unit
        const one = item.unitSingular ?? item.unit ?? unitSingular ?? unit
        const label = item.count === 1 ? one : many

        return (
          <Link key={item.href} href={item.href} className={tile}>
            {emphasis && (
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 z-10 h-[3px] bg-moss/45 transition-colors duration-200 group-hover:bg-moss"
              />
            )}

            {/* Visual band: covers where we have them, the count where we do not. */}
            <div className={bandFor(covers.length > 0)}>
              {covers.length > 0 ? (
                <>
                  <div className="flex">
                  {covers.map((src, i) => (
                    <div
                      key={src}
                      style={
                        {
                          '--i': i,
                          zIndex: covers.length - i,
                          marginLeft: i === 0 ? 0 : '-1.25rem',
                        } as CSSProperties
                      }
                      className="relative h-[92px] w-[69px] flex-shrink-0 overflow-hidden rounded-sm border border-line-strong bg-sunken shadow-sm transition-transform duration-300 ease-out group-hover:translate-x-[calc(var(--i)*7px)]"
                    >
                      <Image
                        src={src}
                        alt=""
                        fill
                        sizes="69px"
                        // Tiles sit above the fold on every index, so lazy
                        // loading here just produces a visible pop-in.
                        loading="eager"
                        className="object-cover"
                      />
                    </div>
                  ))}
                  </div>

                  {/*
                    On the emphasised grid the count moves up here. It balances
                    a wide tile, where three covers leave the band lopsided,
                    and it gives the band something that answers the hover.
                  */}
                  {emphasis && item.count !== undefined && (
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-mono text-[2.25rem] leading-none tracking-tight text-moss/55 transition-colors duration-200 group-hover:text-moss">
                        {item.count}
                      </span>
                      <span className="meta-sm">{label}</span>
                    </div>
                  )}
                </>
              ) : (
                <div className="flex items-baseline gap-2">
                  <span
                    className={`font-mono text-[3.25rem] leading-none tracking-tight transition-colors duration-200 group-hover:text-moss ${
                      emphasis ? 'text-moss/55' : 'text-line-strong'
                    }`}
                  >
                    {item.count}
                  </span>
                  <span className="meta-sm">{label}</span>
                </div>
              )}
            </div>

            <div className="flex-1">
              <h2 className="font-display text-lg font-semibold leading-snug tracking-tight transition-colors group-hover:text-moss">
                {item.name}
              </h2>

              {item.description && (
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted">
                  {item.description}
                </p>
              )}
            </div>

            <div className="mt-5 flex items-center justify-between gap-3 border-t border-line pt-3">
              {/* The numeral variant already states the count, so it is not repeated here. */}
              {!emphasis && covers.length > 0 && item.count !== undefined ? (
                <span className="meta-sm">
                  {item.count} {label}
                </span>
              ) : (
                <span />
              )}
              <ArrowRight
                className="h-4 w-4 text-faint transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-moss"
                strokeWidth={1.75}
              />
            </div>
          </Link>
        )
      })}
    </div>
  )
}
