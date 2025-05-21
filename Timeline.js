/**
 * v0 by Vercel.
 * @see https://v0.dev/t/hFu04FOZB7v
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component() {
    return (
      <div className="p-6 sm:p-10">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
            <div className="grid gap-1">
              <h2 className="text-2xl font-bold">Product Roadmap</h2>
              <p className="text-muted-foreground">A timeline of our product development milestones.</p>
              <div className="flex flex-wrap gap-2">
                <div className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-sm">
                  <CalendarIcon className="w-4 h-4" />
                  <span>June 2023 - June 2024</span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-sm">
                  <TagIcon className="w-4 h-4" />
                  <span>Product</span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-sm">
                  <MapIcon className="w-4 h-4" />
                  <span>Roadmap</span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative pl-6 after:absolute after:inset-y-0 after:w-px after:bg-muted-foreground/20 grid gap-10">
            <div className="grid gap-1 text-sm relative">
              <div className="flex items-center gap-2">
                <div className="aspect-square w-3 bg-primary rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1" />
                <div className="font-medium">March 2023 - February 2023</div>
                <div className="inline-flex items-center gap-2 rounded-full bg-muted px-2 py-1 text-xs">
                  <TagIcon className="w-3 h-3" />
                  <span>Launched</span>
                </div>
              </div>
              <div className="text-muted-foreground">Launched our initial product MVP</div>
            </div>
            <div className="grid gap-1 text-sm relative">
              <div className="flex items-center gap-2">
                <div className="aspect-square w-3 bg-primary rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1" />
                <div className="font-medium">May 2023 - April 2023</div>
                <div className="inline-flex items-center gap-2 rounded-full bg-muted px-2 py-1 text-xs">
                  <TagIcon className="w-3 h-3" />
                  <span>New Features</span>
                </div>
              </div>
              <div className="text-muted-foreground">Introduced new features based on user feedback</div>
            </div>
            <div className="grid gap-1 text-sm relative">
              <div className="flex items-center gap-2">
                <div className="aspect-square w-3 bg-primary rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1" />
                <div className="font-medium">July 2023 - June 2023</div>
                <div className="inline-flex items-center gap-2 rounded-full bg-muted px-2 py-1 text-xs">
                  <TagIcon className="w-3 h-3" />
                  <span>Enterprise</span>
                </div>
              </div>
              <div className="text-muted-foreground">Launched our enterprise plan for larger teams</div>
            </div>
            <div className="grid gap-1 text-sm relative">
              <div className="flex items-center gap-2">
                <div className="aspect-square w-3 bg-green-500 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1" />
                <div className="font-medium">September 2023 - August 2023</div>
                <div className="inline-flex items-center gap-2 rounded-full bg-muted px-2 py-1 text-xs">
                  <TagIcon className="w-3 h-3" />
                  <span>UI Overhaul</span>
                </div>
              </div>
              <div className="text-muted-foreground">Rolled out a major UI overhaul and performance improvements</div>
            </div>
            <div className="grid gap-1 text-sm relative">
              <div className="flex items-center gap-2">
                <div className="aspect-square w-3 bg-primary rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1" />
                <div className="font-medium">November 2023 - October 2023</div>
                <div className="inline-flex items-center gap-2 rounded-full bg-muted px-2 py-1 text-xs">
                  <TagIcon className="w-3 h-3" />
                  <span>Mobile App</span>
                </div>
              </div>
              <div className="text-muted-foreground">Launched our mobile app for iOS and Android</div>
            </div>
          </div>
          <div className="grid grid-cols-5 gap-4">
            <div className="bg-muted rounded-md p-4">
              <h3 className="text-lg font-medium mb-2">Skills</h3>
              <ul className="space-y-2 text-sm">
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>TypeScript</li>
                <li>Next.js</li>
                <li>Tailwind CSS</li>
                <li>Git</li>
                <li>SQL</li>
                <li>Python</li>
                <li>Django</li>
                <li>Ruby on Rails</li>
                <li>Java</li>
                <li>C#</li>
                <li>Swift</li>
                <li>Kotlin</li>
                <li>Flutter</li>
                <li>AWS</li>
                <li>Azure</li>
                <li>Google Cloud</li>
                <li>Docker</li>
                <li>Kubernetes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  function CalendarIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 2v4" />
        <path d="M16 2v4" />
        <rect width="18" height="18" x="3" y="4" rx="2" />
        <path d="M3 10h18" />
      </svg>
    )
  }
  
  
  function MapIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z" />
        <path d="M15 5.764v15" />
        <path d="M9 3.236v15" />
      </svg>
    )
  }
  
  
  function TagIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
        <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
      </svg>
    )
  }