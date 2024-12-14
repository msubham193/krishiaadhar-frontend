'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen pt-16">
        <Image
          src="https://image.lexica.art/full_webp/51e36893-ba25-4b7b-967d-64b7d402c821"
          alt="Futuristic farming landscape"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <motion.div 
            className="text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold mb-4">Welcome to Krishi Aadhar</h1>
            <p className="text-xl mb-8">Empowering farmers with smart agriculture solutions</p>
            <Link href="#features" className="bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition duration-300 inline-block">
              Explore Features
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            {...fadeIn}
          >
            Our Advanced Features
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Smart Crop Calendar", description: "AI-powered planning for optimal crop cycles", icon: "📅" },
              { title: "Precision Irrigation", description: "Water-efficient systems using IoT sensors", icon: "💧" },
              { title: "Digital Soil Analysis", description: "Real-time soil health monitoring and recommendations", icon: "🌱" },
              { title: "Crop Health Monitor", description: "Early detection of crop diseases using computer vision", icon: "🌾" },
              { title: "Drone-Assisted Farming", description: "Efficient crop spraying and field mapping", icon: "🚁" },
              { title: "Expert Consultation", description: "On-demand access to agricultural specialists", icon: "👨‍🌾" },
            ].map((feature, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
                {...fadeIn}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download App Section */}
      <section className="py-20 bg-[#001233]">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            {...fadeIn}
          >
            <h2 className="text-3xl font-bold mb-6 text-white">Get Started with Krishi Aadhar</h2>
            <p className="text-xl text-gray-300 mb-12">Download our app and start your journey towards smart farming today</p>
            
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/real-estate-fecf6.appspot.com/o/M9ld53JiLjfg_1024_500.png?alt=media&token=9200a913-d8b3-4032-af3f-630521b602a4"
                alt="Krishi Aadhar App Preview"
                width={1024}
                height={500}
                className="w-full h-auto rounded-lg shadow-2xl"
                priority
              />
            </motion.div>

            {/* <motion.div
              className="flex flex-col sm:flex-row justify-center items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Link 
                href="https://play.google.com/store" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-90 transition-opacity"
              >
                <Image
                  src="/google-play-badge.png"
                  alt="Get it on Google Play"
                  width={200}
                  height={60}
                  className="h-auto"
                />
              </Link>
              <Link 
                href="https://apps.apple.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-90 transition-opacity"
              >
                <Image
                  src="/app-store-badge.png"
                  alt="Download on the App Store"
                  width={200}
                  height={60}
                  className="h-auto"
                />
              </Link>
            </motion.div> */}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-20">
        <Image
          src="https://image.lexica.art/full_webp/beefa024-4141-4cdc-bff2-0cc77902dbd0"
          alt="Advanced farming technology"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative container mx-auto px-6 text-center z-10">
          <motion.h2 
            className="text-4xl font-bold mb-4 text-white"
            {...fadeIn}
          >
            Ready to revolutionize your farming?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 text-white"
            {...fadeIn}
            transition={{ delay: 0.2 }}
          >
            Join Krishi Aadhar today and experience the future of agriculture
          </motion.p>
          <motion.div
            {...fadeIn}
            transition={{ delay: 0.4 }}
          >
            <Link href="#" className="bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition duration-300 inline-block">
              Get Started
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

