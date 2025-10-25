import { Gamepad2, Users, Trophy, Sparkles, Menu, X, Github, Twitter, Youtube } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const games = [
    {
      title: 'Stellar Odyssey',
      description: 'Explore infinite galaxies in this epic space adventure',
      image: 'https://images.pexels.com/photos/796206/pexels-photo-796206.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Action RPG',
      status: 'Available Now'
    },
    {
      title: 'Shadow Realms',
      description: 'Master the dark arts in a world of magic and mystery',
      image: 'https://images.pexels.com/photos/1174952/pexels-photo-1174952.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Fantasy',
      status: 'Coming Soon'
    },
    {
      title: 'Cyber Nexus',
      description: 'Hack the system in this futuristic cyberpunk thriller',
      image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Sci-Fi Action',
      status: 'In Development'
    }
  ];

  const team = [
    { role: 'Game Designers', count: '15+' },
    { role: 'Developers', count: '30+' },
    { role: 'Artists', count: '20+' },
    { role: 'Sound Engineers', count: '8+' }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Gamepad2 className="w-8 h-8 text-cyan-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">PixelForge Studios</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#games" className="text-slate-300 hover:text-cyan-400 transition-colors">Games</a>
              <a href="#about" className="text-slate-300 hover:text-cyan-400 transition-colors">About</a>
              <a href="#team" className="text-slate-300 hover:text-cyan-400 transition-colors">Team</a>
              <a href="#contact" className="text-slate-300 hover:text-cyan-400 transition-colors">Contact</a>
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-2 rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all">Join Us</button>
            </div>

            <button
              className="md:hidden text-slate-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800">
            <div className="px-4 py-4 space-y-3">
              <a href="#games" className="block text-slate-300 hover:text-cyan-400 transition-colors">Games</a>
              <a href="#about" className="block text-slate-300 hover:text-cyan-400 transition-colors">About</a>
              <a href="#team" className="block text-slate-300 hover:text-cyan-400 transition-colors">Team</a>
              <a href="#contact" className="block text-slate-300 hover:text-cyan-400 transition-colors">Contact</a>
              <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-2 rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all">Join Us</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/20 to-slate-950 pointer-events-none"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzE5NzI5ZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-cyan-300">Crafting Worlds, Building Dreams</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent leading-tight">
              Welcome to<br />PixelForge Studios
            </h1>

            <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              We create immersive gaming experiences that push the boundaries of interactive entertainment.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all transform hover:scale-105">
                Explore Our Games
              </button>
              <button className="border border-slate-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-slate-800 transition-all">
                Watch Trailer
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">50M+</div>
              <div className="text-slate-400">Active Players</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">25+</div>
              <div className="text-slate-400">Games Released</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">150+</div>
              <div className="text-slate-400">Awards Won</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">12</div>
              <div className="text-slate-400">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section id="games" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Games</h2>
            <p className="text-xl text-slate-400">Discover worlds waiting to be explored</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {games.map((game, index) => (
              <div
                key={index}
                className="group relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-cyan-500/50 transition-all hover:shadow-2xl hover:shadow-cyan-500/20 transform hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-cyan-500/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
                      {game.status}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-sm text-cyan-400 mb-2">{game.category}</div>
                  <h3 className="text-2xl font-bold mb-3">{game.title}</h3>
                  <p className="text-slate-400 mb-4 leading-relaxed">{game.description}</p>
                  <button className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center space-x-2 group">
                    <span>Learn More</span>
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Pioneering the Future of Gaming</h2>
              <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                At PixelForge Studios, we believe games are more than entertainment—they're experiences that bring people together, challenge minds, and create lasting memories.
              </p>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                Founded in 2013, our passionate team has been crafting award-winning games that blend cutting-edge technology with compelling storytelling and innovative gameplay.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-3 bg-slate-800 px-6 py-3 rounded-full">
                  <Trophy className="w-5 h-5 text-cyan-400" />
                  <span>Award Winning</span>
                </div>
                <div className="flex items-center space-x-3 bg-slate-800 px-6 py-3 rounded-full">
                  <Users className="w-5 h-5 text-cyan-400" />
                  <span>Global Community</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Game Development"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-cyan-500 to-blue-600 p-8 rounded-2xl shadow-2xl">
                <div className="text-4xl font-bold mb-1">73+</div>
                <div className="text-sm opacity-90">Team Members</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-slate-400">Talented individuals creating extraordinary experiences</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-all text-center"
              >
                <div className="text-5xl font-bold text-cyan-400 mb-3">{member.count}</div>
                <div className="text-lg text-slate-300">{member.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Our Journey</h2>
          <p className="text-xl text-slate-400 mb-8 leading-relaxed">
            Whether you're a player, developer, or partner, there's a place for you at PixelForge Studios.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all transform hover:scale-105">
              Career Opportunities
            </button>
            <button className="border border-slate-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-slate-800 transition-all">
              Partner With Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Gamepad2 className="w-6 h-6 text-cyan-400" />
                <span className="font-bold">PixelForge Studios</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Creating unforgettable gaming experiences since 2013.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Games</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">All Games</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Coming Soon</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Updates</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Press Kit</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
            <p>&copy; 2025 PixelForge Studios. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
