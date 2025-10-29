'use client';

import { motion } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CTASection() {
  return (
    // <section className="relative py-20 overflow-hidden">
    //   <div className="absolute inset-0 bg-gradient-to-br from-amber-400 via-orange-400 to-amber-500" />
    //   <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
    //     <motion.h2
    //       initial={{ opacity: 0, y: 30 }}
    //       whileInView={{ opacity: 1, y: 0 }}
    //       viewport={{ once: true }}
    //       className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
    //     >
    //       Prefer to Talk Directly?
    //     </motion.h2>
    //     <motion.p
    //       initial={{ opacity: 0, y: 20 }}
    //       whileInView={{ opacity: 1, y: 0 }}
    //       viewport={{ once: true }}
    //       transition={{ delay: 0.2 }}
    //       className="text-xl text-gray-800 mb-8"
    //     >
    //       Our team is ready to answer your questions and discuss how we can support you.
    //     </motion.p>

    //     <div className="flex flex-col sm:flex-row gap-4 justify-center">
    //       <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    //         <Button
    //           size="lg"
    //           className="bg-gray-900 hover:bg-gray-800 text-white px-10 py-7 text-lg rounded-2xl shadow-2xl min-w-[200px]"
    //         >
    //           <Phone className="mr-2 w-5 h-5" /> +61 493 353 976
    //         </Button>
    //       </motion.div>

    //       <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    //         <Button
    //           size="lg"
    //           variant="outline"
    //           className="bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-900 px-10 py-7 text-lg rounded-2xl shadow-xl min-w-[200px]"
    //         >
    //           <Mail className="mr-2 w-5 h-5" /> Email Us
    //         </Button>
    //       </motion.div>
    //     </div>
    //   </div>
    // </section>

          <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-400 via-orange-400 to-amber-500">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzR2LTRoLTJ2NGgtNHYyaDR2NGgydi00aDR2LTJoLTR6bTAtMzBWMGgtMnY0aC00djJoNHY0aDJWNmg0VjRoLTR6TTYgMzR2LTRINHY0SDB2Mmg0djRoMnYtNGg0di0ySDZ6TTYgNFYwSDR2NEgwdjJoNHY0aDJWNmg0VjRINnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        </div>

        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff" />
          </svg>
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Prefer to Talk Directly?
            </h2>
            <p className="text-xl text-gray-800 mb-8">
              Our team is ready to answer your questions and discuss how we can support you
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg"
                  className="bg-gray-900 hover:bg-gray-800 text-white px-10 py-7 text-lg rounded-2xl shadow-2xl min-w-[200px]"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  +61493353976
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg"
                  variant="outline"
                  className="bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-900 px-10 py-7 text-lg rounded-2xl shadow-xl min-w-[200px]"
                >
                  <Mail className="mr-2 w-5 h-5" />
                  Email Us
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
  );
}
