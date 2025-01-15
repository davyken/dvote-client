import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  MdOutlineEventNote,
  MdSecurity,
  MdSpeed,
  MdPeople,
  MdTrendingUp,
  MdCheck,
} from "react-icons/md";
import { RiAwardLine, RiCustomerService2Line } from "react-icons/ri";
import { BsShieldCheck, BsGraphUp, BsClock } from "react-icons/bs";

const HomePage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="min-h-screen bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 relative"
      >
        <div className="container mx-auto flex items-center justify-between min-h-screen px-4 py-20">
          <div className="text-white max-w-3xl mx-auto text-center">
            <motion.h1 {...fadeIn} className="text-6xl font-bold mb-8">
              Transform Your Voting Experience
            </motion.h1>
            <motion.p
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="text-2xl mb-12 text-blue-100"
            >
              The most secure and transparent voting platform for modern
              democracy
            </motion.p>
            <motion.div
              {...fadeIn}
              transition={{ delay: 0.4 }}
              className="flex gap-6 justify-center"
            >
              <Link to="/register">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-900 px-8 py-4 rounded-full text-lg font-semibold cursor-pointer"
                >
                  Get Started
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold"
              >
                Watch Demo
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Decorative wave */}
        <div className="absolute bottom-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,224C672,213,768,171,864,149.3C960,128,1056,128,1152,149.3C1248,171,1344,213,1392,234.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </motion.section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: MdOutlineEventNote, count: "10M+", label: "Votes Cast" },
              { icon: MdPeople, count: "5000+", label: "Organizations" },
              { icon: BsClock, count: "99.9%", label: "Uptime" },
              { icon: MdTrendingUp, count: "150+", label: "Countries" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 rounded-2xl shadow-lg bg-white border border-gray-100"
              >
                <stat.icon className="w-12 h-12 mx-auto text-blue-600 mb-4" />
                <h3 className="text-4xl font-bold text-blue-900 mb-2">
                  {stat.count}
                </h3>
                <p className="text-gray-600 text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-gray-600">
              Experience the most comprehensive and secure voting solution
              designed for modern organizations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: MdSecurity,
                title: "Enterprise-Grade Security",
                desc: "End-to-end encryption with military-grade security protocols ensuring your data remains protected",
              },
              {
                icon: MdSpeed,
                title: "Lightning Fast",
                desc: "Optimized performance ensuring smooth voting experience even with millions of concurrent users",
              },
              {
                icon: BsShieldCheck,
                title: "Compliance Ready",
                desc: "Full compliance with international voting standards and data protection regulations",
              },
              {
                icon: RiAwardLine,
                title: "Award-Winning Platform",
                desc: "Recognized by leading institutions for innovation in digital democracy",
              },
              {
                icon: RiCustomerService2Line,
                title: "24/7 Expert Support",
                desc: "Dedicated support team available round the clock to assist with any queries",
              },
              {
                icon: BsGraphUp,
                title: "Real-Time Analytics",
                desc: "Comprehensive dashboard with real-time insights and detailed reporting capabilities",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
              >
                <feature.icon className="w-12 h-12 text-blue-600 mb-6" />
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Simple, secure, and transparent voting process in just few steps
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Create Event",
                desc: "Set up your voting event with customizable options and security settings",
              },
              {
                step: "02",
                title: "Invite Voters",
                desc: "Send secure invitations to eligible voters through multiple channels",
              },
              {
                step: "03",
                title: "Vote Securely",
                desc: "Participants cast their votes through our encrypted platform",
              },
              {
                step: "04",
                title: "Get Results",
                desc: "Access real-time results and comprehensive analytics",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-blue-600">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              Trusted By Organizations Worldwide
            </h2>
            <p className="text-xl text-gray-600">
              From small businesses to large enterprises, we help organizations
              of all sizes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Corporate Elections",
                list: [
                  "Board member elections",
                  "Shareholder voting",
                  "Policy decisions",
                ],
              },
              {
                title: "Educational Institutions",
                list: [
                  "Student body elections",
                  "Faculty senate voting",
                  "Administrative decisions",
                ],
              },
              {
                title: "Government Organizations",
                list: [
                  "Municipal elections",
                  "Public consultations",
                  "Committee voting",
                ],
              },
              {
                title: "Non-Profit Organizations",
                list: [
                  "Board elections",
                  "Member voting",
                  "Initiative approval",
                ],
              },
              {
                title: "Professional Associations",
                list: [
                  "Leadership elections",
                  "Policy voting",
                  "Award selections",
                ],
              },
              {
                title: "Religious Organizations",
                list: [
                  "Committee elections",
                  "Administrative decisions",
                  "Community initiatives",
                ],
              },
            ].map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
              >
                <h3 className="text-2xl font-bold text-blue-900 mb-6">
                  {useCase.title}
                </h3>
                <ul className="space-y-4">
                  {useCase.list.map((item, i) => (
                    <li key={i} className="flex items-center">
                      <MdCheck className="w-5 h-5 text-blue-600 mr-3" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center text-white max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Voting Process?
            </h2>
            <p className="text-xl mb-12 text-blue-100">
              Join thousands of organizations worldwide who trust our platform
            </p>
            <Link to="/register">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-900 px-8 py-4 rounded-full text-lg font-semibold"
              >
                Get Started Now
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
