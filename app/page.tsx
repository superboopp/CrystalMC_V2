import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Users,
  Server,
  Gamepad2,
  MessageSquare,
  ChevronRight,
  Github,
  Twitter,
  Instagram,
  MessageCircle,
} from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=32&width=32"
              alt="CrystalMC Logo"
              width={32}
              height={32}
              className="rounded"
            />
            <span className="text-xl font-bold tracking-tight">CrystalMC</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="#home" className="font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link href="#servers" className="font-medium transition-colors hover:text-primary">
              Servers
            </Link>
            <Link href="#community" className="font-medium transition-colors hover:text-primary">
              Community
            </Link>
            <Link href="#partnership" className="font-medium transition-colors hover:text-primary">
              Partnership
            </Link>
            <Link href="#join" className="font-medium transition-colors hover:text-primary">
              Join Us
            </Link>
          </nav>
          <div>
            <Button variant="default" className="hidden md:inline-flex">
              Play Now
            </Button>
            <Button variant="outline" size="icon" className="md:hidden">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section id="home" className="relative">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20" />
          <div className="container relative z-10 py-24 md:py-32 lg:py-40">
            <div className="flex flex-col items-center text-center space-y-4">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Welcome to <span className="text-primary">CrystalMC</span>
              </h1>
              <p className="max-w-[700px] text-lg text-muted-foreground md:text-xl">
                An open and fun Minecraft community offering both modded and vanilla SMP experiences
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Button size="lg" className="font-bold">
                  Join Our Server
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="servers" className="bg-muted py-16 md:py-24">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">Our Minecraft Servers</h2>
              <p className="max-w-[700px] text-muted-foreground text-lg">Explore our variety of gameplay experiences</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-card rounded-lg overflow-hidden border shadow-sm">
                <div className="aspect-video relative">
                  <Image src="/placeholder.svg?height=300&width=600" alt="Vanilla SMP" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">Semi-Vanilla SMP</h3>
                  <p className="text-muted-foreground mb-4">
                    Experience Minecraft as it was meant to be played. Build, explore, and survive with friends in our
                    vanilla survival world.
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Server className="h-4 w-4 mr-1" />
                    <span>play.crystal-mc.xyz</span>
                  </div>
                </div>
              </div>
              <div className="bg-card rounded-lg overflow-hidden border shadow-sm">
                <div className="aspect-video relative">
                  <Image src="/placeholder.svg?height=300&width=600" alt="Modded SMP" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">Modded SMP</h3>
                  <p className="text-muted-foreground mb-4">
                    Enhance your gameplay with carefully selected mods that add new dimensions, items, and mechanics to
                    explore.
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Server className="h-4 w-4 mr-1" />
                    <span>modded.crystal-mc.xyz</span>
                  </div>
                </div>
              </div>
              <div className="bg-card rounded-lg overflow-hidden border shadow-sm">
                <div className="aspect-video relative">
                  <Image
                    src="/placeholder.svg?height=300&width=600"
                    alt="Creative World"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">Pixelated SMP</h3>
                  <p className="text-muted-foreground mb-4">
                    Welcome to Pixelated Story, let's build something amazing together!
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Server className="h-4 w-4 mr-1" />
                    <span>pixelated.crystal-mc.xyz</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-16 md:py-24">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">Server Features</h2>
              <p className="max-w-[700px] text-muted-foreground text-lg">What makes CrystalMC special</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg border shadow-sm">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Friendly Community</h3>
                <p className="text-muted-foreground">Join our welcoming community of players from around the world</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg border shadow-sm">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Gamepad2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Custom Features</h3>
                <p className="text-muted-foreground">Enjoy custom plugins and features designed to enhance gameplay</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg border shadow-sm">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">High Performance</h3>
                <p className="text-muted-foreground">
                  Experience lag-free gameplay with our optimized server infrastructure
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg border shadow-sm">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Active Staff</h3>
                <p className="text-muted-foreground">Our dedicated team is always ready to help with any issues</p>
              </div>
            </div>
          </div>
        </section>

        <section id="partnership" className="bg-muted py-16 md:py-24">
          <div className="container">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Pixelated Story Partnership"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2 space-y-6">
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  Official Partnership
                </div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Partnered with Pixelated Story</h2>
                <p className="text-lg text-muted-foreground">
                  We're proud to be officially partnered with Pixelated Story, bringing you exclusive content, events,
                  and gameplay experiences that you won't find anywhere else.
                </p>
                <p className="text-lg text-muted-foreground">
                  This collaboration allows us to offer unique storylines, custom maps, and special events that enhance
                  your Minecraft experience.
                </p>
                <Link href="https://discord.gg/BpYnDJQEkW">
                  <Button variant="outline" className="flex items-center gap-2">
                    Be a part of the story
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="community" className="py-16 md:py-24">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">Join Our Community</h2>
              <p className="max-w-[700px] text-muted-foreground text-lg">Connect with other players and stay updated</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-card rounded-lg overflow-hidden border shadow-sm p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-[#5865F2]/10 flex items-center justify-center">
                    <MessageCircle className="h-6 w-6 text-[#5865F2]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Discord</h3>
                    <p className="text-muted-foreground">Join 100+ members</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Chat with the community, get support, and participate in events and giveaways.
                </p>
                <Link href="https://discord.gg/BpYnDJQEkW">
                  <Button className="w-full bg-[#5865F2] hover:bg-[#5865F2]/90">Join Our Discord</Button>
                </Link>
              </div>
              <div className="bg-card rounded-lg overflow-hidden border shadow-sm p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-[#1DA1F2]/10 flex items-center justify-center">
                    <Twitter className="h-6 w-6 text-[#1DA1F2]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Twitter</h3>
                    <p className="text-muted-foreground">Follow for updates</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Stay updated with the latest news, server updates, and community highlights.
                </p>
                <Button className="w-full bg-[#1DA1F2] hover:bg-[#1DA1F2]/90">Follow on Twitter</Button>
              </div>
              <div className="bg-card rounded-lg overflow-hidden border shadow-sm p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-[#E4405F]/10 flex items-center justify-center">
                    <Instagram className="h-6 w-6 text-[#E4405F]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Instagram</h3>
                    <p className="text-muted-foreground">See our creations</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Check out screenshots of amazing builds, events, and community creations.
                </p>
                <Button className="w-full bg-[#E4405F] hover:bg-[#E4405F]/90">Follow on Instagram</Button>
              </div>
            </div>
          </div>
        </section>

        <section id="join" className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="container">
            <div className="flex flex-col items-center text-center space-y-6 max-w-[800px] mx-auto">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Ready to Join CrystalMC?</h2>
              <p className="text-lg opacity-90">
                Connect to our server using the address below and start your adventure today!
              </p>
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4 font-mono text-xl md:text-2xl border border-primary-foreground/20">
                play.crystalmc.net
              </div>
              <p className="text-sm opacity-80">Compatible with Minecraft Java Edition 1.20.x</p>
              <Button size="lg" variant="secondary" className="mt-4">
                Copy Server Address
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted py-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/placeholder.svg?height=32&width=32"
                  alt="CrystalMC Logo"
                  width={32}
                  height={32}
                  className="rounded"
                />
                <span className="text-xl font-bold tracking-tight">CrystalMC</span>
              </div>
              <p className="text-muted-foreground mb-4">
                An open and fun Minecraft community offering both modded and vanilla SMP experiences.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <MessageCircle className="h-5 w-5" />
                  <span className="sr-only">Discord</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#home" className="text-muted-foreground hover:text-foreground">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#servers" className="text-muted-foreground hover:text-foreground">
                    Servers
                  </Link>
                </li>
                <li>
                  <Link href="#features" className="text-muted-foreground hover:text-foreground">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#partnership" className="text-muted-foreground hover:text-foreground">
                    Partnership
                  </Link>
                </li>
                <li>
                  <Link href="#community" className="text-muted-foreground hover:text-foreground">
                    Community
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Server Rules
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Mod List
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Getting Started Guide
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} CrystalMC Network. All rights reserved.</p>
            <p className="mt-1">CrystalMC is not affiliated with Mojang Studios or Microsoft.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
