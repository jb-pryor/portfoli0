import { Link } from "react-router-dom";
import myPhoto from '../assets/infjava/game4.png';

import Footer from "../components/Footer";

function Project4() {

  return (
    <>
    <div className='bg-zinc-900 min-h-screen font-[Inter] text-zinc-400 text-left text-white'>

      <div className="px-6 md:px-20">
      {/* Nav */}
      <div className='flex gap-8 md:gap-25 text-lg md:text-2xl pt-8 md:mt-10'>
        <Link to="/"><div className='text-gray-200 hover:text-[#7b00ff] cursor-pointer'>Home</div></Link>
      </div>

      <h1 className="text-center text-3xl md:text-5xl font-bold mt-12 md:mt-30 text-zinc-200 md:ml-40 md:mr-40">
        Infinite Tile Editor Game
      </h1>

      <div className="mt-10 md:mt-20 md:ml-40 md:mr-40">
        Over the course of this project, I developed a 2D tile-based game engine using JavaFX that allows users to both design levels and play them in real time. The system combines a level editor with a live game mode, creating a full pipeline from creation to execution. The goal was to build a flexible system where levels could be created dynamically, saved to a file, and then loaded into a playable environment with physics, collisions, and interactive features.
      </div>

      <div className="mt-10 md:mt-20 text-xl font-bold text-zinc-200 md:ml-40">Problem</div>
      <div className="mt-5 md:ml-40 md:mr-40">
        Most beginner games hardcode levels directly into the program. This makes it difficult to scale or modify content without changing code. I wanted to design a system where level data is externalized, allowing users to build and edit levels visually, then immediately test them.
      </div>

      <div className="mt-10 md:mt-20 text-xl font-bold text-zinc-200 md:ml-40">Solution</div>
      <div className="mt-5 md:ml-40 md:mr-40">
        I created a two-mode system:<br/><br/>
        A Tile Editor for designing levels<br/>
        A Game Engine for playing them<br/><br/>
        The two modes are connected through file-based level data, allowing seamless transitions between editing and gameplay.
      </div>

      <div className="mt-10 md:mt-20 md:mr-40 font-bold text-xl text-zinc-200 md:ml-40">Architecture Overview</div>
      <div className="mt-5 md:ml-40 md:mr-40">
        The project is built around a few core components:<br/><br/>
        GridPane → handles level editing and tile placement<br/>
        GameLiveStage → runs the game loop and rendering<br/>
        Player → physics, movement, and collision system<br/>
        Camera → dynamic viewport following the player<br/>
        Tile system → defines behaviors through features<br/><br/>
        This separation made the system modular and easier to extend.
      </div>

      <div className="mt-10 md:mt-20 text-xl font-bold text-zinc-200 md:ml-40 md:mr-40">Level Data System</div>
      <div className="mt-5 md:ml-40 md:mr-40">
        Levels are stored in a simple text format, making them easy to edit and load:
      </div>

      <pre className='md:mr-40 md:ml-40 mt-6 md:mt-10 bg-gray-900 text-purple-400 p-4 rounded-xl overflow-x-auto text-xs md:text-sm'>
        <code>
          {`grassTile, 7, 13
groundTile, 10, 15
hazard, 22, 16
goal, 24, 7`}
        </code>
      </pre>

      <div className="mt-6 md:mt-10 md:ml-40 md:mr-40">
        This approach allows the engine to dynamically construct the world at runtime instead of hardcoding layouts.
      </div>

      <div className="mt-10 md:mt-20 md:mr-40 font-bold text-xl text-zinc-200 md:ml-40">Tile Editor (Grid System)</div>
      <div className="mt-5 md:ml-40 md:mr-40">
        The editor allows users to draw tiles directly onto a grid and save them to a file.
      </div>

      <pre className='md:mr-40 md:ml-40 mt-6 md:mt-10 bg-gray-900 text-purple-400 p-4 rounded-xl overflow-x-auto text-xs md:text-sm'>
        <code>
          {`String key = tileName + "," + column + "," + row;
tileList.add(key);`}
        </code>
      </pre>

      <div className="mt-6 md:mt-10 md:ml-40 md:mr-40">
        Each tile is stored with its type and position, then grouped into sections for efficient rendering.
      </div>

      <img src={myPhoto} alt="game screenshot" className="w-full md:w-125 md:ml-40 md:mr-40 mt-6 md:mt-10 rounded-xl"/>

      <div className="mt-10 md:mt-20 text-xl font-bold text-zinc-200 md:ml-40 md:mr-40 mb-5 md:mb-15">
        Chunk-Based Rendering
      </div>
      <div className="mt-5 md:ml-40 md:mr-40">
        To improve performance, tiles are grouped into sections (chunks), and only nearby chunks are rendered.
      </div>

      <pre className='md:mr-40 md:ml-40 mt-6 md:mt-10 bg-gray-900 text-purple-400 p-4 rounded-xl overflow-x-auto text-xs md:text-sm'>
        <code>
          {`String sectionKey = (playerChunkX + dx) + "," + (playerChunkY + dy);
ArrayList<String> tileList = filledTiles.get(sectionKey);`}
        </code>
      </pre>

      <div className="mt-6 md:mt-10 md:ml-40 md:mr-40">
        This reduces unnecessary drawing and allows the game to scale to larger maps.
      </div>

      <div className="mt-10 md:mt-20 font-bold text-xl text-zinc-200 md:ml-40 md:mr-40">Camera System</div>
      <div className="mt-5 md:ml-40 md:mr-40">
        The camera follows the player using a "deadzone" system, which prevents constant movement and creates smoother gameplay.
      </div>

      <pre className='md:mr-40 md:ml-40 mt-6 md:mt-10 bg-gray-900 text-purple-400 p-4 rounded-xl overflow-x-auto text-xs md:text-sm'>
        <code>
          {`if (playerPosX < deadzoneStartX) {
  x = player.getCharacter().getX() - deadzoneStartX;
}`}
        </code>
      </pre>

      <div className="mt-6 md:mt-10 md:ml-40 md:mr-40">
        This keeps the player centered without making the camera feel jittery.
      </div>

      <div className="mt-10 md:mt-20 font-bold text-xl text-zinc-200 md:ml-40 md:mr-40">Player Physics + Collision</div>
      <div className="mt-5 md:ml-40 md:mr-40">
        The player system handles movement, gravity, jumping, and collision detection.
      </div>

      <pre className='md:mr-40 md:ml-40 mt-6 md:mt-10 bg-gray-900 text-purple-400 p-4 rounded-xl overflow-x-auto text-xs md:text-sm'>
        <code>
          {`velocity = velocity.add(0, gravity);
yOffset += velocity.getY();`}
        </code>
      </pre>

      <div className="mt-6 md:mt-10 md:ml-40 md:mr-40">
        Collision detection checks the player against nearby tiles and adjusts movement accordingly.
      </div>

      <div className="mt-10 md:mt-20 font-bold text-xl text-zinc-200 md:ml-40 md:mr-40">Feature-Based Tile System</div>
      <div className="mt-5 md:ml-40 md:mr-40">
        One of the most interesting parts of this project is the feature system, where tiles define behavior dynamically.
      </div>

      <div className="mt-6 md:mt-10 md:ml-40 md:mr-40">
        Examples:<br/><br/>
        death → kills player<br/>
        end → wins game<br/>
        break → disappears after time<br/>
        velmod → changes movement speed
      </div>

      <pre className='md:mr-40 md:ml-40 mt-6 md:mt-10 bg-gray-900 text-purple-400 p-4 rounded-xl overflow-x-auto text-xs md:text-sm'>
        <code>
          {`if (feature.equals("death")) {
  handleDeathFeature();
  setGameLost();
}`}
        </code>
      </pre>

      <div className="mt-6 md:mt-10 md:ml-40 md:mr-40">
        This makes the engine extensible without modifying core logic.
      </div>

      <div className="mt-10 md:mt-20 text-zinc-200 text-xl font-bold md:ml-40 md:mr-40">Rendering + Image Optimization</div>
      <div className="mt-6 md:mt-10 md:ml-40 md:mr-40">
        To improve performance, images are cached instead of reloaded repeatedly.
      </div>

      <pre className='md:mr-40 md:ml-40 mt-6 md:mt-10 bg-gray-900 text-purple-400 p-4 rounded-xl overflow-x-auto text-xs md:text-sm'>
        <code>
          {`if (!imageCache.containsKey(imageName)) {
  Image image = new Image(getClass().getResourceAsStream(imageName));
  imageCache.put(imageName, image);
}`}
        </code>
      </pre>

      <div className="mt-6 md:mt-10 md:ml-40 md:mr-40">
        This significantly reduces rendering overhead.
      </div>

      <div className="mt-10 md:mt-20 font-bold md:mr-40 text-xl text-zinc-200 md:ml-40">Game Loop</div>
      <div className="mt-5 md:ml-40 md:mr-40">
        The game uses JavaFX's AnimationTimer to continuously update the game state.
      </div>

      <pre className='md:mr-40 md:ml-40 mt-6 md:mt-10 bg-gray-900 text-purple-400 p-4 rounded-xl overflow-x-auto text-xs md:text-sm'>
        <code>
          {`public void handle(long currentTime) {
  gameScreen.animationEffects();
  gameScreen.refreshTiles();
}`}
        </code>
      </pre>

      <div className="mt-6 md:mt-10 md:ml-40">
        This drives movement, rendering, and interactions in real time.
      </div>

      <div className="mt-10 md:mt-20 font-bold text-xl text-zinc-200 md:ml-40 md:mr-40">Editor ↔ Game Transition</div>
      <div className="mt-5 md:ml-40 md:mr-40">
        A key feature is the ability to switch between editing and playing instantly.
      </div>

      <pre className='md:mr-40 md:ml-40 mt-6 md:mt-10 bg-gray-900 text-purple-400 p-4 rounded-xl overflow-x-auto text-xs md:text-sm'>
        <code>
          {`textEditor.getStartButton().setOnAction(e -> {
  switchToGameScene();
  gameScreen.loadTilesFromFile();
});`}
        </code>
      </pre>

      <div className="mt-6 md:mt-10 md:ml-40 md:mr-40">
        This creates a smooth workflow for designing and testing levels.
      </div>

      <div className="mt-10 md:mt-20 font-bold text-xl text-zinc-200 md:ml-40 md:mr-40">What I Learned</div>
      <div className="mt-5 md:ml-40 md:mr-40">
        This project gave me a deeper understanding of:<br/><br/>
        Game loops and real-time systems<br/>
        Physics and collision detection<br/>
        File-based data systems<br/>
        Rendering optimization techniques<br/>
        Designing modular systems<br/><br/>
        I also learned how to build systems that separate logic, data, and presentation cleanly.
      </div>

      <div className="mt-10 md:mt-20 font-bold text-xl text-zinc-200 md:mr-40 md:ml-40">Final Thoughts</div>
      <div className="mt-5 md:ml-40 md:mr-40 mb-10 pb-10">
        This project pushed me to think beyond simple programs and start building systems. It reinforced the importance of scalability, performance, and clean architecture when developing interactive applications.
      </div>
      </div>

      <Footer />

    </div>
    </>
  );
}

export default Project4;