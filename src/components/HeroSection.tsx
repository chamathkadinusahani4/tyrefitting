
import { motion } from 'framer-motion';
import { CTAButton } from './CTAButton';
export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center tread-texture overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6
            }}
            className="space-y-8">

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold leading-tight">
              <span className="text-nutyre-yellow">Tyre Fitting Services</span>{' '}
              <span className="text-nutyre-text">Tailored to Your Vehicle</span>
            </h1>

            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-nutyre-text-secondary text-lg leading-relaxed">
                Choosing the right tyre fitting services isn't just about wheels
                — it's about{' '}
                <span className="text-nutyre-yellow font-semibold">
                  peace of mind
                </span>
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

            <motion.div
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.6,
                delay: 0.3
              }}>

              <CTAButton size="large" className="w-full sm:w-auto">
                Check Availability & Book Now
              </CTAButton>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 0.7,
              delay: 0.2
            }}
            className="relative">

            <div className="relative rounded-2xl overflow-hidden glass-card p-1">
              <div className="aspect-[4/3] bg-gradient-to-br from-nutyre-bg-secondary to-nutyre-bg rounded-xl flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=800&h=600&fit=crop"
                  alt="Mobile tyre fitting service van at customer home with technician fitting tyre"
                  className="w-full h-full object-cover rounded-xl opacity-80" />

                <div className="absolute inset-0 bg-gradient-to-t from-nutyre-bg via-transparent to-transparent opacity-60 rounded-xl" />
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{
                opacity: 0,
                x: 20
              }}
              animate={{
                opacity: 1,
                x: 0
              }}
              transition={{
                duration: 0.6,
                delay: 0.5
              }}
              className="absolute -bottom-6 -right-6 glass-card px-6 py-4 rounded-xl">

              <p className="text-nutyre-yellow font-heading font-bold text-lg">
                Same-Day Service
              </p>
              <p className="text-nutyre-text-secondary text-sm">
                Available UK-Wide
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>);

}