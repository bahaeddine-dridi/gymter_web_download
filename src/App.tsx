import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { Button } from './components/ui/button';
import { Card } from './components/ui/card';
import { MessageSquare, Dumbbell, Apple, TrendingUp, Download, ArrowRight } from 'lucide-react';
import androidIcon from './assets/android_icon.png';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0F12] text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-20 md:py-32">
        {/* Background Glow Effects */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#00FF9C] opacity-10 blur-[120px] rounded-full" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="relative flex flex-col items-center">
              <div className="absolute inset-0 bg-[#00FF9C] opacity-30 blur-3xl rounded-full" />
              <ImageWithFallback 
                src="https://i.ibb.co/PGLZTxLH/gymter-logo.png"
                alt="Gymter Logo"
                className="relative z-10 w-48 h-48 md:w-64 md:h-64 object-contain"
              />
              <h2 className="text-7xl md:text-8xl lg:text-9xl font-bold mt-6" style={{color: '#00FF9C', textShadow: '0 0 30px rgba(0,255,156,0.8)'}}>
                Gymter
              </h2>
            </div>
          </div>

          {/* Hero Text */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Your AI-powered
              </span>
              <br />
              <span style={{color: '#00FF9C', textShadow: '0 0 30px rgba(0,255,156,0.8)'}}>
                fitness & nutrition coach
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8">
              Get stronger together 💪
            </p>
            <Button 
              className="bg-gradient-to-r from-[#00FF9C] to-[#00F58C] text-[#0B0F12] hover:opacity-90 px-8 py-6 text-lg rounded-full shadow-[0_0_30px_rgba(0,255,156,0.5)] transition-all hover:shadow-[0_0_50px_rgba(0,255,156,0.7)]"
              onClick={() => window.open('https://download1320.mediafire.com/2ql8iyn186bgJuH-R-oAHKzgLDVM_tdnTxTIyWoMqPE1b2WM5P1jo6qfmYyPILC_WbAXnRo-L3LGL0i-6IypinxiWVe6_Dv-ctVMryID1M5gIZ0UQ6ub-TXjNttzyyMpIT3vfjHMYGS7bnK6K-aOcIKLuS54pir8X487rByX9ND9/6gf7r03cxnmy64m/Gymter.apk', '_blank')}
            >
              <img src={androidIcon} alt="Android" className="mr-2 h-5 w-5" />
              Download Now
              
            </Button>
          </div>

          {/* Mockup Section with Training Illustrations */}
          <div className="relative flex justify-center items-center gap-8 mt-20">
            {/* Left Barbell */}
            <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2">
              <ImageWithFallback 
                src="https://i.ibb.co/qYY1b69B/Barbell.png"
                alt="Barbell"
                className="w-32 h-32 object-contain opacity-60"
              />
            </div>

            {/* Center Mockups */}
            <div className="flex gap-6 items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-[#00FF9C] opacity-20 blur-[60px] rounded-3xl" />
                <div className="relative bg-gray-900 border-4 border-gray-800 rounded-[2.5rem] p-2 shadow-2xl">
                  <ImageWithFallback 
                    src="https://i.ibb.co/fG2bqt3V/763b8d9b-b2ae-4098-adca-401bd0aa665b.jpg"
                    alt="App Mockup"
                    className="w-48 h-96 object-cover rounded-[2rem]"
                  />
                </div>
              </div>
              <div className="relative hidden md:block">
                <div className="absolute inset-0 bg-[#00F58C] opacity-20 blur-[60px] rounded-3xl" />
                <div className="relative bg-gray-900 border-4 border-gray-800 rounded-[2.5rem] p-2 shadow-2xl">
                  <ImageWithFallback 
                    src="https://i.ibb.co/1GXLPFzv/0b0d0389-99a6-46ab-ae16-549ccd98aa9a.jpg"
                    alt="App Mockup"
                    className="w-48 h-96 object-cover rounded-[2rem]"
                  />
                </div>
              </div>
            </div>

            {/* Right Dumbbells */}
            <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2">
              <ImageWithFallback 
                src="https://i.ibb.co/vxfdLHHM/Dumbbells.png"
                alt="Dumbbells"
                className="w-32 h-32 object-contain opacity-60"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl text-center mb-16">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Everything You Need to
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#00FF9C] to-[#00F58C] bg-clip-text text-transparent">
              Achieve Your Goals
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature Card 1 */}
            <Card className="bg-gray-900/50 border-gray-800 p-8 rounded-3xl backdrop-blur-sm hover:border-[#00FF9C] transition-all duration-300 group">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-[#00FF9C] opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-300" />
                <div className="relative w-16 h-16 bg-gradient-to-br from-[#00FF9C] to-[#00F58C] rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(0,255,156,0.3)]">
                  <MessageSquare className="w-8 h-8 text-[#0B0F12]" />
                </div>
              </div>
              <h3 className="text-2xl mb-3 font-bold" style={{color: '#00FFFF', textShadow: '0 0 15px rgba(0,255,255,0.8)'}}>AI Coach Chat</h3>
              <p className="text-gray-400">
                Get instant answers and personalized advice from your AI fitness coach anytime.
              </p>
            </Card>

            {/* Feature Card 2 */}
            <Card className="bg-gray-900/50 border-gray-800 p-8 rounded-3xl backdrop-blur-sm hover:border-[#00FF9C] transition-all duration-300 group">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-[#00FF9C] opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-300" />
                <div className="relative w-16 h-16 bg-gradient-to-br from-[#00FF9C] to-[#00F58C] rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(0,255,156,0.3)]">
                  <Dumbbell className="w-8 h-8 text-[#0B0F12]" />
                </div>
              </div>
              <h3 className="text-2xl mb-3 font-bold" style={{color: '#00FFFF', textShadow: '0 0 15px rgba(0,255,255,0.8)'}}>Personalized Workouts</h3>
              <p className="text-gray-400">
                Custom workout plans tailored to your fitness level and goals.
              </p>
            </Card>

            {/* Feature Card 3 */}
            <Card className="bg-gray-900/50 border-gray-800 p-8 rounded-3xl backdrop-blur-sm hover:border-[#00FF9C] transition-all duration-300 group">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-[#00FF9C] opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-300" />
                <div className="relative w-16 h-16 bg-gradient-to-br from-[#00FF9C] to-[#00F58C] rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(0,255,156,0.3)]">
                  <Apple className="w-8 h-8 text-[#0B0F12]" />
                </div>
              </div>
              <h3 className="text-2xl mb-3 font-bold" style={{color: '#00FFFF', textShadow: '0 0 15px rgba(0,255,255,0.8)'}}>Nutrition Guidance</h3>
              <p className="text-gray-400">
                Smart meal plans and nutrition tracking to fuel your progress.
              </p>
            </Card>

            {/* Feature Card 4 */}
            <Card className="bg-gray-900/50 border-gray-800 p-8 rounded-3xl backdrop-blur-sm hover:border-[#00FF9C] transition-all duration-300 group">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-[#00FF9C] opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-300" />
                <div className="relative w-16 h-16 bg-gradient-to-br from-[#00FF9C] to-[#00F58C] rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(0,255,156,0.3)]">
                  <TrendingUp className="w-8 h-8 text-[#0B0F12]" />
                </div>
              </div>
              <h3 className="text-2xl mb-3 font-bold" style={{color: '#00FFFF', textShadow: '0 0 15px rgba(0,255,255,0.8)'}}>Progress Tracking</h3>
              <p className="text-gray-400">
                Monitor your journey with detailed analytics and insights.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* App Preview Section */}
      <section className="px-6 py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00FF9C]/5 to-transparent" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-5xl text-center mb-16">
            <span className="bg-gradient-to-r from-[#00FF9C] to-[#00F58C] bg-clip-text text-transparent">
              Experience the Future
            </span>
            <br />
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              of Fitness Training
            </span>
          </h2>

          <div className="flex flex-wrap justify-center gap-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00FF9C] to-[#00F58C] opacity-20 blur-[80px] group-hover:opacity-30 transition-opacity duration-300" />
              <div className="relative bg-gray-900 border-4 border-gray-800 rounded-[2.5rem] p-2 shadow-2xl">
                <ImageWithFallback 
                  src="https://i.ibb.co/fG2bqt3V/763b8d9b-b2ae-4098-adca-401bd0aa665b.jpg"
                  alt="App Screenshot 1"
                  className="w-64 h-[32rem] object-cover rounded-[2rem]"
                />
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00FF9C] to-[#00F58C] opacity-20 blur-[80px] group-hover:opacity-30 transition-opacity duration-300" />
              <div className="relative bg-gray-900 border-4 border-gray-800 rounded-[2.5rem] p-2 shadow-2xl">
                <ImageWithFallback 
                  src="https://i.ibb.co/1GXLPFzv/0b0d0389-99a6-46ab-ae16-549ccd98aa9a.jpg"
                  alt="App Screenshot 2"
                  className="w-64 h-[32rem] object-cover rounded-[2rem]"
                />
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00FF9C] to-[#00F58C] opacity-20 blur-[80px] group-hover:opacity-30 transition-opacity duration-300" />
              <div className="relative bg-gray-900 border-4 border-gray-800 rounded-[2.5rem] p-2 shadow-2xl">
                <ImageWithFallback 
                  src="https://i.ibb.co/fYMzQzKk/e9afe12c-6028-4051-899e-eaf5b399c948.jpg"
                  alt="App Screenshot 3"
                  className="w-64 h-[32rem] object-cover rounded-[2rem]"
                />
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00FF9C] to-[#00F58C] opacity-20 blur-[80px] group-hover:opacity-30 transition-opacity duration-300" />
              <div className="relative bg-gray-900 border-4 border-gray-800 rounded-[2.5rem] p-2 shadow-2xl">
                <ImageWithFallback 
                  src="https://i.ibb.co/zTX0ZxPW/67024092-c505-43cb-a456-aae951fc0d6a.jpg"
                  alt="App Screenshot 4"
                  className="w-64 h-[32rem] object-cover rounded-[2rem]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-6 py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#00FF9C]/5 to-transparent" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Start Your Fitness
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#00FF9C] to-[#00F58C] bg-clip-text text-transparent">
              Journey Now
            </span>
          </h2>
          <p className="text-xl text-gray-400">
            Join thousands of users transforming their bodies with AI-powered guidance
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-gray-800 relative">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00FF9C] to-transparent" />
        
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-gray-400">
              All rights reserved for <a href="https://baha-porfolio.onrender.com/#home" target="_blank" rel="noopener noreferrer" className="text-[#00FF9C] hover:text-[#00F58C] transition-colors">Baha Eddine DRIDI</a>
            </div>
            <nav className="flex gap-8">
              <a href="#" className="text-gray-400 hover:text-[#00FF9C] transition-colors">
                About
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00FF9C] transition-colors">
                Privacy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00FF9C] transition-colors">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}