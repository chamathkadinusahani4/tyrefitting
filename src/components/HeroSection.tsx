import { CTAButton } from './CTAButton';
import fitting from '../assets/fitting.png';

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center tread-texture overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold leading-tight">
              <span className="text-nutyre-yellow">Tyre Fitting Services</span>{' '}
              <span className="text-nutyre-text">Tailored to Your Vehicle</span>
            </h1>

            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-nutyre-text-secondary text-lg leading-relaxed">
                Choosing the right {' '}
                <span className="text-nutyre-yellow font-semibold">tyre fitting services </span>isn't just about wheels
                — it's about
                  peace of mind
                
                . At NuTyre, we understand that your vehicle is more than just
                transport — it's part of your daily life, your routine, your
                freedom. That's why we offer a fully mobile, stress-free tyre
                fitting experience that's built around you —{' '}
                <span className="text-nutyre-yellow font-semibold">
                  your schedule, your location, and your safety
                </span>
                .
              </p>

              <p className="text-nutyre-text-secondary text-lg leading-relaxed">
                Whether you drive a saloon, SUV, van, or high-performance
                vehicle, our skilled technicians deliver precision and care with
                every fitting. From sudden punctures to seasonal changes, we
                bring quality tyres and expert fitting directly to your
                doorstep, so you never have to compromise on safety or
                convenience.
              </p>
            </div>

            <div>
              <a href="https://nutyre.co.uk/find-a-fitter">
                <CTAButton>Check Availability & Book Now</CTAButton>
              </a>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden p-1">
              <div className="aspect-[4/4] bg-gradient-to-br from-nutyre-bg-secondary to-nutyre-bg rounded-xl flex items-center justify-center">
                <img
                  src={fitting}
                  alt="Mobile tyre fitting service van at customer home with technician fitting tyre"
                  className="w-full h-full object-cover rounded-xl opacity-80"
                />
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 glass-card px-6 py-4 rounded-xl">
              <p className="text-nutyre-yellow font-heading font-bold text-lg">
                Same-Day Service
              </p>
              <p className="text-nutyre-text-secondary text-sm">
                Available UK-Wide
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}