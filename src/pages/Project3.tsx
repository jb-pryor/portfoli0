import { Link } from "react-router-dom";

import Footer from "../components/Footer";

import onePhoto from '../assets/spotdash/spotdash.png';
import twoPhoto from '../assets/spotdash/spotartist.png';

function Project3() {

  const codeExample = `<iframe
    src={\`https://open.spotify.com/embed/track/\${recommendation.trackId}\`}
    className="w-full h-48 rounded-lg"
  />`;

  return (
    <>
    <div className='bg-zinc-900 min-h-screen font-[Inter] text-left text-zinc-400'>

      <div className="px-6 md:px-20">
      {/* Nav */}
      <div className='flex gap-8 md:gap-25 text-lg md:text-2xl pt-8 md:mt-10'>
        <Link to="/"><div className='text-gray-200 hover:text-[#7b00ff] cursor-pointer'>Home</div></Link>
      </div>

      <h1 className="text-center text-3xl md:text-5xl md:ml-40 md:mr-40 font-bold mt-12 md:mt-30 text-zinc-200">
        Spotify Wrapped Dashboard
      </h1>

      <div className="mt-10 md:mt-20 md:ml-40 md:mr-40">
        I built a Spotify dashboard that allows users to visualize their listening data in a more interactive and real-time way. Instead of waiting for Spotify Wrapped, the goal was to give users access to their data at any time. The application connects directly to the Spotify API and displays information such as top artists, top songs, genres, recently played tracks, and personalized recommendations.
      </div>

      <div className="mt-10 md:mt-20 font-bold text-xl text-zinc-200 md:ml-40 md:mr-40">Problem</div>
      <div className="mt-5 md:ml-40 md:mr-40">
        Spotify provides a lot of user data, but it is not easily accessible in a clean and customizable way. Most users only see a summary once a year through Spotify Wrapped. I wanted to build a tool that allows users to explore their listening habits dynamically and interact with their data in real time.
      </div>

      <div className="mt-10 md:mt-20 font-bold text-xl text-zinc-200 md:ml-40 md:mr-40">Solution</div>
      <div className="mt-5 md:ml-40 md:mr-40">
        I built a full-stack dashboard using Next.js and React that pulls user data from the Spotify API and displays it in a clean, responsive interface. The application allows users to:<br/><br/>
        • View top artists, songs, and genres<br/> <br />
        • See their most recently played track<br/> <br />
        • Get a recommended next song<br/> <br />
        • Interact with data through modals and embedded players
      </div>

      <div className="mt-10 md:mt-20 font-bold text-xl text-zinc-200 md:ml-40 md:mr-40">Tech Stack</div>
      <div className="mt-5 md:ml-40 md:mr-40">
      • Next.js (React framework)<br/> <br />
      • TypeScript<br/> <br />
      • Tailwind CSS<br/><br />
      • Spotify Web API<br/><br />
      • Server-side API routes
      </div>

      <div className="mt-5 md:ml-40 md:mr-40">
        To access user data, I implemented Spotify OAuth authentication.
      </div>

      <pre className='md:mr-40 md:ml-40 mt-6 md:mt-10 bg-gray-900 text-purple-400 p-4 rounded-xl overflow-x-auto text-xs md:text-sm'>
        <code>
          {`const params = new URLSearchParams({
  response_type: "code",
  client_id: process.env.SPOTIFY_CLIENT_ID!,
  scope: scopes,
  redirect_uri: process.env.SPOTIFY_REDIRECT_URI!,
})`}
        </code>
      </pre>

      <div className="mt-6 md:mt-10 md:ml-40 md:mr-40 mb-6 md:mb-15">
        This allows users to securely log in and grant access to their Spotify data.
      </div>

      <div className="md:ml-40 md:mr-40 mt-10 md:mt-20 font-bold text-xl text-zinc-200">Data Fetching + State Management</div>
      <div className="md:ml-40 md:mr-40 mt-5">
        The app uses useEffect to fetch multiple endpoints on load and store the data in state.
      </div>

      <pre className='md:mr-40 md:ml-40 mt-6 md:mt-10 bg-gray-900 text-purple-400 p-4 rounded-xl overflow-x-auto text-xs md:text-sm'>
        <code>
          {`useEffect(() => {
  fetch("/api/spotify/top/tracks")
    .then((res) => res.json())
    .then((data) =>
      setTopTracks(
        data.slice(0, 5).map((t: any) => ({
          name: t.name,
          artist: t.artists[0].name,
          albumImage: t.album.images[0]?.url,
        }))
      )
    )
}, [])`}
        </code>
      </pre>

      <div className="md:ml-40 md:mr-40 mt-6 md:mt-10">
        This allows the UI to update dynamically as data is retrieved.
      </div>

      <div className="md:ml-40 md:mr-40 mt-10 md:mt-20 font-bold text-xl text-zinc-200">API Route Design</div>
      <div className="md:ml-40 md:mr-40 mt-5">
        I created custom API routes to act as a backend layer between the frontend and Spotify.
      </div>

      <pre className='md:mr-40 md:ml-40 mt-6 md:mt-10 bg-gray-900 text-purple-400 p-4 rounded-xl overflow-x-auto text-xs md:text-sm'>
        <code>
          {`export async function GET() {
  const data = await spotifyFetch(
    "/me/player/recently-played?limit=1"
  )

  const last = data.items[0]

  return NextResponse.json({
    name: last.track.name,
    artist: last.track.artists[0].name,
    trackId: last.track.id,
  })
}`}
        </code>
      </pre>

      <div className="md:ml-40 md:mr-40 mt-6 md:mt-10">
        This simplifies the frontend and keeps API logic centralized.
      </div>

      <div className="md:ml-40 md:mr-40 mt-10 md:mt-20 font-bold text-xl text-zinc-200">UI / UX Design</div>
      <div className="md:ml-40 md:mr-40 mt-5">
        The interface is built with Tailwind and focuses on simplicity and responsiveness. I used a card-based layout to organize different data sections and make the dashboard easy to navigate. Interactive elements like modals allow users to drill into specific data without leaving the page.
      </div>

      <div className="md:ml-40 md:mr-40 mt-10 md:mt-20 font-bold text-xl text-zinc-200">Modal Interaction</div>
      <div className="md:ml-40 md:mr-40 mt-5">
        Users can click to view top artists, songs, or genres in overlay modals.
      </div>

      <pre className='md:mr-40 md:ml-40 mt-6 md:mt-10 bg-gray-900 text-purple-400 p-4 rounded-xl overflow-x-auto text-xs md:text-sm'>
        <code>
          {`<button onClick={() => setShowArtists(true)}>
  View Top Artists
</button>`}
        </code>
      </pre>

      <img src={twoPhoto} alt="game screenshot" className="w-full md:w-125 md:ml-40 md:mr-40 mt-6 md:mt-10 rounded-xl"/>

      <div className="md:ml-40 md:mr-40 mt-6 md:mt-10">
        This keeps the main dashboard clean while still providing detailed information on demand.
      </div>

      <div className="md:ml-40 md:mr-40 mt-10 md:mt-20 font-bold text-xl text-zinc-200">Embedded Playback</div>
      <div className="md:ml-40 md:mr-40 mt-5">
        To make the experience more interactive, I embedded Spotify players directly into the UI.
      </div>

      <pre className='md:mr-40 md:ml-40 mt-6 md:mt-10 bg-gray-900 text-purple-400 p-4 rounded-xl overflow-x-auto text-xs md:text-sm'>
        <code>{codeExample}</code>
      </pre>

      <div className="md:ml-40 md:mr-40 mt-6 md:mt-10">
        This allows users to listen to tracks directly from the dashboard.
      </div>

      <div className="md:ml-40 md:mr-40 mt-10 md:mt-20 font-bold text-xl text-zinc-200">Design Decisions</div>
      <div className="md:ml-40 md:mr-40 mt-5">
        One key decision was to separate API logic from the frontend using Next.js routes. This made the app easier to maintain and allowed for cleaner data handling. I also focused on keeping the UI minimal while still providing enough interactivity to explore the data effectively.
      </div>

      <div className="md:ml-40 md:mr-40 mt-10 md:mt-20 font-bold text-xl text-zinc-200">Example Output</div>

      <img src={onePhoto} alt="game screenshot" className="w-full md:w-125 md:ml-40 md:mr-40 mt-6 md:mt-10 rounded-xl"/>
      <div className="md:ml-40 md:mr-40 mt-5">
        The dashboard presents user data in a clean and interactive layout, allowing for quick exploration and real-time insights.
      </div>

      <div className="md:ml-40 md:mr-40 mt-10 md:mt-20 font-bold text-xl text-zinc-200">What I Learned</div>
      <div className="md:ml-40 md:mr-40 mt-5">
        This project gave me hands-on experience working with OAuth authentication, API design, and real-time data handling. It also improved my understanding of building full-stack applications using Next.js. I also gained experience designing user interfaces that balance simplicity with functionality.
      </div>

      <div className="md:ml-40 md:mr-40 mt-10 md:mt-20 font-bold text-xl text-zinc-200">Final Thoughts</div>
      <div className="md:ml-40 md:mr-40 mt-5 mb-10 pb-10">
        This project was a great opportunity to build something both functional and user-focused. It reinforced the importance of clean architecture, good UI design, and working with external APIs.
      </div>

      </div>

      <Footer />

    </div>
    </>
  );
}

export default Project3;