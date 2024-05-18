import { PetCard } from '@/components/pet-card'
import { useKeenSlider } from 'keen-slider/react'
import { useState } from 'react'

export default function PetsMobile() {
  const [maxSlides, setMaxSlides] = useState(0)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
      setMaxSlides(slider?.track.details.maxIdx + 1)
    },
    created(slider) {
      setLoaded(true)
      setMaxSlides(slider?.track.details.maxIdx + 1)
    },
    slides: {
      perView: 1.1,
      spacing: 24,
    },
  })

  return (
    <div>
      <div ref={sliderRef} className="keen-slider !overflow-visible">
        <div className="keen-slider__slide shrink-0 shadow-[0px_0px_15px_rgba(24,47,67,0.2)]">
          <PetCard />
        </div>
        <div className="keen-slider__slide shrink-0 shadow-[0px_0px_15px_rgba(24,47,67,0.2)]">
          <PetCard />
        </div>
        <div className="keen-slider__slide shrink-0 shadow-[0px_0px_15px_rgba(24,47,67,0.2)]">
          <PetCard />
        </div>
        <div className="keen-slider__slide shrink-0 shadow-[0px_0px_15px_rgba(24,47,67,0.2)]">
          <PetCard />
        </div>
        <div className="keen-slider__slide shrink-0 shadow-[0px_0px_15px_rgba(24,47,67,0.2)]">
          <PetCard />
        </div>
      </div>

      {loaded && instanceRef.current && (
        <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:justify-between">
          <div className="flex items-center justify-center gap-1 lg:justify-start">
            {Array.from({
              length: maxSlides,
            }).map((_, idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx)
                  }}
                  data-state={currentSlide === idx ? 'active' : 'inactive'}
                  className="size-2 rounded-full bg-neutral-300 radix-state-active:bg-primary"
                />
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
